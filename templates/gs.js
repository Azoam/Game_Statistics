 //Global Variables
 Game = null;
 const OWStats = require('overwatch-stats') 
 

$(document).ready( () =>{
 $("#pg").click( () =>{
     changeCurrent('pg');
     console.log("Changed game to PUBG");
 });
 
 $("#ow").click( () =>{
     changeCurrent('ow');
     console.log("Changed game to PUBG");
 });
 
 
 $("#d2").click( () =>{
     changeCurrent('d2');
     console.log("Changed game to PUBG");
 });
 
 
 
 $("#ll").click( () =>{
     changeCurrent('ll');
     console.log("Changed game to PUBG");
 });
 
 $("#search").click(() =>{
     if(Game == null){
        alert("Make sure to specify a game first!");
     }

     else{
         statistics = search($("#username").val(),Game);
         console.log($("#username").val());
     }
 });

 $("#username").keypress(function(e){
     var key = e.which;
     if(key == 13){
        $("#search").click();
     }
 });

 
});

function changeCurrent(newGame){
    Game = newGame
}

function search(user,game){
    r = null;
    if(game == 'ow'){
        r = owSearch(user);
    }
    else if(game == 'd2'){
        r = d2Search(user);
    }
    else if(game == 'll'){
        r = llSearch(user);
    }

}

function owSearch(user){
    OWStats.load(user).then(data =>{
        let stats = new OWStats(data)
        console.log(stats)
        return stats
    })
}

























