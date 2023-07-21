export default function decorate(block) {
  // decorate the quote as a blockquote element
  const quoteDiv = block.querySelector(':scope > div > div');
  const blockQuote = document.createElement('blockquote');
  blockQuote.innerHTML = `"${quoteDiv.innerHTML}"`;
  quoteDiv.parentElement.replaceWith(blockQuote);
  //decorate the author

  const authorDiv = block.querySelector(':scope > div > div');
  if (authorDiv) {
    const p = document.createElement('p');
    p.innerHTML = `<em> - ${authorDiv.innerHTML} </em>`;
    authorDiv.parentElement.replaceWith(p);
  }
}
