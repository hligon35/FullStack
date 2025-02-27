addEventListener('DOMContentLoaded', async function() {
    const urlParam = new URLSearchParams(window.location.search)
    const songID = urlParam.get("id")
    console.log(songID)

    const response = await fetch("http://localhost:3000/api/songs/" + songID)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading += '${song.title}'
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html += `
        <h2>Title - ${song.title} </h2>
        <h3>Artist - ${song.artist} </h3>
        <p>Release Date - ${song.releaseDate} </p>
        <p>Popularity - ${song.popularity} </p>
    `
    document.querySelector("div").innerHTML = html
})