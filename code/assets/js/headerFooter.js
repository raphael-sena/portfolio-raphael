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
                      <li><a class="dropdown-item" id="dropdown-item-repositorio" href="/code/index.html#repositories">Visualizar Repositórios</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a target="_blank" class="dropdown-item" id="dropdown-item-todos-repositorios" href="https://github.com/raphael-sena?tab=repositories">Visualizar Todos</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/code/index.html#fique-por-dentro">Fique por Dentro</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/code/index.html#colegas">Colegas</a>
                  </li>
                </ul>
                <form class="d-flex" role="search" id="search-form">
                  <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" id="search-input">
                  <button class="btn btn-outline-secondary" type="submit"><i class="fa fa-search"></i></button>
                </form>
              </div>
            </div>
          </div>
      </nav>
      <div id="search-message-container"></div>
  `;

  footer.innerHTML = `
      <div class="text-center mt-3">
        <p>Voltar ao topo<button id="scroll-to-top-btn" class="btn btn"><i class="fa-solid fa-arrow-up fa-bounce fa-2xl" style="color: #5c5c5c;"></i></button></p>
      </div>
      <div class="container__footer">
      <div class="box__footer">
        <div class="logo">
          <img src="assets/img/me.jpg" class="rounded" alt="Logo Raphael Sena Augusto de Brito" />
        </div>
      </div>
      <div class="box__footer">
        <h2>Acesse</h2>
        <a href="/code/index.html">Perfil</a>
        <a href="/code/index.html#repositories">Repositórios</a>
        <a href="/code/index.html#fique-por-dentro">Fique por dentro</a>
        <a href="/code/index.html#colegas">Colegas</a>
      </div>

      <div class="box__footer">
        <h2>Conecte-se</h2>
        <a target="_blank" href="https://github.com/raphael-sena"><i class="fab fa-github-square"></i> GitHub</a>
        <a target="_blank" href="https://www.linkedin.com/in/raphael-sena/"><i class="fab fa-linkedin"></i> Linkedin</a>
        <a href="mailto:rsenares1@gmail.com?subject=Assunto do email"><i class="fa-solid fa-envelope"></i> Gmail</a>
        <a href="https://api.whatsapp.com/send/?phone=5531997167755&text&type=phone_number&app_absent=0"><i class="fab fa-whatsapp"></i> WhatsApp</a>
        <a href="tel:+5531997167755"><i class="fa-solid fa-phone"></i>+55 (31) 99716-7755</a>
      </div>
    </div>

    <div class="box__copyright">
        <hr />
        <p>Todos os direitos reservados © 2024 <b>Raphael Sena Augusto de Brito</b></p>
      </div>
  `;

  const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
  if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener('click', function() {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  const pesquisaForm = document.getElementById('search-form');
  if (pesquisaForm) {
      pesquisaForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const query = document.getElementById('search-input').value.toLowerCase();
          const tituloSection = document.querySelectorAll('.section-title');

          let encontrado = false;
          tituloSection.forEach(title => {
              const section = title.closest('section');
              if (title.textContent.toLowerCase().includes(query)) {
                  section.style.display = '';
                  encontrado = true;
              } else {
                  section.style.display = 'none';
              }
          });

          const messageContainer = document.getElementById('search-message-container');
          const semResultado = document.getElementById('no-results');
          if (!encontrado) {
              if (!semResultado) {
                  const semResultadoMessage = document.createElement('div');
                  semResultadoMessage.id = 'no-results';
                  semResultadoMessage.className = 'alert alert-warning';
                  semResultadoMessage.textContent = 'Nenhuma seção encontrada para a pesquisa.';
                  messageContainer.appendChild(semResultadoMessage);
              }
          } else {
              if (semResultado) {
                  semResultado.remove();
              }
          }
      });
  }
}

window.addEventListener("load", createHeaderAndFooter);