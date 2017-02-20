import { TNACLIPage } from './app.po';

describe('tna-cli App', () => {
  let page: TNACLIPage;

  beforeEach(() => {
    page = new TNACLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
