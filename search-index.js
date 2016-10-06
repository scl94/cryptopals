var searchIndex = {};
searchIndex["cryptopals"] = {"doc":"Solutions to the Cryptopals crypto challenges.","items":[[0,"attacks","cryptopals","Implementations of cryptographic attacks.",null,null],[0,"block","cryptopals::attacks","Implementations of cryptographic attacks against block ciphers.",null,null],[5,"is_ecb_mode","cryptopals::attacks::block","Determine whether a block cipher is using ECB or CBC mode.",null,{"inputs":[{"name":"ecborcbc"}],"output":{"name":"bool"}}],[5,"find_ecb_suffix","","Decrypt an unknown suffix encrypted under ECB mode.",null,{"inputs":[{"name":"ecbwithsuffix"}],"output":{"name":"data"}}],[5,"find_ecb_suffix_with_prefix","","Decrypt an unknown suffix encrypted under ECB mode, when a prefix is also added.",null,{"inputs":[{"name":"ecbwithaffixes"}],"output":{"name":"data"}}],[5,"craft_ecb_admin_token","","Create a token which the `EcbUserProfile` decodes into a user profile with admin privileges.",null,{"inputs":[{"name":"ecbuserprofile"}],"output":{"name":"data"}}],[5,"craft_cbc_admin_token","","Create a token which the `CbcCookie` decodes into a cookie with admin privileges.",null,{"inputs":[{"name":"cbccookie"}],"output":{"name":"data"}}],[0,"xor","cryptopals::attacks","Attacks against ciphers which use XOR as the encryption algorithm.",null,null],[5,"best_single_byte_key","cryptopals::attacks::xor","Finds the most likely single-byte key that was used to encrypt the given data.",null,null],[5,"best_repeating_key","","Finds the most likely repeating-XOR key that was used to encrypt the given data.",null,{"inputs":[{"name":"data"}],"output":{"name":"data"}}],[0,"challenges","cryptopals","Solutions to the cryptopals challenges themselves, broken down by set.",null,null],[3,"ChallengeResults","cryptopals::challenges","The results of running a particular challenge.",null,null],[12,"set","","The set that this challenge belongs to.",0,null],[12,"challenge","","The challenge number.",0,null],[12,"description","","A description of the challenge.",0,null],[12,"outputs","","An array holding the outputs from this challenge.",0,null],[3,"ChallengeResultsBuilder","","A builder for the `ChallengeResults` struct.",null,null],[12,"set","","The set that this challenge belongs to.",1,null],[12,"challenge","","The challenge number.",1,null],[12,"description","","A description of the challenge.",1,null],[12,"outputs","","An array holding the outputs from this challenge.",1,null],[0,"helpers","","Helper functions which are useful in solving the challenges but too large to sensibly be\ninline in the solution itself.",null,null],[5,"pkcs7_pad","cryptopals::challenges::helpers","Pad the given `Data` to the given block size using PKCS#7",null,{"inputs":[{"name":"data"},{"name":"usize"}],"output":{"name":"data"}}],[5,"pkcs7_unpad","","Unpad the given `Data` using PKCS#7",null,{"inputs":[{"name":"data"}],"output":{"name":"result"}}],[5,"add_padding","","Add the given padding to some text and return the result as a `Data`",null,null],[5,"valid_pkcs7","","",null,{"inputs":[{"name":"data"}],"output":{"name":"bool"}}],[0,"set1","cryptopals::challenges","Solutions to the challenges in Set 1.",null,null],[5,"challenge01","cryptopals::challenges::set1","Run the solution to Set 1 Challenge 1 (Convert hex to base64).",null,{"inputs":[],"output":{"name":"challengeresults"}}],[5,"challenge02","","Run the solution to Set 1 Challenge 2 (Fixed XOR).",null,{"inputs":[],"output":{"name":"challengeresults"}}],[5,"challenge03","","Run the solution to Set 1 Challenge 3 (Single-byte XOR cipher).",null,{"inputs":[],"output":{"name":"challengeresults"}}],[5,"challenge04","","Run the solution to Set 1 Challenge 4 (Detect single-character XOR)",null,{"inputs":[],"output":{"name":"challengeresults"}}],[5,"challenge05","","Run the solution to Set 1 Challenge 5 (Implement repeating-key XOR)",null,{"inputs":[],"output":{"name":"challengeresults"}}],[5,"challenge06","","Run the solution to Set 1 Challenge 6 (Break repeating-key XOR)",null,{"inputs":[],"output":{"name":"challengeresults"}}],[5,"challenge07","","Run the solution to Set 1 Challenge 7 (AES in ECB mode)",null,{"inputs":[],"output":{"name":"challengeresults"}}],[5,"challenge08","","Run the solution to Set 1 Challenge 8 (Detect AES in ECB mode)",null,{"inputs":[],"output":{"name":"challengeresults"}}],[0,"set2","cryptopals::challenges","Solutions to the challenges in Set 2.",null,null],[5,"challenge09","cryptopals::challenges::set2","Run the solution to Set 2 Challenge 9 (Implement PKCS#7 padding)",null,{"inputs":[],"output":{"name":"challengeresults"}}],[5,"challenge10","","Run the solution to Set 2 Challenge 10 (Implement CBC mode)",null,{"inputs":[],"output":{"name":"challengeresults"}}],[5,"challenge11","","Run the solution to Set 2 Challenge 11 (An ECB/CBC detection oracle)",null,{"inputs":[],"output":{"name":"challengeresults"}}],[5,"challenge12","","Run the solution to Set 2 Challenge 12 (Byte-at-a-time ECB decryption (Simple))",null,{"inputs":[],"output":{"name":"challengeresults"}}],[5,"challenge13","","Run the solution to Set 2 Challenge 13 (ECB cut-and-paste)",null,{"inputs":[],"output":{"name":"challengeresults"}}],[5,"challenge14","","Run the solution to Set 2 Challenge 14 (Byte-at-a-time ECB decryption (Harder))",null,{"inputs":[],"output":{"name":"challengeresults"}}],[5,"challenge15","","Run the solution to Set 2 Challenge 15 (PKCS#7 padding validation)",null,{"inputs":[],"output":{"name":"challengeresults"}}],[5,"challenge16","","Run the solution to Set 2 Challenge 16 (CBC bitflipping attacks)",null,{"inputs":[],"output":{"name":"challengeresults"}}],[11,"check","cryptopals::challenges","Assert that a particular key is present and holds the expected value.",0,null],[11,"check_prefix","","Assert that a particular key is present and starts with the given prefix.",0,null],[11,"fmt","","",0,null],[11,"default","","",1,{"inputs":[],"output":{"name":"challengeresultsbuilder"}}],[11,"new","","Create a new `ChallengeResultsBuilder`.",1,{"inputs":[],"output":{"name":"challengeresultsbuilder"}}],[11,"set","","Change the set number that this challenge belongs to.",1,null],[11,"challenge","","Change the challenge number.",1,null],[11,"description","","Change the description of thsi challenge.",1,null],[11,"output","","Add a new output to this challenge.",1,null],[11,"finalize","","Create a `ChallengeResults` from this builder.",1,null],[0,"utils","cryptopals","Utility functions which are generally applicable and not tied down to a particular challenge\nor set of challenges.",null,null],[0,"block","cryptopals::utils","Block cipher encryption and decryption using various modes of operation.",null,null],[3,"BlockCipher","cryptopals::utils::block","A generic block cipher encryptor and decryptor.",null,null],[4,"Algorithms","","Algorithms that can be used for the encryption and decryption of a single block.",null,null],[13,"Aes","","The AES algorithm.",2,null],[13,"Null","","A dummy cipher which takes blocks of the given size and does no encryption or decryption.",2,null],[4,"OperationModes","","Block cipher modes of operation.",null,null],[13,"Ecb","","Electronic codebook (ECB) mode.",3,null],[13,"Cbc","","Cipher block chaining (CBC) mode, including initilisation vector.",3,null],[4,"PaddingSchemes","","Block cipher padding schemes.",null,null],[13,"Pkcs7","","PKCS#7 padding.",4,null],[4,"EncryptError","","Errors that can arise as a result of encrypting a piece of data.",null,null],[13,"IVLength","","The initlisation vector was of the wrong length.",5,null],[4,"DecryptError","","Errors that can arise as a result of decrypting a piece of data.",null,null],[13,"IVLength","","The initialisation vector was of the wrong length.",6,null],[13,"DataLength","","The data was of an invalid size.",6,null],[13,"Padding","","The decrypted data had invalid padding.",6,null],[11,"fmt","","",5,null],[11,"fmt","","",5,null],[11,"description","","",5,null],[11,"fmt","","",6,null],[11,"fmt","","",6,null],[11,"description","","",6,null],[11,"new","","Returns a new BlockCipher which uses the given algorithm, key, operation mode and\npadding scheme for encryption and decryption of blocks.",7,{"inputs":[{"name":"algorithms"},{"name":"operationmodes"},{"name":"paddingschemes"},{"name":"data"}],"output":{"name":"result"}}],[11,"encrypt","","Encrypts the given input data using the given mode of operation.",7,null],[11,"decrypt","","Decrypts the given input data using the given mode of operation.",7,null],[0,"data","cryptopals::utils","Structure to hold the contents of a message, supporting input and output of messages in a\nvariety of formats.",null,null],[3,"Data","cryptopals::utils::data","Structure which holds the contents of a message.",null,null],[4,"FromHexError","","Errors that can arise when parsing a hexadecimal string as bytes.",null,null],[13,"BadHexChar","","The input contained a non-hexadecimal character.",8,null],[13,"BadHexLength","","The input had an invalid length.",8,null],[4,"FromBase64Error","","Errors that can arise when parsing a base-64 string as bytes.",null,null],[13,"BadBase64Char","","The input contained an invalid character.",9,null],[13,"BadBase64Length","","The input had an invalid length.",9,null],[11,"fmt","","",8,null],[11,"fmt","","",8,null],[11,"description","","",8,null],[11,"fmt","","",9,null],[11,"fmt","","",9,null],[11,"description","","",9,null],[11,"clone","","",10,null],[11,"default","","",10,{"inputs":[],"output":{"name":"data"}}],[11,"new","","Creates a new empty `Data` object.",10,{"inputs":[],"output":{"name":"data"}}],[11,"random","","Create a new random `Data` object containing the given number of bytes.",10,{"inputs":[{"name":"usize"}],"output":{"name":"data"}}],[11,"from_hex","","Creates a new `Data` object from a sequence of bytes given as a hexadecimal string.",10,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"from_base64","","Creates a new `Data` object from a base-64 encoded string.",10,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"from_text","","Creates a new `Data` object from a sequence of byte values represented as a plain text\nstring.",10,{"inputs":[{"name":"str"}],"output":{"name":"data"}}],[11,"from_bytes","","Creates a new `Data` object from a sequence of raw byte values.",10,{"inputs":[{"name":"vec"}],"output":{"name":"data"}}],[11,"from_single_byte","","Creates a new `Data` object representing a single byte.",10,{"inputs":[{"name":"u8"}],"output":{"name":"data"}}],[11,"to_hex","","Returns the message as a hexadecimal string.",10,null],[11,"to_base64","","Returns the message as a base-64 encoded string.",10,null],[11,"to_text","","Returns the message as a plain text string.",10,null],[11,"bytes","","Returns a slice containing the sequence of bytes stored in this Data",10,null],[11,"slice","","Returns a new `Data` formed of a slice of the sequence of bytes stored in this Data.",10,null],[11,"len","","Returns the length (in bytes) of this `Data`.",10,null],[11,"is_empty","","Returns true if this `Data` is empty, and false otherwise.",10,null],[0,"metrics","cryptopals::utils","Functions for evaluating pieces of data according to various metrics.",null,null],[4,"HammingDistanceError","cryptopals::utils::metrics","Errors that can arise when calculating the Hamming distance between two pieces of data.",null,null],[13,"UnequalLengths","","The input data have unequal lengths.",11,null],[5,"score_as_english","","Returns a numeric score representing how likely it is that a particular piece of data is\nEnglish text - a higher score is better.",null,{"inputs":[{"name":"data"}],"output":{"name":"f64"}}],[5,"hamming_distance","","Calculates the Hamming distance between two pieces of data of equal size.",null,{"inputs":[{"name":"data"},{"name":"data"}],"output":{"name":"result"}}],[5,"score_xor_keysize","","Returns a numeric score representing how likely it is that the given data has been encoded\nusing a repeating XOR key of the given size - lower is better.",null,{"inputs":[{"name":"data"},{"name":"usize"}],"output":{"name":"f64"}}],[5,"has_repeated_blocks","","Returns `true` or `false` as to whether the given data has any repeated blocks.",null,{"inputs":[{"name":"data"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"fmt","","",11,null],[11,"fmt","","",11,null],[11,"description","","",11,null],[0,"xor","cryptopals::utils","Functions used for encrypting and decrypting data using XOR.",null,null],[5,"xor","cryptopals::utils::xor","XORs the given data with a repeating key.",null,{"inputs":[{"name":"data"},{"name":"data"}],"output":{"name":"data"}}],[0,"victims","cryptopals","Black boxes which provide an interface to various insecure cryptographic algorithms.",null,null],[0,"block","cryptopals::victims","Implementations of insecure block-cryptographic algorithms.",null,null],[3,"EcbOrCbc","cryptopals::victims::block","Encrypts data under a random choice of ECB or CBC.",null,null],[3,"EcbWithSuffix","","Encrypts data under ECB after adding a suffix.",null,null],[3,"EcbUserProfile","","Creates ECB-encrypted user tokens.",null,null],[3,"EcbWithAffixes","","Encrypts data under ECB after adding a prefix and a suffix.",null,null],[3,"CbcCookie","","Encrypts user-provided data in the form of a cookie using CBC.",null,null],[11,"new","","Create a new EcbOrCbc.",12,{"inputs":[],"output":{"name":"ecborcbc"}}],[11,"encrypt","","Encrypt the input data.",12,null],[11,"check_answer","","Check the given answer concerning whether or not the previous text was encrypted using ECB\nmode.",12,null],[11,"default","","",12,{"inputs":[],"output":{"name":"self"}}],[11,"new","","Creates a new EcbWithSuffix which uses the given suffix.",13,{"inputs":[{"name":"data"}],"output":{"name":"ecbwithsuffix"}}],[11,"encrypt","","Encrypts the input data.",13,null],[11,"check_answer","","Checks if the suffix has been correctly determined.",13,null],[11,"new","","Creates a new EcbUserProfile.",14,{"inputs":[],"output":{"name":"ecbuserprofile"}}],[11,"make_token","","Create a token for the given email address.",14,null],[11,"is_admin","","Parses an encrypted token, and returns `true` or `false` according to whether the token\nrepresents a profile containing `role=admin`.",14,null],[11,"default","","",14,{"inputs":[],"output":{"name":"self"}}],[11,"new","","Creates a new EcbWithAffixes which uses the given suffix and a random prefix.",15,{"inputs":[{"name":"data"}],"output":{"name":"ecbwithaffixes"}}],[11,"encrypt","","Encrypts the input data.",15,null],[11,"check_answer","","Checks if the suffix has been correctly determined.",15,null],[11,"new","","Creates a new `CbcCookie`.",16,{"inputs":[],"output":{"name":"cbccookie"}}],[11,"make_token","","Create an encrypted cookie for the given user data.",16,null],[11,"is_admin","","Parses an encrypted token, and returns `true` or `false` according to whether the token\nrepresents a profile containing `admin=true`.",16,null]],"paths":[[3,"ChallengeResults"],[3,"ChallengeResultsBuilder"],[4,"Algorithms"],[4,"OperationModes"],[4,"PaddingSchemes"],[4,"EncryptError"],[4,"DecryptError"],[3,"BlockCipher"],[4,"FromHexError"],[4,"FromBase64Error"],[3,"Data"],[4,"HammingDistanceError"],[3,"EcbOrCbc"],[3,"EcbWithSuffix"],[3,"EcbUserProfile"],[3,"EcbWithAffixes"],[3,"CbcCookie"]]};
initSearch(searchIndex);