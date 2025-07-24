import des1 from "../components/img/badrachalam1.jpg";
import des11 from "../components/img/Bhadrachalam2.jpg";
import des2 from "../components/img/araku1.jpg";
import des21 from "../components/img/Araku2.jpg";
import "./destinationstyles.css";
import Destinationdata from "./destinationdata";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot within a time frame</p>
      <Destinationdata
        className="first-des"
        heading="Bhadrachalam, Telangana"
        text="Bhadrachalam can be a refreshing place to visit with a share of
      instances from the Ramayana, a glorious palace, a vibrant river and
      mystical terrain and surroundings. One of the major attractions of
      Bhadrachalam is the Sita Ramachandraswamy temple."
        img1={des1}
        img2={des11}
      />

      <Destinationdata
        className="first-des-reverse"
        heading="Araku Vally, AndhraPradesh"
        text="Araku Valley is a comparatively unexplored hill station mostly visited by locals as a 
        weekend getaway and is situated some 120 kilometres away from Vishakhapatnam. If you're a tourist looking for exclusivity and tranquillity, Vistadome train leaves Vishakhapatnam at 6.50 AM, making way through 58 tunnels and passing over 84 bridges making way through the 
        breathtaking landscape to reach Araku in approximately in 5 hours, go, catch that!"
        img1={des2}
        img2={des21}
      />
    </div>
  );
};

export default Destination;
