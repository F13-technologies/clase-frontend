import { store } from '../../store/Store';
import { apiUrl } from '../config';
import Token from '../LocalStorage/token';

import authActions from '../../services/Auth/AuthActions';

export class Api{

  post(url, data, header){
      let dataBody = JSON.stringify(data);
      
      return fetch(`${apiUrl}${url}`, {
        method: 'POST',
        headers: (header ? header: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${ Token.getToken() }`
        }),
        body: dataBody
      }).then(res => {
        if(res.status === 401){
          store.dispatch(authActions.logout()); 
          return res;
        }
        return res.json();
      })
  }

  put(url, data, header){
    let isFormData = data instanceof FormData;
    
    return fetch(`${apiUrl}${url}`, {
      method: 'PUT',
      headers: (header ? header: 
        isFormData? 
        { 'Authorization': `Bearer ${ Token.getToken() }` }
        : 
        {
          'Accept': isFormData? '': 'application/json',
          'Content-type': isFormData? '': 'application/json',
          'Authorization': `Bearer ${ Token.getToken() }`
        }
      ),
      body: isFormData? data: JSON.stringify(data) 
    }).then(res => {
      if(res.status === 401) {
        store.dispatch(authActions.logout()); 
        return res;
      }
      return res.json();
    })
  }
  
  get(url, params){
      url = new URL(`${apiUrl}${url}`);
      if(params)
          Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      return fetch(url, {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${ Token.getToken() }`
          }
      }).then(res => {
        if(res.status === 401) {
          store.dispatch(authActions.logout()); 
          return res;
        }
        return res.json();
      })
  }
}
  
export default new Api();