const path = require('path');
const fs = require('fs-extra'); 
const fm = require('front-matter');
const mila = require('markdown-it-link-attributes');
const md = require('markdown-it')({
  html: true,
  linkify: true,
});
const minify = require('html-minifier').minify;
const glob = require('glob-fs')({ gitignore: true });
const nunjucks = require('nunjucks');
const loader = new nunjucks.FileSystemLoader(path.resolve(__dirname, '..', 'templates'));
const env = new nunjucks.Environment(loader, {
  trimBlocks: true,
  lstripBlocks: true,
});

const COMPILED_SITE_PATH = path.resolve(__dirname, '..', '_site');
const TITLE = `Gridless Design`;
const DESCRIPTION = `Get rid of the grid!`;
const URL = 'https://gridless.design';
const FONT_PRELOAD = 'https://fonts.googleapis.com/css2?family=Epilogue:wght@900&family=Open+Sans&display=swap';

md.use(mila, {
  pattern: /^http/,
  attrs: {
    target: '_blank',
    rel: 'noopener'
  }
});

const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  url: URL,
  fontPreload: FONT_PRELOAD,
};

async function compile() {
  const contentFiles = await glob.readdirPromise('content/*.md');
  const mdFiles = contentFiles.filter((file) => path.extname(file) === '.md');
  
  mdFiles.forEach((file) => {
    const id = path.basename(file).replace(path.extname(file), '');
    const htmlFilename = `${COMPILED_SITE_PATH}/${id}.html`;
    const markdown = fs.readFileSync(file).toString();
    const { attributes, body } = fm(markdown);
    const html = env.render('base.njk', { 
      attributes,
      content: md.render(body),
      id,
      ...metadata,
    });

    fs.ensureFileSync(htmlFilename);
    fs.writeFileSync(htmlFilename, minify(html, { collapseWhitespace: true }), { encoding: 'utf8' });
  });
}

compile();
