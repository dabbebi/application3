import Footer from "./Footer";
//import { useState } from "react/cjs/react.development";
import navbarItems from "../shared/navbarItems";
import { getPosts, createPost, deletePost } from "../Services/postService";
import Navbar from "./Navbar";
import Post from "./Post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import {postActions, dataActions, delActions, errActions, errorActions, isPendActions, isPendingActions, nameActions} from "../Store/Actions"

const Home = () => {

  const dispatch = useDispatch();
  
  //const [name, setName] = useState("");
  const {setName} = bindActionCreators(nameActions, dispatch);
  const name = useSelector((state) => state.name);
  
  //const [post, setPost] = useState("");
  const {setPost} = bindActionCreators(postActions, dispatch);
  const post = useSelector((state) => state.post);

  //const [isPend, setIsPend] = useState(false);
  const {setIsPend} = bindActionCreators(isPendActions, dispatch);
  const isPend = useSelector((state) => state.isPend);

  //const [err, setErr] = useState("");
  const {setErr} = bindActionCreators(errActions, dispatch);
  const err = useSelector((state) => state.err);


  const delPost = (id) => {
    setDel(true);
    deletePost(id).then(d => {
        setDel(false);
      })
      .catch(error => {
        setDel(false);
      });
    
  }

  const create = (post) => {
    setIsPend(true);
    createPost(post).then(d => {
    setIsPend(false);
    setName("");
    setPost("");
    })
    .catch(error => {
      setErr(error.message);
      setIsPend(false);
    });
  }

  //const [data, setData] = useState(null);
  const {setData} = bindActionCreators(dataActions, dispatch);
  const data = useSelector((state) => state.data);

  //const [error, setError] = useState("");
  const {setError} = bindActionCreators(errorActions, dispatch);
  const error = useSelector((state) => state.error);

  //const [isPending, setIsPending] = useState(true);
  const {setIsPending} = bindActionCreators(isPendingActions, dispatch);
  const isPending = useSelector((state) => state.isPending);

  //const [del, setDel] = useState(false);
  const {setDel} = bindActionCreators(delActions, dispatch);
  const del = useSelector((state) => state.del);

  const min = (a, b) => {
    return a < b ? a : b;
  };

  const cutText = (text) => {
    var res = "";
    var text = text.split(" ");
    for (var i = 0; i < min(text.length, 25); i++) {
      res += text[i] + " ";
    }
    return res + " ...";
  };

  useEffect(() => {
    const abortCont = new AbortController();
    getPosts().then(d => {
      let res = [];
      d.data.forEach(element => {
          element.post = cutText(element.post);
          res.push(element);
      });
      setIsPending(false);
      setData(res.reverse());
    })
    .catch(error => {
      setIsPending(false);
      setError(error.message);
    });
    return () => abortCont.abort();
}, [isPend, del]);

  return (
    <>
      <Navbar items={navbarItems.in} />
      <div className="container">
        <h2>Create new post</h2>
        <form onSubmit={(e) => {e.preventDefault(); create({name : name, post : post})}}>
          <div className="form-group">
            <label>Full name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id=""
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Post</label>
            <textarea
              value={post}
              onChange={(e) => setPost(e.target.value)}
              className="form-control"
              placeholder="What do you think in ..."
              style={{height : 120}}
            />
          </div>
          {!isPend && <button type="submit" className="btn btn-primary">
            Create Post
          </button>}
          {isPend && <button type="submit" className="btn btn-primary" disabled={true}>
            Creating Post...
          </button>}
          
        </form>

        {isPending && (<h3>Pending...</h3>)}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {data && data.map((d) => <Post post={d} isHome={true} key={d.id} delPost={delPost} />)}
      </div>
      <Footer />
    </>
  );
};

export default Home;
