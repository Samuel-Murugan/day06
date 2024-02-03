//Q 1. To Creat a class in given description
class Movie {
    constructor(title, rating,studio) {
      this.title = title;
      this.rating = rating;
      this.studio =studio;
    }
  
    getPG() {
      return this.rating === "PG-13";
    }
  }
  
  const movies = [
    new Movie("The Shawshank Redemption", "PG-13","Sun Pictures"),
    new Movie("The Godfather", "R","Joe Production"),
    new Movie("The Dark Knight", "PG-13","Moon Creation"),
    new Movie("The Silence of the Lambs", "R","MSD production"),
    new Movie("Schindler's List", "R","3D Creation"),
    new Movie("12 Angry Men", "PG","Wunderbar Production"),
  ];
  
  var pgMovies = movies.filter((movie) => movie.getPG());
  
  console.log(pgMovies);
