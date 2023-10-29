
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from './../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const ProvateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext)

    if(loading){
        return <span className="loading loading-spinner text-warning"></span>
    }else{

        if(user){
            return children;
        }else{
            return <Navigate to='/login'></Navigate>
        }
    }


 
};

ProvateRoute.propTypes = {
    children:PropTypes.node, 
};

export default ProvateRoute;