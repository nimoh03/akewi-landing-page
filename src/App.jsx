import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import SecondHero from "./components/SecondHero"
import Genres from "./components/Genres"
import Thirdsection from "./components/Thirdsection"
import Popular from "./components/Popular"
import Footer from "./components/Footer"
import './App.css'
export default function App () {
  return(
   <div className="container">
      <Navbar />
      <Hero />
      <SecondHero />
      <Genres />
      <Thirdsection /> 
      <Popular />
      <Footer />
   </div>
  )
}