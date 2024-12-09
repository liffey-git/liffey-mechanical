import '../App.css';
import HeroVid from '../../components/heroVid';
import AboutSec from '../../components/aboutSec';
import ServiceSec from '../../components/services';
import ProjectSec from '../../components/projectSec';
import Footer from '../../components/footer';

function HomePage() {
  return (
    <div>
        <HeroVid/>
        <AboutSec/>
        <ServiceSec/>
        <ProjectSec/>
        <Footer/>
    </div>
  );
}

export default HomePage;