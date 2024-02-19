import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Button } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import axios from "axios";

const BlogDetails  = () => {
  const {id} = useParams()
  const {data:blogs} = useFetch('https://localhost:4000/blogs/' +id)
  const history = useHistory();

  const handleDelete = () =>{
    e.preventDefault()

    axios.delete('https://localhost:4000/blogs/' +id)
    .then(res=>{
      alert("blog deleted")
      history.push("/")
    })
  }

  return (
    <div className="details">
      {blogs && (
        <article>
          <h1>{blogs.title}</h1>
          <p> Done by: {blogs.author}</p>
          <div>{blogs.body}</div>
          <Button onClick={handleDelete} variant="Danger" className="mt-3" type="submit"> Delete Blog</Button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails;