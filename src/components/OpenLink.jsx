import Open from "../assets/open.svg"

function OpenLink({ link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={Open}></img>
        </a>
    );
}

export default OpenLink;