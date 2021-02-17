import React from 'react';
import { Route,Link,Switch,BrowserRouter  } from 'react-router-dom';
import './Style.css';

function App() {
  return (
    <div className='text-center text-dark regi_div'>
      <h1>Welcome To Index Page</h1><br/>
      <Link to="/Register"><b>Click Here To Registration</b></Link>
      <br/>
      <Link to="/Login"><b>Click Here To Login</b></Link>
    </div>
  )
}
export default App;
