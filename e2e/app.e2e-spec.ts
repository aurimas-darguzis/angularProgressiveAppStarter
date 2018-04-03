import { AngularProgressiveAppPage } from './app.po';

describe('angular-progressive-app App', () => {
  let page: AngularProgressiveAppPage;

  beforeEach(() => {
    page = new AngularProgressiveAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
