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

  
  var myAudio = document.getElementById("my-audio");
  const title = document.querySelector('.titleTrack');


      function togglePlay(music){
      myAudio.setAttribute('src' , music)
};

  
  



  



    
