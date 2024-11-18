import "./Home.css";
import Navbar from "../../components/NavBar/Navbar";
import React from "react";
import hero_img from "/public/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play from "../../assets/play_icon.png";
import info from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_img} alt="" className="banner" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="hero-title" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iure
            ipsam exercitationem iusto obcaecati dolor quos totam, nesciunt
            dolorum harum corrupti. Deleniti vel quas et sed, deserunt animi
            numquam eos?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid cum illo ad doloremque, pariatur nesciunt eos minus dolor
            velit esse tempore similique consequatur quibusdam aperiam, quae
            voluptatem quisquam, nobis nulla.
          </p>
          <div className="btns">
            <button>
              <img src={play} alt="" />
              Play
            </button>
            <button>
              <img src={info} alt="" />
              More info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="other-card" style={{ padding: "2rem 3%" }}>
        <TitleCards title={"BlockBuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"now_playing"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
