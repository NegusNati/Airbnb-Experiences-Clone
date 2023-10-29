import photo from "../assets/group77.png";


function Hero() {
    return (
        <section className="hero">
            <img src={photo} alt="Hero Photo" className="hero--photo" />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );

}

export default Hero;