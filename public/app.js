const callApi = async () => {
    let urlNews = `http://api.mediastack.com/v1/news?access_key=48f77329c4b82990b3d341ec1060604f&languages=es&sort=published_desc&offset=0&limit=50&keywords=ciencia`;

    try {
        const resultText = await fetch(urlNews, {method : 'GET'});
        const data = await resultText.json();
        // console.log(data);
        drawNews(data);

    } catch (error) {
        console.log(error);
    }
};

const drawNews = (data) => {
    const divNews = document.querySelector('#news-content');
    divNews.innerHTML = '';

    const news = data.data;

    const newsArray = [];
    const headingsArray = [];

    let contador = 0;
    const MAX_CANTIDAD_NOTICIAS = 4;
    const URL_IMG_GENERICA = 'https://placeimg.com/200/400/tech';

    for (let item in news) {
        // console.log(news[item]);
        if (!(headingsArray.includes(news[item].title))) {
            headingsArray.push(news[item].title);
            newsArray.push(news[item]);
            contador += 1;
        }
        if (contador == MAX_CANTIDAD_NOTICIAS) {
            break;
        }
    }

    const mapReturn = newsArray.map((item, index) => {
        // Contenedor de la noticia
        const divElementNews = document.createElement('div');
        divElementNews.className = 'news-detail';
        
        // Contenedor de la imagen
        const containerImg = document.createElement('div');
        containerImg.className = 'news-img-container';
        // Imagen
        const imgNews = document.createElement('img');
        imgNews.className = 'news-img';
        imgNews.src = item.image == null ? URL_IMG_GENERICA : item.image;
        // Agregar la imagen
        containerImg.appendChild(imgNews);
        divElementNews.appendChild(containerImg);

        // Contenedor del texto de la noticia
        const containerNewsText = document.createElement('div');
        containerNewsText.className = 'news-text-detail';
        // Titulo de la noticia
        const newsTitle = document.createElement('h4');
        newsTitle.innerHTML = item.title;
        // Texto de la noticia
        const newsText = document.createElement('p');
        newsText.innerHTML = item.description.substring(0, 600) + ' ...';
        // Enlace de la noticia
        const newsAnchor = document.createElement('a');
        newsAnchor.innerHTML = 'Mas informacion >>';
        newsAnchor.href = item.url;
        newsAnchor.target = '_blank';
        // Agregar el texto
        containerNewsText.appendChild(newsTitle);
        containerNewsText.appendChild(newsText);
        containerNewsText.appendChild(newsAnchor);
        divElementNews.appendChild(containerNewsText);

        // Agregar noticia al contenedor
        divNews.appendChild(divElementNews);

        return index;
    });
};

const initSearchButton = () => {
    const reload = document.querySelector('#news-reload');
    reload.addEventListener('click', (e) => {
        callApi();
    });
};

// Asociar el evento clic al boton que recarga las noticias
initSearchButton();

// Cargar las noticias
callApi();