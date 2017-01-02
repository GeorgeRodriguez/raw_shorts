require 'sinatra'
get '/' do
  File.read(File.join('public', 'app.erb'))
end
