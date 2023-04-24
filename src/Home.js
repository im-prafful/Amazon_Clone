import React from 'react';
import "./Home.css";
import Bg from "./images/body_bg.jpeg";
import Product from "./Product";
// Images of Products //
import P1 from "./images/product1.jpg"
import P2 from "./images/product2.png"
import P3 from "./images/product3.jpg"
import P4 from "./images/product4.png"
import P5 from "./images/product5.png"
import P6 from "./images/product6.png"
import P7 from "./images/product7.png"
import P8 from "./images/product8.jpg"
import P9 from "./images/product9.jpeg"
import P10 from "./images/product10.jpeg"
import P11 from "./images/product11.jpg"
import P12 from "./images/product12.jpg"
import P13 from "./images/product13.png"

function Home (){
    return(
        <div className="home">
            <div className="home_container">
                <img className="home_image" src={Bg} alt=""/>

                <div className="home_row">
                    <Product id="1350001" title="PRETTYGARDEN Women's Summer Floral Maxi Sun Dress Sleeveless Halter Neck Flowy Ruffle Hem Long Boho Dresses with Belt" price={6199} image={P1} rating={3}></Product>
                    <Product id="1350003" title="Womens Straw Hat Short Brim Panama Fedora Beach Sun Trilby Hat for Vacation Gentlemen Roll Up Summer Hat" price={1606} image={P2} rating={3}></Product>
                    <Product id="1350005" title="Cooper & Nelson Men's Suit Slim Fit, 3 Piece Suits for Men, One Button Solid Jacket Vest Pants with Tie, Tuxedo Set" price={8034} image={P3} rating={4}></Product>
                    <Product id="1350007" title="Nike Mens Auir Jordan 1 Mid Sneaker, Adult" price={19999} image={P4} rating={5}></Product>
                </div>

                <div className="home_row">
                    <Product id="11000801" title="iPhone 14 Pro Max, 128GB, Deep Purple" price={128999} image={P5} rating={5}></Product>
                    <Product id="11000803" title="Alienware m15 15.6 Gaming Notebook i7-8750H 16GB RAM 1TB HHD 8GB SSHD Black" price={159250} image={P6} rating={4}></Product>
                    <Product id="11000805" title="Rolex Explorer Automatic Chronometer Blue Dial Men's Watch 124270BKASO" price={781129} image={P7} rating={5}></Product>
                    <Product id="11000807" title="PlayStation 5 Console CFI-1215A01X" price={55899} image={P8} rating={3}></Product>
                </div>

                <div className="home_row">
                    <Product id="777100" title="The Da Vinci Code: 2 (Robert Langdon)" price={2283} image={P9} rating={5}></Product>
                    <Product id="777200" title="Bhagavad Gita (in English): The Authentic English Translation for Accurate and Unbiased Understanding" price={1101} image={P10} rating={5}></Product>
                </div>

                <div className="home_row">
                    <Product id="811530" title="Marcy Dual Action Cross Training Recumbent Exercise Bike with Arm Exercisers, Gym Equipment for Work from Home Fitness, Black JX-7301" price={26051} image={P11} rating={3}></Product>
                    <Product id="811531" title="Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Twilight Blue" price={10573} image={P12} rating={4}></Product>
                    <Product id="811532" title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel, 1 Count (Pack of 1)" price={849} image={P13} rating={2}></Product>
                </div>
            </div>
        </div>
    );
}

export default Home;