import React from "react";
/*import {Link} from 'react-router-dom';*/
import bannerImg from '../images/restauranfood.jpg'

function Header() {
    return (
        <header className="header">
            <section>
                {/*Banner texts */}
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button aria-label="On click">Reserve Table</button>
                    {/*<Link to="/booking"><button aria-label="On click">Reserve Table</button></Link>*/}
                </div>
                {/*Banner image */}
                <div className="banner-img">
                    <img src={bannerImg} alt="Restaurant Food"/>
                </div>
            </section>
        </header>
    );
};

export default Header;