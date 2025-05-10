import statusDot from "../img/Ellipse 1.svg"

function Info() {
    return (
        <div className="info_card">
            <img src={statusDot} />
            <p>Server: { }</p>
            <p>User: { }</p>
            <p>Latency: { }</p>
            <p>RAM: { }</p>
        </div>
    )
}

export default Info;