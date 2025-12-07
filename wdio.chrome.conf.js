import { config as baseConfig } from './wdio.conf.js'

export const config = {
    ...baseConfig,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--disable-dev-shm-usage',
                '--no-sandbox',
                '--headless=new',
                '--disable-gpu',
                '--window-size=1920,1080',
                '--disable-web-security',
                '--disable-features=VizDisplayCompositor'
            ]
        }
    }]
}
