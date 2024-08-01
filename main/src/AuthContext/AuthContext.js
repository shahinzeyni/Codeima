"use client"
import { Children, createContext ,useCallback,useState} from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userInfos: null,
  login: () => {},
  logout: () => {},
});




export const AuthContextProvider = ({children}) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userInfos, setUserInfos] = useState({});
  const login = (userInfos,token) => {
    setToken(token);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify({ token }));
    setUserInfos(userInfos);
  }

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  },[token,setToken]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
