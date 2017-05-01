import { InClassExamPage } from './app.po';

describe('in-class-exam App', () => {
  let page: InClassExamPage;

  beforeEach(() => {
    page = new InClassExamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
