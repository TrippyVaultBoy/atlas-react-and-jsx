import Greeting from "../components/Greeting"
import SocialLinks from "../components/SocialLinks"

function Header() {
    return (
        <nav>
            <Greeting />
            <SocialLinks />
        </nav>
    );
}

export default Header;