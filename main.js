// Get the buttons
const homeButton = document.getElementById('homeButton');
const projectButton = document.getElementById('projectButton');

// Add click event listeners to the buttons
addPageLoadListener(homeButton, 'home');
addPageLoadListener(projectButton, 'projects');


// Load page content using Ajax
function loadPage(pathname) {
	fetch(`pages/${pathname}.html`)
		.then(response => {
			if (response.ok) {
				return response.text();
			} else {
				throw new Error("Page not found.");
			}
		})
		.then(html => {
			content.innerHTML = html;

			// change the URL only if the cite isent locally hosted (say if it's up on https://Luramoth.Github.io :3)
			if (window.location.protocol === 'http:' && window.location.hostname === 'localhost' !== -1) {
				return;
			} else {
				history.pushState(null, "", pathname);
			}
		})
		.catch(error => console.log(error));
}


// Helper function to add a click event listener to a button to load a page
function addPageLoadListener(button, url) {
	button.addEventListener('click', () => {
		loadPage(url);
	});
}

loadPage('home');