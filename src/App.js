import React,  {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Route, Redirect
} from 'react-router-dom';
import Nav from './components/Nav'
import Hero from './components/Hero'
import RecipeList from './components/RecipeList'
import {SearchContext} from './contexts/SearchContext'

const App = () => {

  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [redirect, setRedirect] = useState(false);
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
    try {

      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      setRedirect(false);
      
    } catch (error) {
      console.error(error.message);
    }
 
  }

  // HANDLE SUBMMISION FROM SEARCH INPUT 
  const submitForm = e => {
    e.preventDefault();
    setQuery(search);
    setRedirect(true);   
   // setSearch('');
  }


  useEffect(() => {
   getRecipes();
  }, [query]);
  
  return (
 
    <Router>
    {redirect ? (<Redirect to="/recipes" />) : null}
    <SearchContext.Provider value={{search, updateSearch, getRecipes, submitForm, recipes}}>
    <React.Fragment>
    <Route path='/' exact={true} >
      <Nav />
      <Hero />
      </Route >
      <Route path='/recipes' >
      <RecipeList />
      </Route >
    </React.Fragment>
    </ SearchContext.Provider >
    </Router>
  );
}

export default App;
