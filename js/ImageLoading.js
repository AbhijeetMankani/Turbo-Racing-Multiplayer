	var picsToLoad=0;

	var car1Pic = document.createElement('img');
	var car2Pic = document.createElement('img');
	
	var trackPics = [];
	
	function countLoadedImagesAndLaunchIfReady()
	{
		picsToLoad--;
		if(picsToLoad == 0)
		{
			startWhenLoaded();
		}
	}
	
	function loadImages()
	{
		var ImageList=[
		
		{varName:car1Pic,theFile:"Car1.png"},
		{varName:car2Pic,theFile:"Car2.png"},
		
		{trackType:TrackRoad,theFile:"TrackRoad.png"},
		{trackType:TrackWall,theFile:"TrackWall.png"},
		{trackType:TrackGoal,theFile:"TrackGoal.png"},
		{trackType:TrackFlag,theFile:"TrackFlag.png"},
		{trackType:TrackTree,theFile:"TrackTree.png"}];
		
		picsToLoad=ImageList.length;// Sets value to number of objects Literals(images to load)
		
		for(var i=0;i<ImageList.length;i++)
		{
			if(ImageList[i].trackType != undefined)
			{
				loadImageForTrackCode(ImageList[i].trackType,ImageList[i].theFile);
			}
			else
			{
				beginLoadingimage(ImageList[i].varName,ImageList[i].theFile);
			}
		}
	}
	
	function loadImageForTrackCode(trackCode, filename)
	{
		trackPics[trackCode]=document.createElement("img");
		beginLoadingimage(trackPics[trackCode], filename);
	}
	
	function beginLoadingimage(imgVar,imgSrc)
	{
		imgVar.onload=countLoadedImagesAndLaunchIfReady;
		imgVar.src="images/"+imgSrc;
	}
	