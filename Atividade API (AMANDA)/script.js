const filmes = [
  {
    titulo: "Barbie Quebra-Nozes (2001)",
    descricao: `Barbie vive Clara, uma garota que embarca numa aventura mágica no mundo do Quebra-Nozes. 
    Ela enfrenta desafios para salvar o reino encantado e descobre a importância da coragem e amizade.`,
    poster: "https://upload.wikimedia.org/wikipedia/pt/5/52/Barbie_Nutcracker_2001.jpg",
    wallpaper: "https://m.media-amazon.com/images/S/pv-target-images/b929db4896d50fd941afd4fa9c8ee967c1c75ce81b87bcccf092fba03d10d57f.jpg"
  },
  {
    titulo: "Barbie Lago dos Cisnes (2003)",
    descricao: `Barbie interpreta Odette, uma princesa transformada em cisne por uma maldição maligna. 
    Com a ajuda de seus amigos, ela luta para quebrar o feitiço e restaurar a paz no reino.`,
    poster: "https://m.media-amazon.com/images/I/81jgvZSfazL._AC_UF1000,1000_QL80_.jpg",
    wallpaper: "https://turnmundonerd.com.br/wp-content/uploads/2023/08/tonrulTmO9ZyZmsAsr5yr9ciE4c-jpg.webp"
  },
  {
    titulo: "Barbie a Princesa e a Plebeia (2004)",
    descricao: `Duas garotas idênticas, uma princesa e uma plebeia, trocam de lugar e descobrem suas verdadeiras identidades, 
    vivendo aventuras divertidas e aprendendo sobre amizade e coragem.`,
    poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/7/70/Barbie_as_the_Princess_and_the_Pauper_poster.jpg/250px-Barbie_as_the_Princess_and_the_Pauper_poster.jpg",
    wallpaper: "https://mybarbiedoll.wordpress.com/wp-content/uploads/2012/01/tsfbarbie2-flickr.jpg"
  },
  {
    titulo: "Barbie Escola de Princesas (2011)",
    descricao: `Barbie é uma garota comum que descobre que é uma princesa e vai para uma escola especial para aprender a ser uma verdadeira princesa, 
    enfrentando desafios e fazendo novas amizades.`,
    poster: "https://upload.wikimedia.org/wikipedia/pt/9/97/BarbieEscola.jpg",
    wallpaper: "https://m.media-amazon.com/images/S/pv-target-images/06309fe1bd0d407d2fb5c785e8427f4386f9414e0f078fe8740ae0f0626b0a3f.jpg"
  },
  {
    titulo: "Barbie em Vida de Sereia 2 (2012)",
    descricao: `Barbie vive uma sereia que enfrenta desafios para salvar seu reino submarino, 
    descobrindo o poder da amizade e da coragem para proteger seu lar e seus amigos.`,
    poster: "https://m.media-amazon.com/images/I/91zMNZ1bhQS._AC_UF1000,1000_QL80_.jpg",
    wallpaper: "https://m.media-amazon.com/images/S/pv-target-images/7e29594b2b43a2e59e758b54c635e2e54933f8fbd851ed9f1133f51ca8be4a50.jpg"
  },
  {
    titulo: "Barbie (Filme Live-Action 2023)",
    descricao: `O filme live-action estrelado por Margot Robbie que explora a jornada da Barbie para descobrir sua identidade em Barbielândia e no mundo real, 
    com humor, crítica social e muita cor rosa.`,
    poster: "https://www.tapisrouge.com.br/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-11.04.51-1.jpeg",
    wallpaper: "https://preview.redd.it/barbie-movie-1920x1080-v0-qwq9wo2ewy8b1.jpg?auto=webp&s=540c19926d2da58887a535237bbdfda91f22702c"
  },
  {
    titulo: "Barbie e as Três Mosqueteiras (2009)",
    descricao: `Barbie vive Corinne, uma jovem que sonha em ser mosqueteira e embarca numa aventura cheia de ação, amizade e coragem ao lado de suas amigas.`,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/71a24737038df3a31758156bff8c6248c4b5d29b7e1171b6c35b32705c9a9e34.jpg",
    wallpaper: "https://m.media-amazon.com/images/S/pv-target-images/d31f44655dd218f14a0822c94ecb1274ece89d98a5cd05b69bf0d7673045a748._SX1080_FMjpg_.jpg"
  },
  {
    titulo: "Barbie e o Castelo de Diamante (2008)",
    descricao: `Barbie é Liana, uma jovem que descobre um castelo mágico feito de diamantes e embarca numa aventura para salvar o reino e seus amigos.`,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/d75b17217d97c7301d85122dda1fd58cc629b51b415e41d67bad8d208563c8a2.jpg",
    wallpaper: "https://play-lh.googleusercontent.com/proxy/m3uCbNk6rZpomiDVnyTYPz_PDlwG58AuFfLbsqdnU50rIqfC-tGzBacEq1H2BrWBDSiOqOqeDKDPY_3JRdiSQmRC1OTruqoTAC-OAUhXsWhZnY6rWl2X=s1920-w1920-h1080"
  },
  {
    titulo: "Barbie em Aventura nas Estrelas (2016)",
    descricao: `Barbie é Blair Willows, uma jovem que embarca numa aventura intergaláctica para salvar o planeta e fazer novas amizades pelo universo.`,
    poster: "https://play-lh.googleusercontent.com/DC4KW2rQk_jkfqRmzVCuf7h7W-0Ewhv5v5RV2Fl_-mQGIWI7NBysohsZ8XCT1M66CwZOQg",
    wallpaper: "https://m.media-amazon.com/images/S/pv-target-images/44989d03d7ae589f0ccd32122c4c4bb35dbd05aef01edd1158e2756e2e3a7898.jpg"
  },
  {
    titulo: "Barbie e a Magia de Pegaso (2005)",
    descricao: `Barbie é Anneliese, que descobre um mundo mágico de pegasos e dragões e precisa salvar seus amigos de uma ameaça sombria.`,
    poster: "https://upload.wikimedia.org/wikipedia/pt/0/04/Barbie_and_the_Magic_of_Pegasus.png",
    wallpaper: "https://m.media-amazon.com/images/S/pv-target-images/c37636063b6ed7ab8e62d1174f0d36eafd6db2a1e223bed5b54239a43e3f336a.jpg"
  }
];

