const streaming = async () => {

    const response = await fetch("../streams.json")
    const data = await response.json()
    const items = data.Streams
    const cont = document.querySelector('.radioGrid-container');
    var i = 0;
  
  
    items.forEach(items =>  {
      
      const container = document.createElement("div");
      container.classList.add(`item${++i}`);
      cont.appendChild(container);
      
      container.innerHTML = 
      `<img src="${items.artwork}" alt="" onclick="togglePlay('${items.url}' , '${items.artwork}' , '${items.name}');">`;

      


  });

  

  
}

  streaming();

  
  var song = document.getElementsByTagName('audio')[0],
  sourceMp3 = document.getElementsByTagName('audio')[0];
  
  var pic = document.getElementsByTagName('img')[0],
    picsrc = document.getElementsByTagName('img')[0];
    console.log(pic);

  var titleTrack = document.getElementsByTagName('p')[0],
      titleText = document.getElementsByTagName('p')[0];
      console.log(titleTrack);


  function togglePlay(music , art , title){
  song.setAttribute('src' , music)
  pic.setAttribute('src', art)
  titleTrack.innerText = title

};






$(function togglePlay (music) {
  var song = document.getElementsByTagName('audio')[0],
      sourceMp3 = document.getElementsByTagName('audio')[0];
      

      sourceMp3.src = music;


  $('#player').click(function (e) {
     
      if (song.paused) song.play();
      else 
      song.setAttribute('src' , music); 
  
  });
  $('#player').bind('click', function() {
      if ($('#playback').attr('class') == 'fa fa-stop fa-lg beat')
          $('#playback').attr('class', 'fa fa-play fa-lg');
      else
          $('#playback').attr('class', 'fa fa-stop fa-lg beat');
  });

  song.addEventListener('pause', function () {
      song.setAttribute('src' , music);
      song.currentTime = 0;
      $('#playback').attr('class', 'fa fa-play fa-lg');
  });



  
});
var interval = 400;
var timer = window.setInterval(function() {
  
      var song = document.getElementsByTagName('audio')[0]
      if (song.currentTime == 0){
          $('#playback').attr('class', 'fa fa-play fa-lg');
          
      }else{
          $('#playback').attr('class', 'fa fa-stop fa-lg beat');
          
          
      }
      if (yourCodeHasBeenExecuted === true) {
        window.clearInterval(timer);
     }

     
      },interval);


let mediaSession = navigator.mediaSession;

if ("mediaSession" in navigator){
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Mussio",
    artist: "JaviC Dev",
    artwork: [{src: "#"}]
  });}











  

  
  



  



    
