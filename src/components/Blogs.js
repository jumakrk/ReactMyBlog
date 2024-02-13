import { useState } from "react";

 const Blog = ()=>{
  const [blogs] = useState ([
  {author: "Robert Kiosaki", body: "This book talks about improving your financial literacy", title: "Rich Dad Poor Dad", id:"0573945"},
  {author: "Robert Kiosaki", body: "This book talks about improving your financial literacy", title: "Rich Dad Poor Dad", id:"0573945"},
  {author: "Robert Kiosaki", body: "This book talks about improving your financial literacy", title: "Rich Dad Poor Dad", id:"0573945"},
  {author: "Robert Kiosaki", body: "This book talks about improving your financial literacy", title: "Rich Dad Poor Dad", id:"0573945"},
  ])

return(
  <div>
    {blogs.map(blog=> (
      <div className="preview" key={blogs.id}>
        <h3>{blog.title}</h3>
        <p>Writen by {blog.author}</p>
        <p>{blog.body}</p>
      </div>
      ))}
  </div>
)
}
 export default Blog;