import Header from "@/components/Header";
import Hero from "./home/components/Hero";
import AnnouncementBar from "./home/components/AnnouncementBar";
import PopularFood from "./home/components/PopularFood";
import PromoCards from "./home/components/PromoCards";
import WhyNoxx from "./home/components/WhyNoxx";
import PopularProducts from "./home/components/PopularProducts";
import CateringPlanner from "./home/components/CateringPlanner";
import StackingDay from "./home/components/StackingDay";
import BusinessSolutions from "./home/components/BusinessSolutions";
import Testimonials from "./home/components/Testimonials";
import NewsletterCTA from "./home/components/NewsletterCTA";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />


       <div className="-mt-9 relative z-10"></div>
      <AnnouncementBar />
      <PopularFood />
      <PromoCards />
      <WhyNoxx />
      <PopularProducts />
      <CateringPlanner />
      <StackingDay />
      <BusinessSolutions />
      <Testimonials />
      <NewsletterCTA />
    </>
  );
}