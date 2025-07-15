import { FaHeart } from "react-icons/fa";
import "../css/MovieCard.css";
import { useMovieContext } from '../contexts/MovieContext.jsx';

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favourites=isFavorite(movie.id);

    function onFavouriteClick(e) {
      e.preventDefault();
      if (favourites) {
        removeFromFavorites(movie.id);
      } else {
        addToFavorites(movie);
      }}
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-overlay">
        <button className={ `favorite-btn ${favourites?"active":""} `}onClick={onFavouriteClick}>
            <FaHeart  size={24} />
        </button>
      </div>
      <div className="movieInfo">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
    
  );
}
export default MovieCard;