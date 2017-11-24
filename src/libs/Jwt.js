import JwtDecode from "jwt-decode";

class Jwt {
  static decode(token) {
    const decoded = JwtDecode(token);
    return decoded;
  }
  static getUsername(token) {
    return this.decode(token).username;
  }
  static getRole(token) {
    return this.decode(token).role;
  }
}

export default Jwt;