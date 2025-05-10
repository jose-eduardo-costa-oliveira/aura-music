import Navbar from '../../components/navbar/navbar';
import BannerAuraMusic from './components/banner-auramusic';
import InviteButton from './components/invite-button';
import "./home.css"

function Home() {
    return (
        <div className='home_body'>
            <Navbar />
            <BannerAuraMusic />
            <InviteButton />
        </div>
    )
}

export default Home;