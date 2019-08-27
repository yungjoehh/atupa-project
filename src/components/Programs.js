import React from 'react';
import '../mycss/programs.css'
import { BrowserRouter as Router , Switch , Route , Link } from "react-router-dom";
import Program from '../components/Program'
import vira from '../assets/img/logo.png'
import pic from '../assets/img/doctor.png';

class Programs extends React.Component {

    state = {
        courses: [
            {title: "python" , price: 500000},
            {title: "javascript" , price: 500000},
            {title: "PHP" , price: 500000},
        ]
    }



    render() { 
  console.log('hello progams')

        return ( 
        <Router>
            <div>
                <div className="jumbotron">
                    <div className="text-center">
                        <h1 className="display-3 text-bolder">Our Expert Team</h1>
                        <p><a href="#">Home>> </a>Our Team</p>
                    </div>
                </div> 
                {/* jumbotron */}


                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 my-4">
                            <Program courses={this.state.courses[0]} />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 my-4">
                            <Program courses={this.state.courses[1]}/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 my-4">
                            <Program courses={this.state.courses[2]}/>
                        </div>
                    </div>
                </div>
                
                {/* end of card  */}

                <div className="jumbotron signup">
                    <div className="text-center signup-text">
                        <h1>Sign Up for 30 days</h1>
                        <p>No payment required,jump to get started</p>
                        <a href="#" className="btn btn-primary register-btn">Free Register</a>
                    </div>
                </div>


                <footer className="container mt-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center" id="virasat">
                            <div>
                            <img src={vira}/>
                            <p className="text-left display-5"> &copy; 2019 Virasat. Designd By Themez Hub
                                All Rights Reserved</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <ul className="lists">
                                <h5>Useful links</h5>
                                <li>Digital Marketing</li>
                                <li>Business & Corporate</li>
                                <li>Landing Page</li>
                                <li>Hire & Dedicate</li>
                                <li>Software & App</li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <ul className="lists">
                                <h5>Useful links</h5>
                                <li>Digital Marketing</li>
                                <li>Business & Corporate</li>
                                <li>Landing Page</li>
                                <li>Hire & Dedicate</li>
                                <li>Software & App</li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <ul className="lists">
                                <h5>Useful links</h5>
                                <li>Digital Marketing</li>
                                <li>Business & Corporate</li>
                                <li>Landing Page</li>
                                <li>Hire & Dedicate</li>
                                <li>Software & App</li>
                            </ul>
                        </div>


                    </div>
                </footer>
            </div>
         </Router>
         );
    }
}
 
export default Programs;