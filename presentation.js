document.documentElement.classList.add("js");

(() => {
  "use strict";

  const slides = Array.from(document.querySelectorAll(".slide"));
  const fragmentSets = slides.map((slide) => Array.from(slide.querySelectorAll(".fragment")));
  const revealedCounts = slides.map(() => 0);
  const counterCurrent = document.querySelector(".slide-counter span:first-child");
  const counterTotal = document.querySelector(".slide-counter span:last-child");
  const progressBar = document.querySelector(".progress i");
  const notesPanel = document.querySelector(".notes-panel");
  const notesTitle = document.querySelector("#notes-title");
  const notesTiming = document.querySelector(".notes-timing");
  const notesContent = document.querySelector(".notes-content");
  const notesSources = document.querySelector(".notes-sources");
  const helpPanel = document.querySelector(".help-panel");
  const overview = document.querySelector(".overview");
  const overviewGrid = document.querySelector(".overview__grid");
  const controls = document.querySelector(".controls");
  const liveRegion = document.createElement("p");
  let currentIndex = 0;
  let touchStartX = null;
  let touchStartY = null;

  liveRegion.className = "visually-hidden";
  liveRegion.setAttribute("aria-live", "polite");
  document.body.append(liveRegion);

  counterTotal.textContent = String(slides.length);

  function clamp(value, minimum, maximum) {
    return Math.min(Math.max(value, minimum), maximum);
  }

  function parseHash() {
    const match = window.location.hash.match(/^#\/?(\d+)(?:\/(\d+))?$/);
    if (!match) return null;

    const slideIndex = clamp(Number(match[1]) - 1, 0, slides.length - 1);
    const fragmentCount = clamp(Number(match[2] || 0), 0, fragmentSets[slideIndex].length);
    return { slideIndex, fragmentCount };
  }

  function updateHash() {
    const fragmentCount = revealedCounts[currentIndex];
    const hash = `#/${currentIndex + 1}${fragmentCount ? `/${fragmentCount}` : ""}`;
    window.history.replaceState(null, "", hash);
  }

  function announce() {
    const title = slides[currentIndex].dataset.title || `Dia ${currentIndex + 1}`;
    const revealed = revealedCounts[currentIndex];
    const totalFragments = fragmentSets[currentIndex].length;
    liveRegion.textContent = totalFragments
      ? `Dia ${currentIndex + 1} / ${slides.length}: ${title}. Vaihe ${revealed + 1} / ${totalFragments + 1}.`
      : `Dia ${currentIndex + 1} / ${slides.length}: ${title}.`;
  }

  function renderFragments(slideIndex) {
    fragmentSets[slideIndex].forEach((fragment, fragmentIndex) => {
      const isVisible = fragmentIndex < revealedCounts[slideIndex];
      fragment.classList.toggle("is-visible", isVisible);
      fragment.setAttribute("aria-hidden", String(!isVisible));
    });
  }

  function updateControls() {
    const currentFragments = fragmentSets[currentIndex];
    const atStart = currentIndex === 0 && revealedCounts[currentIndex] === 0;
    const atEnd = currentIndex === slides.length - 1 && revealedCounts[currentIndex] === currentFragments.length;

    controls.querySelector('[data-action="previous"]').disabled = atStart;
    controls.querySelector('[data-action="next"]').disabled = atEnd;
    counterCurrent.textContent = String(currentIndex + 1);
    progressBar.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;

    overviewGrid.querySelectorAll(".overview-card").forEach((card, cardIndex) => {
      card.classList.toggle("is-current", cardIndex === currentIndex);
      card.setAttribute("aria-current", cardIndex === currentIndex ? "true" : "false");
    });
  }

  function updateNotes() {
    const slide = slides[currentIndex];
    const notes = slide.querySelector(".notes");
    const sources = slide.querySelector(".source-line");

    notesTitle.textContent = slide.dataset.title || `Dia ${currentIndex + 1}`;
    notesTiming.textContent = slide.dataset.timing ? `Tavoiteaika · ${slide.dataset.timing}` : "";
    notesContent.innerHTML = notes ? notes.innerHTML : "<p>Ei erillisiä muistiinpanoja.</p>";
    notesSources.innerHTML = sources ? `<strong>Lähteet</strong><p>${sources.innerHTML}</p>` : "";
  }

  function render() {
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === currentIndex;
      slide.classList.toggle("is-active", isActive);
      slide.classList.toggle("is-before", slideIndex < currentIndex);
      slide.classList.toggle("is-after", slideIndex > currentIndex);
      slide.setAttribute("aria-hidden", String(!isActive));
      slide.inert = !isActive;
      renderFragments(slideIndex);
    });

    updateControls();
    updateNotes();
    updateHash();
    announce();
  }

  function revealNext() {
    if (revealedCounts[currentIndex] < fragmentSets[currentIndex].length) {
      revealedCounts[currentIndex] += 1;
      renderFragments(currentIndex);
      updateControls();
      updateHash();
      announce();
      return;
    }

    if (currentIndex < slides.length - 1) {
      currentIndex += 1;
      revealedCounts[currentIndex] = 0;
      render();
    }
  }

  function revealPrevious() {
    if (revealedCounts[currentIndex] > 0) {
      revealedCounts[currentIndex] -= 1;
      renderFragments(currentIndex);
      updateControls();
      updateHash();
      announce();
      return;
    }

    if (currentIndex > 0) {
      currentIndex -= 1;
      revealedCounts[currentIndex] = fragmentSets[currentIndex].length;
      render();
    }
  }

  function goToSlide(index, showAllFragments = false) {
    currentIndex = clamp(index, 0, slides.length - 1);
    revealedCounts[currentIndex] = showAllFragments ? fragmentSets[currentIndex].length : 0;
    closeOverview();
    render();
  }

  function openNotes() {
    if (notesPanel.open) {
      notesPanel.close();
      return;
    }

    updateNotes();
    notesPanel.showModal();
  }

  function openHelp() {
    if (helpPanel.open) {
      helpPanel.close();
      return;
    }

    helpPanel.showModal();
  }

  function openOverview() {
    overview.classList.add("is-open");
    overview.setAttribute("aria-hidden", "false");
    document.body.classList.add("overview-open");
    const currentCard = overviewGrid.querySelector(".overview-card.is-current");
    currentCard?.focus({ preventScroll: true });
    currentCard?.scrollIntoView({ block: "center" });
  }

  function closeOverview() {
    if (!overview.classList.contains("is-open")) return;
    overview.classList.remove("is-open");
    overview.setAttribute("aria-hidden", "true");
    document.body.classList.remove("overview-open");
    controls.querySelector('[data-action="overview"]')?.focus({ preventScroll: true });
  }

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      liveRegion.textContent = "Koko näytön tilaa ei voitu avata tässä selaimessa.";
    }
  }

  function buildOverview() {
    slides.forEach((slide, index) => {
      const card = document.createElement("button");
      const section = slide.dataset.section || "Esitys";
      const title = slide.dataset.title || `Dia ${index + 1}`;

      card.type = "button";
      card.className = "overview-card";
      card.innerHTML = `<small>${index + 1} · ${section}</small><strong>${title}</strong>`;
      card.setAttribute("aria-label", `Avaa dia ${index + 1}: ${title}`);
      card.addEventListener("click", () => goToSlide(index));
      overviewGrid.append(card);
    });
  }

  function handleAction(action) {
    switch (action) {
      case "previous":
        revealPrevious();
        break;
      case "next":
        revealNext();
        break;
      case "overview":
        overview.classList.contains("is-open") ? closeOverview() : openOverview();
        break;
      case "close-overview":
        closeOverview();
        break;
      case "notes":
        openNotes();
        break;
      case "fullscreen":
        toggleFullscreen();
        break;
      case "help":
        openHelp();
        break;
      default:
        break;
    }
  }

  function dialogIsOpen() {
    return notesPanel.open || helpPanel.open;
  }

  document.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (actionButton) handleAction(actionButton.dataset.action);

    const closeButton = event.target.closest("[data-close-dialog]");
    if (closeButton) closeButton.closest("dialog")?.close();
  });

  document.addEventListener("keydown", (event) => {
    const element = event.target;
    const isEditable = element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element?.isContentEditable;
    if (isEditable) return;

    if (event.key === "Escape") {
      if (notesPanel.open) notesPanel.close();
      if (helpPanel.open) helpPanel.close();
      closeOverview();
      return;
    }

    if (dialogIsOpen()) return;

    if (overview.classList.contains("is-open")) {
      if (event.key.toLowerCase() === "o") closeOverview();
      return;
    }

    const key = event.key.toLowerCase();
    if (["arrowright", "pagedown", " "].includes(key)) {
      event.preventDefault();
      revealNext();
    } else if (["arrowleft", "pageup"].includes(key)) {
      event.preventDefault();
      revealPrevious();
    } else if (key === "home") {
      event.preventDefault();
      goToSlide(0);
    } else if (key === "end") {
      event.preventDefault();
      goToSlide(slides.length - 1, true);
    } else if (key === "n") {
      event.preventDefault();
      openNotes();
    } else if (key === "o") {
      event.preventDefault();
      openOverview();
    } else if (key === "f") {
      event.preventDefault();
      toggleFullscreen();
    } else if (key === "?") {
      event.preventDefault();
      openHelp();
    }
  });

  document.querySelector(".deck").addEventListener("touchstart", (event) => {
    if (event.touches.length !== 1) return;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }, { passive: true });

  document.querySelector(".deck").addEventListener("touchend", (event) => {
    if (touchStartX === null || touchStartY === null || event.changedTouches.length !== 1) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX;
    const deltaY = event.changedTouches[0].clientY - touchStartY;
    touchStartX = null;
    touchStartY = null;

    if (Math.abs(deltaX) < 52 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;
    deltaX < 0 ? revealNext() : revealPrevious();
  }, { passive: true });

  window.addEventListener("hashchange", () => {
    const state = parseHash();
    if (!state) return;
    currentIndex = state.slideIndex;
    revealedCounts[currentIndex] = state.fragmentCount;
    render();
  });

  [notesPanel, helpPanel].forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (!inside) dialog.close();
    });
  });

  buildOverview();

  const initialState = parseHash();
  if (initialState) {
    currentIndex = initialState.slideIndex;
    revealedCounts[currentIndex] = initialState.fragmentCount;
  }

  render();
})();
