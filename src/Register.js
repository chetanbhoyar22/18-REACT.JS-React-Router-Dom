import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Style.css';

function Register() {
    return (
      <div className="row">
          <div className="col-lg-4">

          </div>

              <div className="col-lg-4 regi_div">
                  <h1 className="text-center">Registration Section</h1><br/>
                  <div className="form-group">
                    <label><b>Name<span className='text-danger'>*</span></b></label>
                    <input type="text" className="form-control" placeholder="Enter Your Full Name" />

                </div>
                <div className="form-group">
                    <label><b>Email<span className='text-danger'>*</span></b></label>
                    <input type="email" className="form-control" placeholder="Enter Your Email Address" />

                </div>
                <div className="form-group">
                    <label><b>Password<span className='text-danger'>*</span></b></label>
                    <input type="password" className="form-control" placeholder="Enter Your Password" />

                </div>
                <div className="form-group">
                    <label><b>Mobile Number<span className='text-danger'>*</span></b></label>
                    <input type="number" className="form-control" placeholder="Enter Your 10 Digit Mobile Number" />

                </div>
                <div className="form-group">
                    <label><b>Date of Birth<span className='text-danger'>*</span></b></label>
                    <input type="date" className="form-control" />

                </div>
                <div className="form-group">
                    <label><b>Education<span className='text-danger'>*</span></b></label>
                    <br/>
                    <input type="checkbox" value="10th" /> <b>10th</b>{' '}
                    <input type="checkbox" value="12th" /> <b>12th</b>{' '}
                    <input type="checkbox" value="Gradution" /> <b>Gradution</b>{' '}
                    <input type="checkbox" value="Post-Gradution" /> <b>Post-Gradution</b>{' '}
                    <input type="checkbox" value="PHD" /> <b>P.H.D</b>


                </div>
                <div className="form-group">
                    <label><b>Select City<span className='text-danger'>*</span></b></label>
                    <br />
                        <select class="form-control">
                            <option>Aurangabad</option>
                            <option>Mumbai</option>
                            <option>Nagpur</option>

                            <option>Pune</option>
                        </select>
                </div>
                    <br />

                <div className="form-group">
                    <Button className="mx-auto d-block" variant="danger">Register</Button>
                </div>

                <div className="form-group text-center">
                        <Link to="/Login"><b>Click to Login</b></Link>
                </div>
                <div className="col-lg-4">

              </div>
          </div>
       
      </div>
    );
  }
  
  export default Register;
  