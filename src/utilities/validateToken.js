import jwt_decode from 'jwt-decode';

export default function validateToken() {
  // check if token is expired or still valid
  if(localStorage.getItem('userToken') && jwt_decode(localStorage.getItem('userToken')).exp < Date.now() / 1000) {
    return false;
  }
  return true;
}