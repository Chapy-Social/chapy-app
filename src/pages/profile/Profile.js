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
      `${process.env.REACT_APP_API_URL}/v1/profile/contact/` + profile.id;
    window.open(urlString, "_blank");
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
                {(profile.jobTitle || profile.company) && (
                  <span className="text-muted d-block">
                    {profile.jobTitle} @ {profile.company}
                  </span>
                )}

                <span className="text-muted d-block">{profile.location}</span>
                <span className="text-muted d-block mb-2">{profile.bio}</span>
                <button
                  onClick={connectHandler}
                  className="btn btn-primary mb-3"
                  style={{
                    backgroundColor: "#000000",
                    borderRadius: "25px",
                  }}
                >
                  Save Contact
                </button>
              </div>
            </div>

            <LinksList links={links} />

            <div className="">
              <div className="d-flex my-2 align-items-center justify-content-center">
                <img
                  src="assets/images/other/go-green.png"
                  className="img-fluid"
                  alt=""
                  style={{ height: "50px", marginRight: "10px" }}
                />

                <a
                  href="https://chapysocial.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{
                    borderRadius: "15px",
                    marginLeft: "10px",
                  }}
                >
                  Join Chapy
                </a>
              </div>
            </div>
            <p>© 2023 Chapy by Softchap</p>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
