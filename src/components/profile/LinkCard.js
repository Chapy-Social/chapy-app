import React from "react";
import { getLinkImageUrl } from "../../utils/imageHelpers";
import AuthService from "services/AuthService";

const LinkCard = ({ link }) => {
  const [error, setError] = React.useState("");
  const [Countclick, setCountclick] = React.useState(1);
  const handleClick = async (e) => {
    e.preventDefault();
    // handle user profileID
    const ID = link.id
    // handle social media platform
    const platform = e.target.innerText
    // handle user clicks
    setCountclick(Countclick + 1)
    // create json for records
    const payLoad =  {"userID" : ID, platform, 'clicks' : Countclick  }
    try {
      await AuthService.handleClicks(payLoad);
    } catch (e) {
      setError(e);
      // alert(error)
    }
  }


  return (
    <a onClick={handleClick} href={ link.isUrl && !link.value.startsWith("http")? "https://" + link.value : link.webBaseURL + link.value } target="_blank"  rel="noreferrer" >
      <img src={getLinkImageUrl(link)} alt="link" className="card-img-top p-1 border-radius" />
      <br />
      <p>{link.title}</p>
    </a>
  );
};

export default LinkCard;
