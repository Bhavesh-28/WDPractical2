document.addEventListener('DOMContentLoaded', (event) => {
	const todaysDate = new Date();
	const currentYear = todaysDate.getFullYear();
	let yearSpan = document.getElementById("year");
    	let visitors = localStorage.getItem('visitors');

	yearSpan.innerHTML = `${currentYear}`;

    	if (visitors >= 1) {
    		visitors++;
		localStorage.setItem('visitors', visitors);
    	} else {	
		localStorage.setItem('visitors', 1);	
    	}
});

function search(event) {
	const searchInput = document.getElementById('searchInput');
	const value = searchInput.value.toLowerCase();
	const projects = document.querySelectorAll('.project');
	projects.forEach(project => {
		const title = project.querySelector('h3').textContent.toLowerCase();
		if (title.includes(value)) {
			project.style.display = 'block';
		} else {
			project.style.display = 'none';
		}
	});
}