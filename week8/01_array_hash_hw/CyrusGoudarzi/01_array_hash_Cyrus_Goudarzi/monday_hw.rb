#!/usr/bin/env ruby

require 'json'

file = File.read('./db/data.json')

my_hash = JSON.parse(file)


# my_hash.each do |key| puts "#{key} -------------------------------------- " end


$i = 0
$t = 1



begin
  if my_hash[$i]["id"].even?   
    puts my_hash[$i]["title"]
    puts( "==============================================" )
    puts my_hash[$i]["body"]
    puts( "---------------------------------------------")
    puts 'By ' + my_hash[$i]["author"]
    puts( "---------------------------------------------")
    puts 'Next article: ' + my_hash[$t]["title"]
    puts( "==============================================" )
    puts( "..." )
  end


  $i += 1
  $t += 1 
    
end while $i < my_hash.length && $t < my_hash.length






