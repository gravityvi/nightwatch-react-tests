describe('form test', function() {
    let component;
  
    before(async () => {
      component = await browser.mountComponent('../../src/components/Form.jsx');
    });
  
    it('should render functional components without error', async function() {
      await browser.expect(component).to.be.visible;
    })
  })