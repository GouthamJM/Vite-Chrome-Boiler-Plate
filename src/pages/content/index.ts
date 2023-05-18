const injectScript = (filePath: string) => {
  try {
    const container = document.head || document.documentElement;
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("async", "false");
    scriptTag.src = filePath;
    scriptTag.type = "module";
    scriptTag.id = "frontier-inject";
    scriptTag.onload = function () {
      container.removeChild(scriptTag);
    };
    container.insertBefore(scriptTag, container.children[0]);
  } catch (error) {
    console.error("Frontier: Provider injection failed.", error);
  }
};

injectScript(chrome.runtime.getURL("injector.js"));
