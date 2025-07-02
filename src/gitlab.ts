import { observe } from "selector-observer";

const zedPngURL = chrome.runtime.getURL("/zed.png");

observe("#copy-http-url-input", {
  add: (element) => {
    const gitHttpUrl = (element as HTMLInputElement).value.trim();

    const cloneTab = element.parentElement?.parentElement?.parentElement
      ?.parentElement
      ?.parentElement?.parentElement?.parentElement;

    const gitSshUrl = (
      cloneTab?.querySelector("#copy-ssh-url-input") as HTMLInputElement
    ).value.trim();

    const IDEList = cloneTab?.children[2].querySelector("ul");

    IDEList?.children[0].insertAdjacentHTML(
      "beforebegin",
      `
      <li tabindex="0" class="gl-new-dropdown-item">
        <a href="zed://repo/${
        encodeURIComponent(gitHttpUrl)
      }" tabindex="-1" class="gl-new-dropdown-item-content">
          <span class="gl-new-dropdown-item-text-wrapper">
          Zed Editor (HTTPS)
          </span>
         </a>
      </li>
      `,
    );

    if (gitSshUrl) {
      IDEList?.children[0].insertAdjacentHTML(
        "beforebegin",
        `
      <li tabindex="0" class="gl-new-dropdown-item">
        <a href="zed://repo/${
          encodeURIComponent(gitSshUrl)
        }" tabindex="-1" class="gl-new-dropdown-item-content">
          <span class="gl-new-dropdown-item-text-wrapper">
          Zed Editor (SSH)
          </span>
         </a>
      </li>
      `,
      );
    }
  },
});
