
function logClasses()
{
 document.getElementById("heading").innerHTML = "Sup Johnny" 
 var playersRef = firebase.database().ref("Classes/");
 playersRef.push({
   Classes: { 
      classes: "Joe"
   }
});
}
