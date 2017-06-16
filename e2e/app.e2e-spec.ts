import { ClubAngular2Page } from './app.po';

describe('club-angular2 App', () => {
  let page: ClubAngular2Page;

  beforeEach(() => {
    page = new ClubAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
