import React from "react"
import $ from 'n-zepto'
import './App.css';
import { Link } from "react-router"
const Jineg = React.createClass({	
	render() {		
		return(
		<div>
			<p className="jinengp">精通JavaScript原生编程，对面向对象编程有丰富经验，可进行高效模块化开发，并保证良好复用和维护性。
			</p>
			<p className="jinengp1">可熟练使用MVC框架(如react.js)进行复杂单页面应用开发。对编写jQuery组件有丰富经验。
			</p>
			<p className="jinengp2">
			对W3C标准有深刻的认识，尤其是语义化标签，已习惯性使用HTML5标签。</p>
			<p className="jinengp3">
			能熟练运用CSS完成各种类型的网页布局，包括当前流行的响应式布局。
			</p>
			<p className="jinengp4">
			对使用CSS3提升用户体验有浓厚兴趣，喜欢使用CSS3解决过去js达到的效果，曾经常在实际项目中实践(如:transiton、keyframes等) 
			</p>
			
        </div>  
		)
	}
})
export default Jineg;



