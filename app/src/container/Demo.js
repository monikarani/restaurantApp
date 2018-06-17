
import React, { Component } from 'react';

class Demo extends Component {
	constructor(props){
		super(props);
		this.state={
      restaurantList:[]
		}

	}

  render() {
    let {restaurantList} =this.state;
    return (
     <div className="row">
    	Demo
	 </div>
    );
  }
}

export default Demo



