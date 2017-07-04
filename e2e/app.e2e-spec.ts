import { SimpleChatAppPage } from './app.po';

describe('simple-chat-app App', () => {
  let page: SimpleChatAppPage;

  beforeEach(() => {
    page = new SimpleChatAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
