

window.addEventListener("orientationchange", function() {                   
    if (window.matchMedia("(orientation: portrait)").matches) {
       
     }
    if (window.matchMedia("(orientation: landscape)").matches) {
      alert("Apologies but This is not optimize to work on a landscape view.Please revert it back to Portrait.");
     }
}, false);



//function isLandscape() {
 //   return (window.orientation === 90 || window.orientation === -90);
  //  alert("Apologies but This is not optimize to work on a landscape view.Please revert it back to Portrait.");
  //  location.reload();
//}