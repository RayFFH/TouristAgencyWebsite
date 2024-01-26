//import LogoTitle from '../../assets/images/logo-s2.png'
import { Link } from 'react-router-dom';
import './index.scss'
import BackgroundImage from '../../assets/images/background.jpg';
import BackgroundImage2 from '../../assets/images/secondBackground.jpg';
import arrow from '../../assets/images/down-arrow.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselCard from '../CarouselCard';
import Card from '../Card';
import info from '../../assets/images/info.png';
import shopping from '../../assets/images/shopping-cart.png';
import transport from '../../assets/images/transport.png';
import location from '../../assets/images/placeholder.png';
import notice from '../../assets/images/notice.png';
import bed from '../../assets/images/bed.png';
import heart2 from '../../assets/images/heart2.png';

import meguro from '../../assets/images/meguro.jpg';
import roppongi from '../../assets/images/roppongi.jpeg';
import harajyuku from '../../assets/images/harajyuku.jpeg';
import shibuya from '../../assets/images/shibuya.jpg';
import koenji from '../../assets/images/koenji.jpeg';
import kichijyouji from '../../assets/images/kichijyouji.jpeg';

import ginza from '../../assets/images/ginza.jpeg';
import odaiba from '../../assets/images/odaiba.jpg';
import tokyostation from '../../assets/images/tokyostation.jpg';
import enoshima from '../../assets/images/enoshima.jpeg';
import ueno from '../../assets/images/ueno.jpg';
import shinjyuku from '../../assets/images/shinjyuku.jpg';
import la from '../../assets/images/left-arrow.png';
import ra from '../../assets/images/right-arrow.png';


