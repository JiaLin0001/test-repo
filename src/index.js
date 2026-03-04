/**
 * Main entry point for the test application
 */

const { greet } = require('./utils');

function main() {
    console.log('=== Test Application ===\n');

    // Test the greet function
    console.log(greet('World'));
    console.log(greet('GitHub'));
    console.log(greet('OpenClaw'));

    console.log('\n=== End ===');
}

// Run the main function
if (require.main === module) {
    main();
}

module.exports = { main };
