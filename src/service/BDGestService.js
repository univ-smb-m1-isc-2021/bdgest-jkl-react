const API_URL = "http://localhost:8080";

export async function getAllAlbums() {
    const response = await fetch(API_URL+`/album/all`);
    const data = await response.json();
    //console.log(data);
    var list =[];
    data.forEach(element => {
        list.push(element);
    });
    console.log(list);
    return list;
}

export async function getAllSeries() {
    const response = await fetch(API_URL+`/serie/all`);
    const data = await response.json();
    var list =[];
    data.forEach(element => {
        list.push(element);
    });
    console.log(list);
    return list;
}

export async function getAlbumById(id) {
    const response = await fetch(API_URL+`/album/`+id);
    const data = await response.json();
    console.log(data);
    return data;
}

export async function getSerieById(id) {
    const response = await fetch(API_URL+`/serie/`+id);
    const data = await response.json();
    console.log(data);
    return data;
}

export async function signup(pseudo,email,password) {
    const response = await fetch(API_URL+`/api/auth/signup`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "username": pseudo,
            "email": email,
            "password": password}),
    });

    const data = await response;
    console.log(data);
    return data;
}

export async function signin(emailorpassword,password) {
    const response = await fetch(API_URL+`/api/auth/signin`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "usernameOrEmail": emailorpassword,
            "password": password}),
    });

    const data = await response;
    console.log(data);
    return data;
}

export async function deleteAccount(id) {
    const response = await fetch(API_URL+`/compte/delete/`+id);
    const data = await response.json();
    console.log(data);
    return data;
}

export async function getAccount(id) {
    const response = await fetch(API_URL+`/compte/`+id);
    const data = await response.json();
    console.log(data);
    return data;
}

export async function addToCollection(idCompte,idAlbum){
    const response = await fetch(API_URL+`/compte/`+idCompte+"/addcollection/"+idAlbum);
    const data = await response.json();
    console.log(data);
    return data;
}

export async function deleteFromCollection(idCompte,idAlbum){
    const response = await fetch(API_URL+`/compte/`+idCompte+"/deletecollection/"+idAlbum);
    const data = await response.json();
    console.log(data);
    return data;
}

export async function getCollection(idCompte){
    const response = await fetch(API_URL+`/compte/`+idCompte+"/collection");
    const data = await response.json();
    console.log(data);
    return data;
}