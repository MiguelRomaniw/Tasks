const axios = require('axios');
const haversine = require('haversine');

const referencia = '44075-410'; // CEP de referência
const raio = 4; // Raio em km
const apiUrl = `https://viacep.com.br/ws/${referencia.replace('-', '')}/json/`;

// Busca as informações do CEP de referência
axios.get(apiUrl)
  .then(response => {
    const referenciaCoords = {
      latitude: parseFloat(response.data['latitude']),
      longitude: parseFloat(response.data['longitude'])
    };
    
    // Faz a busca dos CEPs no raio de distância desejado
    axios.get('https://viacep.com.br/ws/BA/Feira de Santana/json/')
      .then(response => {
        const ceps = response.data.map(item => item.cep);
        const cepsNoRaio = ceps.filter(cep => {
          const cepApiUrl = `https://viacep.com.br/ws/${cep.replace('-', '')}/json/`;
          return axios.get(cepApiUrl)
            .then(response => {
              const cepCoords = {
                latitude: parseFloat(response.data['latitude']),
                longitude: parseFloat(response.data['longitude'])
              };
              const distance = haversine(referenciaCoords, cepCoords, {unit: 'km'});
              return distance <= raio;
            });
        });
        
        // Exibe a lista de CEPs no raio de distância desejado
        console.log(`CEPs no raio de ${raio} km a partir do CEP ${referencia}:`);
        console.log(cepsNoRaio);
      });
  })
  .catch(error => {
    console.log(error);
  });
