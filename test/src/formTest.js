describe('form test', function() {
    let component;
  
    before(async () => {
      component = await browser.mountComponent('../../src/components/Form.jsx');
    });
  
    it('render form component and change the title', async function() {
      await browser.expect(component).to.be.visible;
       
      return browser.setValue('#new-todo-input', 'Barn owl')
        .click('button')
        .assert.containsText('#label', 'Barn owl')
    })
  })