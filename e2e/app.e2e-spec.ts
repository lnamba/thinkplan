import { Thinkplan2Page } from './app.po';

describe('thinkplan2 App', () => {
  let page: Thinkplan2Page;

  beforeEach(() => {
    page = new Thinkplan2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
