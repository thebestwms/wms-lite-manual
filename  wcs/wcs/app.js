const sidebar = document.querySelector("#sidebar");
const scrim = document.querySelector("#sidebar-scrim");
const menuButton = document.querySelector("#menu-button");
const navLinks = [...document.querySelectorAll(".nav-link")];
const navGroups = [...document.querySelectorAll(".nav-group")];
const navGroupToggles = [...document.querySelectorAll(".nav-group-toggle")];
const progress = document.querySelector("#reading-progress");
const dialog = document.querySelector("#image-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogClose = document.querySelector("#dialog-close");
const languageButtons = [...document.querySelectorAll("[data-language]")];
const originalDocumentTitle = document.title;

const translationRecords = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(node.parentElement?.tagName)) continue;
  if (node.parentElement?.closest(".language-switch")) continue;
  translationRecords.push({ node, original: node.nodeValue });
}

const attributeRecords = [];
document.querySelectorAll("*").forEach((element) => {
  ["aria-label", "alt", "title", "placeholder", "content"].forEach((attribute) => {
    if (element.hasAttribute(attribute)) {
      attributeRecords.push({ element, attribute, original: element.getAttribute(attribute) });
    }
  });
});

function translateValue(value, dictionary) {
  const content = value.trim();
  if (!content || !dictionary[content]) return value;
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  return `${leading}${dictionary[content]}${trailing}`;
}

function setLanguage(language) {
  const selected = ["zh", "ja", "en"].includes(language) ? language : "zh";
  const dictionary = window.ORBIFLOW_TRANSLATIONS?.[selected] ?? {};

  translationRecords.forEach(({ node, original }) => {
    node.nodeValue = selected === "zh" ? original : translateValue(original, dictionary);
  });
  attributeRecords.forEach(({ element, attribute, original }) => {
    element.setAttribute(attribute, selected === "zh" ? original : translateValue(original, dictionary));
  });
  document.title = selected === "zh" ? originalDocumentTitle : (dictionary[originalDocumentTitle] || originalDocumentTitle);

  document.documentElement.lang = selected === "zh" ? "zh-CN" : selected;
  languageButtons.forEach((button) => {
    const active = button.dataset.language === selected;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem("orbiflow-wcs-language", selected);
  } catch (_) {
    // Language switching still works when storage is unavailable.
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

let initialLanguage = "zh";
try {
  initialLanguage = localStorage.getItem("orbiflow-wcs-language") || "zh";
} catch (_) {
  // Use Chinese as the default when storage is unavailable.
}
setLanguage(initialLanguage);

let userStartedNavigation = false;

function setNavGroupOpen(group, open) {
  group.classList.toggle("is-open", open);
  group.querySelector(".nav-group-toggle")?.setAttribute("aria-expanded", String(open));
}

function openGroupForLink(link) {
  const group = link?.closest(".nav-group");
  navGroups.forEach((item) => setNavGroupOpen(item, Boolean(group) && item === group));
}

navGroupToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const group = toggle.closest(".nav-group");
    const shouldOpen = !group.classList.contains("is-open");
    navGroups.forEach((item) => setNavGroupOpen(item, shouldOpen && item === group));
  });
});

["wheel", "touchmove"].forEach((eventName) => {
  window.addEventListener(eventName, () => {
    userStartedNavigation = true;
  }, { passive: true });
});

window.addEventListener("keydown", (event) => {
  if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) {
    userStartedNavigation = true;
  }
});

function activateNavForHash(hash = window.location.hash) {
  const targetLink = navLinks.find((link) => link.getAttribute("href") === hash);
  if (!targetLink) return;
  navLinks.forEach((link) => link.classList.toggle("active", link === targetLink));
  openGroupForLink(targetLink);
}

function toggleMenu(open) {
  sidebar.classList.toggle("open", open);
  scrim.classList.toggle("show", open);
  menuButton?.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
}

menuButton?.addEventListener("click", () => toggleMenu(!sidebar.classList.contains("open")));
scrim.addEventListener("click", () => toggleMenu(false));
navLinks.forEach((link) => link.addEventListener("click", () => toggleMenu(false)));

const sectionObserver = new IntersectionObserver((entries) => {
  if (!userStartedNavigation && window.location.hash && navLinks.some((link) => link.getAttribute("href") === window.location.hash)) {
    activateNavForHash();
    return;
  }

  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;

  const targetLink = navLinks.find((link) => link.getAttribute("href") === `#${visible.target.id}`);
  if (!targetLink) return;
  navLinks.forEach((link) => link.classList.toggle("active", link === targetLink));
  openGroupForLink(targetLink);
}, { rootMargin: "-20% 0px -64% 0px", threshold: [0, 0.1, 0.3] });

document.querySelectorAll("[data-section]").forEach((section) => sectionObserver.observe(section));
window.addEventListener("hashchange", () => activateNavForHash());
window.addEventListener("load", () => {
  requestAnimationFrame(() => activateNavForHash());
  window.setTimeout(() => activateNavForHash(), 400);
});
activateNavForHash();

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

document.querySelectorAll(".shot-open").forEach((button) => {
  button.addEventListener("click", () => {
    dialogImage.src = button.dataset.image;
    dialog.showModal();
  });
});

document.querySelectorAll("[data-tabs]").forEach((tabs) => {
  const buttons = [...tabs.querySelectorAll("[data-tab]")];
  const panels = [...tabs.querySelectorAll("[role=tabpanel]")];
  buttons.forEach((button) => button.addEventListener("click", () => {
    const target = button.dataset.tab;
    buttons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    panels.forEach((panel) => {
      const active = panel.id === target;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
    });
  }));
});

dialogClose.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && sidebar.classList.contains("open")) toggleMenu(false);
});
