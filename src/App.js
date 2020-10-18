import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage.component';
import SignInPage from './pages/SignInPage/SignInPage.component';
import HomePage from './pages/HomePage/HomePage.component';
import './App.css';

function App() {
  const [category, setCategory] = useState(0);
  const handleCategoryClick = (num) => {
    setCategory(num);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <HomePage category={category} />} />
        <Route exact path='/signup' render={() => <SignUpPage category={category} handleCategoryClick={handleCategoryClick} />} />
        <Route exact path='/signin' render={() => <SignInPage category={category} handleCategoryClick={handleCategoryClick} />} />
      </Switch>
    </div>
  );
}

export default App;
