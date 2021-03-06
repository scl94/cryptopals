//! Solutions to the challenges in Set 2.

use std::fs::File;
use std::io::{BufRead, BufReader};
use std::path::Path;

use attacks;
use challenges::{ChallengeResults, ChallengeResultsBuilder};
use challenges::helpers;
use utils::block::{BlockCipher, Algorithms, OperationModes, PaddingSchemes};
use utils::data::Data;
use victims::block::{EcbOrCbc, EcbWithSuffix, EcbUserProfile, EcbWithAffixes, CbcCookie};

/// Run the solution to Set 2 Challenge 9 (Implement PKCS#7 padding)
///
/// # Outputs
///
/// `text_in` - The unpadded input as a plain text string.
///
/// `hex_in` - The unpadded input as a hexadecimal string.
///
/// `hex_out` - The padded output as a hexadecimal string.
pub fn challenge09() -> ChallengeResults {

    // Get the text input.
    let text_in = "YELLOW SUBMARINE";

    // Convert to hex.
    let data = Data::from_text(text_in);
    let hex_in = data.to_hex();

    // Add the padding.
    let hex_out = helpers::pkcs7_pad(&data, 20).to_hex();

    // Return the results
    ChallengeResultsBuilder::new()
        .set(2)
        .challenge(9)
        .description("Implement PKCS#7 padding")
        .output("text_in", text_in)
        .output("hex_in", &hex_in)
        .output("hex_out", &hex_out)
        .finalize()
}

/// Run the solution to Set 2 Challenge 10 (Implement CBC mode)
///
/// # Outputs
///
/// `base64_in` - The encrypted input as a base 64 string.
///
/// `text_key` - The key as a plain text string.
///
/// `text_out` - The decrypted output as a plain text string.
pub fn challenge10() -> ChallengeResults {

    // Get the base-64 input.
    let mut base64_in = "".to_string();
    let file = File::open(&Path::new("input/set2challenge10.txt")).unwrap();
    let reader = BufReader::new(file);
    for line_it in reader.lines() {
        base64_in.push_str(&line_it.unwrap());
    }
    let data = Data::from_base64(&base64_in).unwrap();

    // Get the key.
    let text_key = "YELLOW SUBMARINE";
    let key = Data::from_text(text_key);

    // Decrypt the data using AES-128-CBC with an IV of all 0.
    let iv = Data::from_bytes(vec![0; 16]);
    let block = BlockCipher::new(Algorithms::Aes,
                                 OperationModes::Cbc(iv),
                                 PaddingSchemes::Pkcs7,
                                 &key)
        .unwrap();
    let text_out = block.decrypt(&data).unwrap().to_text();

    // Return the results
    ChallengeResultsBuilder::new()
        .set(2)
        .challenge(10)
        .description("Implement CBC mode")
        .output("base64_in", &base64_in)
        .output("text_key", text_key)
        .output("text_out", &text_out)
        .finalize()
}

/// Run the solution to Set 2 Challenge 11 (An ECB/CBC detection oracle)
///
/// # Outputs
///
/// `success_rate` - The percentage with which we correctly guessed the encryption mode.
pub fn challenge11() -> ChallengeResults {

    // Create an ECB/CBC black-box.
    let mut ecb_cbc_box = EcbOrCbc::new();

    // Run 1000 trials - for each one, try encrypting some data with repeated blocks using the
    // encryption box, and predict if it is using ECB or CBC.
    let mut score = 0.0;
    for _ in 0..1000 {
        let guess = attacks::block::is_ecb_mode(&mut ecb_cbc_box);
        if ecb_cbc_box.check_answer(guess) {
            score += 1.0;
        }
    }

    // Return the results
    ChallengeResultsBuilder::new()
        .set(2)
        .challenge(11)
        .description("An ECB/CBC detection oracle")
        .output("success_rate", &format!("{}%", score / 10.0))
        .finalize()
}

