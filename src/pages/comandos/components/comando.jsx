function Comando(prop) {
    return (
        <div className="comp_comando">
            <p>/{prop.comando}</p>
            <p>{prop.descricao}</p>
        </div>
    )
}

export default Comando;