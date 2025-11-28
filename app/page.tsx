import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import HowItWorks from './components/HowItWorks';
import DemoVideo from './components/DemoVideo';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Features />
      <DashboardPreview />
      <HowItWorks />
      <DemoVideo />
      <Testimonials />
      <Footer />
    </main>
  );
}