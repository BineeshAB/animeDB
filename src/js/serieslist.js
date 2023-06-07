let anime_card = document.getElementById('series-page-content');

for(let i = 0; i < animedata.length; i++){
    let animeImage = animedata[i]["image"];
    let animeName = animedata[i]["name"];
    let animeAlt =  animeName + " Image";
    let urlLink = "anime.html?id=" + i;
    if(animedata[i]["type"] === "Series"){
        animeCardDiv(i, animeImage, animeAlt, animeName, urlLink);
    }
}
function animeCardDiv(i, animeImage, animeAlt, animeName, urlLink){
    //Will create the Card div
    let createAnimeCard = document.createElement('div');
    createAnimeCard.setAttribute('class', 'anime-card');
    anime_card.appendChild(createAnimeCard);

    let createAnimeImageDiv = document.createElement('div');
    createAnimeImageDiv.setAttribute('class', 'anime-card-image');
    createAnimeCard.appendChild(createAnimeImageDiv);

    let createAnimeImgLinkDiv = document.createElement('a');
    createAnimeImgLinkDiv.setAttribute('href', urlLink);
    createAnimeImageDiv.appendChild(createAnimeImgLinkDiv);

    let createAnimeImgDiv = document.createElement('img');
    createAnimeImgDiv.setAttribute('src', animeImage);
    createAnimeImgDiv.setAttribute('alt', animeAlt);
    createAnimeImgLinkDiv.appendChild(createAnimeImgDiv);

    let createAnimeNameDiv = document.createElement('div');
    createAnimeNameDiv.setAttribute('class', 'anime-name-card');
    createAnimeCard.appendChild(createAnimeNameDiv);

    let createAnimeNameLinkDiv = document.createElement('a');
    createAnimeNameLinkDiv.setAttribute('href', urlLink);
    createAnimeNameDiv.appendChild(createAnimeNameLinkDiv);

    let createAnimeName = document.createElement('div');
    createAnimeName.setAttribute('class', 'anime-name');
    createAnimeName.innerText = animeName;
    createAnimeNameLinkDiv.appendChild(createAnimeName);
}