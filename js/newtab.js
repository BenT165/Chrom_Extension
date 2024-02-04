
const clientID = 'aPjeYvJLySFlqz0GbtMnraNFnogsm1pc-gk-9jxkKNA';
let endpoint= 'https://api.unsplash.com/photos/random/?client_id=${clientID}';

fetch(endpoint)
.then(function (response) {
    return response.json()
})
.then(function (jsonData) {
    console.log(jsonData)    
})
