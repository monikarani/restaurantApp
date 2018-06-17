/* 
      *                                                            *
    *****                                                        *****                             
      *                                                            *
        ==========================================================
        ==========                                      ==========
        ==========          Page for alert messages     ==========
        ==========                                      ==========
        ==========================================================
      *                                                            *
    *****                                                        *****   
      *                                                            *
*/

import React, { Component } from "react";
import { ModalContainer, ModalDialog } from "react-modal-dialog";
import SweetAlert from "react-bootstrap-sweetalert"




class AlertMsg extends Component {

	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>	
				{this.props.isShowingModal &&
					<SweetAlert 
					 showCancel={this.props.status == "warning" ? true : false}
		             type={this.props.status == false ? 'error' : this.props.status == "warning" ? 'warning' : 'success'}
		             title={this.props.type}
		             allowEscape
		             confirmBtnText={this.props.status ==  "warning" ? (this.props.hasOwnProperty('opStatus') && (this.props.opStatus == "publish" || this.props.opStatus == "update") ? "Yes": "Delete!")  : "Close"}
		             confirmBtnBsStyle={this.props.status == false || this.props.status == "warning" ? 'danger' : 'success'}
		             onConfirm={this.props.status == "warning" ? ()=>this.props.onDelete() : ()=>this.props.onPress()}
		             cancelBtnBsStyle="default"
		             onCancel={()=>this.props.onPress()} 
		             >
		             {this.props.msg}
		           </SweetAlert>
				}
			</div>
		);
	}
}

export default AlertMsg;