window.numb = 0
window.kh = 0
window.array = [];
window.tarray = [];
window.hw = [];
window.yu = [];
window.bo = [];
window.boy = [];
window.j = 0
var playersRef = firebase.database().ref("Classes/");
playersRef.on("child_added", function(data, prevChildKey) {
  var joey = data.val()
  var names = sessionStorage.getItem("name")
 var nameS = sessionStorage.getItem("nameS");
   if(joey.name == names)
   {
window.lclass = joey.classes
for(i=0;i<window.lclass.length;i++)
{
if(window.lclass[i] != "None")
{
 window.boy.push(window.lclass[i]);
}
}
   }
   if(joey.name == nameS)
   {
window.fclass = joey.classes
for(i=0;i<window.fclass.length;i++)
{
if(window.fclass[i] != "None")
{
 window.bo.push(window.fclass[i]);
}
}
     window.identification = joey.ID
   }
  match()
  });
function homework()
{
for(i=0;i<window.array.length;i++)
{

var playersRef = firebase.database().ref("Classes/" + window.identification + "/Homework/"+ window.fclass[window.yu[i]]);
playersRef.on("child_added", function(data, prevChildKey) {
  var joey =  data.val()
  window.hw.push(joey);
})
}
}
function match()
{
if(window.boy != undefined && window.bo != undefined)
{
  if(window.kh == 0)
  {
  for(i=0;i<window.bo.length;i++)
 {
   console.log(window.bo[window.numb])
   console.log(window.boy[window.numb])
if(window.bo[window.numb] == window.boy[window.numb])
{
window.array.push(window.bo[window.numb])
window.yu.push(window.numb)
  console.log(window.array);
  console.log(window.yu);
}
window.numb += 1
}
    homework()
    window.kh += 1
    loadNotes()
  }
}
}
function addNote(title, text) {
   var div = $("<div/>", {
        "class": "mdl-card mdl-shadow--2dp note"            
   });
    div.appendTo(".mdl-layout__content")
        
  title = title || window.array[window.j];
        
    var title_e = $("<div/>", {
        "class": "mdl-card__title", 
        "contenteditable": "false"
    });
    title_e.appendTo(div);
        
    var title_text = $("<input>", {
        "class": "mdl-card__title-text"
    });
    
    title_text.val(title);
    title_text.appendTo(title_e);
   

       text = text || window.hw[window.j]; 
    var sup_text = $("<div/>", {
        "class": "mdl-card__supporting-text",
        "contenteditable": ""
    });
    sup_text.html(text);
    sup_text.appendTo(div);
    
    var menu = $("<div/>", {
        "class": "mdl-card__menu" 
    });
    menu.appendTo(div);
    
    window.j += 1
     
    return {card: div, title: title, text: text};
  
}

window.classes = [];
window.numj = 0
function addAndSaveNote(title, text, index) {
 
    var note = addNote(title, text);
    window.obj = {
        title: note.title,
        text: note.text
    }

     

    return note;
    
}

function loadNotes() {
       for(i=0;i<window.array.length;i++){
       var note = addAndSaveNote();
        if(note)
     function load(item, index) {
                if(item)
                    addAndSaveNote(item.title, item.text, index); 
            };
       }
}

