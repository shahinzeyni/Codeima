"use client"
import { useCallback, useState } from "react";
import Navbar from "@/Component/modules/Navbar/Navbar";
import Landing from "@/Component/templates/index/Landing/Landing";
import RoadLevel from "@/Component/templates/index/RoadLevel/RoadLevel";
import FriendsLanding from "@/Component/templates/index/FriendsLanding/FriendsLanding";
import "./globals.css";
import AboutBoxes from "@/Component/templates/index/AboutBoxes/AboutBoxes";
import IdeaIcons from "@/Component/templates/index/IdeaIcons/IdeaIcons";
import AuthContext from "@/AuthContext/AuthContext";
export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});

  const login = (userInfos,token) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  }

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  });

  return (
    <AuthContext.Provider
    value={{
      isLoggedIn,
      token,
      userInfos,
      login,
      logout,
    }}
    >
    <main className="globalBody">

      <Navbar />

      <Landing />

      <RoadLevel />

      <FriendsLanding />
      <AboutBoxes />

      <IdeaIcons />
    </main>
    </AuthContext.Provider>
  );
}
