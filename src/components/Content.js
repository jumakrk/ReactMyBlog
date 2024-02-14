import { useState } from "react";

const Content  = () => {
  const [Title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [Body, setBody] = useState("");

    return(
      <div>
        <form>
        <label>Title</label><br></br>
        <input className="content" name="Title" type="text" placeholder="Title" required value={Title} onChange={(e)=>setTitle(e.target.value)}></input> <br></br>

        <label>Author</label><br></br>
        <input className="content" name="Author" type="text" placeholder="Author" required value={Author} onChange={(e)=>setAuthor(e.target.value)}></input> <br></br>

        <label>Body</label><br></br>
        <input className="content" name="Body" type="text" placeholder="Body" required value={Body} onChange={(e)=>setBody(e.target.value)}></input> <br></br>

        <button>Save Blog</button>
        </form>
      </div>
    )
};
export default Content;