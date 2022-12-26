import Head from "next/head";
import styles from "../styles/Home.module.css";
import Joke from "../components/Joke";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jokes App</title>
        <meta name="description" content="The best jokes on Internet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Jokes App</h1>
        <Joke />
      </main>
    </>
  );
}
