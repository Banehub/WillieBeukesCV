import './LandingPage.css'
import VideoBackground from '../../components/VideoBackground/VideoBackground'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Gallery from '../../components/Gallery/Gallery'
import Quote from '../../components/Quote/Quote'
import CallToAction from '../../components/CallToAction/CallToAction'
import Footer from '../../components/Footer/Footer'
import ChatWidget from '../../components/ChatWidget/ChatWidget'
import Navbar from '../../components/Navbar/Navbar'

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <section className="hero-section-wrapper">
        <VideoBackground />
        <div className="content">
          <Hero />
        </div>
      </section>
      <About />
      <Gallery />
      <Quote />
      <CallToAction />
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default LandingPage

