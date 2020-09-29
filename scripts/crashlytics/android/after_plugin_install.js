var helper = require('./helper');

module.exports = function(context) {

    // Modify the Gradle build file to add a task that will upload the debug symbols
    // at build time.
    helper.restoreRootBuildGradle();
    helper.modifyRootBuildGradle(context);
};
