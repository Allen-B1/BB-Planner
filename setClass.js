function logClasses()
{
 var classers = firebase.database().ref("Classes/");
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
 document.getElementById("heading").innerHTML = "Sup Johnny" 

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

 classers.push({
      classes: classes
   
});
}
function UnCheck()
{
  var algC4 = document.getElementById("AlgebraC");
 var SocialS = document.getElementById("SSG");
 var spanish = document.getElementById("SpanishH");
 var science = document.getElementById("ScienceH");
 var english = document.getElementById("EnglishT");
 var englishd = document.getElementById("EnglishD");
 if (english.checked == false && englishd.checked == false)
 {
  alert("HOORAY")
 }

}

