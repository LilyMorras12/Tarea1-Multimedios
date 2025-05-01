document.addEventListener("DOMContentLoaded", function () {
    const btnProjects = document.getElementById("toggle-projects");
    const btnWork = document.getElementById("toggle-work");
    const sectionProjects = document.getElementById("projects");
    const sectionWork = document.getElementById("work");
  
    btnProjects.addEventListener("click", () => {
      sectionProjects.style.display =
        sectionProjects.style.display === "none" || sectionProjects.style.display === ""
          ? "block"
          : "none";
    });
  
    btnWork.addEventListener("click", () => {
      sectionWork.style.display =
        sectionWork.style.display === "none" || sectionWork.style.display === ""
          ? "block"
          : "none";
    });
  });