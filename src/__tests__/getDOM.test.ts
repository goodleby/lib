import { getDOM } from '../getDOM';

describe('getDOM', () => {
  it('should convert HTML string to an array of DOM elements', () => {
    const html =
      '<div class="block"><p class="paragraph">Paragraph</p></div><div class="block">Text</div>';

    const elements = getDOM(html);
    const block = document.createElement('div');
    elements.forEach((element) => block.appendChild(element));

    expect(block.innerHTML).toStrictEqual(html);
  });
});
