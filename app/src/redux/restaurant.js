
import RestClient from '../utilities/RestClient';
//Actions 
const GET_RESTAURANT =GET_RESTAURANT;

export const get_rstaurant =(data)=>({type: 'GET_RESTAURANT',data:data});
export const getRestaurant= (params,cb)=>{
 return dispatch => {


    RestClient.get('categories',params) 
    .then((result) => {
      if(result){
      	 let res = {
            status:true,
            result: result.categories,
        }
        cb(res);
      }
      else{
        cb(false);
      }
      })
      .catch((error) => {
      });
  }
}
//reducer
const restaurant= (state = [], action) => {
  switch (action.type) {

	case 'GET_RESTAURANT':
		 return state
    default:
      return state
  }
}

export default restaurant