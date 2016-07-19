#!/usr/bin/env ruby
#chmod +x your_program.rb - cmd for terminal!

require 'rubygems'
require 'json'

json = File.read('blog.json')

parsed = JSON.parse(json)

parsed.each do |blog|
  if blog["id"].even?
    puts blog["title"]
    
    line = ""
    for i in 0..blog["title"].length - 1
      line += "="  
    end
    puts line
    
    puts ""
    puts blog["body"]
    puts ""

    line = ""
    for i in 0..blog["author"].length + 6
      line += "-"  
    end
    puts line
    puts "By The " + blog["author"]
    puts line
    puts ""
  end
end

