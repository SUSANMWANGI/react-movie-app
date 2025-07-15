import React, { useState, useEffect } from 'react';
import MovieCard from "../components/MovieCard";
import '../css/Home.css';
import { searchMovies, getPopularMovies } from "../services/api";   

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                setError('Failed to fetch popular movies. Please try again later.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []); // <-- Remove misplaced closing brace here

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            setLoading(true);
            return;
        if(loading) return;
        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        }
        catch(err) {
            setError('Failed to search for movies. Please try again later.');
            console.error(err);
        }
        finally{
            setLoading(false);
        }
        }
        alert(`Searching for: ${searchQuery}`);
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for movies..."
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            {error && <div className="error">{error}</div>}
            {loading? <div className="loading">Loading popular movies...</div>:
            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>}
            
            
        </div>
    );
}

export default Home;