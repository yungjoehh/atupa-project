import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router , Switch , Route , Link } from "react-router-dom";
import pic from '../assets/img/doctor.png';

class Program extends Component {
    
    constructor(props) {
        super(props);
    }
    

    render() {
        return(
            <Fragment>
            <div className="card">
                <img className="card-img rounded-circle img-thumbnail mx-auto my-4" src={pic}/> 
                    <div className="card-body text-center">
                        <h3>{this.props.courses.title}</h3>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
    
                        <Link to={`/programs/${this.props.courses.title}`} className="btn btn-primary text-white">Read more</Link>
                    </div>
            </div>
           </Fragment> 
        );
    }
}

export default Program;