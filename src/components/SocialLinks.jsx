import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function SocialLinks() {
    return (
        <div className="social-links">
            <a><img href="https://www.linkedin.com/in/tannersaint/" src={linkedin}></img></a>
            <a><img href="https://github.com/TrippyVaultBoy" src={github}></img></a>
        </div>
    );
}

export default SocialLinks;