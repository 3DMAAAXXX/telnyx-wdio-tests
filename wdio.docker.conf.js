import { config as baseConfig } from './wdio.conf.js'

export const config = {
    ...baseConfig,
    
    hostname: 'selenium-hub',
    port: 4444,
    path: '/wd/hub',
    
    maxInstances: 3,
    
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--disable-dev-shm-usage',
                    '--no-sandbox',
                    '--headless',
                    '--disable-gpu',
                    '--window-size=1920,1080'
                ]
            }
        },
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['-headless'],
                prefs: {
                    'dom.webdriver.enabled': false
                }
            }
        },
        {
            browserName: 'MicrosoftEdge',
            'ms:edgeOptions': {
                args: [
                    '--headless',
                    '--disable-gpu',
                    '--window-size=1920,1080'
                ]
            }
        }
    ],
    
    connectionRetryTimeout: 180000,
    connectionRetryCount: 5,
    
    services: [],
    
    beforeSession: function (config, capabilities, specs) {
        console.log(`Starting tests on ${capabilities.browserName}`)
    },
    
    afterSession: function (config, capabilities, specs) {
        console.log(`Finished tests on ${capabilities.browserName}`)
    }
}
