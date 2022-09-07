import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Where's my pet?</title>
        <meta
          name="description"
          content="Whereismypet app built with Next.js, Prisma & MongoDB"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Hello World!</h1>
        <p>This is the index page</p>
      </div>
    </>
  );
};

export default Home;
