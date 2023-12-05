import React,{ useState } from "react";
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



const PictureCat =() =>{
    const [cat, setCat] =useState('');

    const HandleCat =(category) =>{
        setCat(category);
    };
    const pictures=[{src:{chrispy   },category:'Main Course'},
    
    {src:{img},category:'Main Course'},
    {src:{img1},category:'Main Course'},
    {src:{img2},category:'Main Course'},
    {src:{img3},category:'Briyani'},
    {src:{rose},category:'Milkshake'},
    {src:{oreo},category:'Milkshake'},
    {src:{special},category:'Ice'},
    {src:{cupcake},category:'Ice'},
    {src:{pasta},category:'Main Course'},
    {src:{fish},category:'Main Course'},
    {src:{sand},category:'Main Course'},
    {src:{french},category:'Main Course'},
    {src:{prawn},category:'Main Course'},
    {src:{fruit},category:'Salad'},
    {src:{black},category:'Salad'}
];
const filteredPictures = cat !==''?pictures.filter((pictures) =>pictures.category === cat):pictures;
return(
<div>
    <h2>Categories</h2>
    <div className="categories">
        <button className={cat === 'Main course'? 'active':''} onClick={() =>HandleCat('Main Course')}>
        Main Course</button>
    </div>
    <div className="categories">
        <button className={cat === 'Briyani'? 'active':''} onClick={() =>HandleCat('Briyani')}>
        Briyani</button>
    </div>
    <div className="categories">
        <button className={cat === 'Milkshake'? 'active':''} onClick={() =>HandleCat('Milkshake')}>
        Milkshake</button>
    </div>
    <div className="categories">
        <button className={cat === 'Ice'? 'active':''} onClick={() =>HandleCat('Ice')}>
        Ice Cream</button>
    </div>
    <div className="categories">
        <button className={cat === 'Salad'? 'active':''} onClick={() =>HandleCat('Salad')}>
        Salad</button>
    </div>
    <div className="picture-grid"> {filteredPictures.map((picture,index) =>(<img key={index} src={picture.src} alt={picture.category}/>
    ))}
    </div>
</div>
);
};
export default PictureCat;