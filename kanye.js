const baseUrl = 'https://api.kanye.rest';
const logo = document.querySelector('img');
const container = document.getElementById('quotescontainer');
const baseUrl2 = 'https://api.giphy.com/v1/gifs/search?';
const key = 'O188wTeQCE3c03RPXtIoghGkTt9lGGtA';
let URl;
logo.addEventListener('click', getQuote);




function getQuote() {


    fetch(baseUrl)
        .then(function (result) {
            //console.log(result);
            return result.json();
        })
        .then(function (json) {
            //console.log(json);
            displayQuotes(json);
        })
    getGiph();
}

async function getGiph() {
    URl = `${baseUrl2}api_key=${key}&q=kim&kardashian&rolling&eyes&limit=25&offset=0&rating=g&lang=en`
    console.log('URL:', URl);
    await fetch(URl, {
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(function (result) {
            //console.log(result);
            return result.json();
        })
        .then(function (json) {
            console.log(json)
            displayGif(json);
        })


}
let author = document.querySelector('p');
let quote = document.createElement('p');


while (author.firstChild) {
    author.removeChild(author.firstChild);
}

while (quote.firstChild) {
    quote.removeChild(quote.firstChild);
}

function displayQuotes(data) {

    author.innerText = '- Kanye West'
    //console.log(data);
    quote.innerText = `${data.quote}`
    container.appendChild(quote);
}



function displayGif(results) {
    let img = document.createElement('img')
    const imagecontainer = document.getElementById('imgcontainer');

    while (imagecontainer.firstChild) {
        imagecontainer.removeChild(imagecontainer.firstChild);
    }


    console.log(results.data);
    let gifs = results.data
    let randomGif = Math.floor(Math.random() * (gifs.length - 0) + 1);
    console.log(gifs[randomGif])
    img.src = gifs[randomGif].images.original.url
    imagecontainer.appendChild(img);
}
