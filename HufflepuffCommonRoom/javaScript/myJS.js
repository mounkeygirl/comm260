// <div class = sideBar>
//   <p ><a href ="index.html" class="sideButton">Home</a></p>
//   <p ><a href ="famous.html" class="sideButton">Famous Hufflepuffs</a></p>
//   <p><a href = "gallery.html" class = "sideButton">Gallery</a></p>
//   <p><a href= "games.html" class = "sideButton">Games</a></p>
//   <p><a href ="quotes.html" class = "sideButton">Quotes and Memes</a></p>
//   <p ><a href="newToHarryPotter.html" class="sideButton">New to Harry Potter?</a></p>
//
//   </div>


//Hufflepuff Profiles
//declare variables
  var newtSca = new HuffProfile("Newt Scamander", "Author of the book 'Fantiastic Beasts and Where to Find Them'", "image/newt001.jpg", "Newt Scamander looking worried on a street in the US in the 1930s.");
  var cedric = new HuffProfile("Cedric Diggory","One of the two Hogwarts champions in the Tri-Wizard tournament, and seeker of the Hufflepuff quiddich team.","image/cedric001.jpg","Cedric Diggory in the hallway at Hogwarts wearing a yellow scarf.");
  var helga = new HuffProfile("Helga Hufflepuff","The founder of Hufflepuff house. Good friends with Rowena Ravenclaw","image/helga001.png","A sepeia tone picture of Helga Hufflepuff looking either amused or annoyed. She's holding a small cup rougly the size of her hand that resembles a trophy");

//make constructor
  function HuffProfile(name,info,photo,altText){
    this.name=name;
    this.info=info;
    this.photo=photo;
    this.altText=altText;
    }

//make new profile based on data
function makeNewProfile(HuffProfile){
  return "<h2>"+HuffProfile.name+"</h2><p>"+HuffProfile.info+"</p><br><img src='"+HuffProfile.photo+"' alt='"+HuffProfile.alt+"'/>";

}
//
var index = new MenuItem("Home","../index.html");

// console.log(index.name);

function MenuItem(name, link){

  this.name=name;
  this.link=link;
}



function makeSideMenu(MenuItem){
  console.log(MenuItem.name);
  console.log(MenuItem.link);

  return
  // "<div class = sideBar><p ><a href ='"menuItem.link"' class='"menuItem.link"'>"Home"</a></p></div>"
  "<div class = sideBar><p ><a href ='"+MenuItem.link+"' class='sideButton'>"+MenuItem.name+"</a></p></div>";

  // "<p><a href ='"+../index.html+"' class='sideButton'>Home</a></p>"

}

// console.log(index.link);

document.getElementById("test").innerHTML = makeSideMenu(index);
