import OfferSection from "../components/OfferSection";
import PopularCategory from "../components/PopularCategory";
import Banner from "../components/Banner";
import OurProducts from "../components/OurProducts";
import SubscribeSection from "../components/SubscribeSection";
import ReviewSection from "../components/ReviewSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularCategory />
      <OfferSection />
      <OurProducts />
      <SubscribeSection />
      <ReviewSection />
    </div>
  );
};

export default Home;
