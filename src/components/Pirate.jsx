import "../assets/css/Pirate.css"
import i from "../assets/img/avatar.png"


function Pirate({ tagline, name, image, description, year, weapon, vessel }) {

    return (
        <div>
            <div className="each-pirate">
                <img src={i}></img>
                <p>Name: {name}</p>
                <p>Year: {year}</p>
                <p>Tagline: {tagline}</p>
                <p>Weapon of Choice: {weapon}</p>
                <p>Vessel: {vessel}</p>
                <p>{description}</p>
            </div>
        </div>
    )

}

export default Pirate;
