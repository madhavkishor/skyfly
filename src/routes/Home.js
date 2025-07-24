import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroimg from "../components/img/1.jpg";
import Destination from "../components/destination";
import Trip from "../components/trip";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg={heroimg}
        title="Your Travel Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnclass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
