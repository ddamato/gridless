const path = require('path');
const fs = require('fs-extra');
const glob = require('glob-fs')({ gitignore: true });

const COMPILED_SITE_PATH = path.resolve(__dirname, '..', '_site');

function composeStyles(css) {
  return `<style type="text/css">${css.replace(/\\/g, '\\\\')}</style>`;
}

async function extractResources() {
  const filepaths = await glob.readdirPromise('examples/**');
  return filepaths.reduce((acc, filepath) => {
    const extension = path.extname(filepath).slice(1);
    const component = path.dirname(filepath).split(path.sep).pop();
    const text = fs.readFileSync(filepath).toString();
    if (!acc[component]) {
      acc[component] = {}
    }
    Object.assign(acc[component], { [extension]: text });
    return acc;
  }, {});
}

function prepareComponents(examples) {
  return Object.entries(examples).map(([component, { html, css }]) => {
    const camelName = component.replace(/-./g, x=>x.toUpperCase()[1]);
    return `window.customElements.define('ex-${component}', (class Example${camelName} extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = \`${composeStyles(css)}${html}\`;
      }
    }));`
  }).join('').replace(/\s{2,}/g, '');
}

async function createExamples() {
  const examples = await extractResources();
  const examplesJs = prepareComponents(examples);
  const scriptsFileName = `${COMPILED_SITE_PATH}/component-examples.js`;

  fs.ensureFileSync(scriptsFileName);
  fs.writeFileSync(scriptsFileName, examplesJs, { encoding: 'utf8' });
}

createExamples();