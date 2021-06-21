async function fetchData(endpoint) {
  const status = {};
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    status.isLoaded = true;
    status.data = data;
    status.error = null;
    return status;
  } catch (error) {
    status.isLoaded = true;
    status.error = error;
    return status;
  }
}

export default fetchData;
