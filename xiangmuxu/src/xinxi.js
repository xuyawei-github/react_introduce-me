import React from "react"
import $ from 'n-zepto'
import './App.css';
import { Link } from "react-router"
const Tinxi = React.createClass({	
	render() {		
		return(
		<div>
			<div className="two">
        		<div className="two1" >
		  			<span>个</span>
		  			<span className="span2">人</span>
		  			<span className="span3">信</span>
		  			<span className="span4">息</span>
		  			<p>H-r-e-f...</p>
  				</div>
  				<div className="two2">
		  			<h2>技能简述</h2>
		  			<p>熟练使用javascript,css,html进行web标准开发,有丰富实战经验</p>
  				</div>
		  		<div className="two3">
		  			<h2>个人履历</h2>
		  			<h4>L-o-g-I-n</h4>
		  		</div>	          
	        </div>	          
          	<div className="three"> 
          		<div className="three1">         			
          			<h3>兴趣爱好</h3>
          		</div>
          		<div className="three2">
          			<h1>联系我</h1>
          			<p>Contact Me</p>         			
          		</div>
          		<div className="three3">
          			<img src="b34d739ab80e32856b927124ab2f4178.gif"/>
          		</div>
          	</div>
        </div>  
		)
	}
})
export default Tinxi;



