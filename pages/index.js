import Aboutwork from "@/components/Aboutwork";
import Casestudy from "@/components/Casestudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Landingpage from "@/components/Landingpage";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Landingpage/>
      <Aboutwork/>
      <Casestudy/>
      <Footer/>
      <Contact/>
    </>
  )
}
