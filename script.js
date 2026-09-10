(() => {
  const openModal = (id) => {
    const m = document.getElementById(id);
    if (m) m.style.display = "block";
  };
  const closeModal = (id) => {
    const m = document.getElementById(id);
    if (m) m.style.display = "none";
  };

  document.getElementById("contactTrigger")?.addEventListener("click", (e) => {
    e.preventDefault();
    openModal("contactModal");
  });

  document.getElementById("miscTrigger")?.addEventListener("click", (e) => {
    e.preventDefault();
    openModal("miscModal");
  });

  document.querySelectorAll(".bibtex-trigger").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const bib = el.getAttribute("data-bibtex") || "";
      document.getElementById("modalBibtexContent").textContent = bib;
      openModal("bibtexModal");
    });
  });

  document.getElementById("copyBibtexButton")?.addEventListener("click", () => {
    const text = document.getElementById("modalBibtexContent").textContent;
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById("copyBibtexButton");
      const original = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = original), 1200);
    });
  });

  document.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", () => closeModal(el.getAttribute("data-close")));
  });

  window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal").forEach((m) => {
      if (e.target === m) m.style.display = "none";
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal").forEach((m) => (m.style.display = "none"));
    }
  });
})();
