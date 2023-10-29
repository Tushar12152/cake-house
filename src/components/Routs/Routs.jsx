import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Routs = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Routs;