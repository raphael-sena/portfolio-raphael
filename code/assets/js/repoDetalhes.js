document.addEventListener("DOMContentLoaded", () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const repoName = urlParams.get('repo');
    const username = 'raphael-sena';
  
    if (repoName) {
      fetch(`https://api.github.com/repos/${username}/${repoName}`)
        .then(response => response.json())
        .then(repo => {
          document.getElementById('repo-name').textContent = repo.name;
          const repoInfo = document.getElementById('repo-info');
          repoInfo.innerHTML = `
            <p><strong>Descrição:</strong> ${repo.description ? repo.description : 'Sem descrição'}</p>
            <p><strong>Data de Criação:</strong> ${new Date(repo.created_at).toLocaleDateString()}</p>
            <p><strong>Linguagem:</strong> ${repo.language}</p>
            <p><strong>Link de Acesso:</strong> <a href="${repo.html_url}" target="_blank">${repo.html_url}</a></p>
            <p><strong>Estrelas:</strong> ${repo.stargazers_count} <i class="fas fa-star"></i></p>
            <p><strong>Forks:</strong> ${repo.forks_count} <i class="fas fa-code-branch"></i></p>
            ${repo.topics ? `<p><strong>Tópicos:</strong> ${repo.topics.map(topic => `<span class="badge bg-primary me-1">${topic}</span>`).join('')}</p>` : ''}
          `;
  
          // Fetch contributors
          fetch(`https://api.github.com/repos/${username}/${repoName}/contributors`)
            .then(response => response.json())
            .then(contributors => {
              const contributorsCount = contributors.length;
              repoInfo.innerHTML += `
                <p><strong>Contribuidores:</strong> ${contributorsCount}</p>
              `;
            })
            .catch(error => {
              console.error('Erro ao buscar contribuidores:', error);
              repoInfo.innerHTML += `
                <p><strong>Contribuidores:</strong> 0</p>
              `;
            });
        })
        .catch(error => {
          console.error('Erro ao buscar detalhes do repositório:', error);
          document.getElementById('repo-info').innerHTML = '<p>Repositório não encontrado.</p>';
        });
    } else {
      document.getElementById('repo-info').innerHTML = '<p>Repositório não encontrado.</p>';
    }
  });  