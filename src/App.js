import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import RecipeList from './components/RecipeList'

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <RecipeList />
    </React.Fragment>
  );
}

export default App;
