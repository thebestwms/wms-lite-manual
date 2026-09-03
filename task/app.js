const sidebar = document.querySelector("#sidebar");
const scrim = document.querySelector("#sidebar-scrim");
const menuButton = document.querySelector("#menu-button");
const navLinks = [...document.querySelectorAll(".nav-link")];
const navModules = [...document.querySelectorAll("[data-nav-module]")];
const progress = document.querySelector("#reading-progress");
const dialog = document.querySelector("#image-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogClose = document.querySelector("#dialog-close");
let userStartedNavigation = false;

["wheel", "touchmove"].forEach((eventName) => window.addEventListener(eventName, () => {
  userStartedNavigation = true;
}, { passive: true }));
window.addEventListener("keydown", (event) => {
  if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) userStartedNavigation = true;
});

function activateNavForHash(hash = window.location.hash) {
  const targetLink = navLinks.find((link) => link.getAttribute("href") === hash);
  if (!targetLink) return;
  navLinks.forEach((link) => link.classList.toggle("active", link === targetLink));
  const parentModule = targetLink.closest("[data-nav-module]");
  if (parentModule) setNavModuleExpanded(parentModule, true, false);
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

function setNavModuleExpanded(module, expanded, persist = true) {
  const toggle = module.querySelector(".nav-toggle");
  const moduleName = module.dataset.navModule;
  const storageKey = `wms-manual-nav-${moduleName}-v2`;
  const moduleLabel = { task: "Task", organization: "Organization", customer: "Customer", item: "Item", industry: "Industry", hazard: "Hazard", carrier: "Carrier", address: "Address", inbound: "Inbound", outbound: "Outbound", inventory: "Inventory", "order-dispatch": "Order Dispatch" }[moduleName] || moduleName;
  const language = document.documentElement.lang;
  const toggleLabel = language === "ja"
    ? `Task サブメニューを${expanded ? "折りたたむ" : "展開"}`
    : language === "en"
      ? `${expanded ? "Collapse" : "Expand"} ${moduleLabel} submenu`
      : `${expanded ? "收起" : "展开"} ${moduleLabel} 子菜单`;
  module.classList.toggle("collapsed", !expanded);
  toggle.setAttribute("aria-expanded", String(expanded));
  toggle.setAttribute("aria-label", toggleLabel);
  if (persist) {
    try {
      localStorage.setItem(storageKey, expanded ? "open" : "closed");
    } catch {
      // Navigation still works when browser storage is unavailable.
    }
  }
}

navModules.forEach((module) => {
  let expanded = !module.classList.contains("collapsed");
  try {
    const storedState = localStorage.getItem(`wms-manual-nav-${module.dataset.navModule}-v2`);
    if (storedState) expanded = storedState !== "closed";
  } catch {
    expanded = true;
  }
  setNavModuleExpanded(module, expanded, false);
  module.querySelector(".nav-toggle").addEventListener("click", () => {
    setNavModuleExpanded(module, module.classList.contains("collapsed"));
  });
});

window.addEventListener("wms-language-changed", () => {
  navModules.forEach((module) => {
    setNavModuleExpanded(module, !module.classList.contains("collapsed"), false);
  });
});

const sectionObserver = new IntersectionObserver((entries) => {
  if (!userStartedNavigation && window.location.hash && navLinks.some((link) => link.getAttribute("href") === window.location.hash)) {
    activateNavForHash();
    return;
  }
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
  });
  const activeLink = navLinks.find((link) => link.getAttribute("href") === `#${visible.target.id}`);
  const activeModule = activeLink?.closest("[data-nav-module]");
  if (activeLink?.classList.contains("sub") && activeModule) setNavModuleExpanded(activeModule, true, false);
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

document.querySelectorAll("[data-lightbox]").forEach((button) => {
  button.addEventListener("click", () => {
    dialogImage.src = button.dataset.lightbox;
    dialogImage.alt = button.querySelector("img")?.alt || "页面截图放大预览";
    dialog.showModal();
  });
});

const settingsTabs = [...document.querySelectorAll("[data-settings-tab]")];
settingsTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    settingsTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
      document.querySelector(`#${item.dataset.settingsTab}`).hidden = !selected;
    });
  });
});

function bindContentTabs(selector, targetAttribute) {
  const tabs = [...document.querySelectorAll(selector)];
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => {
        const selected = item === tab;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
        document.querySelector(`#${item.getAttribute(targetAttribute)}`).hidden = !selected;
      });
    });
  });
}

bindContentTabs("[data-item-info-tab]", "data-item-info-tab");
bindContentTabs("[data-item-config-tab]", "data-item-config-tab");
bindContentTabs("[data-inventory-tab]", "data-inventory-tab");

dialogClose.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && sidebar.classList.contains("open")) toggleMenu(false);
});
