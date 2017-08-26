import { AngularServicosPage } from './app.po';

describe('angular-servicos App', () => {
  let page: AngularServicosPage;

  beforeEach(() => {
    page = new AngularServicosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
