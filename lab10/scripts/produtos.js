const produtos = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    },
    {
      "id": 6,
      "title": "Solid Gold Petite Micropave ",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    },
    {
      "id": 7,
      "title": "White Gold Plated Princess",
      "price": 9.99,
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 3,
        "count": 400
      }
    },
    {
      "id": 8,
      "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
      "price": 10.99,
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 1.9,
        "count": 100
      }
    },
    {
      "id": 9,
      "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      "price": 64,
      "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on userâ€™s hardware configuration and operating system",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "rating": {
        "rate": 3.3,
        "count": 203
      }
    },
    {
      "id": 10,
      "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "price": 109,
      "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5â€ hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 470
      }
    },
    {
      "id": 11,
      "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "price": 109,
      "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "rating": {
        "rate": 4.8,
        "count": 319
      }
    },
    {
      "id": 12,
      "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      "price": 114,
      "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "rating": {
        "rate": 4.8,
        "count": 400
      }
    },
    {
      "id": 13,
      "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      "price": 599,
      "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 250
      }
    },
    {
      "id": 14,
      "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) â€“ Super Ultrawide Screen QLED ",
      "price": 999.99,
      "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.2,
        "count": 140
      }
    },
    {
      "id": 15,
      "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      "price": 56.99,
      "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      "rating": {
        "rate": 2.6,
        "count": 235
      }
    },
    {
      "id": 16,
      "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      "price": 29.95,
      "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 340
      }
    },
    {
      "id": 17,
      "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      "price": 39.99,
      "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      "rating": {
        "rate": 3.8,
        "count": 679
      }
    },
    {
      "id": 18,
      "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
      "price": 9.85,
      "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 130
      }
    },
    {
      "id": 19,
      "title": "Opna Women's Short Sleeve Moisture",
      "price": 7.95,
      "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.5,
        "count": 146
      }
    },
    {
      "id": 20,
      "title": "DANVOUY Womens T Shirt Casual Cotton Short",
      "price": 12.99,
      "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      "rating": {
        "rate": 3.6,
        "count": 145
      }
    }
]



document.addEventListener('DOMContentLoaded', () => {
  // localStorage.clear();
  const produtosCesto = JSON.parse(localStorage.getItem('produtosCesto')) || [];

  carregarProdutos();

  if (produtosCesto !== undefined) {
    produtosCesto.forEach(produtoCestoAtual => {
      const novoProdutoCesto = criarProdutoCesto(produtoCestoAtual);
      const novoProdutoCestoPreco = novoProdutoCesto.querySelector('p');

      adicionarAoCarrinho(novoProdutoCesto, novoProdutoCestoPreco, produtoCestoAtual.id, false);
    });
  }
});


function carregarProdutos() {
  produtos.forEach(produtoAtual => {
    const id = produtoAtual.id;
    const nome = document.createElement('h2');
    const preco = document.createElement('p');
    const descricao = document.createElement('p');
    const categoria = document.createElement('p');
    const imagem = document.createElement('img');
    const pontuacao = document.createElement('p');
    const comprasRealizadas = document.createElement('p');
    const botao = document.createElement('button');
    const figure = document.createElement('figure');
    const produto = document.createElement('article');

    nome.textContent = produtoAtual.title;
    preco.innerHTML = `<span class="material-symbols-outlined">sell</span> ${produtoAtual.price} €`;
    descricao.textContent = produtoAtual.description;
    categoria.textContent = produtoAtual.category;
    imagem.setAttribute('src', produtoAtual.image);
    imagem.setAttribute('alt', `Imagem do produto (${produtoAtual.title})`);
    pontuacao.textContent = `rating: ${produtoAtual.rating.rate}`;
    comprasRealizadas.textContent = `compras feitas: ${produtoAtual.rating.count}`;
    botao.innerHTML = `Adicionar ao Carrinho <span class="material-symbols-outlined">add_shopping_cart</span>`;

    botao.addEventListener('click', () => {
      adicionarAoCarrinho(produto, preco, id, true);
    });

    produto.append(nome);
    produto.append(figure)
    figure.append(imagem);
    produto.append(preco);
    produto.append(botao);
    produto.classList.add('produto-na-loja');
    document.getElementById('area-produtos').append(produto);

    produto.addEventListener('click', () => {
      const mostraProduto = document.getElementById('mostra-detalhe-produto');
      const produtoNovo = document.createElement('article');
      const produtoAtual = mostraProduto.querySelector('article');
      const botaoClonado = botao.cloneNode(true);
      const precoSemSpan = preco.cloneNode(true);
      precoSemSpan.querySelector('span').remove();
      const section = document.createElement('section');
      const p = document.createElement('p');

      botaoClonado.addEventListener('click', () => {
        adicionarAoCarrinho(produto, preco, id, true);
      });

      produtoNovo.append(figure.cloneNode(true));
      produtoNovo.append(section);
      section.append(nome.cloneNode(true));
      section.append(categoria);
      section.append(precoSemSpan);
      section.append(descricao);
      p.append(pontuacao);
      p.append(comprasRealizadas);
      section.append(p);
      section.append(botaoClonado);

      if (produtoAtual) { //Remove o atual
        mostraProduto.replaceChild(produtoNovo, produtoAtual);
      } else { // Cria o primeiro
        mostraProduto.style.display = 'block';
        mostraProduto.appendChild(produtoNovo);
      }
    });
  });
}


