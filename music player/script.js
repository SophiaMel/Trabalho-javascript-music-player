const songs = [
   "badass.mp3",
  "dubstep.mp3",
  "goinghigher.mp3",
  "moose.mp3",
  "relaxing.mp3",
  "summer.mp3",
  
  ];


  
  const createSongList = () => {
    const list = document.createElement("ol");
    for (let i = 0; i < songs.length; i++) {
      var tmp = songs[i].slice(0,-4)
      const item = document.createElement("li");
      item.appendChild(document.createTextNode(tmp));
      list.appendChild(item);
      
      
    }
    return list
  };

  


  const songList = document.getElementById("songList");
songList.appendChild(createSongList());


songList.onclick = function (e) {
  const source = document.getElementById("source");
  source.src = "songs/" + e.target.innerText + ".mp3";

  document.getElementById(
    "currentSong"
  ).innerText = `Now Playing:  ${e.target.innerText}`;

  player.load();
  player.play();
};




    
  function playAudio() {
    if (player.readyState) {
      player.play();
    }
  }
  
  function pauseAudio() {
    player.pause();
  }




  const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
  const volume = e.target.value;
  player.volume = volume;

   
};
    

function updateprogress() {
  if (player.currentTime > 0) {
    const progressBar = document.getElementById("progress");
    progressBar.value = (player.currentTime / player.duration) * 100;

  }
  }
  const progress_bar = document.getElementById('progress');
  progress_bar.addEventListener('click', (e) => {

    let totalX = progress_bar.clientWidth;
    let mouseX = e.offsetX;
    let song_duration = player.duration;
    let new_time = parseInt((mouseX * song_duration) / totalX)
  
    player.currentTime =  new_time;
    progress_bar.value = (new_time * 100) / song_duration;  
  
  });




  
     
  

  