/// Run the solution to Set 2 Challenge 12 (Byte-at-a-time ECB decryption (Simple))
///
/// # Outputs
///
/// `success` - Whether the correct suffix was obtained.
///
/// `text_out` - The decrypted suffix as a plain text string.
pub fn challenge12() -> ChallengeResults {

    // Create an ECB-with-suffix black-box.
    let base64 = "Um9sbGluJyBpbiBteSA1LjAKV2l0aCBteSByYWctdG9wIGRvd24gc28gbXkgaGFpciBjYW4gYmxvdwpU\
                  aGUgZ2lybGllcyBvbiBzdGFuZGJ5IHdhdmluZyBqdXN0IHRvIHNheSBoaQpEaWQgeW91IHN0b3A/IE5v\
                  LCBJIGp1c3QgZHJvdmUgYnkK";
    let suffix = Data::from_base64(base64).unwrap();
    let ecb_suffix_box = EcbWithSuffix::new(suffix);

    // Decode the suffix without reading it directly!
    let suffix_guess = attacks::block::find_ecb_suffix(&ecb_suffix_box);
    let success = ecb_suffix_box.check_answer(&suffix_guess);
    let text_out = suffix_guess.to_text();

    // Return the results
    ChallengeResultsBuilder::new()
        .set(2)
        .challenge(12)
        .description("Byte-at-a-time ECB decryption (Simple)")
        .output("success", &format!("{}", success))
        .output("text_out", &text_out)
        .finalize()
}

/// Run the solution to Set 2 Challenge 13 (ECB cut-and-paste)
///
/// # Outputs
///
/// `success` - Whether the admin token was successfully created.
pub fn challenge13() -> ChallengeResults {

    // Create an ECB-user-profile black-box.
    let ecb_profile_box = EcbUserProfile::new();

    // Craft an illegitimate admin token.
    let admin_token = attacks::block::craft_ecb_admin_token(&ecb_profile_box);

    // Check that we've been successful.
    let success = ecb_profile_box.is_admin(&admin_token);

    // Return the results
    ChallengeResultsBuilder::new()
        .set(2)
        .challenge(13)
        .description("ECB cut-and-paste")
        .output("success", &format!("{}", success))
        .finalize()
}

/// Run the solution to Set 2 Challenge 14 (Byte-at-a-time ECB decryption (Harder))
///
/// # Outputs
///
/// `success` - Whether the correct suffix was obtained.
///
/// `text_out` - The decrypted suffix as a plain text string.
pub fn challenge14() -> ChallengeResults {

    // Create an ECB-with-suffix black-box.
    let base64 = "Um9sbGluJyBpbiBteSA1LjAKV2l0aCBteSByYWctdG9wIGRvd24gc28gbXkgaGFpciBjYW4gYmxvdwpU\
                  aGUgZ2lybGllcyBvbiBzdGFuZGJ5IHdhdmluZyBqdXN0IHRvIHNheSBoaQpEaWQgeW91IHN0b3A/IE5v\
                  LCBJIGp1c3QgZHJvdmUgYnkK";
    let suffix = Data::from_base64(base64).unwrap();
    let ecb_affixes_box = EcbWithAffixes::new(suffix);

    // Decode the suffix without reading it directly!
    let suffix_guess = attacks::block::find_ecb_suffix_with_prefix(&ecb_affixes_box);
    let success = ecb_affixes_box.check_answer(&suffix_guess);
    let text_out = suffix_guess.to_text();

    // Return the results
    ChallengeResultsBuilder::new()
        .set(2)
        .challenge(14)
        .description("Byte-at-a-time ECB decryption (Harder)")
        .output("success", &format!("{}", success))
        .output("text_out", &text_out)
        .finalize()
}

