import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Link,Switch,BrowserRouter  } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';


const routing = (<BrowserRouter>
  <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route  component={NotFound} />
      </Switch>
     
    </BrowserRouter>
  )
  
  ReactDOM.render(routing,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
