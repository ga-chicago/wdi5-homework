# Round 1
def lengths(array) 
  array.each do |word|
    puts word.length
  end
end

array_of_strings = ['hello', 'what', 'is', 'up', 'dude']
lengths(array_of_strings)



# Round 2
def transmogrifier(num1, num2, num3)
  p (num1 * num2) ** num3
end

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

# Round 3
def toonify(accent, sentence)
  if (accent == "daffy")
    puts sentence.gsub("s", "th")
  elsif (accent == "elmer")
    puts sentence.gsub("r", "w")
  else
    puts sentence
  end  
end

toonify("daffy", "so you smell like sausage")
toonify("elmer", "really rad")



# Round 4

def wordReverse(string)
  puts string.split(" ").reverse.join(" ")
end
wordReverse("Now I know what a TV dinner feels like")

# Round 5
def letterReverse(string)
  puts string.split('').reverse.join('').split(' ').reverse.join(' ')

end

letterReverse("Now I know what a TV dinner feels like")
letterReverse("Put Hans back on the line")



# Round 6
#Write a function `longest` that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return either.

#def longest(["oh", "good", "grief"])
# @
#end

#{}```javascript
#longest(["oh", "good", "grief"]) # => "grief"
#longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# => "unrequited"
