#!/usr/bin/env ruby

#ROUND 1
words   = ["hello", "what", "is", "up", "dude"]
lengths = []

words.each do |word|
  lengths.push(word.length)
end

p lengths

#ROUND 2
def transmogrifier a, b, c
  result = a * b
  result = result ** c
  puts result
end

transmogrifier 1, 2, 3

#ROUND 3
def toonify accent, sentence
  if accent == 'daffy'  
    sentence.gsub!('s', 'th')
    puts sentence
  elsif accent == 'elmer'
    sentence.gsub!('r', 'w')
    puts sentence
  end
end

toonify 'daffy', 'No, but thanks for notising'
toonify 'elmer', 'Silly rabbit'

#ROUND 4
def word_reverse string
  array = string.scan(/\w+/).reverse
  p array.join(" ")
end

word_reverse "This album is great"

#ROUND 5
def letter_reverse string
  string.split(" ")
  p string.reverse
end

letter_reverse "This album is great"

#ROUND 6
array  = ["long", "longer", "longest"]
albums = ["Ram", "Tommy", "Emotionalism", "Stankonia"]

def longest array
  array.sort! { |a, b| b.length <=> a.length }
  puts array[0]
end

longest array
longest albums




