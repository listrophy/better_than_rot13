!SLIDE
# Verify My Authorship! #

!SLIDE smbullets incremental
# Basic Premise #

* Alice and Bob have PUBLIC KEY for each other
* Alice encrypts m with his PUBLIC KEY
* Alice hashes result and encrypts hash with her private key
* Bob decrypts hash with her PUBLIC KEY & verifies
* Bob decrypts message with his private key

!SLIDE bullets
# Signing Vulnerabilities #

* Use different encryption and signing keys
* Must pad the hash
* etc, etc, etc
