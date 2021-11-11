	const keyLeft=37;
	const keyUp=38;
	const keyRight=39;
	const keyDown=40;
	
	const keyA=65;
	const keyW=87;
	const keyD=68;
	const keyS=83;
		
	function keyPressed(evt)
	{
		setKeyStateTo(evt.keyCode,p1,true);
		setKeyStateTo(evt.keyCode,p2,true);
		evt.preventDefault();
	}
	function keyReleased(evt)
	{
		setKeyStateTo(evt.keyCode,p1,false);
		setKeyStateTo(evt.keyCode,p2,false);
	}
	
	this.setKeyStateTo = function(thisKey,thisCar,setTo)
		{
			if(thisKey==thisCar.controlKeyForGas)
			{
				thisCar.keyHeld_Gas = setTo;
			}
			if(thisKey==thisCar.controlKeyForReverse)
			{
				thisCar.keyHeld_Reverse = setTo;
			}
			if(thisKey==thisCar.controlKeyForTurnLeft)
			{
				thisCar.keyHeld_TurnLeft = setTo;
			}
			if(thisKey==thisCar.controlKeyForTurnRight)
			{
				thisCar.keyHeld_TurnRight = setTo;
			}
		}
	
	function inItInput()
	{
		document.addEventListener("keydown",keyPressed);
		document.addEventListener("keyup",keyReleased);
		p1.setUpControls(keyUp,keyDown,keyLeft,keyRight);
		p2.setUpControls(keyW,keyS,keyA,keyD);
	}