#!/usr/bin/env ruby
#chmod +x your_program.rb - cmd for terminal!

# require 'rubygems'
require 'json'

json = File.read('blog.json')

parsed = JSON.parse(json)

# parsed.push 'id' => 100, 'title' => 'My special one', 'body' => 'Okay whatever', 'authors' => 'Bill', 'publishedOn' => 'Fri Oct 09 2015 05:03:58 GMT-0500 (CDT)'

parsed.each do |blog|
  if blog["id"].even?
    puts blog["title"]
    
    for i in 0..blog["title"].length - 1
      print "="  
    end
    
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

