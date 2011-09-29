!SLIDE
# IDKFA to the rescue! #

!SLIDE
# IDKFA == All keys, firearms, ammo #
## (in Doom)

!SLIDE
# Purpose of IDKFA: #
## To allow the encrypted embedding of sensitive information (passwords, API keys, etc) into your code repository, decryptable only by those authorized. ##

!SLIDE bullets incremental
# Anti-Use Case: #

* Your app connects to a DB
* database.yml stays out of repo
* Updates via scp or sneakernet
* Deploys can fail because "you forgot"

!SLIDE bullets incremental
# Use Case: #

* database.yml contains <code>&lt;%= Idkfa[:db_pw] %&gt;</code>
* grant access with <code>$ idkfa import id_rsa.pub</code>
* update server with <code>$ idkfa (heroku|ey) setup</code>

!SLIDE bullets incremental
# Status #

* Really nice README
* Some cukes, some specs
* Some code, but not much
