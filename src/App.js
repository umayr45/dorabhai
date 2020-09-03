import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Info from './Info';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import About from './About';
import Test from './Test';
import Attendance from './Attendance';
import Home from './Home';

function App() {
  return (
    <div className="app">
      <div className='app_body'>
        <BrowserRouter>
        <Sidebar/>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route path='/assignment'><Info/></Route>
          <Route path='/test' ><Test/></Route>
          <Route path='/attendance'><Attendance/></Route>
        </Switch>
        <About/>
        </BrowserRouter>


      </div>

    </div>
  );
}

export default App;
