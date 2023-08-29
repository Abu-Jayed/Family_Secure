import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Solutions from './components/Solutions'
import Testimonial from './components/Testimonial'
import RecentBlog from './components/RecentBlog'
import Footer from './ui/Footer'

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Stats></Stats>
      <Services></Services>
      <Solutions></Solutions>
      <Testimonial></Testimonial>
      <RecentBlog></RecentBlog>
    </>
  )
}
