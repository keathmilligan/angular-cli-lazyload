import { AngularCliLazyloadPage } from './app.po';

describe('angular-cli-lazyload App', () => {
  let page: AngularCliLazyloadPage;

  beforeEach(() => {
    page = new AngularCliLazyloadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
