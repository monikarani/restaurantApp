
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'underscore';
import Pagination from "react-js-pagination";
import {getRestaurant,searchRestaurantDetail} from '../redux/restaurant';
let itemPerPage=3;
let firstPageIndex=1


class Restaurant extends Component {
	constructor(props){
		super(props);
		this.state={
      restaurantList:[],
      activePage:'1'
		}
  this. indexOfLastList=1*itemPerPage;
  this.indexOfFirstList=this.indexOfLastList-itemPerPage;

	}
 componentDidMount(){
 	this.props. getRestaurant({apikey:"cfe4a2962a30596f93e4be9d810aaee2"},()=>{
 	})
 }
 handlePageChange(pageNumber){
  this.setState({activePage: pageNumber});
   this. indexOfLastList=1*itemPerPage;
  this.indexOfFirstList=this.indexOfLastList-itemPerPage;
 }
 searchRestaurant(event){
  event.preventDefault();
  let category= this.props.restaurant && this.props.restaurant.filter((item)=>{
    return item.restaurant.name==event.target.restaurant.value
  });
  let searcgRestaurantObj={
    apikey:"cfe4a2962a30596f93e4be9d810aaee2",
    res_id:category && category.length >0 && category[0].restaurant.id
  }
  this.props.searchRestaurantDetail(searcgRestaurantObj,(res)=>{
        let list={};
       list.restaurant=res.result
  });
 }
resetList(){
    this.props. getRestaurant({apikey:"cfe4a2962a30596f93e4be9d810aaee2"},()=>{
  })
 }
  render() {
    let {restaurant} =this.props;
    return (
     <div className="row">
    	   <div className="rest"> Find the best restaurants, cafés, and bars</div>
     	<div className="col-sm-12 restaurant" >
     		<div className="col-sm-3"></div>
     		<div className="col-sm-9">
        <div className="col-sm-7">
     			<form onSubmit={this.searchRestaurant.bind(this)} ref='form'>
     				<div><input type="text"   name="restaurant"  placeholder="Search"/></div>
            <div>
            <input type="submit" name="sub" className="btn btn-success" value="Search" style={{float:"right",paddingTop:'11px',paddingLeft:'58',paddingRight:'50',paddingBottom:'12'}}/>
          </div>
     			</form>
          </div>
          <div className="col-sm-3" onClick={()=>this.resetList()}><i >Reset</i></div>
     		</div>
     		<div className="col-sm-2"></div>
        <div className="col-sm-12">
          {restaurant && restaurant.length>0 &&
            restaurant.slice(this.indexOfFirstList,this.indexOfLastList).map((data,index)=>{
              return(
                <div className="col-sm-12 restaurantList">
                <div className="col-sm-2"><img src={data.restaurant.thumb ?data.restaurant.thumb :"/images/restaurant.jpg"} className="restaurantImg"/></div>
                <div className="col-sm-10">
                <span>{data.restaurant.name}</span><br/>
                <span>{data.restaurant.location.address}</span><br/>
                <span>{data.restaurant.location.city}</span><br/>
                <span>{data.restaurant.location.locality}</span><br/>
                 <span>{data.restaurant.location.locality_verbose}</span>
                </div>
                </div>
                );
            })
          }
        </div>
        { restaurant && restaurant.length>5 &&
         <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={itemPerPage}
          totalItemsCount={restaurant.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      }
     	</div>  
	 </div>
    );
  }
}
 
 const mapSatetToProps = state => {
  return {
    restaurant:state.restaurant
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRestaurant:bindActionCreators(getRestaurant, dispatch),
    searchRestaurantDetail : bindActionCreators(searchRestaurantDetail,dispatch)

  }
}
export default Restaurant = connect( mapSatetToProps, mapDispatchToProps)(Restaurant);



