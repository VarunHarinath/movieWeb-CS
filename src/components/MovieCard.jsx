const MovieCard = ({ movie }) => {
  const getRating = (rating) => {
    if (rating >= 8) return "rating-good";
    if (rating >= 5 && rating < 8) return "rating-ok";
    return "rating-bad";
  };
  return (
    <>
      <div key={movie.id} className="movie-card">
        <img src={`images/${movie.image}`} alt={movie.title} />
        <div className="movie-card-info">
          <h3 className="movie-card-title">{movie.title}</h3>
          <p className="movie-card-genre">{movie.genre}</p>
          <p className={`movie-card-rating ${getRating(movie.rating)}`}>
            {movie.rating}
          </p>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
