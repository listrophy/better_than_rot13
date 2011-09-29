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

    rsa = OpenSSL::PKey::RSA.new(4096) # ...

    puts rsa.public_key.to_s

    private_key = rsa.to_pem

!SLIDE code

    @@@ ruby
    require 'openssl'

    rsa = OpenSSL::PKey::RSA.new(private_key)
