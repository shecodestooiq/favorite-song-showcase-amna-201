function displaySongInfo() {
    event.preventDefault();
    const favSong= document.getElementById("songname").value;
    const link =document.getElementById("youtubelink").value;
    const desc = document.getElementById("description").value;
    const listenedYear = document.getElementById("year").value;

    document.getElementById("display-song").innerHTML=favSong;
    document.getElementById("display-des").innerHTML=desc;
    document.getElementById("display-year").innerHTML=listenedYear;
    
    let youtube ="https://www.youtube.com/embed/"+ link;
    document.getElementById("display-yotL").innerHTML='<iframe width= "600"  height="400" src=""'+youtube+'"framborder="1" >';
    document.getElementById("info").style.display="none";
    document.getElementById("display").style.display="block";


}

module.exports = {
    displaySongInfo: displaySongInfo,
};
