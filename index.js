function displaySongInfo() {
    event.preventDefault();
    const favSong= document.getElementById("songname").value;
    const link =document.getElementById("youtubelink").value;
    const desc = document.getElementById("description").value;
    const listenedYear = document.getElementById("year").value;

    document.getElementById("display-song").innerHTML=favSong;
    document.getElementById("display-des").innerHTML=desc;
    document.getElementById("display-year").innerHTML=listenedYear;
    
    const youtube = extractVideoId(link);
    
    if (youtube) {
        const sour = "https://www.youtube.com/embed/" + youtube;
        const iframe = document.createElement("iframe");
        const newSour = document.getElementById("newsour");
        newSour.innerHTML = "";
        newSour.appendChild(iframe);
    } else {
console.log("no vid");    
}

    document.getElementById("info").style.display="none";
    document.getElementById("display").style.display="block";


}

module.exports = {
    displaySongInfo: displaySongInfo,
};