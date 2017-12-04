const LOCAL = "http://localhost:8080";
const NANOTUBE = "https://nanotu.be";
const API_HOST = process.env.API_HOST === "local" ? LOCAL : NANOTUBE;

module.exports = {
  API_HOST
};
