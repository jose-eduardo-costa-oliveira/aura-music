import ComandosPage from "../pages/comandos/comandosPage"
import Status from "../pages/status/statusPage";

function Menu() {
    return (
        <div>
            <a href={ComandosPage.name}>Comandos</a>
            <a href={Status.name}>Status</a>
            <a href="/">Suporte</a>
            <a href="/">Custom Bot</a>
            <a href="/">Login Discord</a>
        </div>
    )
}

export default Menu;