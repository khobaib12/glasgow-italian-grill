let menuOpen = false;
const mobileMenuDrawer = document.getElementById("mobileMenuDrawer");

window.onload = () => {
  // When the menu icon is clicked...
  document.getElementById("mobileNavMenuButton").addEventListener("click", () => {
    // If the menu is open, close it
    if (menuOpen){
      mobileMenuDrawer.style.display = "none";
    } else {
       // If the menu is closed, open it
      mobileMenuDrawer.style.display = "flex";     
    }

    // Toggle the menu state variable
    menuOpen = !menuOpen;
  });
}