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
  static getOwner(token) {
    const info = this.decode(token).data;
    return info.owner;
  }
}

export default Jwt;
