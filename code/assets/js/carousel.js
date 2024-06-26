document.addEventListener('DOMContentLoaded', function() {
    fetch('/code/data/carousel.json')
        .then(response => response.json())
        .then(data => {
            createCarousel(data);
        });
});

function createCarousel() {
    const carousel = document.getElementById('carousel');

    carousel.innerHTML = `
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  <div class="carousel-item active">
      <img src="assets/img/carousel/cabeca-robo.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Robôs Tomando Lugar de Humanos</h5>
        <p>Como a tecnologia impacta profissionalmente na vida das pessoas.</p>
      </div>
  </div>
    <div class="carousel-item ">
      <img src="assets/img/carousel/se-afundando-em-tecnologia.png" class="d-block w-100" alt="Imagem - Se afundando na tecnologia">
      <div class="carousel-caption d-none d-md-block">
        <h5>Se Afundando na Tecnologia</h5>
        <p>Como as pessoas sofrem o dia-a-dia com as tecnologias atuais.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="assets/img/carousel/boneco.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Realidade Virtual</h5>
        <p>Realidade tecnologica e limitação da visão ao redor.</p>
      </div>
    </div>
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
    `

    window.addEventListener("load", createCarousel);
}