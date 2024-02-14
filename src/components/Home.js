import axios from "axios";
import { useState, useEffect } from "react";
import BlogList from "./Bloglist";

 const Home = ()=>{
  const [blogs, setBlogs] = useState (null)

  useEffect (()=>{
    axios.get ('http://localhost:4000/blogs') //set API
    .then(res => {setBlogs (res.data)})
    .catch (err=>{
      console.log(err.message);
    })
  })
  
  

return(
  <div>
    {blogs && <BlogList blogs = {blogs}/>}
  </div>
)
}
 export default Home;