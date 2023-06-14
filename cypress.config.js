const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },chromeWebSecurity:false,
    specPattern:["cypress/integeration/ex/test_login_facebook.js","cypress/integeration/ex/test2_login_swag.js","cypress\integeration\ex\test3_add_item.js"]
  },
});
