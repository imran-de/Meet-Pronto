// Get the button, and when the user clicks on family, execute myFunction
document.getElementById("categorylist").onclick = function() {myFunction()};
// Get the button, and when the user clicks on family category, execute myyFunction
document.getElementById("popupicon2").onclick = function() {myyFunction()};
// Get the button, and when the user clicks on family category, execute dateandTimeFunction
document.getElementById("popupicon3").onclick = function() {dateandTimeFunction()};
// Get the button, and when the user clicks on family Tilbake button, execute closeFunction
document.getElementById("close").onclick = function() {closeFunction()};
// Get the button, and when the user clicks on family category Tilbake button, execute close2Function
document.getElementById("close2").onclick = function() {close2Function()};
// Get the button, and when the user clicks on select time and date page Tilbake button, execute close3Function
document.getElementById("close3").onclick = function() {close3Function()};
//Get the button when click on the mote dise button
document.getElementById("more-info").onclick = function() {moreinfo()};
//Get the button archive page call front fw category
document.getElementById("bigbutton").onclick = function() { bigbuttonCatogory() };

/* CloseFunction toggles removing the show class, which is used to return back page */
function closeFunction(){
  document.getElementById("showcategory").classList.remove("show");
}
/* Close2Function toggles removing the show class, which is used to return back page */
function close2Function(){
  document.getElementById("showcategory2").classList.remove("show");
  document.getElementById("showcategory").classList.toggle("show");
}
/* Close3Function toggles removing the show class, which is used to return back page */
function close3Function(){
  document.getElementById("select-time-and-date").classList.remove("show");
  document.getElementById("showcategory2").classList.toggle("show");
}

/* myFunction toggles between adding and removing the show class, which is used to hide and show content */
function myFunction() {
  document.getElementById("showcategory").classList.toggle("show");
  document.getElementById("showcategory2").classList.remove('show');
}
/* myyFunction toggles between adding and removing the show class, which is used to hide and show content */
function myyFunction() {
  document.getElementById("showcategory2").classList.toggle("show");
  document.getElementById("showcategory").classList.remove("show");
}
/* dateandTimeFunction toggles between adding and removing the show class, which is used to hide and show content */
function dateandTimeFunction() {
  document.getElementById("select-time-and-date").classList.toggle("show");
  document.getElementById("showcategory2").classList.remove("show");
}

//archive page js script

// more info warrnig toggle add
function moreinfo() {
  document.getElementById('hide-click-box').classList.add("remove");
  document.getElementById('show-onclick-box').classList.remove("remove");
}
//front page 1st bigbutton onclick category box select show function
function bigbuttonCategory() {
  document.getElementById('bigbuttonCatogory').classList.toggle('remove');
}
//close the pop up on archive page catgory select option
function closecatgory() {
  document.getElementById('bigbuttonCatogory').classList.add("remove");
}