import React, { useEffect, useRef } from 'react'
import './flex1.css'

//import PictureCat from './PictureCat'
import img from './burger.jpg'
import img1 from './pizza.jpg'
import img2 from './sushi.jpg'
import img3 from './briyani.jpg'
import rose from './Rosemilk.jpg'
import cupcake from './Butterscotch.jpg'
import chrispy from './Chrispy chicken.jpg'
import prawn from './Prawn.jpg'
import black from './Blackforest.jpg'
import french from './Frenchfries.jpg'
import sand from './Sandwich.jpg'
import fish from './Fishfry.jpg'
import pasta from './Italian Pasta.jpg'
import fruit from './fruitsalad.jpg'
import oreo from './oreo shake.jpg'
import special from './special icecream.jpg'


function Flexi(){
  // const menuItems = useRef([]);

  // const handleIntersection = (entries, observer) => {
  //   requestAnimationFrame(() => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('animated');
  //     } else {
  //       entry.target.classList.remove('animated');
  //     }
  //   });
  // });
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(handleIntersection, {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.5,
  //   });

  //   menuItems.current.forEach((item) => observer.observe(item));

  //   return () => {
  //     observer.disconnect();
  //     menuItems.current.forEach((item) => item.classList.remove('animated'));
  //   };
  // }, []);



    return(
        <section className="menu" id="menu">
        <h2>Our Menu</h2>
         <div className="menu-items">
          <div className="menu-item">
            <img src={img} alt="Burger" />
            <h3>Burger</h3>
            <p>Delicious beef burger with fresh ingredients.</p>
          </div>
          
          <div className="menu-item">
            <img src={img1} alt="Pizza" />
            <h3>Pizza</h3>
            <p>Authentic Italian pizza with a variety of toppings.</p>
          </div>
          <div className="menu-item">
            <img src={img2} alt="Sushi" />
            <h3>Sushi</h3>
            <p>Freshly prepared sushi rolls with premium ingredients.</p>
          </div>
          <div className="menu-item" >
            <img src={img3} alt="Briyani"  />
            <h3>Chicken Briyani</h3>
            <p>A special blend of spices and made of basmati rice</p>
          </div>
          <div className="menu-item">
            <img src={rose} alt="Rose Milk" />
            <h3>Rose Milk</h3>
            <p>Let rose milk soothe your soul and taste buds.</p>
          </div>
          <div className="menu-item">
            <img src={cupcake} alt="cupcake" />
            <h3>Cupcake</h3>
            <p>Small cakes were baked in individual ramekins, hence the name cupcake.</p>
          </div>
          <div className="menu-item">
            <img src={chrispy} alt="Chrispy" />
            <h3>Chrispy Chicken</h3>
            <p>Crispy chicken consists of chicken pieces that are coated with seasoned flour or batter and then fried.</p>
          </div>
          <div className="menu-item">
            <img src={prawn} alt="Prawn" />
            <h3>Prawn Fry</h3>
            <p>Good food, good mood, and prawns  that's all you need in life.</p>
          </div>
          <div className="menu-item">
            <img src={black} alt="black" />
            <h3>BlackForest</h3>
            <p>Type of large chocolate cake, made with layers of chocolate cake, cherries, and cream, originally from the Black Forest area of Germany</p>
          </div>
          <div className="menu-item">
            <img src={sand} alt="Sandwitch" />
            <h3>Sandwich</h3>
            <p>Encourages writers to introduce quotes in their papers and shows how to tie them in as supporting evidence</p>
          </div>
          <div className="menu-item">
            <img src={french} alt="french" />
            <h3>Frenchfries</h3>
            <p>Keep your friends close and your french fries closer.</p>
          </div>
          <div className="menu-item">
            <img src={fish} alt="fish" />
            <h3>Fishfry</h3>
            <p>If you want a fried fish to fly and enter your mouth, you must keep waiting till the unending time ends.</p>
          </div>
          <div className="menu-item">
            <img src={pasta} alt="pasta" />
            <h3>Pasta</h3>
            <p>A bad day eating pasta is better than a good day doing anything else.</p>
          </div>
          <div className="menu-item">
            <img src={fruit} alt="Salad" />
            <h3>Fruitsalad</h3>
            <p>Washed and dried strawberries, grapes, blueberries etc.....</p>
          </div>
          <div className="menu-item">
            <img src={oreo} alt="Oreo" />
            <h3>Oreo Shake</h3>
            <p>Made with Oreo cookies, milk, vanilla ice cream, sugar, and chocolate sauce, this thick oreo shake recipe will take over your taste buds.</p>
          </div>
          <div className="menu-item">
            <img src={special} alt="Special bruhh" />
            <h3>Special Icecream</h3>
            <p>Ice cream is a frozen dessert typically made from milk or cream that has been flavoured with a sweetener</p>
          </div>
        </div>
      </section>

    )
}
export default Flexi;