import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";


const Navbar = (props) => {
    const [items, setItems] = useState(props.items);
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Application demo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {items.map((item, index) => (
                        <Link to={item.path} className="nav-link" key={index}>{item.name}</Link>
                    ))}
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;