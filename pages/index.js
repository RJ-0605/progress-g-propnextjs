import Head from 'next/head';
import NavBar from '../components/navbar';
import Hero from "../components/hero";
import Container from "../components/container";
import FeaturedListings from '../components/featured-listings';
import TopStories from "../components/top-stories";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Hero />
      <Container>
        <FeaturedListings />
        <TopStories />
      </Container>
     
    </div>
  )
}