/// Run the solution to Set 2 Challenge 15 (PKCS#7 padding validation)
///
/// `detect_valid` - Whether we correctly detect valid padding.
///
/// `detect_invalid` - Whether we correctly detect invalid padding.
pub fn challenge15() -> ChallengeResults {

    let text = "ICE ICE BABY";

    // Check valid paddings.
    let valid1 = helpers::add_padding(text, &[4, 4, 4, 4]);
    let valid2 = helpers::add_padding(text, &[1]);
    let detect_valid = helpers::valid_pkcs7(&valid1) && helpers::valid_pkcs7(&valid2);

    // Check invalid paddings.
    let invalid1 = helpers::add_padding(text, &[5, 5, 5, 5]);
    let invalid2 = helpers::add_padding(text, &[1, 2, 3, 4]);
    let detect_invalid = !helpers::valid_pkcs7(&invalid1) && !helpers::valid_pkcs7(&invalid2);

    // Return the results
    ChallengeResultsBuilder::new()
        .set(2)
        .challenge(15)
        .description("PKCS#7 padding validation")
        .output("detect_valid", &format!("{}", detect_valid))
        .output("detect_invalid", &format!("{}", detect_invalid))
        .finalize()
}

/// Run the solution to Set 2 Challenge 16 (CBC bitflipping attacks)
///
/// # Outputs
///
/// `success` - Whether the admin token was successfully created.
pub fn challenge16() -> ChallengeResults {

    // Create a CBB cookie black-box.
    let cbc_cookie_box = CbcCookie::new();

    // Craft an illegitimate admin token.
    let admin_token = attacks::block::craft_cbc_admin_token(&cbc_cookie_box);

    // Check that we've been successful.
    let success = cbc_cookie_box.is_admin(&admin_token);

    // Return the results
    ChallengeResultsBuilder::new()
        .set(2)
        .challenge(16)
        .description("CBC bitflipping attacks")
        .output("success", &format!("{}", success))
        .finalize()
}

#[cfg(test)]
mod tests {

    #[test]
    fn challenge09() {
        let results = super::challenge09();
        results.check("text_in", "YELLOW SUBMARINE");
        results.check("hex_in", "59454c4c4f57205355424d4152494e45");
        results.check("hex_out", "59454c4c4f57205355424d4152494e4504040404");
    }

    #[test]
    fn challenge10() {
        let results = super::challenge10();
        results.check_prefix("base64_in",
                             "CRIwqt4+szDbqkNY+I0qbNXPg1XLaCM5etQ5Bt9DRFV/xIN2k8Go7jtArLIyP605b071\
                              DL8C+FPYSHOXPkMMMFPAKm+Nsu0nCBMQVt9mlluHbVE/yl6VaBCjNuOGvHZ9WYvt51uR\
                              /lklZZ0ObqD5UaC1rupZwCEK4pIWf6JQ4pTyPjyiPtKXg54FNQvbVIHeotUG2kHEvH");
        results.check("text_key", "YELLOW SUBMARINE");
        results.check_prefix("text_out",
                             "I'm back and I'm ringin' the bell \n\
                              A rockin' on the mike while the fly girls yell \n\
                              In ecstasy in the back of me");
    }

    #[test]
    fn challenge11() {
        let results = super::challenge11();
        results.check("success_rate", "100%");
    }

    #[test]
    fn challenge12() {
        let results = super::challenge12();
        results.check("success", "true");
        results.check("text_out",
                      "Rollin' in my 5.0\n\
                       With my rag-top down so my hair can blow\n\
                       The girlies on standby waving just to say hi\n\
                       Did you stop? No, I just drove by\n");
    }

    #[test]
    fn challenge13() {
        let results = super::challenge13();
        results.check("success", "true");
    }

    #[test]
    fn challenge14() {
        let results = super::challenge14();
        results.check("success", "true");
        results.check("text_out",
                      "Rollin' in my 5.0\n\
                       With my rag-top down so my hair can blow\n\
                       The girlies on standby waving just to say hi\n\
                       Did you stop? No, I just drove by\n");
    }

    #[test]
    fn challenge15() {
        let results = super::challenge15();
        results.check("detect_valid", "true");
        results.check("detect_invalid", "true");
    }

    #[test]
    fn challenge16() {
        let results = super::challenge16();
        results.check("success", "true");
    }
}