import React, {useEffect, useState} from "react";
import './App.css';
import Recipe from './components/Recipe'


const App = () => {

  const APP_KEY = 'e89cdc989a7d42e4bd8885b019631436';

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${APP_KEY}&addRecipeInformation=true&fillIngredients=true`);
    const data = await response.json();
    setRecipes(data.results);
    console.log(data.results);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch}className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
        <button 
          className='search-button' 
          type="submit">
          Buscar
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
          key={recipe.id} 
          title={recipe.title} 
          image={recipe.image}
          ingredient={recipe.extendedIngredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
