import { config as baseConfig } from './wdio.conf.js'

export const config = {
    ...baseConfig,
    
    connectionRetryTimeout: 180000,
    connectionRetryCount: 5,
    
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            try {
                await browser.takeScreenshot()
            } catch (e) {
                console.log('Could not take screenshot:', e.message)
            }
        }
    },
    
    onComplete: function(exitCode, config, capabilities, results) {
        console.log('Tests completed with exit code:', exitCode)
    }
}