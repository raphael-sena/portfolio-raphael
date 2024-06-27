document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/colegas')
      .then(response => response.json())
      .then(data => {
        const colegasList = document.getElementById('colegas-list');
        data.forEach(colega => {
          const colegaCard = document.createElement('div');
          colegaCard.className = 'col-md-4';
          colegaCard.innerHTML = `
            <div class="card mb-4 shadow-sm">
              <img src="${colega.imagem}" class="card-img-top" alt="${colega.nome}">
              <div class="card-body">
                <h5 class="card-title">${colega.nome}</h5>
                <a target="_blank" href="${colega.github}"><i class="fab fa-github fa-2xl"></i></a>
              </div>
            </div>
          `;
          colegasList.appendChild(colegaCard);
        });
      })
      .catch(error => console.error('Erro ao carregar os colegas:', error));
  });
  