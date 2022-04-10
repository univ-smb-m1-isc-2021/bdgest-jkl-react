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

export async function getAlbumById(id) {
    const response = await fetch(API_URL+`/album/`+id);
    const data = await response.json();
    console.log(data);
    return data;
}

export async function signin(pseudo,email,password) {
    const response = await fetch(API_URL+`/compte/signup/`+pseudo+"/"+email+"/"+password);
    const data = await response.json();
    console.log(data);
    return data;
}

export async function deleteAccount(id) {
    const response = await fetch(API_URL+`/compte/delete/`+id);
    const data = await response.json();
    console.log(data);
    return data;
}