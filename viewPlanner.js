window.numb = 0
window.lclass = [];
window.fclass = [];
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
  alert(window.lclass[window.numb]);
if(window.fclass[window.numb] == window.lclass[window.numb])
{
console.log(window.fclass[window.numb])
}
}