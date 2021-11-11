	function drawRect(leftX, topY, width, height, colour) // this helps draw a Rectangle in 1 line (makes it neat)
	{
		canvasContext.fillStyle = colour;
		canvasContext.fillRect(leftX, topY, width, height);
	}
	function drawBitmapCenteredAtLocationWithRotation(graphics,atX,atY,withAngle)
	{
			canvasContext.save();// allows to undo translate movement and rotate spin
			canvasContext.translate(atX,atY);// sets the point where the graphics will go
			canvasContext.rotate(withAngle);// sets the rotation
			canvasContext.drawImage(graphics,-graphics.width/2,-graphics.height/2);// centre, draw
			canvasContext.restore();// undo translation and rotation movement since save
	}
    