import { useEffect, useState } from 'react';
import { Title } from '../components/Title';

const API_KEY = '10923b261ba94d897ac6b81148314a3f';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Title title="Home" />
      {!movies.length && <h4>Loading</h4>}
      {movies?.map((movie) => {
        const { id, original_title, poster_path } = movie;
        return (
          <div key={id}>
            <img src={`${IMAGE_BASE_URL}${poster_path}`} alt="" />
            <h4 key={id}>{original_title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
