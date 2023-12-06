const flightData = [
    {
        price: 8000,
        flightNumber: "AI-101",
        origin: "PNQ",
        destination: "DEL",
        departureTime: "08:00 AM",
        arrivalTime: "10:00 AM",
        image: "https://www.pexels.com/photo/a-vintage-black-car-driving-in-front-of-a-building-11590248/",
    },
    {
        price: 8500,
        flightNumber: "AI-102",
        origin: "DEL",
        destination: "PNQ",
        departureTime: "12:00 PM",
        arrivalTime: "02:00 PM",
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-103",
        origin: "PNQ",
        destination: "BOM",
        departureTime: "03:00 PM",
        arrivalTime: "05:00 PM",
        price: 7500,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-104",
        origin: "BOM",
        destination: "PNQ",
        departureTime: "06:00 PM",
        arrivalTime: "08:00 PM",
        price: 7800,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-105",
        origin: "DEL",
        destination: "BOM",
        departureTime: "09:00 AM",
        arrivalTime: "11:00 AM",
        price: 9000,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-106",
        origin: "BOM",
        destination: "DEL",
        departureTime: "02:00 PM",
        arrivalTime: "04:00 PM",
        price: 9200,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-107",
        origin: "PNQ",
        destination: "DEL",
        departureTime: "05:00 PM",
        arrivalTime: "07:00 PM",
        price: 8300,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-108",
        origin: "DEL",
        destination: "PNQ",
        departureTime: "10:00 AM",
        arrivalTime: "12:00 PM",
        price: 8800,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-109",
        origin: "PNQ",
        destination: "BOM",
        departureTime: "01:00 PM",
        arrivalTime: "03:00 PM",
        price: 7200,
        image: "https://www.gettyimages.in/detail/news-photo/boeing-787-flight-number-ai139-of-indian-national-carrier-news-photo/936666356",
    },
    {
        flightNumber: "AI-110",
        origin: "BOM",
        destination: "PNQ",
        departureTime: "04:00 PM",
        arrivalTime: "06:00 PM",
        price: 7800,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-111",
        origin: "DEL",
        destination: "BOM",
        departureTime: "07:00 AM",
        arrivalTime: "09:00 AM",
        price: 8600,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-112",
        origin: "BOM",
        destination: "DEL",
        departureTime: "12:00 PM",
        arrivalTime: "02:00 PM",
        price: 9200,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-113",
        origin: "PNQ",
        destination: "DEL",
        departureTime: "03:00 PM",
        arrivalTime: "05:00 PM",
        price: 8400,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-114",
        origin: "DEL",
        destination: "PNQ",
        departureTime: "06:00 PM",
        arrivalTime: "08:00 PM",
        price: 8900,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-115",
        origin: "PNQ",
        destination: "BOM",
        departureTime: "09:00 AM",
        arrivalTime: "11:00 AM",
        price: 7800,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-116",
        origin: "BOM",
        destination: "PNQ",
        departureTime: "02:00 PM",
        arrivalTime: "04:00 PM",
        price: 8700,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-117",
        origin: "DEL",
        destination: "BOM",
        departureTime: "05:00 PM",
        arrivalTime: "07:00 PM",
        price: 9200,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-118",
        origin: "BOM",
        destination: "DEL",
        departureTime: "10:00 AM",
        arrivalTime: "12:00 PM",
        price: 8500,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-119",
        origin: "PNQ",
        destination: "BOM",
        departureTime: "01:00 PM",
        arrivalTime: "03:00 PM",
        price: 7800,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-120",
        origin: "BOM",
        destination: "PNQ",
        departureTime: "04:00 PM",
        arrivalTime: "06:00 PM",
        price: 8200,
        image: "https://via.placeholder.com/150",
    }, 
    {
        flightNumber: "AI-121",
        origin: "GOA",
        destination: "BOM",
        departureTime: "04:00 PM",
        arrivalTime: "06:00 PM",
        price: 4000,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-122",
        origin: "HYD",
        destination: "PNQ",
        departureTime: "04:00 PM",
        arrivalTime: "06:00 PM",
        price: 5000,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-123",
        origin: "DEL",
        destination: "USA",
        departureTime: "05:00 PM",
        arrivalTime: "06:00 PM",
        price: 5500,
        image: "https://via.placeholder.com/150",
    },
    {
        flightNumber: "AI-124",
        origin: "DEL",
        destination: "USA",
        departureTime: "05:00 PM",
        arrivalTime: "06:00 PM",
        price: 4500,
        image: "https://via.placeholder.com/150",
    },
    
    {
        flightNumber: "AI-125",
        origin: "DEL",
        destination: "USA",
        departureTime: "04:00 PM",
        arrivalTime: "06:00 PM",
        price: 3000,
        image: "https://via.placeholder.com/150",
    }
];

