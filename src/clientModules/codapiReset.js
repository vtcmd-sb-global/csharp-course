export function onRouteDidUpdate() {
  setTimeout(() => {
    document.querySelectorAll("codapi-snippet").forEach((snippet) => {
      if (snippet.dataset.resetBound) return;
      snippet.dataset.resetBound = "true";

      // Locate the <code> element inside your preceding <CodeBlock> wrapper
      const wrapper = snippet.previousElementSibling;
      const codeEl = wrapper?.querySelector("code") || wrapper;
      if (!codeEl) return;

      const originalCode = codeEl.textContent;

      snippet.addEventListener("reset", () => {
        codeEl.textContent = originalCode;
        const output = snippet.querySelector("codapi-output");
        if (output) output.setAttribute("hidden", "");
      });
    });
  }, 600); // Slightly after init-delay="500"
}
