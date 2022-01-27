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
      `<img src="${items.artwork}" alt="" onclick="togglePlay('${items.url}');" onclick="toggleTitle();">
      <p id="metaData">${items.name}</p>`;

      


  });

  

  
}

  streaming();

  
  var song = document.getElementsByTagName('audio')[0],
  sourceMp3 = document.getElementsByTagName('audio')[0];

  function togglePlay(music){
  song.setAttribute('src' , music)
};


// $(function togglePlay (music) {
//   var song = document.getElementsByTagName('audio')[0],
//       sourceMp3 = document.getElementsByTagName('audio')[0];
      

//       sourceMp3.src = music;


//   $('#player').click(function (e) {
     
//       if (song.paused) song.play();
//       else 
//       song.setAttribute('src' , music); 
  
//   });
//   $('#player').bind('click', function() {
//       if ($('#playback').attr('class') == 'fa fa-stop fa-lg beat')
//           $('#playback').attr('class', 'fa fa-play fa-lg');
//       else
//           $('#playback').attr('class', 'fa fa-stop fa-lg beat');
//   });

//   song.addEventListener('pause', function () {
//       song.setAttribute('src' , music);
//       song.currentTime = 0;
//       $('#playback').attr('class', 'fa fa-play fa-lg');
//   });



  
// });
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











  

  
  



  



    
