import { useParams } from "react-router-dom";
import navbarItems from "../shared/navbarItems";
import Post from "./Post";
import { deletePost, getOnePost } from "../Services/postService";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const PostDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(true);

  const delPost = (id) => {
    deletePost(id).then(d => {  
      })
      .catch(error => {
      });
  }

  useEffect(() => {
    const abortCont = new AbortController();
    getOnePost(id)
      .then((data) => {
          console.log(data)
        setIsPending(false);
        setData(data.data);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
    return () => abortCont.abort();
  }, [id]);

  return (
    <div>
      <Navbar items={navbarItems.in} />
      <div className="container">
        {isPending && <h3>Pending...</h3>}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {data && <Post post={data} isHome={false} delPost={delPost} />}
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
