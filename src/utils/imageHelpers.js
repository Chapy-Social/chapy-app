const { isNullOrEmpty } = require("./helpers");

const imageBaseUrl = `${process.env.REACT_APP_API_URL}/v1/`;

/**
 * Gets the URL of a profile image.
 * @param {Object} profile - The profile object.
 * @returns {string} The URL of the profile image.
 */
export const getProfileImageUrl = (profile) => {
  if (profile && !isNullOrEmpty(profile.image)) {
    return `${imageBaseUrl}${profile.image}`;
  } else {
    return "/assets/images/placeholder/user.png";
  }
};

/**
 * Gets the URL of a link image, falling back to the platform image if no link image is available.
 * @param {Object} link - The link object.
 * @returns {string} The URL of the link image.
 */
export const getLinkImageUrl = (link) => {
  if (link && !isNullOrEmpty(link?.image)) {
    return `${imageBaseUrl}${link.image}`;
  } else {
    return "/assets//images/placeholder/link.png";
  }
};
