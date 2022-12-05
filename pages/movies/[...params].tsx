import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { Title } from '../../components/Title';

const MovieDetailPage = ({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [title, id] = params;
  return (
    <section>
      <Title title={title} />
      <h4>{title}</h4>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params: { params },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return { props: { params } };
};

export default MovieDetailPage;
