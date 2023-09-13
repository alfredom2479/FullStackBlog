import '../App.css';

import {Link} from "react-router-dom";

export default function Home(){

  return(
    <div className='home-container'>
      <div className="title-container">
        <h1 className='home-title'>Welcome To My Blog</h1>
        <Link to="/blogposts" className='main-butt'>Blog Posts</Link>
      </div>
    </div>
  )
}

