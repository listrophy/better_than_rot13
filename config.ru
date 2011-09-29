require 'showoff'
use Rack::Static, :urls => { '/favicon.ico' => 'favicon.ico' }, :root => 'images'
run ShowOff.new
