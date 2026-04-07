import Header from "../components/Header";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import SkillList from "../components/SkillList";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <div className="w-full py-7 px-2 md:px-7 lg:px-20 flex flex-col gap-14 items-center justify-center">
        <Header />
        <About />
        <CallToAction />
        <SkillList />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
