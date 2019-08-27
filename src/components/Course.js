import React from 'react';
import {withRouter} from 'react-router-dom';

const Course = ({match}) => {
    const {params} = match;
  console.log('hello course', params)

    return(
        <h1 style= {{paddingTop:"3em", textAlign:"center"}}>{params?params.courseId:"Not Available"} is</h1>
    )
}

export default withRouter(Course);
