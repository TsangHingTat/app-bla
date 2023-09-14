window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

class WeatherViewModel {
    constructor() {
        this.weatherWarnings = {};
        this.fetchData();
    }

    fetchData() {
        fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc')
            .then(response => response.json())
            .then(data => {
                this.weatherWarnings = data;
                this.updateWarnings();
            })
            .catch(err => console.log('Error decoding JSON:', err));
    }

    updateWarnings() {
        const warningsTable = document.getElementById("warnings-table");
        warningsTable.innerHTML = "";

        const warningKeys = Object.keys(this.weatherWarnings).sort();
        warningKeys.forEach(warningKey => {
            const warningInfo = this.weatherWarnings[warningKey];

            const warningElement = document.createElement('div');
            const imgElement = document.createElement('img');
            imgElement.src = `https://www.hko.gov.hk/en/wxinfo/dailywx/images/${warningInfo.name}.gif`; // Update src property with correct URL
            warningElement.appendChild(imgElement);
            
            // Uncomment below lines if other warning information needed to be displayed
            // const nameElement = document.createElement('h2');
            // nameElement.innerText = warningInfo.name;
            // warningElement.appendChild(nameElement);
            
            // const issueTimeElement = document.createElement('p');
            // issueTimeElement.innerText = `Issue Time: ${warningInfo.issueTime}`;
            // warningElement.appendChild(issueTimeElement);

            warningsTable.appendChild(warningElement);
        });
    }
}

new WeatherViewModel();
