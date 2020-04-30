import React from 'react';
import { Route } from 'react-router-dom'
import Navbar from './Navbar'
import Wrapper from './Wrapper'
import Contact from './Contact'

export default function Main () {
return (
<div className="Main"
style={{marginTop:"-2rem"}}>


<Route exact path="/"component={Wrapper}/>

<Route exact path="/Contact"component={Contact}/>
</div>




)
}