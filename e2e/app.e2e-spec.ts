import { AngularCliLazyloadNewPage } from './app.po';

describe('angular-cli-lazyload-new App', function() {
  let page: AngularCliLazyloadNewPage;

  beforeEach(() => {
    page = new AngularCliLazyloadNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
