$(document).ready(allJQuery);

// For Step 7

function Ball(id) {
	this.left = 0;
	this.top = 0;
	this.id = id;
}

// For Step 9

Ball.prototype.moveRight = function () {
	console.log("moving right!");
	$(`#ball${this.id}`).css('left', parseInt($(`#ball${this.id}`).css('left'))+10+"px");
};

Ball.prototype.moveDown = function () {
	console.log("moving down!");
	$(`#ball${this.id}`).css('top', parseInt($(`#ball${this.id}`).css('top'))+10+"px");
};

// For Step 10

Ball.prototype.moveBall = function () {
	console.log(this);
	let self = this;
	setInterval(function() {
		let rando = Math.round(Math.random());
		if (rando === 0) {
			self.moveDown();
		} else {
			self.moveRight();
		}
	}, 1000);
};

function allJQuery() {

	// For Step 8

	for (let i =0; i < 10; i ++) {
		let newBall = new Ball(i);
		$('#playingField').append(`<div id="ball${newBall.id}" class="greenBall"></div>`);
		newBall.moveBall();
	}

	//After Step 5

	// $('#playingField').append('<div id="ball1" class="greenBall"></div>')
	// 	.append('<div id="ball2" class="greenBall"></div>');
	// setInterval(function() {
	// 	console.log("moving right!");
	// 	$('#ball1').css('left', parseInt($('#ball1').css('left'))+10+"px");
	// }, 1000);
	// setInterval(function() {
	// 	console.log("moving down!");
	// 	$('#ball2').css('top', parseInt($('#ball2').css('top'))+10+"px");
	// }, 1000);

	//For Step 6

	// moveDown();
	// moveRight();
}