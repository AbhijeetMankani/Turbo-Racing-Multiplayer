	const trackWidth=40;
	const trackHeight=40;
	const trackCol=20;
	const trackRow=15;
	
	// key for trackGrid
	const TrackRoad = 0;
	const TrackWall = 1;
	const TrackPlayer = 2;
	const TrackGoal = 3;
	const TrackTree = 4;
	const TrackFlag = 5;
	// var trackGrid=
		// [ 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		  // 4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
		  // 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		  // 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
		  // 1, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 1,
		  // 1, 0, 0, 1, 1, 0, 0, 1, 4, 4, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1,
		  // 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
		  // 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
		  // 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1,
		  // 1, 2, 2, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 0, 1,
		  // 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
		  // 1, 1, 1, 5, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
		  // 1, 0, 3, 0, 0, 0, 1, 4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 
		  // 1, 0, 3, 0, 0, 0, 1, 4, 4, 1, 1, 1, 1, 4, 1, 0, 0, 0, 1, 1,
		  // 1, 1, 1, 5, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1
	// ];
	//another track
	
	var trackGrid=
		[ 4, 4, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
		  4, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4,
		  1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
		  1, 0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 5, 1, 1, 0, 0, 0, 1,
		  1, 3, 3, 1, 1, 0, 0, 1, 1, 4, 4, 1, 0, 0, 1, 1, 0, 0, 0, 1,
		  5, 0, 0, 5, 0, 0, 0, 0, 1, 1, 4, 4, 1, 0, 0, 0, 0, 0, 0, 1,
		  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 1, 1, 1, 1, 1, 5, 0, 0, 1,
		  1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1,
		  4, 1, 1, 1, 1, 1, 5, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
		  4, 4, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 0, 1, 0, 0, 1,
		  4, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
		  4, 1, 0, 0, 5, 1, 1, 1, 1, 1, 5, 0, 0, 1, 0, 0, 0, 0, 0, 1,
		  4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1,
		  4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 4,
		  4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4,
	];
		
	function track()
	{
		var trackIndex = 0;
		var trackX=0;
		var trackY=0;
		for(var row=0; row<trackRow; row++)
		{
			trackX=0;
			for(var col=0;col<trackCol;col++)
			{
							
				canvasContext.drawImage(trackPics[trackGrid[trackIndex]],trackX,trackY);
				trackIndex++;
				trackX += trackWidth;
			}
			trackY += trackHeight;
		}
	}
	
	function getTrack(X, Y)
	{
		var Col = X / trackWidth;
		var Row = Y / trackHeight;
		
		Col = Math.floor(Col);
		Row = Math.floor(Row);
		if(Col < 0 || Col >= trackCol || Row < 0)
		{
			return false; // bail out of function to avoid illegal array positioning usage error to occur
		}
		var trackIndex = trackTileToIndex(Col, Row);
		var result=trackGrid[trackIndex];
		
		var trackIndex = trackTileToIndex(Col, Row);
		return (result);
		
	}