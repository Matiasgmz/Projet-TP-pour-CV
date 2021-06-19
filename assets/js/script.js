function openNav() {
    document.getElementById("mySidenav").style.width = "15rem";
}
  document.querySelector(".open").addEventListener("click", openNav);
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  document.querySelector(".closebtn").addEventListener("click", closeNav);