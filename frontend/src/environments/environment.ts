/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'backendproj.eu', // the auth0 domain prefix
    audience: 'Coffee', // the audience set for the auth0 app
    clientId: 'fciQLnX712EmyHJMa5BluwRe57WDlB3M', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8080/login-results', // the base url of the running ionic application. 
  }
};
