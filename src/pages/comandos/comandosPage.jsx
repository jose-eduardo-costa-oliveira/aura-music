import Navbar from '../../components/navbar/navbar';
import Comando from './components/comando';
import "./comandos.css";

function Comandos() {
    return (
        <div>
            <Navbar />

            <div className='comando_body'>
                <div className='comando_header'>
                    <p>Comandos</p>
                    <p>Descrição</p>
                </div>
                <div>
                    <Comando comando='p' descricao='Reproduza músicas por meio de pesquisas ou URL direta de uma variedade de provedores de músicas' />
                    <Comando comando='skip' descricao='Pule a música atual e começe a próxima' />
                    <Comando comando='pause' descricao='Pausar a música' />
                    <Comando comando='help' descricao='Mostrar todos os comandos do bot' />
                    <Comando comando='prefix' descricao='Alterar prefixo do bot' />
                    <Comando comando='queue' descricao='Mostra a fila' />
                    <Comando comando='previous' descricao='Reproduza a música anterior na fila' />
                    <Comando comando='shuffle' descricao='Embaralhar a fila' />
                    <Comando comando='clearqueue' descricao='Limpar a fila' />
                    <Comando comando='stop' descricao='Parar a música e limpe a fila' />
                    <Comando comando='djmode' descricao='Ativa o modo dj' />
                </div>
            </div>
        </div>
    )
}

export default Comandos;