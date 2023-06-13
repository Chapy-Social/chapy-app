import LinksList from "components/profile/LinksList";
import { useAppContext } from "hooks/useAppContext";
import React, { useEffect } from "react";
import "./profile.css";
import { getProfileImageUrl } from "../../utils/imageHelpers";

const Profile = ({ match }) => {
  const id = match.params.id;

  // ** Hooks
  const { profile, links, getUser } = useAppContext();

  useEffect(() => {
    getUser(id);
  }, [id, getUser]);

  const connectHandler = () => {
    var urlString =
      `${process.env.REACT_APP_API_URL}/v1/profiles/contact-card/` + profile.id;
    window.open(urlString, "_self");
  };

  return (
    <>
      {profile && (
        <section>
          <div
            className="m-auto col-md-4 card rounded-0 px-0 my-0 text-center"
            style={{ maxWidth: "400px" }}
          >
            <div>
              <img
                src={getProfileImageUrl(profile)}
                className="profile-image rounded-circle img-fluid"
                alt=""
              />

              <div className="px-4">
                <h4>{profile.name}</h4>
                <span className="text-muted d-block">
                  {profile.jobTitle} @ {profile.company}
                </span>
                <span className="text-muted d-block">{profile.location}</span>
                <span className="text-muted d-block mb-2">{profile.bio}</span>
                <button
                  onClick={connectHandler}
                  className="btn btn-primary mb-3"
                  style={{
                    backgroundColor: "#000000",
                    borderRadius: "20px",
                  }}
                >
                  Save Contact
                </button>
              </div>
            </div>

            <LinksList links={links} />

            <a
              href="https://chapysocial.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light m-3"
              style={{
                borderRadius: "20px",
              }}
            >
              Create your own profile
            </a>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
