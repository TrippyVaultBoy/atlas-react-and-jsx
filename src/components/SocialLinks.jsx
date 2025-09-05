import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function SocialLinks() {
    return (
        <div className="social-links">
            <a href="https://www.linkedin.com/in/tannersaint/"><img src={linkedin}></img></a>
            <a href="https://github.com/TrippyVaultBoy"><img src={github}></img></a>
        </div>
    );
}

export default SocialLinks;