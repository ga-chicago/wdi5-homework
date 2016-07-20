##### WDI-5 HW
##### Problems 1-6
##### 02 REPS


# PROBLEM 1
#############

words = ["hello", "what", "is", "up", "dude"]

def lengths(words)
  words_length = []
  words.each { |e| words_length.push(e.length) }
  p words_length
end

lengths(words)

# PROBLEM 2
#############################

def transmogrifier(x, y, z)
  puts (x * y) ** z
end

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

# PROBLEM 3
#############################

def toonify(accent, sentence)
  if accent == "daffy"
    sentence.each_char { |letter| 
      sentence.sub!("s", "th")
    }
  puts sentence
  elsif accent == "elmer"
    sentence.each_char { |letter| 
      sentence.sub!("r", "w")
    }
  puts sentence

  else
    puts sentence
  end  
end  

toonify("daffy", "so you smell like sausage")
toonify("elmer", "rrrrrrr")

# PROBLEM 4
#############################

def wordReverse(string)
  string = string.split(" ")
  string = string.reverse
  string = string.join(" ")
  p string
end 


wordReverse("I want a toy car for my birthday")

# PROBLEM 5
#############################

def letterReverse(string)
  string = string.split("")
  string = string.reverse
  string = string.join("")
  string = string.split(" ")
  string = string.reverse
  string = string.join(" ")
  p string
end  

letterReverse("Something tells me it'll be a good day")

# PROBLEM 6
#############################

def longest(array)
  longest_word = ""
  array.each { |word|
    if word.length >= longest_word.length 
      longest_word = word
    end
  } 
  p longest_word
end  

longest(["oh", "good", "grief"]) # => "grief"
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
