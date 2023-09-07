import OfferSection from "../components/OfferSection";
import PopularCategory from "../components/PopularCategory";
import Banner from "../components/Banner";
import OurProducts from "../components/OurProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularCategory />
      <OfferSection />
      <OurProducts />
    </div>
  );
};

export default Home;
