import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext.jsx';
import MovieCard from '../components/MovieCard.jsx';

function Favourites(){
    const { favorites } = useMovieContext();
    if (favorites){return(
    <div className='favourites'>
        <h2>Your Favourite Movies</h2>
     <div className="movies-grid">
                {favorites.map((movie) => (
                   
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div></div>
    );}
    return(
    <div>
        <h2>No favourite movies yet</h2>
        <p>Add some movies to your favourites to see them here.</p>
        <p>Check out the <a href="/">home page</a> to start exploring</p>
    </div>);
}
export default Favourites;