import React from 'react';
import {Navbar,Nav,Form} from 'react-bootstrap';

export default function Navbars() {

    return(
        <nav class="navbar navbar-light " style={{backgroundColor: "blue"}}>
        <a class="navbar-brand" style={{color: "white"}}>Photo Crop Online</a>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search Photos" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    );
    

}

