import { memo, useState } from "react"; // Importing useState once
import "bootstrap/dist/css/bootstrap.css";
import Personal from "../Personal/Personal";
import Contact from "../Contact/Contact";
import Company from "../Company/Company";
import Address from "../Address/Address";

const Profile = (props) => {
    console.log("props", props);
    const [isEditMode, setIsEditMode] = useState(false);
    const handEditProfile = () => {
      const newVal = !isEditMode;
      setIsEditMode(newVal);
    };
    const [personal, setPersonal] = useState({
      ID: "9",
      UserName: "Delphine",
    });
    const [contact, setContact] = useState({
      Email: "Chaim_McDermott@dan.io",
      Website: "conrad.com",
      Phone: "(775)976-6794 x41206",
    });
    const [company, setCompany] = useState({
      Name: "Yost and Sons",
      CatchPhrase: "Switchable contextually-based project",
      BS: "aggregate real-time technologies",
    });
    const [address, setAddress] = useState({
      Street: "Dayma Park",
      Suite: "Suite 499",
      City: "Bartholomebury",
      Zipcode: "76495-3109",
    });
    return (
      <>
      <form action="">
         <p className="fs-3 fw-bolder">Gelena Reichert</p>
         <div className="wrapper">
           <div className="table-container">
             <Personal Personal={personal}></Personal>
           </div>
           <div className="table-container">
             <Contact Contact={contact}></Contact>
             <button type="button" className="btn btn-success">
               Edit
             </button>
           </div>
         </div>

         <table>
           <Address Address={address}></Address>
         </table>

         <table>
           <Company Company={company}></Company>
         </table>
       </form>
        
      </>
    );
};
export default memo(Profile);