const Home = () => {

  const cardsData = [
    { icon: info, alt: 'Icon 1', text: 'Get latest info now' },
    { icon: shopping, alt: 'Icon 2', text: 'Best places to buy' },
    { icon: transport, alt: 'Icon 1', text: 'Quickest ways to travel' },
    { icon: location, alt: 'Icon 2', text: 'Best locations' },
    { icon: notice, alt: 'Icon 1', text: 'New announcements' },
    { icon: bed, alt: 'Icon 2', text: 'Great hotels near you' },
    { icon: heart2, alt: 'Icon 1', text: 'Our Tokyo Favourites' },
];


    return (

        <div className="container home-page">
        <section>
        <div className="background-container">
          <div className="text-zone">
          <h1>
              今日は <br /> Tokyo Guide
              <br />
              Discover a new world
            </h1>
            <h2>Professional Tourism Service</h2>

          </div>
          <div>
          <a
              href="#"
              onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
              className="learn-more-link" // Add a class for styling
            >
              <img
                src= {arrow} // Replace with the actual path to your image
                alt="Learn more"
                className="learn-more-image" // Add a class for styling
              />
           </a>
          </div>
        </div>
        </section>
        <section id="about" className="aboutus">
          <div tabIndex="0" className="main-text">
              <h2 tabIndex="0">About Us</h2>
              <p>We've provided professional translation and interpretation services for the past 30 years, with no signs of stopping. Our passion is helping you communicate more effectively, no matter the language, location, or medium.</p>
              <p>Our team specializes in a multitude of languages and we're constantly updating our proprietary software to learn more - all the better to serve your needs.</p>
          </div>
        </section>
        <section classname="iconcards">
        <div className="cards-container">
            {cardsData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </section>
        <section id="why-tokyo" className="why-tokyo">
        <div tabIndex="0" className="main-text">
          <h2 tabIndex="0">Why Tokyo?</h2>
          <p>
            Tokyo, a city that seamlessly blends tradition and modernity, awaits your exploration. Immerse yourself in a vibrant culture where ancient temples coexist with cutting-edge technology.
          </p>
          <p>
            From the serene beauty of cherry blossoms in spring to the bustling streets of Shibuya, Tokyo offers a unique experience for every traveler. Discover exquisite cuisine, rich history, and warm hospitality in every corner of this captivating metropolis.
          </p>
          <p>
            Our team at Tokyo Guide is dedicated to ensuring that your visit is not just a journey but a memorable adventure. Let us be your guide to the heart of Japan, where every moment is a story waiting to be told.
          </p>
        </div>
      </section>
      <section id = "whats-new">
        <div className="second-background">
        <div tabIndex="0" className="text-zone-why">
        <h2>Whats New??</h2>
        <p>Explore Tokyo, where tradition meets innovation. Discover ancient temples alongside cutting-edge technology.</p>
<p>From the mesmerizing cherry blossoms of spring to the vibrant streets of Shibuya, Tokyo offers unique experiences for every traveler.</p>
<p>Embark on a journey with Tokyo Guide to uncover new delights, exquisite cuisine, and the rich history of this captivating metropolis.</p>
          {/* Content for the second background
          <div className="text-zone2">
          <h1>Recent</h1>
          <p>
              Discover Shibuya from hachiko to ometosando, new events coming soon.From 2024 shibuya has become the hotspot for tourism
            
              Interested? Click down below to find out more events related to shibuya!
              </p>
            </div>  
            <a
              href="https://www.linkedin.com/in/phoenixsmart/"
              target="_blank"
              rel="noopener noreferrer"
              className="flat-button"
            >
              Click here for more info
            </a> */}

        </div>
        </div>
        </section>
        <section id="image-grid-section">
        <div className="image-grid-section">
        <h2>Explore Tokyo by area</h2>
        <div className="image-grid">
        <div className="image-container">
      <img src={meguro} alt="Tokyo Image 1" />
      <div className="image-text">Caption for Image 1</div>
    </div>
    <div className="image-container">
      <img src={roppongi} alt="Tokyo Image 2" />
      <div className="image-text">Caption for Image 2</div>
    </div>
    <div className="image-container">
      <img src={harajyuku} alt= "Tokyo Image 3" />
      <div className="image-text">Caption for Image 3</div>
    </div>
    <div className="image-container">
      <img src={shibuya} alt="Tokyo Image 4" />
      <div className="image-text">Caption for Image 4</div>
    </div>
    <div className="image-container">
      <img src={shinjyuku} alt="Tokyo Image 1" />
      <div className="image-text">Caption for Image 1</div>
    </div>
    <div className="image-container">
      <img src={koenji} alt="Tokyo Image 2" />
      <div className="image-text">Caption for Image 2</div>
    </div>
    <div className="image-container">
      <img src={kichijyouji} alt="Tokyo Image 3" />
      <div className="image-text">Caption for Image 3</div>
    </div>
    <div className="image-container">
      <img src={ginza} alt="Tokyo Image 4" />
      <div className="image-text">Caption for Image 4</div>
    </div>
    <div className="image-container">
      <img src={odaiba} alt="Tokyo Image 4" />
      <div className="image-text">Caption for Image 4</div>
    </div>
        </div>
        </div>
      </section>
        <section id="Thingstodo" style={{ height: '800px', margin: '20px', background: '#333333' }}>
          <h1>Top Activities</h1>
          <div className="carousel-container">
            <CarouselCard />
          </div>
        </section>
        <section id="footer" style={{ background: '#f70759' }}>
  <div className="footer-row">
    <div className="footer-column">
      <h3>About Us</h3>
      <p>Welcome to our tourism website. Learn more about our mission and values.</p>
    </div>
    
  </div>

  <div className="footer-row">
    <div className="footer-column">
      <h3>Popular Destinations</h3>
      <p>Explore our most sought-after travel destinations and plan your next adventure.</p>
    </div>
    <div className="footer-column">
      <h3>Terms & Conditions</h3>
      <p>Read our terms and conditions to ensure a smooth and enjoyable travel experience.</p>
    </div>
  </div>

  <div className="footer-row">
    <div className="footer-column">
      <h3>Privacy Policy</h3>
      <p>Learn about how we handle your data and prioritize your privacy.</p>
    </div>
    <div className="footer-column">
      <h3>Customer Support</h3>
      <p>Our dedicated support team is available 24/7 to assist you with any inquiries.</p>
    </div>
  </div>

  <div className="o-footer-3">
  <div className="m-footer-block m-footer-block-1-small m-footer-block--small--centered m-footer-ekomi">
    <div className="a-title-footer--big u-nomargin--b">Customer reviews</div>
    <div className="m-footer-block__list">
      {/* ekomi */}
      <div className="m-ekomi --bigger-small">
        <div className="m-ekomi-l">
          <a href="https://www.ekomi.es/testimonios-civitatiscom.html" title="">
            <img
              className="b-lazy b-loaded bloaded"
              border="0"
              alt="MyApp.com"
              src="/f/images/ekomi-190x190.png"
            />
          </a>
        </div>
        <div className="m-ekomi-r">
          <div className="m-ekomi-rating-wrapper">
            <strong className="m-ekomi-rating-value">
              <span>9,4</span> / 10
            </strong>
            <div className="m-ekomi-rating">
              <div className="m-ekomi-rating-empty">★★★★★</div>
              <div className="m-ekomi-rating-selected" style={{ width: '92%' }}>
                ★★★★★
              </div>
            </div>
          </div>
          <div className="m-ekomi-text">
            +<span>2,500,000</span>{' '}
            <a href="" title=" reviews">
              <strong>reviews</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="m-footer-block m-footer-block-top-border-small m-footer-block--small--centered m-footer-app">
    <div className="a-title-footer--big">Download our APP</div>
    <div className="m-footer-block__list">
      <div className="m-app-links">
        <a
          href=""
          target="_blank"
          title="Download the Tokyo app from the App Store"
        >
          <img src="/f/images/app-store-2_en.png" alt="Download the app from the App Store" />
        </a>
        <a
          href=""
          target="_blank"
          title="Download the Tokyo app from Google Play"
        >
          <img src="/f/images/google-play-2_en.png" alt="Download the app from Google Play" />
        </a>
      </div>
    </div>
  </div>
  <div className="m-footer-block u-hide--small m-footer-email__container"></div>
</div>;

</section>

</div>

    );
}

export default Home