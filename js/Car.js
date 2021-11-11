	const groundSpeedDecayMultiplier=0.95;// means it will retain 95% of its speed of previous frame every next frame i.e. 5% decay rate
	const drivePower=0.5;// rate of acceleration
	const reversePower=0.2;// rate of reversing/braking
	const turnRate=0.03*Math.PI;// max. rate at which the car can turn
	const minimumTurningSpeed=0.3;// the car canot turn until it is moving at least with a speed of 0.3

	
	function carClass()
	{		
		// to support holing down of keys
		this.keyHeld_Gas = false;
		this.keyHeld_Reverse = false;
		this.keyHeld_TurnLeft = false;
		this.keyHeld_TurnRight = false;
		
		this.setUpControls = function(forward,back,left,right)
		{
			this.controlKeyForGas = forward;
			this.controlKeyForReverse = back;
			this.controlKeyForTurnLeft = left;
			this.controlKeyForTurnRight = right;
		}
		
		
		this.drawCar = function()// this helps draw the car in 1 line (makes it neat)
		{
				drawBitmapCenteredAtLocationWithRotation(this.myBitmap,this.carX,this.carY,this.carAng);

		}
		
		this.carInIt = function(whichGraphic,whichName)
		{
			this.myBitmap = whichGraphic;
			this.myName = whichName;
			this.reset();
		}
				
		this.reset = function()
		{
			this.carAng=0;
			this.carSpeed=0;
			
			if(this.homeX == undefined)
			{
				for(var i=0;i<trackGrid.length;i++)
				{
					if(trackGrid[i] == TrackPlayer)
					{
						var Row = Math.floor(i/trackCol);
						var Col = i%trackCol;
						this.homeX = Col * trackWidth + 0.5 * trackWidth;
						this.homeY = Row * trackHeight + 0.5 * trackHeight;
						
						trackGrid[i]=TrackRoad;
						break;
					}
				}
			}
			this.carX = this.homeX;
			this.carY = this.homeY;
		}
		
		this.Carmove = function()
		{
			var nextX = this.carX + Math.cos(this.carAng) * this.carSpeed;
			var nextY = this.carY + Math.sin(this.carAng) * this.carSpeed;
			
			//		These functions can be thought of as answering the question,
			//		If a car is driving 35 KPH bearing 60 degrees, what percent of
			//		that speed is going east, and what percent is going north?”	
			//
			//		The answer is cos(60°) = 0.5, or 50% eastward and 
			//		sin(60°) = 0.8660, or 86.6% north.
			//		To find its actual speeds in each direction multiply 
			//		by the total speed: 0.5*35 KPH = 17.5 KPH eastward, 
			//		and 0.8660*33 KPH = 30.3 KPH northward.
			if(this.keyHeld_Gas)
			{
				this.carSpeed += drivePower;
			}
			if(this.keyHeld_Reverse)
			{
				this.carSpeed -= reversePower ;
			}
			if(Math.abs(this.carSpeed) >= minimumTurningSpeed)
			{
				if(this.keyHeld_TurnLeft)
				{
					this.carAng += -turnRate;
				}
				if(this.keyHeld_TurnRight)
				{
					this.carAng += turnRate;
				}
			}
			
			var drivingIntoTileType=getTrack(nextX,nextY);
			
			if(drivingIntoTileType == TrackRoad)
			{
				this.carX = nextX;
				this.carY = nextY;
			}
			else if(drivingIntoTileType == TrackGoal)
			{
				document.getElementById("debugText").innerHTML = this.myName + " Wins!!";
				p1.reset();
				p2.reset();
			
			}
			else
			{
				this.carSpeed = -0.5*this.carSpeed;
			}
			this.carSpeed *= groundSpeedDecayMultiplier;
		}
				
	}