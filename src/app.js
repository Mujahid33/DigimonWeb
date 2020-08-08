import 'regenerator-runtime';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import './script/component/title-header';

const digimonList = document.getElementById('digimonList');
const digimonInput = document.getElementById('digimonInput');

let digimonsData = [];

const getFromApi = async () => {
  try {
    const res = await fetch(`https://digimon-api.vercel.app/api/digimon`);
    digimonsData = await res.json();
    displayDigimons(digimonsData);
  }
  catch (error) {
    console.log(error);
  }
}

const displayDigimons = digimons => {
  const showToHtml = digimons.map(digimon => {
    return `
    <div class="mx-auto" style="margin-top: 12px;padding: 0 20px; margin-bottom:12px;">
    <div class="card">
    <img src="${digimon.img}" class="card-img-top" alt="${digimon.name}">
        <div class="card-footer">
          <h5 class="font-weight-bold" style="color:steelblue; text-align:center;">${digimon.name}</h5>
          <p style="color:steelblue; text-align:center;" class="font-weight-bold">${digimon.level}</p>
        </div>
    </div>
</div>
    `
  })
    .join('');
  digimonList.innerHTML = showToHtml;
}

digimonInput.addEventListener('keyup', event => {
  const searchString = event.target.value.toLowerCase();

  const filteredDigimons = digimonsData.filter(digimons => {
    return digimons.name.toLowerCase().includes(searchString)
  })

  displayDigimons(filteredDigimons);
})

getFromApi();