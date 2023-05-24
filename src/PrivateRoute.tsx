import {Route, Redirect, RouteProps} from "react-router-dom";
import {useContext}                  from "react";
import {AuthContext}                 from "./Auth";

interface PrivateRouteProps extends RouteProps {
        component: React.ComponentType<any>;
}
  
const PrivateRoute: React.FC<PrivateRouteProps> = ({component: RouteComponent, ...rest}) =>{
    const {currentUser} = useContext(AuthContext);
    return (
        <Route {...rest} render = {(routeProps: RouteProps) => !!currentUser?.uid 
            ?(<RouteComponent {...routeProps} />) : (<Redirect to="/SignIn" />)}/>
    );
};
  
  export default PrivateRoute;