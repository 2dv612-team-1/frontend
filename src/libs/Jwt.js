import JwtDecode from "jwt-decode";

class Jwt {
  static decode(token) {
    const decoded = JwtDecode(token);
    console.log(decoded);
    return decoded;
  }
}

export default Jwt;