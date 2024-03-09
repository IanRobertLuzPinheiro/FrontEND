function getWeather() {
    
    const apiKey = '';
    const cidade = 'Ilheus, BR'; 

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`;

    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const temperatura = data.main.temp;
                const descricao = data.weather[0].description;
                const previsao = `Previsão do tempo em ${cidade}: ${temperatura}°C, ${descricao}.`;

                resolve(previsao);
            })
            .catch(error => {
                reject(error);
            });
    });
}


getWeather()
    .then(previsao => {
        const previsaoTempoItem = document.getElementById('previsao-tempo-item');
        previsaoTempoItem.textContent = previsao;
    })
    .catch(error => {
        console.error('Erro ao obter a previsão do tempo:', error);
    });