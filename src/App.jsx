import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { BsChatRightDotsFill } from "react-icons/bs";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import Services from "./components/Services";

function App() {
  function Whatsapp() {
    location.href = "https://wa.me/+916362377418";
  }
  function Phone() {
    location.href = "tel://+916362377418";
  }
  return (
    <main id="home">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Quote />
      <Footer />
      <Fab
        mainButtonStyles={{ background: "rgb(219, 36, 45)" }}
        // actionButtonStyles={actionButtonStyles}
        // style={style}
        icon={<BsChatRightDotsFill />}
        // event={event}
        alwaysShowTitle={true}
        // onClick={someFunctionForTheMainButton}
      >
        // The Action components are the "buttons" that appear when the Fab is
        open. You can use the out-of-the-box Action // component or you can use
        a custom component of any type and style it any way that you'd like. The
        "text" prop // is the popup label that appears when the Action component
        is hovered.
        <Action
          text="Whatsapp"
          style={{ background: "#1ED760" }}
          onClick={Whatsapp}
        >
          <FaWhatsapp />
        </Action>
        <Action text="Call" style={{ background: "blue" }} onClick={Phone}>
          <FaPhone />
        </Action>
      </Fab>
    </main>
  );
}

export default App;
