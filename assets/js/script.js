
function handleToggleProfileDropdown() {
    const dropdown = document.querySelector(".header-profile-dropdown");
    const profileAvatar = document.querySelector(".header-avatar");
    const sidebar = document?.querySelector(".header-sidebar-dropdown");
    const btnSidebar = document?.querySelector(".header-burger");

    profileAvatar?.addEventListener("click", function() {
        sidebar.classList.remove("active");
        btnSidebar.classList.remove("open");
        dropdown.classList.toggle("active")
    })
}

function handleTogglePasswordInput() {
    const inputs = document.querySelectorAll(".input-toggle-icon");
    
    inputs.forEach(input => {
        input.addEventListener('click', (e) => {
           const currentInput = e.target.offsetParent.children[0];
           const showIcon = e.target.offsetParent.children[1];
           const hideIcon = e.target.offsetParent.children[2];
           const isHidden = e.target.classList.contains("input-hide");
           if(isHidden) {
            currentInput.type = "text";
            showIcon.style.display = "none";
            hideIcon.style.display = "block";
           } else {
            currentInput.type = "password";
            showIcon.style.display = "block";
            hideIcon.style.display = "none";
           }
        })
    })

}

function handleToggleSidebar() {
    const btn = document?.querySelector(".header-burger");
    const sidebar = document?.querySelector(".header-sidebar-dropdown");
    const profileDropdown = document.querySelector(".header-profile-dropdown");
    btn.addEventListener('click', () => {
        btn.classList.toggle("open");
        sidebar.classList.toggle("active");
        profileDropdown.classList.remove("active");
    })

}

function handleToggleSubscribeStatus() {
    const toggle = document?.querySelector(".subsribe-plan-toggle");
    toggle?.addEventListener("click", () => toggle.classList.toggle("active"))
}

document.addEventListener("DOMContentLoaded", function(event) {
    handleToggleProfileDropdown();
    handleTogglePasswordInput();
    handleToggleSidebar();
    handleToggleSubscribeStatus();
  });

