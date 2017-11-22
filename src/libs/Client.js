import Auth from "./Auth";

class Client {
  static serialize(obj) {
    const str = [];
    const keys = Object.keys(obj);
    let i;
    for (i = 0; i < keys.length; i += 1) {
      if (Object.prototype.hasOwnProperty.call(obj, keys[i])) {
        str.push(
          `${encodeURIComponent(keys[i])}=${encodeURIComponent(obj[keys[i]])}`
        );
      }
    }
    return str.join("&");
  }

  static POST(uri, obj = {}) {
    const httpHeaders = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    const headers = new Headers(httpHeaders);
    const body = this.serialize(obj);
    const options = {
      method: "post",
      headers,
      body
    };

    return fetch(uri, options).then(response =>
      response
        .json()
        .then(data => Object.assign({ status: response.status }, data))
    );
  }

  static GET(uri) {
    const httpHeaders = {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization: `bearer ${Auth.getToken()}`
    };

    const headers = new Headers(httpHeaders);

    const options = {
      method: "get",
      headers
    };

    const url = uri.includes("token") ? `${uri}${Auth.getToken()}` : uri;

    return fetch(url, options).then(response => response.json());
  }
}

export default Client;
