function Comando(prop) {
    return (
        <div className="compComando">
            <p>/{prop.comando}</p>
            <p>{prop.descricao}</p>
        </div>
    )
}

export default Comando;