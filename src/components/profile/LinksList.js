import React from "react";
import LinkCard from "./LinkCard";

const LinksList = ({ links }) => {
  if (!links || links.length < 1) {
    return null;
  }
  return (
    <div className="row mx-4">
      {links.map((link) => {
        return (
          link.isShared && (
            <div className="col-4" key={link.id}>
              <LinkCard link={link} />
            </div>
          )
        );
      })}
    </div>
  );
};

export default LinksList;
