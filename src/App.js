import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import {useState} from 'react'
import useFetch from './component/useFetch';
import Diaries from './component/Diaries';
import View from './component/View';

function App() {

  

  return (
    <div >
      <Router>

        <Navbar/>
        <Switch>
          <Route path='/' exact>
              <h1>Home</h1>
          </Route>

          <Route path='/create' exact>
              <h1>Create</h1>
          </Route>

          <Route path='/list' exact>
            <h1>List</h1>
          </Route>

          <Route path='/viewDetails/:id' exact>
            <h1>ViewDetails</h1>
            <hr/>
            <View diaries={diaries} />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
