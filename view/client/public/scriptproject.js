
let url;
if (window.location.hostname === "localhost") {
    url = "http://localhost:3000";
} else {
    url = "https://duy-backend.onrender.com"; 
}
function fetchProjects() {
    fetch(url + "/project")
        .then(res => res.json())
        .then(data => {
            let projects = document.getElementById("container");
            projects.innerHTML = "";
            data.forEach(project => {
                projects.innerHTML += `
                    <div class="project-card">
                        <img src="${url + "/" + project.image}" alt="Project 3">
                        <h3>${project.title}</h3>
                        <button class="btn" 
                            data-title="${project.title}" 
                            data-description="${project.description}"
                            data-github="${project.github}" 
                            data-image="${project.image}" 
                            onclick='openmodal(${JSON.stringify(project)})'>Xem chi tiết</button>
                    </div>
                `;
            });
        })
}

function openmodal(project) {
    document.getElementById("modal-title").textContent = project.title;
    document.getElementById("modal-description").textContent = project.description;
    document.getElementById("modal-github").href = project.github;
    document.getElementById("modal-image").src = url + "/" + project.image;
    document.getElementById("projectModal").classList.add("show");
    document.getElementById("projectModal").style.zIndex = "9999";
}

function closeModal() {
    document.getElementById("projectModal").classList.remove("show");
    document.getElementById("projectModal").style.zIndex = "-1";
}
function goBack() {
    window.history.back();
  }
window.onload = fetchProjects;
