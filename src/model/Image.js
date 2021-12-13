/*
	This defines the Image class.
*/


//define an untyped object to represent an image. for now just stores name
function Image(name)
{
	this.imageName = name;
	//this.imageData = data
	//this.imageSizeX = sizeX
	//this.imageSizeY = sizeY
};


//add an image to imageSet 
Image.add = function(name)
{
	var image = new Image(name);
	Image.imageSet.push(image);
};


//serialize(stringify) and save images in imageSet to local storage
Image.saveToLocalStorage = function()
{
  try 
  {
    localStorage["imageSet"] = JSON.stringify(Image.imageSet);
  } 
  catch (e) 
  {
    alert("Error when writing to Local Storage\n" + e);
    error = true;
  }
};


//load images from local storage in imageSet
Image.loadFromLocalStorage = function()
{
  var i=0, key="", keys=[], imageSetString="", bookTable={};  
  try 
  {
    if (localStorage["imageSet"]) 
	{
      imageSetString = localStorage["imageSet"];
    }
  } 
  catch (e) 
  {
    alert("Error when reading from Local Storage\n" + e);
  }
  
  if (imageSetString) 
  {
    Image.imageSet = JSON.parse(imageSetString);
  }
};


//clear everything in local storage
Image.clearLocalStorage = function()
{
	console.warn("called clear data");
	if(confirm("You are about to delete all image data from local storage, are you sure?"))
	{
		localStorage["imageSet"] = "[]";
	}
};


//array of Images
Image.imageSet = [];


//stores index of image in flipbook
Image.currentImageIdx = 0;

