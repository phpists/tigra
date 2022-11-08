
function handleToggleProfileDropdown() {
  const dropdown = document.querySelector(".header-profile-dropdown");
  const profileAvatar = document.querySelector(".header-avatar");
  const sidebar = document?.querySelector(".header-sidebar-dropdown");
  const btnSidebar = document?.querySelector(".header-burger");
  const overlay = document.querySelector(".overlay-header");
  let currentOffsetTop;

  profileAvatar?.addEventListener("click", function () {
    const viewportOffset = document.body.getBoundingClientRect();
    currentOffsetTop = viewportOffset.top;
    sidebar.classList.remove("active");
    btnSidebar.classList.remove("open");
    dropdown.classList.toggle("active");
    if (dropdown.classList.contains("active")) {
      overlay.classList.add("active");
    } else {
      overlay.classList.remove("active");
      currentOffsetTop = null;
    }

  })

  window.addEventListener("scroll", () => {
    const viewportOffset = document.body.getBoundingClientRect();
    if (currentOffsetTop && ((viewportOffset.top + 200) < currentOffsetTop)) {
      btnSidebar.classList.remove("open");
      dropdown.classList.remove("active");
      overlay.classList.remove("active");
      currentOffsetTop = null;
    }
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
      if (isHidden) {
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
  const overlay = document.querySelector(".overlay-header");
  let currentOffsetTop;

  btn.addEventListener('click', () => {
    const viewportOffset = document.body.getBoundingClientRect();
    currentOffsetTop = viewportOffset.top;
    btn.classList.toggle("open");
    sidebar.classList.toggle("active");
    profileDropdown.classList.remove("active");
    if (sidebar.classList.contains("active")) {
      overlay.classList.add("active");
    } else {
      overlay.classList.remove("active");
      currentOffsetTop = null;
    }
  })

  window.addEventListener("scroll", () => {
    const viewportOffset = document.body.getBoundingClientRect();
    if (currentOffsetTop && (((viewportOffset.top + 200) < currentOffsetTop))) {
      btn.classList.remove("open");
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
      currentOffsetTop = null;
    }
  })

}

function handleToggleSubscribeStatus() {
  const toggle = document?.querySelector(".subsribe-plan-toggle");
  toggle?.addEventListener("click", () => toggle.classList.toggle("active"))
}

function handleToggleModal(buttonId, modalId) {
  const button = document.querySelector(`#${buttonId}`);
  const modal = document.querySelector(`#${modalId}`);
  const modalClose = document.querySelector(`#${modalId} .modal-close-icon`);

  button?.addEventListener("click", () => {
    modal.style.display = "flex"
  })

  modalClose?.addEventListener("click", () => {
    modal.style.display = "none"
  })
}

const handleToggleTabs = () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabs = document.querySelectorAll(".tab-page")
  const elipse = document.querySelector(".manage-ellipse");
  const ELIPSE_MENAGE_CARD_CLASSES = {
    "1": "ellipse-1",
    "2": "ellipse-2",
    "3": "ellipse-4",
    "4": "ellipse-6",
  }

  tabButtons?.forEach(button => {
    button?.addEventListener("click", (e) => {
      const currentButton = e.target;
      const selectedPage = currentButton.getAttribute("data-page");

      if (selectedPage) {
        // toggle active btn
        tabButtons.forEach(btn => {
          btn.getAttribute("data-page") === selectedPage
            ? btn.classList.add("active")
            : btn.classList.remove("active")
        })

        // toggle active tab
        tabs.forEach(tab => {
          tab.getAttribute("data-page") === selectedPage
            ? tab.classList.add("active")
            : tab.classList.remove("active")
        })

        console.log(ELIPSE_MENAGE_CARD_CLASSES[selectedPage])
        //togle elipse 
        elipse.className = `manage-ellipse ellipse ${ELIPSE_MENAGE_CARD_CLASSES[selectedPage]}`
      }
    })
  })

}

const handleParalaps = () => {
  window.addEventListener("scroll", (e) => {
    const elipses = document.querySelectorAll(".ellipse");
    const scrolled = Math.floor(window.pageYOffset / document.body.scrollHeight * 100)

    elipses.forEach((elipse, i) => {

      if (elipse.classList.contains("ellipse-1")) {
        elipse.style.transform = `translateY(-${window.pageYOffset / 10}px)`;
      } else if (elipse.classList.contains("ellipse-2")) {
        elipse.style.transform = `translateY(${window.pageYOffset / 1000}px)`;
      } else if (elipse.classList.contains("setting-ellips-1")) {
        elipse.style.transform = `translateY(${window.pageYOffset / 10}px)`;
      } else if (elipse.classList.contains("setting-ellips-2")) {
        elipse.style.transform = `translateY(-${window.pageYOffset / 20}px)`;
      } else if (elipse.classList.contains("setting-ellips-3")) {
        elipse.style.transform = `translateY(${window.pageYOffset / 5}px)`;
        elipse.style.display = scrolled > 80 ? "none" : "block";
      } else if (elipse.classList.contains("setting-ellips-4")) {
        elipse.style.transform = `translateY(-${window.pageYOffset / 15}px)`;
      } else if (elipse.classList.contains("recomendation-elip-2")) {
        elipse.style.transform = `translateY(-${window.pageYOffset / 3}px)`
      } else if (elipse.classList.contains("recomendation-elip-1")) {
        elipse.style.transform = `translateY(${window.pageYOffset / 4}px)`
      } else {
        elipse.style.transform = `translateY(-${window.pageYOffset / 10}px)`
      }
    })
  })
}

document.addEventListener("DOMContentLoaded", function (event) {
  handleToggleProfileDropdown();
  handleTogglePasswordInput();
  handleToggleSidebar();
  handleToggleSubscribeStatus();
  handleToggleModal("changeLogin", "changeLoginModal");
  handleToggleModal("changePassword", "changePasswordModal");
  handleToggleModal("changeEmail", "changeEmailModal");
  handleToggleModal("changePhone", "changePhoneModal");
  handleToggleModal("paySubscribe", "paySubscribeModal");
  handleToggleModal("paySubscribeError", "paySubscribeErrorModal");
  handleToggleTabs();
  handleParalaps();
});

