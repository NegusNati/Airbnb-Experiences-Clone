import airbnb from "../assets/airbnb.svg"

function Navbar (){


    return (
        <nav>
            <img className="airbnb-logo" src={airbnb} alt="Airbnb logo" />

        </nav>
    );
}

export default Navbar;