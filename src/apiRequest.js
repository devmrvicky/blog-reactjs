// let error;
const apiRequest = async (api = "", optionObj = null, error = null) => {
  try {
    // const API_URL = "http://localhost:3500/posts";
    const response = await fetch(api, optionObj);
    if (!response.ok) throw Error("Something is wrong!");
  } catch (err) {
    error = err.message;
  } finally {
    return error;
  }
};

export default apiRequest;
