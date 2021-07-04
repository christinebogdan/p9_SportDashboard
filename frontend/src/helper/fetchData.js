import PropTypes from "prop-types";

/**
 * Function to make API calls to the different possible endpoints
 * @param {String} user - The number of the user to access the correct data
 * @param {String} [endpoint=""] - The endpoint for the required API call
 * @returns {Promise<Object>} Promise object containing the requested data
 */
const getData = async (user, endpoint = "") => {
  let url = `http://localhost:3000/user/${user}${endpoint}`;
  let output = {};
  try {
    const response = await fetch(url);
    const data = await response.json();
    output.isLoaded = true;
    output.error = null;
    output.data = data.data;
    return output;
  } catch (error) {
    output.isLoaded = true;
    output.error = error;
    return output;
  }
};

export default getData;

getData.propTypes = {
  user: PropTypes.string.isRequired,
  endpoint: PropTypes.string,
};

getData.defaultProps = {
  endpoint: "",
};
