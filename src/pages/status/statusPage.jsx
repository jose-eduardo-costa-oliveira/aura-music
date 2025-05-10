import Navbar from '../../components/navbar/navbar'
import StatusCard from './components/statusCard';
import Info from './components/info';
import './status.css'

function Status() {
    return (
        <div>
            <Navbar />
            <StatusCard />
            <div>
                <Info />
            </div>
        </div>
    )
}

export default Status;