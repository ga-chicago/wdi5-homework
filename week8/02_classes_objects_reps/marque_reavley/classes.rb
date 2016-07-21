#  CLASSES EXERCISE - WEEK 8, DAY 2
#  ================================

#  Require HTTParty
#  ----------------
require 'HTTParty'

#  Set a class for movies
#  ----------------------
class Movies

  # Initialize a new movie instance
  # -------------------------------
  def initialize(movie_title, movie_description, omdb_url)
    @movie_title       = movie_title
    @movie_description = movie_description
    @omdb_url          = omdb_url
  end

  # Setter method for movie_title
  # -----------------------------
  def movie_title=(movie_title)
    @movie_title = movie_title
  end

  # getter method for movie_title
  # -----------------------------
  def movie_title
    @movie_title
  end

  # setter method for movie_description
  # -----------------------------------
  def movie_description=(movie_description)
    @movie_description = movie_description
  end

  # getter method for movie_description
  # -----------------------------------
  def movie_description
    @movie_description
  end

  # function to set url where we get the info
  # -----------------------------------------
  def set_omdb_url(url)
    
    # setter method for url
    # ---------------------
    def omdb_url=(omdb_url)
      @omdb_url = omdb_url
    end

    # getter method for url
    # ---------------------
    def omdb_url
      @omdb_url
    end
  end

