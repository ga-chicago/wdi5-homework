#  HOMEWORK - WEEK 8, DAY 2
#  ========================
puts "\n"

#  1.) A function takes an array of strings,
#      returns an array of numbers matching
#      the length of each string
#  -----------------------------------------
puts "Round 1.)"
words = ["here", "is", "an", "array", "for", "homework", "purposes"]
def lengths(words)
  numbers = []
  words.each do |word|
    numbers.push(word.length)
  end
  p numbers
end
lengths(words)
puts "\n"

#  2.) A function takes three arguments (numbers)
#      and produces result that is the product of
#      of the first two, to the power of the third
#  -----------------------------------------------
puts "Round 2.)"
def transmogrifier(x, y, z)
  result = (x * y) ** z
end
puts transmogrifier(1, 2, 4)
puts "\n"

#  3.) A function takes two arguments (accent and sentence)
#      and returns the sentence in the indicated accent
#  --------------------------------------------------------
puts "Round 3.)"
def toonify(accent, sentence)
  if accent == 'daffy'
    puts sentence.gsub('s', 'th')
  elsif accent == 'elmer'
    puts sentence.gsub('r', 'w')
  else
    puts sentence
  end
end
toonify('elmer', 'red riding hood rode the greyhound to the renovated rehabilitation center')
toonify('daffy', 'some sandwiches stay soft and moist for days and days')
puts "\n"

#  4.) A function accepts a string as an argument
#      and reverses the order of the words in it
#  ----------------------------------------------
puts "Round 4.)"
def word_reverse(string)
  puts string
  p string.split.reverse.join(" ")  
end
word_reverse('Here is a string for us to rewrite in reverse order')
puts "\n"

#  5.) A function accepts a string as an argument and keeps
#      word order intact but reverses the order of letters
#  --------------------------------------------------------
puts "Round 5.)"
def letter_reverse(string)
  string = string.split
  p string
  string.each do |word|
    word = word.reverse!
  end
  p string  
end
letter_reverse('Here is a string for us to rewrite with the letters of each word in reverse order')
puts "\n"

#  6.) A function accepts an array of strings
#      and returns the longest of all of them
#  ------------------------------------------
puts "Round 6.)"
def longest(array)
  puts array.max_by(&:length)
end
longest(["here", "is", "an", "array", "of", "strings", "through", "which", "we", "can", "search", "for", "the", "longest"])
puts "\n"



























