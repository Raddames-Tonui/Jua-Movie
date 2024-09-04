import React, { useState, useEffect } from 'react';

// List of predefined search queries
const queries = [
  'action',
  'comedy',
  'drama',
  'thriller',
  'romance',
  // Add more queries as needed
];

const getRandomQuery = () => {
  const randomIndex = Math.floor(Math.random() * queries.length);
  return queries[randomIndex];
};

const Carousel = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const query = getRandomQuery();
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=5253b93`);
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
          setError('No movies found');
        }
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="my-4 bg-gray-900">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="flex-none w-64 p-2">
              <img src={movie.Poster} alt={movie.Title} className="w-full h-auto object-cover" />
              <h3 className="mt-2 text-white">{movie.Title} ({movie.Year})</h3>
            </div>
          ))
        ) : (
          <div className="text-white">No movies available</div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
