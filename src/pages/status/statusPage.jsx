import Navbar from '../../components/navbar/navbar'
import StatusCard from './components/statusCard';
import Info from './components/info';
import './status.css'

function Status() {
    return (
        <div className='statusBody'>
            <Navbar />
            <div className='statusMain'>
                <StatusCard />
                <div className='infoCardsGrid'>
                    <Info />
                    <Info />
                    <Info />
                    <Info />
                    <Info />
                </div>
            </div>
        </div>
    )
}

export default Status;