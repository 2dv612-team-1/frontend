class Auth {
  static authenticateUser(token) {
    localStorage.setItem("token", token);
  }

  static isUserAuthenticated() {
    return localStorage.getItem("token") !== null;
  }

  static deauthenticateUser() {
    localStorage.removeItem("token");
  }

  static getToken() {
    return localStorage.getItem("token");
  }

  // Temporär lösning för role
  static getRole() {
    return localStorage.getItem("role");
  }

  // Temporär lösning för role
  static removeRole() {
    return localStorage.removeItem("role");
  }
}

export default Auth;
