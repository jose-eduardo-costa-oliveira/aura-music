import Navbar from '../../components/navbar/navbar'
import Status from './components/status';
import Info from './components/info';

function StatusPage() {
    return (
        <div>
            <Navbar />
            <Status />
            <div>
                <Info />
            </div>
        </div>
    )
}

export default StatusPage;