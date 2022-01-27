const music=document.querySelector("audio");
const img=document.querySelector("img");
const play=document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");


const songs =[{
    name:"prasad-1",
    title:"LOTUS LANE",
    artist:"loyalist"
},
{
    name:"prasad-2",
    title:"hnghiofgh",
    artist:"loya"
},{
    name:"prasad-3",
    title:"bfj",
    artist:"loy"
}]
//for play function
let isPlaying=false;
const playMusic= ()=>
{
isPlaying=true;
music.play();
play.classList.replace("fa-play","fa-pause");
img.classList.add("anime");
};

//for pause function
const pauseMusic= ()=>
{
isPlaying=false;
music.pause();
play.classList.replace("fa-pause","fa-play");
img.classList.remove("anime");
};

play.addEventListener('click',()=>{
    // if(isPlaying){
    //     pauseMusic();
    // }
    // else{
    //     playMusic();
    // }
    isPlaying ? pauseMusic(): playMusic();
});

//changing the music data
const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="/song"+songs.name + ".mp3";
    img.src="/img" + songs.name + " .jpg";
};
// function loadSong(songs) {
//     title.textContent = songs.displayname;
//     artist.textContent = songs.artist;
//     music.src = '../son'; //is not seeing the song.name
//     image.src = '../img/music2.jpg';  // is not seeing the image too
// }
songIndex=0;
// loadSong(songs)[2];
const nextSong=()=>{
    songIndex=(songIndex +1)%songs.length;
    // songIndex=1 % 3;
    loadSong(songs[songIndex]);
    playMusic();
};
const prevSong=()=>{
    songIndex=(songIndex -1 + songs.length)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
next.addEventListener("click",nextSong);
next.addEventListener("click",prevSong);