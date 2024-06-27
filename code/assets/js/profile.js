function createProfile() {
  fetch('/code/data/db.json')
    .then(response => response.json())
    .then(data => {
      const profileData = data.raphael[0];
      const profile = document.querySelector(".profile");

      profile.innerHTML = `
        <div class="row">
          <div class="col-12 col-lg-4">
            <img src="${profileData.imagem}" class="img-fluid rounded" alt="Profile image" />
          </div>
          <div class="col-12 col-md-8" style="text-align: justify;">
            <h3>${profileData.nome} ${profileData.sobrenome}</h3>
            <p>${profileData.descricao}</p>
            <div id="container">
              <div class="row">
                <div class="col-12">
                  <div id="profile-conteudo">
                    <h5><strong>Localização:&nbsp</strong></h5>
                    <p>Belo Horizonte, MG - Brasil</p>
                  </div>
                  <div id="profile-conteudo">
                    <h5><strong>Website:&nbsp</strong></h5>
                    <a href="https://portfolio-raphael-umber.vercel.app/">https://portfolio-raphael-umber.vercel.app/ &nbsp</a>

                    <span class="px-4 mx-4">
                      <a href="${profileData.linkedin}" target="_blank"><i class="fab fa-linkedin fa-2xl"></i></a>
                      <a href="${profileData.github}" target="_blank"><i class="fab fa-github fa-2xl"></i></a>
                      <span class="position-relative ms-3" id="followers-container">
                        <a target="_blank" href="${profileData.github}?tab=followers"><i class="fas fa-user fa-2xl"></i></a>
                        <span id="followers-badge" class="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle p-1">
                          0
                        </span>
                        <div id="followers-tooltip" class="d-none">Seguidores</div>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="col-12 col-md-3">
                  <div class="icons align-baseline"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      fetchFollowers();

      // Adiciona eventos de hover para mostrar/ocultar o tooltip
      const followersContainer = document.getElementById("followers-container");
      followersContainer.addEventListener("mouseenter", () => {
        document.getElementById("followers-tooltip").classList.remove("d-none");
      });
      followersContainer.addEventListener("mouseleave", () => {
        document.getElementById("followers-tooltip").classList.add("d-none");
      });
    })
    .catch(error => console.error("Erro ao buscar perfil:", error));
}

function fetchFollowers() {
  fetch("https://api.github.com/users/raphael-sena/followers")
    .then((response) => response.json())
    .then((data) => {
      const followersCount = data.length;
      document.getElementById("followers-badge").textContent = followersCount;
    })
    .catch((error) => console.error("Erro ao buscar seguidores:", error));
}

window.addEventListener("load", createProfile);
