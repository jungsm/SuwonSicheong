$( function() {
  $( "#layer").draggable();
} );



document.querySelector("#layer button").addEventListener("click", function () {
    document.querySelector("#layer").style.display = "none";
  });
  document.querySelector(".warringclose").addEventListener("click", function () {
    document.querySelector(".browserWarning").style.display = "none";
  });
