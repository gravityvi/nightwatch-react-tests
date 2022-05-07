describe('user info test', function() {
    let component;
  
    before(async () => {
      component = await browser.mountComponent('../../src/components/UserInfo.jsx', function() {
        return {
          date: new Date(),
          text: 'I hope you enjoy reading Ulysses!',
          author: {
            name: 'Leopold Bloom',
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Poldy.png'
          }
        }
      });
    });
  
    it('should render regular components without error', function() {
      
      browser.expect(component).to.be.visible;
      browser.expect.element('div[class=UserInfo]').text.to.contain('Leopold')
    })
  })