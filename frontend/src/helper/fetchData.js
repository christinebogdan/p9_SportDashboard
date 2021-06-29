// const fetchData
// async function fetchData(endpoint) {
//   const status = {};
//   try {
//     const response = await fetch(endpoint);
//     const data = await response.json();
//     status.isLoaded = true;
//     status.data = data;
//     status.error = null;
//     return status;
//   } catch (error) {
//     status.isLoaded = true;
//     status.error = error;
//     return status;
//   }
// }

// export default fetchData;

const getData = async (user, endpoint = "") => {
  let url = `http://localhost:3000/user/${user}${endpoint}`;
  let status = {};
  try {
    const response = await fetch(url);
    const data = await response.json();
    status.isLoaded = true;
    status.error = null;
    status.data = data.data;
    return status;
  } catch (error) {
    status.isLoaded = true;
    status.error = error;
    return status;
  }
};

export default getData;
