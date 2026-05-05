const templates = import.meta.glob<{ default: string }>('./*/template.html', {
  query: '?raw',
  eager: true,
});
const styles = import.meta.glob<{ default: string }>('./*/styles.css', {
  query: '?raw',
  eager: true,
});

for (const path of Object.keys(templates)) {
  const match = path.match(/^\.\/([^/]+)\/template\.html$/);
  if (!match) continue;
  const name = match[1];
  const html = templates[path].default;
  const css = styles[`./${name}/styles.css`]?.default ?? '';
  const tagName = `ex-${name}`;
  if (customElements.get(tagName)) continue;

  customElements.define(
    tagName,
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' }).innerHTML = `<style>${css}</style>${html}`;
      }
    },
  );
}
