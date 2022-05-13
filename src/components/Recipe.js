import React from 'react';
import style from '../styles/recipe.module.css';

const Recipe = ({title,image,ingredient}) => {
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <ul> <h2>Ingredientes</h2>
                {ingredient.map(ingredient => (
                    <li>{ingredient.original}</li>
                ))}    
            </ul>
            <img src={image} alt=""></img>
        </div>
    );
}

export default Recipe;