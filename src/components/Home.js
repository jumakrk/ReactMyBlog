import BlogList from "./Bloglist";
import useFetch from "./useFetch";

 const Home = ()=>{
  const {data} = useFetch ('https://localhost:4000/blogs')

return(
  <div>
    {data && <BlogList blogs = {data} title="All Blogs"/>}
  </div>
)
}
 export default Home;