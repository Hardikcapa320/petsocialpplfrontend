import react, {useState} from "react";
import LoginContext from "./loginContext";

const Auth = (props) => {
    const [user, setUser] = useState();
    const [isAuth, setAuth] = useState(false);

    return(
        <LoginContext.Provider value={{user, setUser, isAuth, setAuth}}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default Auth;