
(() => {
  const pageNames = ["home", "play", "about"];

  function showPage(pageName, updateHistory = false) {
    if (!pageNames.includes(pageName)) {
      pageName = "home";
    }

    pageNames.forEach(name => {
      const page = document.getElementById(`page-${name}`);
      if (page) {
        page.hidden = name !== pageName;
      }
    });

    document.querySelectorAll("[data-page-link]").forEach(link => {
      const active = link.dataset.pageLink === pageName;
      link.classList.toggle("active", active);

      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    if (updateHistory) {
      history.pushState({ page: pageName }, "", `#${pageName}`);
    }

    window.scrollTo(0, 0);
  }

  document.addEventListener("click", event => {
    const link = event.target.closest("[data-page-link]");
    if (!link) return;

    event.preventDefault();
    showPage(link.dataset.pageLink, true);
  });

  window.addEventListener("popstate", () => {
    showPage(location.hash.slice(1));
  });

  showPage(location.hash.slice(1));
})();

