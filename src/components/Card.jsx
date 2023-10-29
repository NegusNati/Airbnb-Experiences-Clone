import picture from "../assets/image_12.png";
import star from "../assets/Star_1.png";



function Card({ img, rating, reviewCount, country, title, price }) {
    var pi = `../assets/${img}`;
    console.log(pi);

    return (
        <div className="card">
            <img className="card--photo" src={pi} alt="Card Photo" />
            <img className="card--star retting" src={star} alt="Card star" />
            <h3 className="retting">{rating}</h3>
            <h3 className="retting tex">({reviewCount})•{country}</h3>
            <p>{title}</p>
            <p> <strong>From ${price} </strong>/ person</p>

        </div>
    );
}


export default Card;











