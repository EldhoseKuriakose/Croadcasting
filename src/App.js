import React, { useState } from 'react';
import SignUpPage from './pages/SignUpPage/SignUpPage.component';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  const [category, setCategory] = useState(0);
  const handleCategoryClick = (num) => {
    setCategory(num);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/signup' render={() => <SignUpPage category={category} handleCategoryClick={handleCategoryClick} />} />
      </Switch>
    </div>
  );
}

export default App;
