import React from "react";
import { getLinkImageUrl } from "../../utils/imageHelpers";

const LinkCard = ({ link }) => {
  return (
    <a
      href={
        link.isUrl && !link.value.startsWith("http")
          ? "https://" + link.value
          : link.webBaseURL + link.value
      }
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={getLinkImageUrl(link)}
        alt="link"
        className="card-img-top p-1"
      />
      <br />
      <p>{link.title}</p>
    </a>
  );
};

export default LinkCard;
