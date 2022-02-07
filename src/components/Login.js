
import Footer from "./Footer";
import Navbar from "./Navbar";
import navbarItems from "../shared/navbarItems";
const Login = () => {
    return ( 
        <div>
            <Navbar items={navbarItems.out}/>
        <div className="container">
            <h2>
                Login to your account
            </h2>
            <form>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        </div>
        <Footer />
        </div>
     );
}
 
export default Login;