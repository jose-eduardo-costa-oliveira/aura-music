import avatarBot from "../img/Rectangle 7.svg"
import statusDot from "../img/Ellipse 1.svg"

function StatusCard() {
    return (
        <div className="status_card">
            <img src={avatarBot} />
            <img src={statusDot} />
            <p>Status</p>
        </div>
    )
}

export default StatusCard;