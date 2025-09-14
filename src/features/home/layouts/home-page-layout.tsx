import Header from '../components/header';
import ProductsSection from '../components/products-section';
import WhyUsSection from '../components/why-us-section';
import FounderSection from '../components/founder-section';
import CTASection from '../components/cta-section';
import Footer from '../components/footer';
import SideNavigation from '../components/side-navigation';
import HeroSection from '../components/hero-section';

export default function HomePageLayout() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* <SideNavigation /> */}
      <HeroSection />
      <ProductsSection />
      <WhyUsSection />
      <FounderSection />
      <CTASection />
      <Footer />
    </main>
  );
}
