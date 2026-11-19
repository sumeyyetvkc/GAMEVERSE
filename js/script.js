function setupScrollReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(
    "main > section, .section-heading h2, .game-card, .about-stat, .how-to-card, .selection-item, .genre-guide-card, .technology-card, .site-footer",
  );

  if (reduceMotion || !("IntersectionObserver" in window) || targets.length === 0) {
    return;
  }

  document.documentElement.classList.add("motion-ready");

  const observer = new IntersectionObserver((entries, currentObserver) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    }
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -32px 0px",
  });

  for (const target of targets) {
    target.classList.add("scroll-reveal");
    observer.observe(target);
  }
}

function setupGameSearch() {
  const searchInput = document.querySelector("#game-search");
  const clearButton = document.querySelector("#clear-search");
  const visibleCountLabel = document.querySelector("#visible-count");
  const emptyState = document.querySelector("#empty-state");

  if (!searchInput || !clearButton || !visibleCountLabel || !emptyState) {
    return;
  }

  // Cache only normalized headings so descriptions and metadata are never searched.
  const gameCards = [...document.querySelectorAll("[data-game-card]")].map((card) => ({
    element: card,
    title: card.querySelector(".game-card-title").textContent.trim().toLowerCase(),
  }));

  function filterGames() {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    for (const game of gameCards) {
      // An empty query matches every title, keeping all cards visible.
      const isMatch = game.title.includes(query);
      game.element.hidden = !isMatch;
      visibleCount += Number(isMatch);
    }

    if (visibleCountLabel.textContent !== String(visibleCount)) {
      visibleCountLabel.textContent = visibleCount;
      visibleCountLabel.classList.remove("count-bump");
      void visibleCountLabel.offsetWidth;
      visibleCountLabel.classList.add("count-bump");
    }

    emptyState.hidden = visibleCount > 0;
  }

  searchInput.addEventListener("input", filterGames);
  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    filterGames();
    searchInput.focus();
  });

  filterGames();
}

setupScrollReveal();
setupGameSearch();