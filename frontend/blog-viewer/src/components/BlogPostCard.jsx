import { Link } from "react-router-dom"
import "../App.css"

export default function BlogPostCard(){

  return(
    <Link className="bp-card" to="/view/1">
      <h2 className="bp-card-title">Blog Post Card Title that is pretty long</h2>
    </Link>
  )
}