import { ErrorBoundary } from "react-error-boundary";
import OfferSection from "../components/OfferSection";
import PopularCategory from "../components/PopularCategory";
import Banner from "../components/Banner";
import OurProducts from "../features/products/OurProducts";
import SubscribeSection from "../components/SubscribeSection";
import ReviewSection from "../components/ReviewSection";
import Error from "../ui/Error";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularCategory />
      <OfferSection />
      <ErrorBoundary fallback={<Error />}>
        <OurProducts />
      </ErrorBoundary>
      <SubscribeSection />
      <ReviewSection />
    </div>
  );
};

export default Home;