const listaFilmes = document.getElementById('listaFilmes');
const formPesquisa = document.getElementById('formPesquisa');
const inputPesquisa = document.getElementById('inputPesquisa');
const background = document.getElementById('background');

const modal = document.getElementById('modalFilme');
const modalTitulo = document.getElementById('modalTitulo');
const modalDescricao = document.getElementById('modalDescricao');
const modalImagem = document.getElementById('modalImagem');
const fecharModal = document.getElementById('fecharModal');

listaFilmes.innerHTML = '';
background.style.backgroundImage = '';

function abrirModal(filme) {
  modalTitulo.textContent = filme.titulo;
  modalDescricao.textContent = filme.descricao;
  modalImagem.src = filme.poster;
  modalImagem.alt = filme.titulo;
  modal.style.backgroundImage = `url('${filme.wallpaper}')`;
  modal.style.display = 'block';
}

fecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

formPesquisa.addEventListener('submit', e => {
  e.preventDefault();
  const termo = inputPesquisa.value.toLowerCase().trim();

  if (!termo) {
    listaFilmes.innerHTML = '<p>Por favor, digite o nome do filme para pesquisar.</p>';
    background.style.backgroundImage = '';
    return;
  }

  const filmesFiltrados = filmes.filter(filme =>
    filme.titulo.toLowerCase().includes(termo)
  );

  if (filmesFiltrados.length === 0) {
    listaFilmes.innerHTML = '<p>Nenhum filme encontrado.</p>';
    background.style.backgroundImage = '';
    return;
  }

  listaFilmes.innerHTML = '';
  filmesFiltrados.forEach(filme => {
    const divFilme = document.createElement('div');
    divFilme.classList.add('filme');
    divFilme.innerHTML = `
      <img src="${filme.poster}" alt="${filme.titulo}" />
      <h3>${filme.titulo}</h3>
    `;

    divFilme.addEventListener('click', () => {
      abrirModal(filme);
    });

    listaFilmes.appendChild(divFilme);
  });

  background.style.backgroundImage = `url('${filmesFiltrados[0].wallpaper}')`;
});
