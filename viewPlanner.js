window.numb = 0

var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  var names = sessionStorage.getItem("name")
 var nameS = sessionStorage.getItem("nameS");
   if(joey.name == names)
   {
window.lclass = joey.classes
   }
   if(joey.name == nameS)
   {
window.fclass = joey.classes
   }
  match()
  });
function match()
{


if(window.lclass != undefined && window.fclass != undefined)
{
  console.log(window.lclass)
  console.log(window.fclass)
}
}
