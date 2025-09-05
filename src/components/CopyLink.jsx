import Copy from "../assets/copy.svg"

function CopyLink({ link }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(link)
            .then(() => {
                alert("Copied the text: " + link);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    };
    return (
        <img className="copy" src={Copy} onClick={handleCopy}></img>
    );
}

export default CopyLink;