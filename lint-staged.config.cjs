module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': () => 'npm run typecheck',

  // This will lint and format TypeScript and                                             //JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `npm run lint:write ${filenames.join(' ')}`,
    `npm run prettier:write ${filenames.join(' ')}`
  ],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `npm run prettier:write  ${filenames.join(' ')}`
};
