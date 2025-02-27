addEventListener('DOMContentLoaded', async function() {
    document.querySelector("#delete").addEventListener("click", deleteSong)
    getAllSongs()
})

async function getAllSongs() {
    const response = await fetch("http://localhost:3000/api/songs")
    if(response.ok){
        const songs = await response.json()
        let html = ""
        for(let song of songs){
            html += `<option value="${song.id}">${song.title}</option>`
        }
        document.querySelector("#songDrpoDown").innerHTML = html
    }
}

async function deleteSong() {
    //get songID of selected song
    const songID = document.querySelector("#songDrpoDown option:checked").value
    const response = await fetch("http://localhost:3000/api/songs/" + songID, {
        method: "DELETE"
    });

    if(response.ok){
        // Successfully deleted song
        getAllSongs();
        alert("Song Deleted!")
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot delete song"
    }
}