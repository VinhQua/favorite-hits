const epicMix = [
    "Time to Pretend",
    "O-o-oh Child",
    "Wish You Were Here",
    "Heroes",
    "I Put a Spell on You",
    "Call Me",
    "Paper Planes",
    "Jolene",
    "You Don't Own Me",
    "Fast Car",
    "Run the World (Girls)",
    "Superstition"
  ];
  
const button = document.querySelector(".show-list");
const mixList = document.querySelector(".mix");

button.addEventListener('click',function(){
    mixInfo(epicMix);
    mixList.classList.remove("hide");
    button.classList.add("hide");
});

const mixInfo = function(mix){
   mix.forEach(function(song,index){
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span class="song-number">#${index + 1} </span><span class="song">${song} </span>`
        mixList.append(listItem);
    }); 
}; 