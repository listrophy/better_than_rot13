!SLIDE
# Real Symmetric Cryptography #

.notes Confusion, Diffusion, secret key

!SLIDE bullets incremental
# Real Symmetric Cryptography #

* Confusion
* Diffusion
* PUBLIC ALGO, secret key
* Operates on a single block size

!SLIDE center
# Real Symmetric Encryption #
![basic symmetric encryption](basic_symmetric_cryptography.png)

!SLIDE center
# Real Symmetric Decryption #
![basic symmetric decryption](basic_symmetric_cryptography-decrypt.png)

!SLIDE center
# Wait a minute... #
![rot-n again](rot-n_step5.png)

!SLIDE center
# Real Symmetric Cryptography #
![basic symmetric cryptography](symmetric_is_like_rotn.png)

!SLIDE bullets incremental
# Real Symmetric Cryptography #

* DES
* 3DES
* AES (Rijndael)

!SLIDE bullets incremental
# DES #

* Published 1977/79
* 56-bit key
* 64-bit block size

!SLIDE bullets incremental
# Triple DES (3DES) #

* Published 1998
* 168-bit key (generally)
* 64-bit block size
* CIPHERTEXT = E<sub>k3</sub>(D<sub>k2</sub>(E<sub>k1</sub>(plaintext)))
