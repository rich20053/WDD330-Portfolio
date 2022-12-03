// Server Address
const baseURL = 'http://127.0.0.1:3000/';

var globalToken;

/*
function getJSON(url) {
    return fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
*/

  // helper function to make an http request with fetch.  
  // returns a json object
  async function makeRequest(url, method = 'GET', body = null, token = null) {
    // we will need to set some custom options for our fetch call
    //debugger;
    let options = {
      method: method,
      headers: {
          'Content-Type': 'application/json'
      }
    };
    // if we are sending any data with the request add it here
    if (method == 'POST' || method == 'PUT') {
      options.body = JSON.stringify(body);
    }

    // if a token was passed in we should send it on.
    if (token) {
      options.headers.Authorization = `Bearer ${token}`;
    }
  
    const response = await fetch(baseURL + url, options);
    // in this case we are processing the response as JSON before we check the status. The API we are using will send back more meaningful error messages than the default messages in the response, but we have to convert it before we can get to them.
    const data = await response.json();

    if (!response.ok) {
      // server will send a 500 server error if the token expires...or a 401 if we are not authorized, ie bad username/password combination, and a 404 if the URL we requested does not exist. All of these would cause response.ok to be false
      //debugger;
      console.log(response);
      throw new Error(`${data.status}: ${data.message}`);
    } else return data;

  // not catching the error here...so we will need to catch it later on and handle it.
  }

//Auth class which provides basic JWT based authentication for our app.
// Requires: access to the makeRequest  functions
class Auth {
  constructor() {
    this.jwtToken = '';
    this.user = {};
  }

  async login(callback) {
    // replace the ids below with whatever you used in your form.
    const password = document.getElementById('password');
    const username = document.getElementById('username');
    const postData = {
      email: username.value,
      password: password.value  
    };
    try {
      // 1. use the makeRequest function to pass our credentials to the 
      //    server     
      const data = await makeRequest('login', 'POST', postData);
      // 2. if we get a successful response...we have a token!  Store it 
      //    since we will need to send it with every request to the API.
      //
      this.jwtToken = data.accessToken;
      // let's get the user details as well and store them locally in the class
      // you can pass a query to the API by appending it on the end of the 
      // url like this: 'users?email=' + email
      this.user = await this.getCurrentUser(username.value);
      // hide the login form.
      document.getElementById('login').classList.add('hidden');
      // clear the password
      password.value = '';
      
      // since we have a token let's go grab some data from the API by executing the callback if one was passed in
      if(callback) {
        callback();
      }
    } catch (error) {
      // if there were any errors display them
      this.showError(error);
      console.log(error);
    }
  }

  showError(errorParm) {
    const errmsg = document.querySelector("#errors");
    const item = document.createElement("p");
    item.textContent = errorParm;
    errmsg.appendChild(item);
  }

  // uses the email of the currently logged in user to pull up the full user details for that user from the database
  async getCurrentUser(email) {
    try {
      // 3. add the code here to make a request for the user identified 
      //by email...don't forget to send the token!
      makeRequest(baseURL, method = 'GET', body = null, this.jwtToken);      
    } catch (error) {
      // if there were any errors display them
      this.showError(error);
      console.log(error);
    }
  }

  set token(value) {
    // we need this for the getter to work...but we don't want to allow setting the token through this.
  }
  get token() {
    return this.jwtToken;
  }
  
} // end auth class


/*
let returnedValue = makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
});

console.log(returnedValue);*/

function allPosts () {
  makeRequest(baseURL+'posts', method = 'GET', body = null, globalToken);
}

function authenticate() {

    const myAuth = new Auth();
debugger;
    myAuth.login(allPosts);
}