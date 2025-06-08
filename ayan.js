document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.getElementById("contactBtn");
  const contactSection = document.getElementById("contactSection");
  const aboutBtn = document.getElementById("aboutBtn");
  const aboutSection = document.getElementById("aboutSection");
  const homeBtn = document.getElementById("homeBtn");
  const hireBtn = document.getElementById("hireBtn");
  const projectBtn = document.getElementById("projectBtn"); // ✅ Added
  const projectList = document.getElementById("projectList");
  const skillBtn = document.getElementById("skillBtn");     // ✅ Added
  const skillList = document.getElementById("skilllist");
  const bio = document.getElementById("bio");
  const img1= document.getElementById("img1");

  
  function checkAndToggleVisibility() {
    if (aboutSection.classList.contains("show") || contactSection.classList.contains("show")) {
      img1.style.display = "none";
      bio.style.display = "none";
    } else {
      img1.style.display = "block";
      bio.style.display = "block";
    }
  }
  

  contactBtn.addEventListener("click", () => {
      if (contactSection.classList.contains("show")){
        contactSection.classList.remove("show");
        img1.classList.remove("hide");
        checkAndToggleVisibility() 
      

      }else{
        contactSection.classList.add("show");
        img1.classList.add("hide");
        checkAndToggleVisibility() 
      
      }
  });

  aboutBtn.addEventListener("click", () => {
    if (aboutSection.classList.contains("show")) {
      aboutSection.classList.remove("show");
      img1.classList.remove("hide");
      checkAndToggleVisibility() 
      
    } else {
      aboutSection.classList.add("show");
      img1.classList.add("hide");
      checkAndToggleVisibility() 

    }
    
  });

  homeBtn.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
      window.location.reload();
  });

  hireBtn.addEventListener("click", () => {
      const phone = "919123885967";
      const message = "Hi Ayan, I saw your portfolio and I’m interested in hiring you!";
      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${phone}?text=${encodedMessage}`;
      window.open(url, "_blank");
  });

  projectBtn.addEventListener("click", () => {
    if (projectList.classList.contains("show")) {
      // If project list is already open, close it and show bio
      projectList.classList.remove("show");
      bio.classList.remove("hide");
    } else {
      // Open project list, hide skill list and bio
      projectList.classList.add("show");
      skillList.classList.remove("show");
      skillList.classList.add("hide");
      bio.classList.add("hide");
    }
  });
  
  skillBtn.addEventListener("click", () => {
    if (skillList.classList.contains("show")) {
      // If skill list is already open, close it and show bio
      skillList.classList.remove("show");
      skillList.classList.add("hide");
      bio.classList.remove("hide");
     
    } else {
      // Open skill list, hide project list and bio
      skillList.classList.remove("hide");
      skillList.classList.add("show");
      projectList.classList.remove("show");
      bio.classList.add("hide");
    }
  });
  


});

