import Navbar from '../../components/navbar/navbar'
import Comando from './components/comando';

function Comandos() {
    return (
        <div>
            <Navbar />

            <div>
                <div>
                    <p>Comandos</p>
                    <p>Descrição</p>
                </div>
                <div>
                    <Comando comando='p' descricao='desc' />
                    <Comando comando='skip' descricao='desc'/>
                    <Comando comando='pause' descricao='desc'/>
                    <Comando comando='help' descricao='desc'/>
                    <Comando comando='prefix' descricao='desc'/>
                </div>
            </div>
        </div>
    )
}

export default Comandos;