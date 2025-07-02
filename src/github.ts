import { observe } from "selector-observer";

const zedPngURL = chrome.runtime.getURL("/zed.png");

const darkMode = window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

observe("#clone-with-https, #clone-with-ssh", {
  add: (element) => {
    const gitUrl = (element as HTMLInputElement).value.trim();
    const gEle = element!.parentElement!.parentElement;
    gEle?.insertAdjacentHTML(
      "afterend",
      `
      <div style="height: 48px; padding: 8px;" class="border-top" id="open-in-zed-panel">
        <a href="zed://repo/${encodeURIComponent(gitUrl)}" class="rmstyle">
          <div style="padding: 4px; border-radius: 4px;" class="zed-s-hover">
            <div style="display: flex; align-items: center;">
              <img src="${zedPngURL}" style="height: 24px; margin-right: 4px;"/>
              <div style="display: flex; flex-direction: column; justify-content: center">Clone and open in Zed</div>
            </div>
          </div>
        </a>
        <style>
        a.rmstyle {
          color: inherit;
          text-decoration: inherit;
        }
        .zed-s-hover:hover {
          background-color: var(--button-invisible-bgColor-hover,var(--color-action-list-item-default-hover-bg));
        }
        </style>
      </div>
      `,
    );
  },
  remove: (_element) => {
    const panel = document.getElementById("open-in-zed-panel");
    if (panel) {
      panel.remove();
    }
  },
});
