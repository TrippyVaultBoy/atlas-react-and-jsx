import items from "../assets/links.json";

function Footer() {
    return (
        <footer>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.label}</a>
                    </li>
                ))}
            </ul>
            © {new Date().getFullYear()} Atlas School
        </footer>
    );
}

export default Footer;