function createHeaderAndFooter() {
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');

    header.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
            <div class="container-fluid px-5">
              <a class="navbar-brand" href="/code/index.html">Raphael Sena</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Raphael Sena Augusto de Brito</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 text-light">
                    <li class="nav-item">
                      <a class="nav-link" href="/code/index.html#profile">Perfil</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Repositórios
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" id = "dropdown-item-repositorio" href="#">Algum Repositório</a></li>
                        <li><a class="dropdown-item" id = "dropdown-item-repositorio" href="#">Outro Repositório</a></li>
                        <li>
                          <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" id = "dropdown-item-todos-repositorios" href="#">Visualizar Todos</a></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Conteúdo Sugerido</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Colegas</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
    `;

    footer.innerHTML = `
        <div class="container__footer">
        <div class="box__footer">
          <div class="logo">
            <img src="assets/img/me.jpg" class = "rounded" alt="Logo Raphael Sena Augusto de Brito" />
          </div>
        </div>
        <div class="box__footer">
          <h2>Acesse</h2>
          <a href="#">Perfil</a>
          <a href="#">Repositórios</a>
          <a href="#">Conteúdo Sugerido</a>
          <a href="#">Colegas</a>
        </div>

        <div class="box__footer">
          <h2>Conecte-se</h2>
          <a href="#"><i class="fab fa-github-square"></i> GitHub</a>
          <a href="#"><i class="fab fa-linkedin"></i> Linkedin</a>
          <a href="#"><i class="fa-solid fa-envelope"></i> Gmail</a>
        </div>
      </div>

      <div class="box__copyright">
        <hr />
        <p>Todos os direitos reservados © 2024 <b>Raphael Sena Augusto de Brito</b></p>
      </div>
    `;
}

window.addEventListener("load", createHeaderAndFooter);