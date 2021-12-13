ns.view.lookupImage = 
{
	init: function () 
	{
		var cellValue = "no images";
		Image.loadFromLocalStorage();
		if(Image.imageSet.length > 0)
		{
			cellValue = Image.imageSet[0].imageName;
		}
		document.getElementById('currentImageName').innerHTML = cellValue;
	},

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