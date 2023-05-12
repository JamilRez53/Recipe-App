import React from "react";
import style from './recipe.module.css'
const Recipe = ({title,calories,image,ingredients}) =>{
    return(
       <div className={style.recipe}>
           <h1>{title}</h1>
           {/*ekhane basically loop korse entire ingredient list take jeta edamam website e ase*/}
           <ul>
               {ingredients.map(ingredient =>(
                   <li>{ingredient.text}</li>
               ))}
           </ul>
           <p>{calories}</p>
           <img className={style.image} src={image} alt=""/>
       </div>
    );
};
export default Recipe;