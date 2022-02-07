import Footer from './Footer';
import Navbar from './Navbar';
import navbarItems from "../shared/navbarItems";

const Register = () => {
    return ( 
        <div>
            <Navbar items={navbarItems.out} />
        <div className="container">
            <h2>
                Create a new account
            </h2>
            <form>
            <div className="row">
                <div className="col-md-6">
                <label>First name</label>
                <input type="email" class="form-control" id="firstname" placeholder="Enter firstname" />

                </div>
                <div className="col-md-6">
                <label>Last name</label>
                <input type="email" class="form-control" id="lastname" placeholder="Enter lastname" />
 
                </div>
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="row">
                <div className="col-md-6">
                <label>Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />

                </div>
                <div className="col-md-6">
                <label>Confirm Password</label>
                <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm Password" />
 
                </div>
            </div>
            <br />
            <div className="row center" style={{textAlign : "center"}}>
                <button type="submit" className="btn btn-success">register</button>
            </div>
            
        </form>
        </div>
        <Footer />
        </div>
     );
}
 
export default Register;