const API_URL = "http://localhost:8080";

export async function getAllAlbums() {
    const response = await fetch(API_URL+`/album/all`);
    const data = await response.json();
    //console.log(data);
    var list =[];
    data.forEach(element => {
        list.push(element);
    });
    return list;
}