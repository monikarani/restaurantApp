
import RestClient from '../utilities/RestClient';
//Actions 
const RESTAURANT_LIST="RESTAURANT_LIST";
const SEARCH_RESTAURANT ="SEARCH_RESTAURANT";
export const rstaurant_list =(data)=>({type:RESTAURANT_LIST,data:data});
export const search_rstaurant =(data)=>({type:SEARCH_RESTAURANT,data:data});

export const getRestaurant= (params,cb)=>{
 return dispatch => {


    RestClient.get('search',params) 
    .then((result) => {
      if(result){
        dispatch(rstaurant_list (result.restaurants))
      	 let res = {
            status:true,
            result: result.restaurants,
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
export const searchRestaurantDetail= (params,cb)=>{
 return dispatch => {
    RestClient.get('restaurant',params) 
    .then((result) => {
      dispatch(search_rstaurant(result))
      if(result){
         let res = {
            status:true,
            result: result,
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
const initialState =[]
const restaurant= (state = initialState, action) => {

  switch (action.type) {
    case 'RESTAURANT_LIST':
     return action.data;
	case 'SEARCH_RESTAURANT':
		 return [{restaurant:action.data}]
    default:
      return {initialState};
  }
}

export default restaurant