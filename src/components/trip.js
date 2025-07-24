import Tripdata from "./tripdata";
import "./tripstyles.css";
import trip1 from "../components/img/araku1.jpg";
import trip2 from "../components/img/badrachalam1.jpg";
import trip3 from "../components/img/yadagirigutta-temple.jpg";

function trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinstions using google maps</p>
      <div className="tripcard">
        <Tripdata
          image={trip1}
          heading="Trip to Araku Vally"
          text="Araku Valley is a comparatively unexplored hill station mostly visited by locals as a 
        weekend getaway and is situated some 120 kilometres away from Vishakhapatnam. If you're a tourist looking for exclusivity and tranquillity, Vistadome train leaves Vishakhapatnam at 6.50 AM, making way through 58 tunnels and passing over 84 bridges making way through the 
        breathtaking landscape to reach Araku in approximately in 5 hours, go, catch that!"
        />
        <Tripdata
          image={trip2}
          heading="Trip to Bhadrachalam"
          text="Bhadrachalam can be a refreshing place to visit with a share of
        instances from the Ramayana, a glorious palace, a vibrant river and
        mystical terrain and surroundings. One of the major attractions of
        Bhadrachalam is the Sita Ramachandraswamy temple."
        />
        <Tripdata
          image={trip3}
          heading="Trip to Yadadri"
          text="Sri Lakshminarasimha Swamy Temple or Yadagirigutta is a popular Hindu Temple of Narasimha Swamy, 
        an incarnation Lord Vishnu It is situated on a hillock in the Nalgonda district, Telangana, 
        Yadagirigutta is at a distance of 6 KM from Riagir Railway station and at a distance of 13 KM from 
        Bhongir Town and 60 kilometers from the city of Hyderabad. "
        />
      </div>
    </div>
  );
}

export default trip;
