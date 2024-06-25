function createProfile() {
    var profile = document.querySelector('#profile');

    profile.innerHTML = `
        <h1 class="px-5">Perfil</h1>
        <hr class="mx-5"/>
        <div class="container p-4">
          <div class="row">
            <div class="col-12 col-lg-4">
              <img src="assets/img/me.jpg" class="img-fluid rounded" alt="Profile" />
            </div>
            <div class="col-12 col-md-8">
              <h3>Raphael Sena Augusto de Brito</h3>
              <p>Olá, seja muito bem-vindo(a) ao meu site-portifólio! Bom, meu nome é Raphael, tenho 23 anos, moro em Belo
                Horizonte com meus pais. Atualmente curso Engenharia de Software pela PUC Minas - Praça da Liberdade, e
                estou muito feliz e entusiasmado pela decisão do curso. Tenho experiência profissional na parte de
                infraestrutura na própria PUC Minas/GTI, mas hoje estou focado completamente no meu desempenho acadêmico e
                agradeço o apoio de meus pais, uma vez que foi fundamental nessa decisão.</p>
              <p>Hoje tenho noções de back-end e front-end suficientes para poder aprofundar mais em uma oportunidade
                profissional e, dito isto, estou em busca de um estágio na área de estudo onde eu possa melhorar minhas
                habilidades.</p>
  
              <div id="container">
                <div class="row">
                  <div class="col-12 col-md-9">
                    <div id="profile-conteudo">
                      <h5><strong>Location:&nbsp</strong></h5>
                      <p>Belo Horizonte, MG - Brazil</p>
                    </div>
                    <div id="profile-conteudo">
                      <h5><strong>WebSite:&nbsp</strong></h5>
                      <a href="https://portfolio-raphael-umber.vercel.app/">https://portfolio-raphael-umber.vercel.app/&nbsp</a>

                      <span>
                      <a href="https://www.linkedin.com/in/raphael-sena/" target="_blank"><i class="fab fa-linkedin fa-xl"
                          ></i></a>
                      <a href="https://github.com/raphael-sena" target="_blank"><i class="fab fa-github fa-xl"
                          ></i></a>
                          <span class="position-relative ms-3">
                            <i class="fas fa-user fa-lg"></i>
                            <span class="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle p-1">
                              5
                            </span>
                          </span>
                      </span>
                    </div>
                    
                  </div>
                  <div class="col-12 col-md-3">
                    <div class="icons align-baseline">
                      
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
    `;
}

window.addEventListener("load", createProfile);



