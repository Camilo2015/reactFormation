import React from 'react'; 
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch} from "react-router-dom";
import History from './History';
import ReduxCalculator from "./Calculette";
import home from '../public/images/home.svg';
import history from '../public/images/history.svg';

function Menu(){
          const HomePage = () => {
              return ( <
                  ReduxCalculator / >
              );
          };
          const HistoryPage = () => {
                  return ( <
                      History / >
                  );
                  }
        return(
        <Router>
        <div>

        < div > < NavLink to = "/home" > <img className="picto" src={home}/> Home </NavLink></div >
        <NavLink to='/history'><img className="picto" src={history}/> History</NavLink>
        <Route path='/home' component={HomePage}/>
        <Route path='/history' component={HistoryPage} />
        <Redirect to='/home'/>
        </div>
        </Router>        ); 
    }
export default Menu;