####### Round One

def lengths(array)
  p array.map { |a| a.length }
end

words = ["hello", "what", "is", "up", "dude"]
lengths(words)




####### Round 2

def transmogrifier(num1, num2, num3)
  p (num1 * num2)**num3
end

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)




####### Round 3

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
toonify("jack", "hello there you")




####### Round 4

def wordReverse(string)
  puts string.split(" ").reverse.join(" ")
end
wordReverse("Now I know what a TV dinner feels like")




####### Round 5

def letterReverse(string)
  puts string.split('').reverse.join('').split(' ').reverse.join(' ')

end

letterReverse("Now I know what a TV dinner feels like")
letterReverse("Put Hans back on the line")



####### Round 6

def longest(arrayOfStrings)
  puts arrayOfStrings.sort_by(&:length).last 
end

longest(["oh", "good", "grief"])
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])

