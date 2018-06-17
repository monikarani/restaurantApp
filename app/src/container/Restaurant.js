
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getRestaurant} from '../redux/restaurant';
class Restaurant extends Component {
	constructor(props){
		super(props);
		this.state={
      restaurantList:[]
		}

	}
 componentDidMount(){
 	this.props. getRestaurant({apikey:"cfe4a2962a30596f93e4be9d810aaee2"},(res)=>{
    console.log(res)
 		this.setState({restaurantList:res.result});
 	})
 }
 searchRestaurant(){
  alert('ok')
 }
  render() {
    let {restaurantList} =this.state;
    return (
     <div className="row">
    	   <div className="rest"> Welcome to Zomato Restaurant</div>
     	<div className="col-sm-12 restaurant" >
     		<div className="col-sm-3"></div>
     		<div className="col-sm-6">
     			<form onSubmit={this.searchRestaurant.bind(this)} ref='form'>
     				<div><input type="text"  placeholder="Search"/></div>
            <div>
            <input type="submit" name="sub" className="btn btn-success" value="Search" style={{float:"right",paddingTop:'11px',paddingLeft:'58',paddingRight:'50',paddingBottom:'12'}}/>
          </div>
     			</form>
     		</div>
     		<div className="col-sm-3"></div>
        <div className="col-sm-12">
          {
            restaurantList.map((data,index)=>{
              return(
                <div>{data.categories.name}</div>
                );
            })
          }
        </div>
     	</div>  
	 </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRestaurant:bindActionCreators(getRestaurant, dispatch),

  }
}
export default Restaurant = connect( null, mapDispatchToProps)(Restaurant);



