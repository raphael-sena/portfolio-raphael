document.addEventListener('DOMContentLoaded', function() {
  fetch('/code/data/db.json')
      .then(response => response.json())
      .then(data => {
          createCarousel(data.carousel);
      });
});

function createCarousel(items) {
  const carousel = document.getElementById('carousel');
  let indicators = '';
  let innerItems = '';

  items.forEach((item, index) => {
      const activeClass = index === 0 ? 'active' : '';
      indicators += `
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" class="${activeClass}" aria-current="${index === 0}" aria-label="Slide ${index + 1}"></button>
      `;
      innerItems += `
          <div class="carousel-item ${activeClass}">
              ${item.tipo === 'imagem' ? 
                  `<a target="blank" href="${item.link}"><img src="${item.imagem}" class="d-block w-100" alt="${item.titulo}"></a>` :
                  `<iframe width="100%" height="500" src="${item.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
              }
              <div class="carousel-caption d-none d-md-block">
                  <h5>${item.titulo}</h5>
                  <p>${item.descricao}</p>
              </div>
          </div>
      `;
  });

  carousel.innerHTML = `
      <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
              ${indicators}
          </div>
          <div class="carousel-inner">
              ${innerItems}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
      </div>
  `;
}
