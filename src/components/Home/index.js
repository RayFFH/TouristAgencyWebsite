//import LogoTitle from '../../assets/images/logo-s2.png'
import { Link } from 'react-router-dom';
import './index.scss'
import BackgroundImage from '../../assets/images/background.jpg';
import BackgroundImage2 from '../../assets/images/secondBackground.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselCard from '../CarouselCard';

const Home = () => {

    return (

        <div className="container home-page">
        <div className="background-container">
          <div className="text-zone">
          <h1>
              今日は <br /> Tokyo Guide
              <br />
              Discover a new world
            </h1>
            <h2>Professional Tourism Service</h2>
            <a
              href="https://www.linkedin.com/in/phoenixsmart/"
              target="_blank"
              rel="noopener noreferrer"
              className="flat-button"
            >
              CONTACT US
            </a>
          </div>
        </div>
        <div className="second-background">
          {/* Content for the second background */}
          <h1>Recent</h1>
          <h2>
              Discover Shibuya from hachiko to ometosando, new events coming soon <br /> From 2024 shibuya has become the hotspot for tourism
              <br />
              Interested? Click down below to find out more events related to shibuya!
            </h2>
            <a
              href="https://www.linkedin.com/in/phoenixsmart/"
              target="_blank"
              rel="noopener noreferrer"
              className="flat-button"
            >
              Click here for more info
            </a>
        </div>
        <div className="carousel-container">
          <CarouselCard />
        </div>
        <div className="footer">
      <p>&copy; 2024 Tokyo to Go. All Rights Reserved.</p>
    </div>
      </div>

    );
}

export default Home