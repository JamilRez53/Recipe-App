import React from "react";
import {useEffect,useState} from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {

    const APP_ID = "49b4ce6e";
    const APP_KEY = "e71e3be15fa756440e6f3d6412576652";
    //const exampleReq=
    const[recipes,setRecipes]=useState([]);
    const[search,setSearch]=useState('');
    const[query,setQuery]=useState('chicken')// eta korar uddessho hochhe jokhon amra search bar e likhbo update korbo tokhon update na hoye jokhon submit buttone click korbo tokhon update hobe
    //pge re-render korte hoile ei function
    useEffect(()=>{
      getRecipes()
    },[query]);
    const getRecipes= async () =>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data=await response.json();
        setRecipes(data.hits)
        console.log(data.hits)
    };
    const updateSearch= e => {
        setSearch(e.target.value)
        console.log(search)
    };
    const getSearch= e => {
        e.preventDefault();
        setQuery(search)
        setSearch('')
    }
    return(
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button">Search</button>
            </form>
            <div className="recipes">
            { recipes.map(recipe =>(
              <Recipe key={recipe.recipe.label} title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}/>
            ))}
            </div>
        </div>
    );
};

export default App;
