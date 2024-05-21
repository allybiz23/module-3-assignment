$(document).ready(function () {
    const apiKey = 'YOURAPIKEY'; // Replace with your actual API key

    function displayWeatherData(data) {
        $('#cityName').text(`City: ${data.name}`);
        $('#temperature').text(`Temperature: ${data.main.temp} °F`);
        $('#minTemperature').text(`Min Temperature: ${data.main.temp_min} °F`);
        $('#maxTemperature').text(`Max Temperature: ${data.main.temp_max} °F`);
        $('#pressure').text(`Pressure: ${data.main.pressure} hPa`);
    }

    function fetchWeatherData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        $.getJSON(apiUrl, function (data) {
            displayWeatherData(data);
        }).fail(function () {
            alert('City not found or API request failed.');
        });
    }

    $('#searchButton').click(function () {
        const city = $('#cityInput').val();
        if (city) {
            fetchWeatherData(city);
        } else {
            alert('Please enter a city name.');
        }
    });

    $('#currentLocationButton').click(function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
                $.getJSON(apiUrl, function (data) {
                    displayWeatherData(data);
                }).fail(function () {
                    alert('API request failed.');
                });
            }, function () {
                alert('Geolocation failed or is not supported.');
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    });

    // Initial fetch for Houston, UK as an example
    fetchWeatherData('houston,uk');
});

