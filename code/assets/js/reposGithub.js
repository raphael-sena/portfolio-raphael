document.addEventListener("DOMContentLoaded", () => {
    const username = 'raphael-sena';
    const listaRepo = document.getElementById('repo-list');
    const carregarMaisbtn = document.getElementById('carregar-mais-btn');
    let repos = [];
    let currentRepoIndex = 0;
    const reposPorPagina = 6;
  
    carregarMaisbtn.addEventListener('click', loadMoreRepos);
  
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(data => {
        repos = data;
        displayRepos();
        if (repos.length <= reposPorPagina) {
          carregarMaisbtn.style.display = 'none';
        }
      })
      .catch(error => console.error('Erro ao buscar repositórios:', error));
  
    function displayRepos() {
      const nextRepos = repos.slice(currentRepoIndex, currentRepoIndex + reposPorPagina);
      nextRepos.forEach(repo => {
        const repoItem = document.createElement('div');
        repoItem.className = 'col-12 col-md-6 col-lg-4 mb-4';
        repoItem.innerHTML = `
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${repo.name}</h5>
              <p class="card-text">${repo.description ? repo.description : 'Sem descrição'}</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-dark" onclick="viewRepoDetails('${repo.name}')">Ver Detalhes</button>
            </div>
          </div>
        `;
        listaRepo.appendChild(repoItem);
      });
      currentRepoIndex += reposPorPagina;
      if (currentRepoIndex >= repos.length) {
        carregarMaisbtn.style.display = 'none';
      }
    }
  
    function loadMoreRepos() {
      displayRepos();
    }
  });
  
  function viewRepoDetails(repoName) {
    const username = 'raphael-sena';
  
    fetch(`https://api.github.com/repos/${username}/${repoName}`)
      .then(response => response.json())
      .then(repo => {
        const main = document.querySelector('main');
        main.innerHTML = `
          <section id="repo-details" class="container mt-5">
            <h1>${repo.name}</h1>
            <hr>
            <p><strong>Descrição:</strong> ${repo.description ? repo.description : 'Sem descrição'}</p>
            <p><strong>Data de Criação:</strong> ${new Date(repo.created_at).toLocaleDateString()}</p>
            <p><strong>Linguagem:</strong> ${repo.language}</p>
            <p><strong>Link de Acesso:</strong> <a href="${repo.html_url}" target="_blank">${repo.html_url}</a></p>
            <p><strong>Estrelas:</strong> ${repo.stargazers_count} <i class="fas fa-star"></i></p>
            <p><strong>Forks:</strong> ${repo.forks_count} <i class="fas fa-code-branch"></i></p>
            ${repo.topics ? `<p><strong>Tópicos:</strong> ${repo.topics.map(topic => `<span class="badge bg-primary me-1">${topic}</span>`).join('')}</p>` : ''}
            <button class="btn btn-secondary mt-3" onclick="goBack()">Voltar</button>
          </section>
        `;
      })
      .catch(error => console.error('Erro ao buscar detalhes do repositório:', error));
  }
  
  function goBack() {
    window.location.reload();
  }