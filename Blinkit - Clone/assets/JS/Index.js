// Function to get the user's location
function detectLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                // Using a reverse geocoding API to get the address from lat/lon
                fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
                    .then(response => response.json())
                    .then(data => {
                        const locationInput = document.getElementById('loct');
                        const locationDisplay = document.getElementById('s2'); // Ensure this element exists in your HTML

                        if (data.city) {
                            locationInput.value = data.city; // Set the input field to the city 
                            locationDisplay.innerText = data.city; // Replace the "Select location" text
                        } else {
                            alert("Location not found");
                        }
                    })
                    .catch(error => {
                        console.error("Error fetching location data:", error);
                        alert("An error occurred while fetching location data.");
                    });
            },
            () => {
                alert("Unable to retrieve your location. Please check your location settings.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Attach the function to the "Detect my location" button
document.querySelector('.detect-location-btn').addEventListener('click', (e) => {
    e.preventDefault();
    detectLocation();
});






// Header sticky
// Get the header
const header = document.querySelector('header');

// Get the offset position of the header
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function handleScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// When the user scrolls the page, execute handleScroll
window.onscroll = function() {
    handleScroll();
};

