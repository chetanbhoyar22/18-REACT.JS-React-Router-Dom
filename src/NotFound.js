import React from 'react';
import {Link} from 'react-router-dom';
import './Style.css';

function NotFound() {
    return (
        <div className="center">
            <h1>Error 404 - Not Found</h1>
            <br/>
            <Link to="/"><b>Click To Index Page</b></Link>
        </div>
    );
  }
export default NotFound;
