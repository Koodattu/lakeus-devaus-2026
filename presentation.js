document.documentElement.classList.add("js");

(() => {
  "use strict";

  const slides = Array.from(document.querySelectorAll(".slide"));
  const deck = document.querySelector(".deck");
  const controls = document.querySelector(".controls");
  const overview = document.querySelector(".overview");
  const overviewGrid = document.querySelector(".overview__grid");
  const notes = document.querySelector(".notes-panel");
  const help = document.querySelector(".help-panel");
  const blackout = document.querySelector(".blackout");
  const dialogs = [overview, notes, help];
  const liveRegion = document.createElement("p");
  let currentIndex = 0;
  let touchStart = null;
  let blackoutFocus = null;

  liveRegion.className = "visually-hidden";
  liveRegion.setAttribute("aria-live", "polite");
  document.body.append(liveRegion);
  document.querySelector(".slide-counter span:last-child").textContent = slides.length;

  function resizeDeck() {
    const scale = Math.min((window.innerWidth - 32) / 1600, (window.innerHeight - 76) / 900);
    document.documentElement.style.setProperty("--deck-scale", Math.max(0.1, scale));
  }

  function parseHash() {
    const match = location.hash.match(/^#(?:\/?|slide-)(\d+)(?:\/\d+)?$/);
    return match ? Math.min(slides.length - 1, Math.max(0, Number(match[1]) - 1)) : 0;
  }

  function updateNotes() {
    const slide = slides[currentIndex];
    document.querySelector("#notes-title").textContent = slide.dataset.title;
    document.querySelector(".notes-timing").textContent = "Tavoiteaika " + slide.dataset.timing;
    document.querySelector(".notes-content").innerHTML = slide.querySelector(".notes")?.innerHTML || "";
    const sources = slide.querySelector(".source-line");
    document.querySelector(".notes-sources").innerHTML = sources ? "<strong>Lähteet ja rajaukset</strong><p>" + sources.innerHTML + "</p>" : "";
  }

  function render() {
    // Move focus out of the old slide before making it inert.
    const focusInOldSlide = document.activeElement.closest?.(".slide");
    if (focusInOldSlide && focusInOldSlide !== slides[currentIndex]) deck.focus({ preventScroll: true });
    slides.forEach((slide, index) => {
      const active = index === currentIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
      slide.inert = !active;
    });
    controls.querySelector('[data-action="previous"]').disabled = currentIndex === 0;
    controls.querySelector('[data-action="next"]').disabled = currentIndex === slides.length - 1;
    document.querySelector(".slide-counter span:first-child").textContent = currentIndex + 1;
    document.querySelector(".section-label").textContent = slides[currentIndex].dataset.section;
    document.querySelector(".progress i").style.width = ((currentIndex + 1) / slides.length * 100) + "%";
    overviewGrid.querySelectorAll(".overview-card").forEach((card, index) => {
      card.classList.toggle("is-current", index === currentIndex);
      card.setAttribute("aria-current", String(index === currentIndex));
    });
    updateNotes();
    const hash = "#/" + (currentIndex + 1);
    if (location.hash !== hash) {
      // Some file:// browsers restrict History API access.
      try { history.replaceState(null, "", hash); } catch { location.hash = hash; }
    }
    deck.scrollTop = 0;
    liveRegion.textContent = "Dia " + (currentIndex + 1) + " / " + slides.length + ": " + slides[currentIndex].dataset.title;
  }

  function goToSlide(index) {
    currentIndex = Math.min(slides.length - 1, Math.max(0, index));
    if (overview.open) overview.close();
    render();
  }

  function toggleDialog(dialog) {
    if (dialog.open) { dialog.close(); return; }
    dialogs.forEach(other => { if (other.open) other.close(); });
    updateNotes();
    dialog.showModal();
    if (dialog === overview) {
      const currentCard = overviewGrid.querySelector(".is-current");
      currentCard?.focus({ preventScroll: true });
      currentCard?.scrollIntoView({ block: "center" });
    }
  }

  function toggleBlackout() {
    const show = blackout.hidden;
    blackout.hidden = !show;
    document.querySelector(".presentation-bar").inert = show;
    deck.inert = show;
    if (show) {
      blackoutFocus = document.activeElement;
      blackout.querySelector("button").focus();
    } else {
      (blackoutFocus?.isConnected ? blackoutFocus : deck).focus({ preventScroll: true });
    }
  }

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      liveRegion.textContent = "Koko näytön tilaa ei voitu avata tässä selaimessa.";
    }
  }

  function handleAction(action) {
    switch (action) {
      case "previous": goToSlide(currentIndex - 1); break;
      case "next": goToSlide(currentIndex + 1); break;
      case "overview": toggleDialog(overview); break;
      case "close-overview": overview.close(); break;
      case "notes": toggleDialog(notes); break;
      case "help": toggleDialog(help); break;
      case "fullscreen": toggleFullscreen(); break;
      case "blackout": toggleBlackout(); break;
    }
  }

  slides.forEach((slide, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "overview-card" + (slide.classList.contains("dark") ? " is-dark" : "") + (slide.classList.contains("blue") ? " is-blue" : "");
    button.setAttribute("aria-label", "Avaa dia " + (index + 1) + ": " + slide.dataset.title);
    const label = document.createElement("small");
    label.textContent = String(index + 1).padStart(2, "0") + " / " + slide.dataset.section;
    const title = document.createElement("strong");
    title.textContent = slide.dataset.title;
    const timing = document.createElement("small");
    timing.className = "overview-time";
    timing.textContent = slide.dataset.timing;
    button.append(label, title, timing);
    button.addEventListener("click", () => goToSlide(index));
    overviewGrid.append(button);
  });

  const demoStates = [
    ["Ennen tallennusta", "Käyttäjä on kirjoittanut huoneiston numeron.", "B 7", "Lomakkeella arvo on vielä tallella."],
    ["Tallennus näyttää onnistuvan", "Onnistumisviesti ei osoita, että kaikki kentät tallentuivat.", "B 7", "Tallennettu. Arvo näkyy yhä lomakkeella."],
    ["Uudelleenlataus paljastaa virheen", "Arvo puuttuu takaisin ladatuista tiedoista. Missä kohdassa se katosi?", "Tyhjä", "Huoneiston numero ei säilynyt."]
  ];
  document.querySelectorAll("[data-demo-step]").forEach(button => {
    button.addEventListener("click", () => {
      const step = Number(button.dataset.demoStep);
      const [heading, description, apartment, status] = demoStates[step];
      document.querySelector("#demo-step-label").textContent = "Vaihe " + (step + 1) + " / 3";
      document.querySelector("#demo-heading").textContent = heading;
      document.querySelector("#demo-description").textContent = description;
      document.querySelector("#demo-apartment").textContent = apartment;
      document.querySelector("#demo-apartment").classList.toggle("is-missing", step === 2);
      document.querySelector("#demo-status").textContent = status;
      document.querySelectorAll("[data-demo-step]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    });
  });

  document.addEventListener("click", event => {
    const action = event.target.closest("[data-action]");
    if (action) handleAction(action.dataset.action);
    event.target.closest("[data-close-dialog]")?.closest("dialog")?.close();
    if (event.target.closest(".skip-link")) {
      event.preventDefault();
      goToSlide(0);
      deck.focus();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target.matches("input, textarea, select") || event.target.isContentEditable) return;
    const key = event.key.toLowerCase();
    if (!blackout.hidden) {
      if (key === "b" || key === "escape") { event.preventDefault(); toggleBlackout(); }
      return;
    }
    if (dialogs.some(dialog => dialog.open)) {
      if (key === "escape") {
        event.preventDefault();
        dialogs.forEach(dialog => { if (dialog.open) dialog.close(); });
      }
      return;
    }
    // Space and Enter activate a focused button/link instead of advancing.
    if ((key === " " || key === "enter") && event.target.closest("button, a")) return;
    const actions = {
      arrowright: () => goToSlide(currentIndex + 1),
      pagedown: () => goToSlide(currentIndex + 1),
      " ": () => goToSlide(currentIndex + 1),
      arrowleft: () => goToSlide(currentIndex - 1),
      pageup: () => goToSlide(currentIndex - 1),
      home: () => goToSlide(0),
      end: () => goToSlide(slides.length - 1),
      n: () => toggleDialog(notes),
      o: () => toggleDialog(overview),
      f: toggleFullscreen,
      b: toggleBlackout,
      "?": () => toggleDialog(help)
    };
    if (actions[key]) { event.preventDefault(); actions[key](); }
  });

  deck.addEventListener("touchstart", event => {
    touchStart = event.touches.length === 1 && !event.target.closest("a, button")
      ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  }, { passive: true });
  deck.addEventListener("touchend", event => {
    if (!touchStart || event.changedTouches.length !== 1) return;
    const x = event.changedTouches[0].clientX - touchStart.x;
    const y = event.changedTouches[0].clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(x) > 60 && Math.abs(x) > Math.abs(y) * 1.5) goToSlide(currentIndex + (x < 0 ? 1 : -1));
  }, { passive: true });

  dialogs.forEach(dialog => dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }));

  // Inactive slides should also be readable to the browser's print pipeline.
  window.addEventListener("beforeprint", () => slides.forEach(slide => {
    slide.inert = false;
    slide.removeAttribute("aria-hidden");
  }));
  window.addEventListener("afterprint", render);
  window.addEventListener("resize", resizeDeck);
  window.addEventListener("hashchange", () => { currentIndex = parseHash(); render(); });
  currentIndex = parseHash();
  resizeDeck();
  render();
})();
