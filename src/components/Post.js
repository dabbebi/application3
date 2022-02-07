import { Link } from "react-router-dom";
import profile from "../static/img/profile.png";
import del from "../static/img/del.png";
import {useNavigate} from 'react-router-dom';
const Post = (props) => {
  const post = props.post;
  const isHome = props.isHome;
  const delPost = props.delPost;
  const navigate = useNavigate();

  return (
    <div key={post.id}>
      <br />
      <div className="card" key={post.id}>
        <div className="card-header" style={{display : "flex", flexDirection : "row"}}>
            <div>
            <img src={profile} style={{ borderRadius: "50%", width: 50 }} />
          {" " + post.name}
            </div>
          <div style={{marginRight : 5, marginLeft : "auto", cursor : "pointer"}} onClick={() => {delPost(post.id); navigate('/posts');}}>
          <img src={del} style={{ width: 26 }} />
          </div>
          
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{post.post}</p>
          </blockquote>
        </div>
        {isHome && <div style={{ padding: 5, direction: "rtl", display: "flex" }}>
          <Link style={{ marginRight: 10 }} to={"/posts/" + post.id}>
            Learn more ...
          </Link>
        </div>}
      </div>
      <br />
    </div>
  );
};

export default Post;
