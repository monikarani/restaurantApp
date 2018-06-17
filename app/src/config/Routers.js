import React from "react";
import { Route,Switch } from "react-router-dom";
import Restaurant from '../container/Restaurant';

const Routers = store => {
	 return (
        <div>
            <Switch> 
				<Route exact path="/" component={Restaurant} />
			</Switch>
        </div>
    );
};

export default Routers;
