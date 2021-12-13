ns.view.addImage = 
{ 
  handleSaveButtonClickEvent: function ()
  {
    var form = document.forms['formImage'];
	var imageName = form.imageName.value;
    Image.add(imageName);
    form.reset();
	Image.saveToLocalStorage();
  }
};