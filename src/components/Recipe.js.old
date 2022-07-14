import React from 'react';
import style from '../styles/recipe.module.css';

const Recipe = ({title,image,ingredient,category,instructions}) => {
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <img src={image} alt=""></img>
            <h2>Categorias:</h2>
            <ul> 
                {category.map(category => (
                    <li>{category}</li>
                ))}    
            </ul>
            <h2>Ingredientes</h2>
            <ul> 
                {ingredient.map(ingredient => (
                    <li>{ingredient.original}</li>
                ))}    
            </ul>
            <h2>Procedimiento</h2>
            <ul> 
                {instructions.map(instructions => (
                    <li>{instructions.step}</li>
                ))}    
            </ul>
            <h2>Calificacion: 5</h2>
        </div>
    );
}

export default Recipe;