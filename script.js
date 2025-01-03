document.querySelector('.input').addEventListener('submit', function(e) {
    e.preventDefault();
    var city = document.getElementById('inputValue').value;
    var apiKey = '582969406b581c865e1a1511e030c521'; // Replace with your actual API key
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            var tempValue = data.main.temp;
            var windSpeed = data.wind.speed;
            var description = data.weather[0].description;
            var cityName = data.name;
            
            // Convert temperature from Kelvin to Celsius
            var tempInCelsius = (tempValue - 273.15).toFixed(2);

            // Display the weather data
            document.querySelector('.name').textContent = cityName;
            document.querySelector('.desc').textContent = `Condition: ${description}`;
            document.querySelector('.temp').textContent = `Temperature: ${tempInCelsius}°C`;
            document.querySelector('.windspeed').textContent = `Wind Speed: ${windSpeed} m/s`;

            // Show the weather display
            document.querySelector('.display').style.display = 'block';
        })
        .catch(error => {
            alert(error.message);
        });
});
