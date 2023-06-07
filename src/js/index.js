let topWatching_anime_card = document.getElementById('top-watching-content');
let topWatched_anime_card = document.getElementById('top-watched-content');

for(let i = 0; i < animedata.length; i++){

    let sum = 0
    let animeRating = animedata[i]["rating"];
    let ouputValue = Object.values(animeRating);

    animedata.sort((a, b) => {
        const avgRatingA = calculateAverageRating(a.rating);
        const avgRatingB = calculateAverageRating(b.rating);
        return avgRatingB - avgRatingA;
    });

    function calculateAverageRating(rating) {
        const sum = rating.story + rating.characters + rating.songs + rating.action;
        return sum / 4;
    }
    
    let animeType = animedata[i]["type"];
    let animeImage = animedata[i]["image"];
    let animeName = animedata[i]["name"];
    let animeAlt =  animeName + " Image";
    let ongoingAnime = animedata[i]["status"];
    let urlLink = "anime.html?id=" + i;

    if(ongoingAnime === "Ongoing" && i <= 4 && animeType === "Series"){
        animeCardDiv(i, animeImage, animeAlt, animeName, topWatching_anime_card, urlLink);
    }
    if(ongoingAnime === "Completed" && i <= 4 && animeType === "Series"){
        animeCardDiv(i, animeImage, animeAlt, animeName, topWatched_anime_card, urlLink);
    }
    
}
function animeCardDiv(i, animeImage, animeAlt, animeName, divName, urlLink){
    //Will create the Card div
    let createAnimeCard = document.createElement('div');
    createAnimeCard.setAttribute('class', 'anime-card');
    divName.appendChild(createAnimeCard);

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