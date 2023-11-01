
import star from "../assets/Star_1.png";



function Card({ img, rating, reviewCount, country, title, price, badge }) {
    
    let badgeText;
    if(badge === 0){
        badgeText = "SOLD OUT"
    }else if(country === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--photo" src={img} alt="Card Photo" />
            <img className="card--star retting" src={star} alt="Card star" />
            <h3 className="retting">{rating}</h3>
            <h3 className="retting tex">({reviewCount})•{country}</h3>
            <p>{title}</p>
            <p> <strong>From ${price} </strong>/ person</p>

        </div>
    );
}


export default Card;











