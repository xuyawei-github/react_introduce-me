import React, { Component } from 'react';
import './App.css';
import $ from "n-zepto"
import { Link } from "react-router"

var App = React.createClass({
	componentDidMount(){var tela = document.createElement('canvas');
function _classCallCheck(instance, Constructor) { if (!(instance 

instanceof Constructor)) { 
	throw new TypeError("Cannot call a class as a function"); 
} }
var max_particles = 1000;

tela.width = $(window).width();
tela.height = $(window).height();
$("body").append(tela);
var canvas = tela.getContext('2d');
var Particle = function () {
function Particle(canvas, progress) {
    _classCallCheck(this, Particle);
    var random = Math.random();
    this.progress = 0;
    this.canvas = canvas;	
    this.x = $(window).width() / 2 + (Math.random() * 200 - 

Math.random() * 100);
    this.y = $(window).height() / 2 + (Math.random() * 200 - 

Math.random() * 300);
    this.w = $(window).width();
    this.h = $(window).height();
    this.radius = random > .2 ? Math.random() * 1 : Math.random

() * 3;
    this.color = random > .2 ? "#d8002c" : "#F9314C";
    this.radius = random > .8 ? Math.random() * 2 : this.radius;
    this.color = random > .8 ? "#7DFFF2" : this.color;
   // this.color  = random > .1 ? "#ffae00" : "#f0ff00" // Alien
    this.variantx1 = Math.random() * 300;
    this.variantx2 = Math.random() * 400;
    this.varianty1 = Math.random() * 100;
    this.varianty2 = Math.random() * 120;
}
Particle.prototype.render = function render() {
    this.canvas.beginPath();
    this.canvas.arc(this.x, this.y, this.radius, 0, 2 * 

Math.PI);
    this.canvas.lineWidth = 2;
    this.canvas.fillStyle = this.color;
    this.canvas.fill();
    this.canvas.closePath();
};
Particle.prototype.move = function move() {
   
    this.x += Math.sin(this.progress / this.variantx1) * 

Math.cos(this.progress / this.variantx2);
    this.y += Math.cos(this.progress / this.varianty2);
    if (this.x < 0 || this.x > this.w - this.radius) {
      return false;
    }
    if (this.y < 0 || this.y > this.h - this.radius) {
      return false;
    }
    this.render();
    this.progress++;
    return true;
};
return Particle;
}();
var particles = [];
var init_num = popolate(max_particles);
function popolate(num) {
for (var i = 0; i < num; i++) {
    setTimeout(function () {
      particles.push(new Particle(canvas, i));
    }.bind(this), i * 20);
}
return particles.length;
}
function clear() {
canvas.globalAlpha = 0.05;
canvas.fillStyle = '#000';
canvas.fillRect(0, 0, tela.width, tela.height);
canvas.globalAlpha = 1;
}
function update() {
particles = particles.filter(function (p) {
    return p.move();
});
if (particles.length < init_num) {
    popolate(1);
}
clear();
requestAnimationFrame(update.bind(this));
}
update();
	
	
	},
  render() {
    return (
    
	<div className="App">
	
	 	<div className="App-box">
	 	
		     <p className="welcome">WELCOME </p>
		     <ul>
	            <Link to="/geren"> <li className="firstli1">个人信息</li></Link>
			    <Link to="/jineg"><li className="firstli2">技能简述</li></Link>
			    <Link to="/Luli"> <li className="firstli3">个人履历</li></Link>
			    <Link to="/Aihao"> <li className="firstli4">性格爱好</li></Link>
		     </ul>
		     	<div className="myimg">
		     		
		     	</div>
			    <div className='conent'>
			      	<div className="one"> 
			      		<div className="one1">
			      			<p>我的座右铭</p>
			      			<em>要有蜗牛的精神 一步一步往前爬 去追求更高的止境come on!!!!</em>
			      		</div> 
			      	</div> 
			    </div>
			    <div className="cccc">
					{this.props.children}
				</div>
	    </div>
	    
	</div>
    );
  }
  
})
export default App;
