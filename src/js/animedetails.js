let getURL = window.location.href;
var url = new URL(getURL);
let anime_D_ID = url.searchParams.get("id");;

let anime_D_Name = animedata[anime_D_ID]["name"];
let anime_D_Image = animedata[anime_D_ID]["image"];
let anime_D_Genres = animedata[anime_D_ID]["genres"];
let anime_D_Status = animedata[anime_D_ID]["status"];
let anime_D_Seasons = animedata[anime_D_ID]["seasons"];
let anime_D_Episodes = animedata[anime_D_ID]["episodes"];
let anime_D_Rating = animedata[anime_D_ID]["rating"];
let anime_D_EngDUB = animedata[anime_D_ID]["engDUB"];

let averageRatingSum = anime_D_Rating.story + anime_D_Rating.characters + anime_D_Rating.songs + anime_D_Rating.action;
averageRatingSum = averageRatingSum / 4;

let sum_of_episode = 0;
let list_of_seasons = Object.values(anime_D_Episodes);
for (let i = 0; i < list_of_seasons.length; i++) {
    sum_of_episode += list_of_seasons[i];
}

document.getElementById('anime-image').innerHTML = `<img src="${anime_D_Image}" alt="${anime_D_Name} Image"/>`;
document.getElementById('anime-name').innerHTML = `${anime_D_Name}`;
document.getElementById('anime-rating').innerHTML = `${averageRatingSum}`;
document.getElementById('anime-genres').innerHTML = `${anime_D_Genres}`;
document.getElementById('anime-status').innerHTML = `${anime_D_Status}`;
document.getElementById('anime-seasons').innerHTML = `${anime_D_Seasons}`;
document.getElementById('anime-episodes').innerHTML = `${sum_of_episode}`;
document.getElementById('dub-available').innerHTML = `${anime_D_EngDUB}`;