import Navbar from '../../components/navbar/navbar';
import BannerAuraMusic from './components/banner-auramusic';
import InviteButton from './components/invite-button';
import "./home.css"

function Home() {
    return (
        <div>
            <Navbar />
            <BannerAuraMusic />
            <InviteButton />
        </div>
    )
}

export default Home;