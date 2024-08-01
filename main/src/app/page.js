import Navbar from "@/Component/modules/Navbar/Navbar";
import Landing from "@/Component/templates/index/Landing/Landing";
import RoadLevel from "@/Component/templates/index/RoadLevel/RoadLevel";
import FriendsLanding from "@/Component/templates/index/FriendsLanding/FriendsLanding";
import "./globals.css";
import AboutBoxes from "@/Component/templates/index/AboutBoxes/AboutBoxes";
import IdeaIcons from "@/Component/templates/index/IdeaIcons/IdeaIcons";
export default function Home() {


  return (
    <main className="globalBody">

      <Navbar />

      <Landing />

      <RoadLevel />

      <FriendsLanding />
      <AboutBoxes />

      <IdeaIcons />
    </main>
  );
}
