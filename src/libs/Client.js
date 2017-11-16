class Client {
  static POST = () => {

  }

  static GET = url => fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error('Request failed');
      }
      return response.json();
    })
    .then(json => json)
}
export default Client;