function updatePriceRange() {
    const priceRange = document.getElementById('priceRange');
    const priceRangeValue = document.getElementById('priceRangeValue');
    priceRangeValue.innerText = `Price Range: $0 - $${priceRange.value}`;

    // Filter flights based on the selected price range
    const filteredFlights = flightData.filter(flight => flight.price <= parseInt(priceRange.value));

    // Update the search results with the filtered flights
    displaySearchResults(filteredFlights);
}

function searchFlights() {
    // Get user input
    const origin = document.getElementById("oneWayOrigin").value;
    const destination = document.getElementById("oneWayDestination").value;
    const priceRange = document.getElementById("priceRange").value;

    // Filter flights based on user input and price range
    const searchResults = flightData.filter(flight => {
        return (
            flight.origin.toLowerCase().includes(origin.toLowerCase()) &&
            flight.destination.toLowerCase().includes(destination.toLowerCase()) &&
            flight.price <= priceRange
        );
    });

    // Display search results only when there are results
    if (searchResults.length > 0) {
        // Update the heading with selected origin and destination
        document.getElementById("flightHeading").textContent = `Flights from ${origin} to ${destination}`;

        displaySearchResults(searchResults);
    } else {
        // Clear previous results and reset the heading if no matches found
        document.getElementById("searchResults").innerHTML = "";
        document.getElementById("flightHeading").textContent = "No matching flights found.";
    }
}


function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = ""; // Clear previous results

    results.forEach(flight => {
        const flightCard = createFlightCard(flight);
        searchResultsContainer.appendChild(flightCard);
    });
}

function createFlightCard(flight) {
    const flightCard = document.createElement("div");
    flightCard.classList.add("col-md-12", "mb-4");

    const cardInnerHtml = `
        <div class="card mb-2">
            <div class="col-md-4">
                <div class="card-body">
                <h5 class="card-title">Rs. ${flight.price}</h5>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-md-4">
                    <div class="card-body">
                   
                        <h5 class="card-title">${flight.flightNumber}</h5>
                        <p class="card-text">${flight.origin} &gt; ${flight.destination}</p>
                        <p class="card-text">Depart: ${flight.departureTime}</p>
                        <p class="card-text">Arrive: ${flight.arrivalTime}</p>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card-body">
                        <h5 class="card-title">${flight.flightNumber}</h5>
                        <p class="card-text">${flight.destination} &gt; ${flight.origin}</p>
                        <p class="card-text">Depart: ${flight.departureTime}</p>
                        <p class="card-text">Arrive: ${flight.arrivalTime}</p>
                    </div>
                </div>

                <div class="col-md-4">
                    <img src="${flight.image}" class="img-fluid rounded-start" alt="Flight Image"><br>
                    <button class="btn btn-primary mt-2">Book This Flight</button>
                </div>
            </div>
        </div>

    `;

    flightCard.innerHTML = cardInnerHtml;
    return flightCard;
}

// Initial display of all flights
//displaySearchResults(flightData);
const cities = flightData.map(flight => flight.origin).concat(flightData.map(flight => flight.destination));
const uniqueCities = [...new Set(cities)]; // Remove duplicates
$("#oneWayOrigin, #oneWayDestination").autocomplete({
    source: uniqueCities
});

