import React,  {useState, useEffect} from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import RecipeList from './components/RecipeList'
import {SearchContext} from './contexts/SearchContext'

const App = () => {

  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
   // SETTING DEFAULT RECIPE QUERY
  const [query, setQuery] = useState('burger');
   // SETTING API  ID AND KEY 
  const APP_ID = 'db17e074';
  const APP_KEY = 'd0568b4296bba226346c6b0aa42c31ea';
  const updateSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
}
 // GETTING RECIPES FROM API  
const getRecipes = async () => {
   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  // HANDLE SUBMMISION FROM SEARCH INPUT 
  const submitForm = e => {
    e.preventDefault();
    setQuery(search);
   // setSearch('');
  }


  useEffect(() => {
   getRecipes();
  }, [query]);
  
  return (
    <SearchContext.Provider value={{search, updateSearch, getRecipes, submitForm, recipes}}>
    <React.Fragment>
      <Nav />
      <Hero />
      <RecipeList />
    </React.Fragment>
    </ SearchContext.Provider >
  );
}

export default App;
