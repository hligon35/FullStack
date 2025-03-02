addEventListener('DOMContentLoaded', async function() {
    const response = await fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs) {
        html += `<li>${song.title} - ${song.artist} - ${song.username} - <a href="details.html?id=${song._id}">Details</a> - <a href="edit.html?id=${songID}">Edit Song</a></li>`
    }

    document.querySelector("#list_of_songs").innerHTML = html


})