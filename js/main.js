/* 
När jag jobbade med blogPost function och skulle använda appendChild
hade jag väldigt mycket problem.
Kollade på din kod och prövade den i mitt projekt vilket fungerade men jag förstod inte
alls hur det fungerade så jag började om med dom.
Jag steppade igenom koden i chrome och insåg att jag behövde använda 
getelementbyID istället för att bara använda .section .title osv.
*/
let inputNmr = document.querySelector("#input");
var titleTracker = 1;
function blogPost(input){

   if(titleTracker > 1){
        var answer = window.confirm("This action will delete previous blog posts!");
        if (answer != true) {
            return;
        }
   }
    
    var allSections = document.querySelectorAll("section");
    for (var i = 0; i < allSections.length; i++) {
    allSections[i].remove();
    }
    titleTracker = 1;

    for (var i = 0; i < input; i++){
     var parent = document.querySelector("main");

     var section = document.createElement("section");  // Här skapar jag en ny section
     var title = document.createElement("h3"); // Här skapar jag en ny h3
     var text = document.createElement("p"); // Här skapar jag en ny p

     title.innerText = "Title " + titleTracker; // Här ändrar jag texten i den nyskapade h3:an
     text.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lorem tellus, blandit id egestas ac, accumsan consequat odio. Aliquam erat volutpat. Vivamus eleifend neque quam, iaculis egestas neque condimentum vitae. Maecenas ac tortor non nibh efficitur ullamcorper. Sed euismod, arcu id malesuada fermentum, sem mauris facilisis quam, vel tincidunt odio enim nec ipsum. Donec feugiat velit ac odio congue, sed viverra orci eleifend. Quisque aliquam porta eros eget molestie.";
      // Här (ovanför) ändrar jag texten i den nyskapade paragrafen
     section.id = "section" + i; // Här lägger jag ett unikt id på den nya sectionen

      document.getElementById("main").appendChild(section); // Här lägger jag den nyskapade sectionen i Main taggen
      document.getElementById("section" + i).appendChild(title); // Här lägger jag h3:an i den nya sectionen
      document.getElementById("section" + i).appendChild(text); // Här lägger jag paragrafen i den nya sectionen
      editer(title);
      editer(text);
      titleTracker ++;
    }
}

document.querySelector("button").onclick = function(){ //Här lägger jag en onclick function på min knapp som gör att sidan uppdateras med
    blogPost(parseInt(inputNmr.value)); //               den nya angivna talets blogposts (genom blogPost functionen), anledningen till varför jag ville ha knappen var
}//                                                      så att sidan inte uppdaterade medans man skrev in ett nytt tal i rutan

document.getElementById("plus").onclick = function(){
    var parent = document.querySelector("main");

     var section = document.createElement("section");
     var title = document.createElement("h3");
     var text = document.createElement("p");

     title.innerText = "Title " + titleTracker;
     text.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lorem tellus, blandit id egestas ac, accumsan consequat odio. Aliquam erat volutpat. Vivamus eleifend neque quam, iaculis egestas neque condimentum vitae. Maecenas ac tortor non nibh efficitur ullamcorper. Sed euismod, arcu id malesuada fermentum, sem mauris facilisis quam, vel tincidunt odio enim nec ipsum. Donec feugiat velit ac odio congue, sed viverra orci eleifend. Quisque aliquam porta eros eget molestie.";

     section.id = "section" + titleTracker;

      document.getElementById("main").appendChild(section);
      document.getElementById("section" + titleTracker).appendChild(title);
      document.getElementById("section" + titleTracker).appendChild(text);
      editer(title);
      editer(text);
      titleTracker ++;
}

function editer(text){
    text.onclick = function(){
        text.contentEditable = true; //Här gör jag ett stycke text, som jag stoppar in, redigerbart
    }
}