import { Link } from 'react-router-dom';

const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (    // Changed variable name from blogs to blog
        <div className="preview" key={blogs.id}>
          <Link to={`/blogs/${blogs.id}`}>
            <h3>{blog.title}</h3>
            <p>Written by {blogs.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList;
