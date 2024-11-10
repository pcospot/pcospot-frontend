import profileImage from "../../assets/profile image.svg";
import PeopleBox from "./peopleBox.tsx";

type SmallProfileProps = {
    people : any
}

export default function SmallProfile({people}: SmallProfileProps) {


   return (
       <div>
            <PeopleBox name={people.name} online={people.online} img={people.img} job={people.job}/>
       </div>
   )
}