function criarProdutoCesto(produtoCesto) {
  const id = produtoCesto.id;
  const nome = document.createElement('h2');
  const preco = document.createElement('p');
  const imagem = document.createElement('img');
  const figure = document.createElement('figure');
  const botao = document.createElement('button');
  const novoProdutoCesto = document.createElement('article');

  nome.textContent = produtoCesto.title;
  preco.innerHTML = produtoCesto.price;
  imagem.setAttribute('src', produtoCesto.image);
  imagem.setAttribute('alt', `Imagem do produto (${produtoCesto.title})`);
  botao.innerHTML = 'Remover do Carrinho <span class="material-symbols-outlined">remove_shopping_cart</span>';

  novoProdutoCesto.append(nome);
  novoProdutoCesto.append(figure);
  figure.append(imagem);
  novoProdutoCesto.append(preco);
  novoProdutoCesto.append(botao);
  novoProdutoCesto.classList.add('produto-na-loja');

  return novoProdutoCesto;
}



function adicionarAoCarrinho(produto, preco, id, novoProduto) {
  const carrinho = document.querySelector('#area-carrinho section');
  const produtoNoCarrinho = produto.cloneNode(true);
  const botao = produtoNoCarrinho.querySelector('button');

  calculoCustoTotal(true, preco);
  
  botao.innerHTML = 'Remover do Carrinho <span class="material-symbols-outlined">remove_shopping_cart</span>';
  
  botao.addEventListener('click', () => {
    produtoNoCarrinho.remove();
    removerNoLocalStorage(id);
    calculoCustoTotal(false, preco);
    quantidadeItensNoCarrinho(carrinho);
  });
  
  produtoNoCarrinho.style.cursor = 'default';

  carrinho.append(produtoNoCarrinho);

  quantidadeItensNoCarrinho(carrinho);

  if (novoProduto) {
    salvarNoLocalStorage(produto, id);
  }
}


function calculoCustoTotal(paraSomar, preco) {
  let custoTotal = document.getElementById('custo-total');
  const valor = parseFloat(preco.innerHTML.split('</span>')[1].trim().split('€')[0].trim());
  let soma = parseFloat(custoTotal.textContent) || 0;

  if (paraSomar) {
    soma += valor;
  } else {
    soma -= valor;
  }

  custoTotal.textContent = soma.toFixed(2);
}


function quantidadeItensNoCarrinho(carrinho) {
  const quantidadeTotal = carrinho.querySelectorAll('article');
  const numProdutos = document.getElementById('quantidade-no-carrinho');

  numProdutos.textContent = quantidadeTotal.length;

  if (numProdutos.textContent === '0') {
    numProdutos.style.display = 'none';
  } else {
    numProdutos.style.display = 'block';
  }
}


function salvarNoLocalStorage(produto, id) {
  let produtosCesto = JSON.parse(localStorage.getItem('produtosCesto')) || [];

  const novoProdutoCesto = {
    id: id,
    title: produto.querySelector('h2').textContent,
    image: produto.querySelector('figure img').src,
    price: produto.querySelector('p').innerHTML,
  }

  produtosCesto.push(novoProdutoCesto);
  localStorage.setItem('produtosCesto', JSON.stringify(produtosCesto));
}


function removerNoLocalStorage(id) {
  let produtosCesto = JSON.parse(localStorage.getItem('produtosCesto')) || [];

  console.log(produtosCesto);
  const index = produtosCesto.findIndex(produto => produto.id === id);

  if (index !== -1) {
    produtosCesto.splice(index, 1);
  }

  localStorage.setItem('produtosCesto', JSON.stringify(produtosCesto));
}