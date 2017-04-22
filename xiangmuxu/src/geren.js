import React from "react"
import $ from 'n-zepto'
import './App.css';
import { Link } from "react-router"
const Geren = React.createClass({	
	render() {		
		return(
		<div>
			<div>
				<span className="span1">姓</span>
				<span className="span2">名　 </span>
				<span className="span3">:</span>
				<span className="span4"><strong>许</strong><strong>亚</strong><strong>威</strong></span>
				
			</div> 
			<div>
			<p>
				<span className="span5"> 　性　　别　　: </span>
				
				<span className="span6">　　男</span>
				</p>
				<p　className="p1">
					<span>
						　年　　龄　　:　　　24
					</span>
				</p>
				<p　className="p1">
					<span>出　生　年　月　:　1993-08-08</span>
				</p>
				<p　className="p1">
					<span>Email　:　xuyawei930808@sina.com</span>
				</p>
				<p　className="p1">
					<span>Phone　:　17737710650</span>
				</p>
        	</div>
        </div>
		)
	}
})
export default Geren;



