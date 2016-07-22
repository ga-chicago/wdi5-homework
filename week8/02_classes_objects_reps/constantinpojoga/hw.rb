#!/usr/bin/env ruby

# --------------------
# ***** Round 1 *****
#=====================

words = ["hello", "what", "is", "up", "dude"]

def lengths(arr)
  arr.map! { |val|  val.length}
end

p lengths(words)  # => [5, 4, 2, 2, 4]
 
# -------------------
# ***** Round 2 *****
# -------------------

def transmogrifier(a, b, pow)
  (a * b) ** pow
end

p transmogrifier(5, 4, 3)    # => 8000
p transmogrifier(13, 12, 5)  # => 92389579776
p transmogrifier(42, 13, 7)  # => 14466001271480793216


# -------------------------
# ****** Round 3 **********
# -------------------------

def toonify(accent, str)
  case accent
    when "daffy"
      str.gsub('s', "th")
    when "elmer"
      str.gsub('r', 'w')
    else
      str
  end
end

p toonify("daffy", "so you smell like sausage") 
# => "tho you thmell like thauthage"

# -------------------------
# ****** Round 4 **********
# -------------------------

def wordReverse(str)
  str.split(' ').reverse.join(' ')
end

p wordReverse("Now I know what a TV dinner feels like")
# => "like feels dinner TV a what know I Now"

# -------------------------
# ****** Round 5 **********
# -------------------------
def letterReverse(str)
  str.split(' ').map{|word| word.split('').reverse.join('')}.join(' ')
end

p letterReverse("Now I know what a TV dinner feels like")
# => "woN I wonk tahw a VT rennid sleef ekil"
p letterReverse("Put Hans back on the line")
# => "tuP snaH kcab no eht enil"

# -------------------------
# ****** Round 6 **********
# -------------------------

def longest(arr)
  arr.sort{|x,y| y.length - x.length}[0]
end

p longest(["oh", "good", "grief"]) # => "grief"
p longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# => "unrequited"







