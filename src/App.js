import './App.css';
import { useRef } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function App() {
  const terugSpring = useRef();

  const ScrollToBody = () => {
    terugSpring.current.scrollIntoView();
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="App">

      <div className="container">
        <div className="navbar">
          <div className="menu">
            <h3 className="logo"><img className='logo_icon'></img>BloomBrewers</h3>
            <div className="hamburger-menu">
              <div className="bar"></div>
            </div>
          </div>
        </div>


        <div className="main-container">
          <div className="main">
            <header id="fadingImage">
              <div className="overlay">
                <div className="inner">
                  <h2 className="title"></h2>
                  <p>
                    Bij BloomBrewers zijn wij trots op het maken van innovatieve bieren vol smaak en karakter
                  </p>
                  <button onClick={ScrollToBody} className="btn">Ontdek hieronder onze producten</button>
                </div>
              </div>
            </header>
          </div>

          <div className="shadow one"></div>
          <div className="shadow two"></div>
        </div>

        <div className="main-container" ref={terugSpring}>
          <div className="main">
            <header className='producten'>
              <div className="overlay">
                <div className='carousel_producten'>
                  <Carousel className='carousel' responsive={responsive}>
                    <div className='card'>
                      <img className="malvina" src=''/>
                      <p>Laat u meevoeren door de eeuwenoude smaak van heide en het verhaal van Malvina</p>
                      <p className='alcoholPercentage'>10%</p>
                      <p><button><a href='mailto:thomas.vernimme@student.kdg.be'>Neem contact op voor te bestellen</a></button></p>
                    </div>

                    <div className='card'>
                      <img className="coming_soon" src=""></img>
                      <p>Binnenkort verkrijgbaar</p>
                      <p className='alcoholPercentage'>***</p>
                      <p><button><a href='mailto:thomas.vernimme@student.kdg.be'>Neem contact op voor te bestellen</a></button></p>
                    </div>

                    <div className='card'>
                      <img className="coming_soon" src=""></img>
                      <p>Binnenkort verkrijgbaar</p>
                      <p className='alcoholPercentage'>***</p>
                      <p><button><a href='mailto:thomas.vernimme@student.kdg.be'>Neem contact op voor te bestellen</a></button></p>
                    </div>

                    <div className='card'>
                      <img className="coming_soon" src=""></img>
                      <p>Binnenkort verkrijgbaar</p>
                      <p className='alcoholPercentage'>***</p>
                      <p><button><a href='mailto:thomas.vernimme@student.kdg.be'>Neem contact op voor te bestellen</a></button></p>
                    </div>

                    <div className='card'>
                      <img className="coming_soon" src=""></img>
                      <p>Binnenkort verkrijgbaar</p>
                      <p className='alcoholPercentage'>***</p>
                      <p><button><a href='mailto:thomas.vernimme@student.kdg.be'>Neem contact op voor te bestellen</a></button></p>
                    </div>

                    <div className='card'>
                      <img className="coming_soon" src=""></img>
                      <p>Binnenkort verkrijgbaar</p>
                      <p className='alcoholPercentage'>***</p>
                      <p><button><a href='mailto:thomas.vernimme@student.kdg.be'>Neem contact op voor te bestellen</a></button></p>
                    </div>
                  </Carousel>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}
