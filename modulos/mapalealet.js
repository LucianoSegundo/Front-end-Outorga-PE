// adicição do mapa 

let map = L.map('map').setView([-8.047562, -34.876964], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on('click', function(e) {
    document.getElementById('solici-latitude').value = e.latlng.lat;
    document.getElementById('solici-longitude').value = e.latlng.lng;
});


// autocomplete ceep
 let coletacep = document.getElementById('solici-cep');
 
 coletacep.addEventListener('change', function() {
    let cep = this.value;
    fetch('https://viacep.com.br/ws/' + cep + '/json/')
    .then(response => response.json())
    .then(data => {
      document.getElementById('solici-logradouro').value = data.logradouro;
      document.getElementById('solici-cidade').value = data.localidade;
    })
    .catch(error => console.error('Erro ao buscar o CEP:', error));
  });

export default {map, coletacep};