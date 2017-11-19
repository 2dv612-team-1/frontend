
const response = {
  companies: [{ username: "ACME" }, { username: "ABC" }]
};

class Client {
  static POST(uri, obj = {}) {
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }

  static GET(uri) {
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
}

export default Client;
