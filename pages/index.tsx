import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Title } from '../components/Title';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

interface MovieProps {
  id: number;
  original_title: string;
  poster_path: string;
}
interface ResultsProps {
  results: MovieProps[];
}

const HomePage = ({ results }: ResultsProps) => {
  return (
    <div>
      <Title title="Home" />
      {results?.map((movie) => {
        const { id, original_title, poster_path } = movie;
        return (
          <Link key={id} href={`movies/${original_title}/${id}`}>
            <div>
              <img src={`${IMAGE_BASE_URL}${poster_path}`} alt="" />
              <h4 key={id}>{original_title}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { results } = await (
    await fetch('http://localhost:3000/api/movies')
  ).json();
  return { props: { results } };
};

export default HomePage;
