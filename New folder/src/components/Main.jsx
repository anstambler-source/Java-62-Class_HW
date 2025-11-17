import hero from "../assets/main.jpg";
import Images from "./Images.jsx";
import Paragraph from "./Paragraph.jsx";

const Main = () => {
    return (
        <main className="clearfix">
            <section className="float-start w-25 me-3">
                <img className="w-100" src={hero} alt="Luke Skywalker"/>
            </section>
            <Images />
            <Paragraph/>
        </main>
    )
}

export default Main;