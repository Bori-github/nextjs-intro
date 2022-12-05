import Head from 'next/head';

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};
