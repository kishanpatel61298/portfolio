var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight+5;

var c=canvas.getContext('2d');

/*for(var i=0;i<100;i++)
{
	var x=Math.random()*window.innerWidth;
	var y=Math.random()*window.innerHeight;
	c.beginPath();
	c.arc(x,y,30,0,Math.PI*2,false);
	c.stroke();
}*/

window.addEventListener('mousemover',
	function(event){

	})


window.addEventListener('resize',function()
	{
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		
	})
 

function Circle(x,y,dx,dy,radius,alpha,hi)
{
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	this.alpha=alpha;
	this.hi=hi;
    this.rChange = 0.015;



	this.draw=function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
		c.strokeStyle="rgba(255,255,255,"+alpha+")";
		c.lineWidth = 0;
		c.fillStyle="rgba(255,255,255,"+alpha+")";
		c.fill();
		c.stroke();
	}

	this.update = function(){
		if(this.x+this.radius>innerWidth || this.x-this.radius<0)
		{
			this.dx=-this.dx;
		}
		if(this.y+this.radius>innerHeight || this.y-this.radius<0)
		{
			this.dy=-this.dy;
		}

		/*if (this.radius > 2.5 || this.radius < 0.1){
           this.rChange = - this.rChange;
       }
       this.radius += this.rChange;*/
		
		

		this.x+=this.dx;
		this.y+=this.dy;

		this.draw();
	}
}




	var circleArray=[];


function init()
{

	circleArray=[];
	for(var i=0;i<60;i++)
	{
		var x=Math.random()*(innerWidth - radius*2)+radius;
		var y=Math.random()*(innerHeight -radius*2)+radius;
		var dx=(Math.random()-0.5)*0.5;
		var dy=(Math.random()-0.5)*0.5;
		var radius=Math.random()+1;
		var alpha=Math.random();
		var hi="hi";
		circleArray.push(new Circle(x,y,dx,dy,radius,alpha,hi));
	}
}



function animate(){
	c.clearRect(0,0,innerWidth,innerHeight);

	for(var i=0;i<circleArray.length;i++)
	{
		circleArray[i].update();
		
	}
	requestAnimationFrame(animate);
	
}
init();
animate();