const fs = require('node:fs');
const path = require('node:path');

const PAGE_MAP = {
  index: 'index.md',
  pricing: 'pricing.md'
};

module.exports = (req, res) => {
  const requestedPage = Array.isArray(req.query.page)
    ? req.query.page[0]
    : req.query.page || 'index';
  const fileName = PAGE_MAP[requestedPage] || PAGE_MAP.index;
  const filePath = path.join(process.cwd(), fileName);

  if (!fs.existsSync(filePath)) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Markdown page not found.');
    return;
  }

  const markdown = fs.readFileSync(filePath, 'utf8');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.setHeader('Vary', 'Accept');
  res.end(markdown);
};
