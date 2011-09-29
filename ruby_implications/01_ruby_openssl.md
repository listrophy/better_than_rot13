!SLIDE
# Ruby Implications #

!SLIDE code
require 'openssl'

!SLIDE code

    @@@ ruby
    require 'openssl'

    include OpenSSL::Cipher

!SLIDE code

    @@@ ruby
    cipher = Cipher.new('aes-256-cbc')

    cipher.encrypt

    iv = cipher.random_iv

    key = cipher.random_key

    cipher.update('foo!')

    encrypted = cipher.final

!SLIDE code

    @@@ ruby
    cipher2 = Cipher.new('aes-256-cbc')

    cipher2.decrypt

    cipher2.iv = iv

    cipher2.key = key

    cipher.update(encrypted)

    original = cipher.final # => 'foo!'

!SLIDE
# And RSA? #

!SLIDE code

    @@@ ruby
    require 'openssl'

    include OpenSSL::PKey

    alice = RSA.new(4096) # ...

    # alice gives bob 'alice_pub_key'

    pub_key = RSA.new alice_pub_key

    encrypted = pub_key.public_encrypt('foo')

!SLIDE code

    @@@ ruby
    require 'openssl'

    include OpenSSL::PKey

    rsa = RSA.new alice_private_key

    decrypted = rsa.private_decrypt(encrypted)
