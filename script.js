document.addEventListener("DOMContentLoaded", () => {
    const catContainer = document.querySelector(".cat-container");

    // Function to fetch cat data using promises
    const fetchCatData = () => {
        return new Promise((resolve, reject) => {
            fetch("https://api.thecatapi.com/v1/images/search")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    };

    // Function to display cat data on the webpage
    const displayCat = () => {
        fetchCatData()
            .then(data => {
                const catImage = data[0].url;
                const imgElement = document.createElement("img");
                imgElement.src = catImage;
                imgElement.alt = "Random cat";
                catContainer.appendChild(imgElement);
            })
            .catch(error => {
                console.error("Error fetching cat data:", error);
            });
    };

    // Call the displayCat function to show cat images
    displayCat();
});
