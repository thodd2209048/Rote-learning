// const baseUrl = "http://localhost:6501";
// const baseUrl = "http://localhost:8080";
const baseUrl = `http://${process.env.REACT_APP_BACK_END_HOST}:${process.env.REACT_APP_BACK_END_PORT}`;

export { baseUrl };
