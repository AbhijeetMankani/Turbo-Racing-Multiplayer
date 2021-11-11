	var canvas;
	var canvasContext;
	
	var p1 = new carClass();
	var p2 = new carClass();
	
	const FPS=40;
	
	window.onload=function() // this line tells the program in it to start when windows is finished loading
	{
		canvas = document.getElementById('Gcanvas');
		canvasContext = canvas.getContext('2d');
		p2.carInIt(car2Pic, "Red Driver");
		p1.carInIt(car1Pic, "Blue Driver");
		
		inItInput();
		
		loadImages();
	}
	
	function startWhenLoaded()
	{
		setInterval(call, 1000/FPS);
	}
	function call()
	{
		move();
		track();
		p1.drawCar();
		p2.drawCar();
	}

	function trackPresent(TileCol, TileRow)
	{
		var trackIndex = trackTileToIndex(TileCol, TileRow);
		return (trackGrid[trackIndex] == TrackWall);
	}

	function move()
	{
		p1.Carmove();
		p2.Carmove();
	}
	
	function trackTileToIndex(TileCol, TileRow)
	{
		return(TileCol + trackCol*TileRow );
	}
	
