const {setup, teardown} = require('@nightwatch/react');

module.exports = {
    async before() {
        viteServer = await setup();
        this.launchUrl = `http://localhost:${viteServer.config.server.port}`
    },

    async after() {
        await teardown();
    }
}