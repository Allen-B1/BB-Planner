var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
 var joey = data.val();
 var data = sessionStorage.getItem("name")
 window.names = joey.name
 console.log(data);
if(data == names)
{
 window.identification = joey.ID
 console.log(window.identification);
}
 
});
function logClasses()
{
 var classers = firebase.database().ref("Classes/" + window.identification);
 var classes = []
 var algC4 = document.getElementById("AlgebraC");
 var SocialS = document.getElementById("SSG");
 var spanish = document.getElementById("SpanishH");
 var science = document.getElementById("ScienceH");
 var english = document.getElementById("EnglishT");
 var englishd = document.getElementById("EnglishD");
 if (english.checked == true)
 {
  englishd.checked = false
 }
 if (englishd.checked == true)
 {
 english.checked =  false
 }

 if(algC4.checked == true)
 {
  classes.push(algC4.value)
 }
   if (SocialS.checked == true)
 {
  classes.push(SocialS.value)
 }
  if (spanish.checked == true)
 {
  classes.push(spanish.value)
 }
 if (science.checked == true)
 {
  classes.push(science.value)
 }
 if (english.checked == true)
 {
  classes.push(english.value)
 }
if (englishd.checked == true)
{
 classes.push(englishd.value)
}
classes.push("Specials")
 classers.update({
     name: window.names,
     classes: classes
});
 var number = 0
 for(i=0;i<classes;i++)
 {
  var classers = firebase.database().ref("Classes/" + window.identification + "/Homework/" + classes[number]);
 classers.update({
     homework: "No homework"
});
       var bob = firebase.database().ref("Completion/")
       bob.set("Data is stored", function(error) {
  if (error) {
    alert("Classes failed to register, please try again.");
  } else {
   number += 1
  }
}); 
  alert(number);
 }
 if(number == 6)
 {
     var bob = firebase.database().ref("Completion/")
       bob.set("Data is stored", function(error) {
  if (error) {
    alert("Classes failed to register, please try again.");
  } else {
   location.href = "index.html";
  }
}); 
 }
}
function UnCheck(obj) {
    var eng = document.getElementsByClassName("english");
    for (var i = 0; i < eng.length; i++) {
        eng[i].checked = false;
    }
    obj.checked = true;
}

