import { IdeaCubeFrontendPage } from './app.po';

describe('idea-cube-frontend App', function() {
  let page: IdeaCubeFrontendPage;

  beforeEach(() => {
    page = new IdeaCubeFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
