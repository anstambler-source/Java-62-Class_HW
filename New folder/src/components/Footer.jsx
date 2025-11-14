import {buttonsFooter} from "../utils/constans.js";
import FootButt from "./FootButt.jsx";

const Footer = () => {
    return (
        <footer className="rounded-bottom-4 row align-items-center mx-0">
            {buttonsFooter.map(button => <FootButt nameButt={button} />)}
        </footer>
    )
}

export default Footer;