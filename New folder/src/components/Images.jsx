import {imgs} from "../utils/constans.js";

const Images = () => {

    return (
        <section className="float-end w-50 row border border-warning rounded-bottom-4 ms-2 me-0">
            <h2 className="col-sm-12 text-center">Dream team</h2>
           {imgs.map(img => (<img className="col-sm-4 p-1" src={img} alt="Friend"/>))}
        </section>
    )
}

export default Images;