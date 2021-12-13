ns.view.lookupImage = 
{
	init: function () 
	{
		/*
		var table = document.getElementById("tableImage");
		while(table.hasChildNodes())
		{
		   table.removeChild(table.firstChild);
		}
		var row={};
		Image.loadFromLocalStorage();
		imageSetLength = Image.imageSet.length;
		for (var i=0; i < imageSetLength; i++) 
		{
			var row = table.insertRow(0);
			var cell = row.insertCell(0);
			cell.innerHTML = Image.imageSet[i].imageName;
		}
		var tableEntry = "No Images";
		if(Image.imageSet.length > 0)
		{
			document.getElementById('tableImage').innerHTML = Image.imageSet[idx].imageName;
		}
		*/
		var cellValue = "no images";
		Image.loadFromLocalStorage();
		if(Image.imageSet.length > 0)
		{
			cellValue = Image.imageSet[0].imageName;
		}
		document.getElementById('currentImageName').innerHTML = cellValue;
	},
	
	
	handleFirstImageAdded: function()
	{
		document.getElementById('currentImageName').innerHTML = "no images";
		
  
	handleLeftButtonClickEvent: function()
	{
		var idx = 0
		if(Image.imageSet.length == 0)
		{
			idx = -1
		}
		else
		{
			idx = (Image.currentImageIdx + Image.imageSet.length - 1) % Image.imageSet.length;
		}
		
		if(idx != -1)
		{
			document.getElementById('currentImageName').innerHTML = Image.imageSet[idx].imageName;
			Image.currentImageIdx = idx;
		}
	},
	
	handleRightButtonClickEvent: function()
	{
		var idx = 0
		if(Image.imageSet.length == 0)
		{
			idx = -1
		}
		else
		{
			idx = (Image.currentImageIdx + 1) % Image.imageSet.length;
		}
		
		if(idx != -1)
		{
			document.getElementById('currentImageName').innerHTML = Image.imageSet[idx].imageName;
			Image.currentImageIdx = idx;
		}
	}
	  

};