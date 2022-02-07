import profile from "../static/img/profile.png";
import Footer from "./Footer";
import navbarItems from "../shared/navbarItems";
import Navbar from "./Navbar";

const Profile = () => {
    return ( 
        <div>
            <Navbar items={navbarItems.in} />
            <div className="container" style={{backgroundColor : "whitesmoke"}}>
                <div style={{textAlign : "center"}}>
                    <img src={profile} style={{ borderRadius : '50%', width : 140}} />
                </div>
                <div style={{textAlign : "center"}}>
                    <h3>Elaid DABBABI</h3>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Profile;