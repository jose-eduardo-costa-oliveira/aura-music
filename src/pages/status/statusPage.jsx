import Navbar from '../../components/navbar/navbar'
import StatusCard from './components/status';
import Info from './components/info';

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