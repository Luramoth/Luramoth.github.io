function includeHTML()
{
	var z, i;

	var element;
	var file;
	var xhttp;

	//loop through all elements
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++)
	{
		element = z[i];

		// search elements for a certain attribute
		file = element.getAttribute("includeHTML");
		if (file)
		{
			// make http request for the included file
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function()
			{
				if (this.readyState == 4)
				{
					if (this.status == 200) {element.innerHTML = this.responseText;}
					if (this.status == 404) {element.innerHTML = "Page not found";}

					// remove attribute and start again
					element.removeAttribute("includeHTML");
					includeHTML();
				}
			}
			xhttp.open("GET",file, true);
			xhttp.send();

			return;
		}
	}
}