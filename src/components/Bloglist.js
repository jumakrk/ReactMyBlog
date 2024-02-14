const BlogList = (props) =>{
  const blogs = props.blogs;
  const title = props.title;

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blogs) => (
        <div className="preview" key={blogs.id}>
          <h3>{ blogs.title} </h3>
          <p>Written by { blogs.author }</p>
        </div>
      ))}
    </div>
  )
}

export default BlogList;