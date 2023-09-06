import OfferSection from "../components/OfferSection";
import PopularCategory from "../components/PopularCategory";
import Banner from "../components/banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularCategory />
      <OfferSection />
    </div>
  );
};

export default Home;
