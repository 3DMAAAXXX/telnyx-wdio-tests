import { $, $$ } from '@wdio/globals'
import { expect } from '@wdio/globals'

export default class MainPage {
    get productMenu () { return $("#radix-_R_4b9eivb_ > span") }
    get productDropListMenu () { return $("div.w-full.col-span-8") }
    get signUpButton () { return $$("[href='/sign-up'] > span[data-content='Sign up']") }
    get contactUsLink () { return $('div.items-center > [href="https://telnyx.com/contact-us"]') }
    get title () { return $("div.overflow-hidden.py-new-xs") }
    get callAgentButton () { return $("div.flex.w-full > a") }
    get hDvoiceAIBlock () { return $$("div.relative.bg-cream-100") }
    get startBuildingButton () { return $("div.flex.items-start.justify-start > a.uppercase") }
    get mcpDropList () { return $('#radix-_R_2elueivb_-trigger-3 > div') }
    get devDocsButton () { return $('div.mt-xxl > [href="https://developers.telnyx.com"]') }
    get mainVideo () { return $('section.bg-cream > video') }
    get gptIcon () { return $('img[alt="GPT"]') }
    get firstHIWVideo () { return $('#radix-_R_2elueivb_-content-1 > video') }
    get pTextScroll () { return $('section.relative.pb-xxl div.gap-new-sm.col-span-4 div.text-edge-cap p.typography-paragraph')}
    get voiceAIVideo () { return $('#voice-ai-agents-0 div video') }
    get copyButton () { return $('#radix-_R_6clueivb_-content-0 > div > div > div > div > button') }
    get codeTitle () { return $('#code-tab-1-_R_2clueivb_') }
    get purchasePhoneTab () { return $('#code-tab-0-_R_2clueivb_') }
    get firstCodeBlock () { return $('#radix-_R_6clueivb_-content-0 pre:last-of-type > pre') }
    get secondCodeBlock () { return $('#radix-_R_6clueivb_-content-1 pre:last-of-type > pre') }
    get arrowButton () { return $('button[aria-label="Go to previous item"]') }
    get aiAssistanceButton () { return $("div.fixed > button") }
    get aiAssistanceWindow () { return $(".rounded-xl.bg-black") }
    get howItWorksSection () { return $('section.relative.pb-xxl') }
    get ourSolutionsSection () { return $('#voice-ai-agents-0') }

    async open() {
    await browser.url('/')
    try {
        await browser.maximizeWindow()
    } catch (e) {
        await browser.setWindowSize(1920, 1080)
    }
}


    async verifyTitleSequence() {
        let currentTitle = await this.title.getText()
        console.log('Initial title:', currentTitle)
        expect(currentTitle).toBe('Conversational AI')
        
        await browser.pause(4500)
        currentTitle = await this.title.getText()
        expect(currentTitle).toBe('Text to Speech')
        
        await browser.pause(3000)
        currentTitle = await this.title.getText()
        expect(currentTitle).toBe('Speech to Text')
    }

    async openProductsMenu() {
        await this.productMenu.click()
        await this.productDropListMenu.waitForDisplayed({ timeout: 3000 })
        expect(await this.productDropListMenu.isDisplayed()).toBe(true)
    }

    async clickCallAgentButton() {
        await this.callAgentButton.waitForDisplayed({ timeout: 5000 })
        await this.callAgentButton.scrollIntoView()
        await this.callAgentButton.click()
    }

    async clickSignUpInHeader() {
        const signUpBtn = await this.signUpButton[0]
        await signUpBtn.waitForClickable({ timeout: 5000 })
        await signUpBtn.click()
        await browser.pause(1000)
        expect(await browser.getUrl()).toContain('/sign-up')
    }

    async clickStartBuildingButton() {
        await this.startBuildingButton.scrollIntoView()
        await browser.pause(500)
        await this.startBuildingButton.waitForClickable({ timeout: 5000 })
        await this.startBuildingButton.click()
    }

    async openContactUsPage() {
        await this.contactUsLink.scrollIntoView()
        await this.contactUsLink.click()
        await browser.pause(1000)
        expect(await browser.getUrl()).toContain('contact-us')
    }

    async clickMCPIntegration() {
        await this.mcpDropList.scrollIntoView()
        await browser.pause(500)
        await this.mcpDropList.waitForClickable({ timeout: 5000 })
        await this.mcpDropList.click()
        await browser.pause(1000)
    }

    async verifyHowItWorksAnimation() {
        await this.pTextScroll.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
        await this.firstHIWVideo.scrollIntoView()
        await browser.pause(1000)
        const isVideoDisplayed = await this.firstHIWVideo.isDisplayed()
        expect(isVideoDisplayed).toBe(true)
    }

    async openAIAssistance() {
        await this.aiAssistanceButton.waitForDisplayed({ timeout: 10000 })
        await this.aiAssistanceButton.click()
        await this.aiAssistanceWindow.waitForDisplayed({ timeout: 3000 })
        expect(await this.aiAssistanceWindow.isDisplayed()).toBe(true)
    }

    async clickGPTIcon() {
    await this.gptIcon.scrollIntoView()
    await browser.pause(500)
    await this.gptIcon.waitForClickable({ timeout: 5000 })
    await this.gptIcon.click()
    await browser.pause(1000)
    
    const windowHandles = await browser.getWindowHandles()
    if (windowHandles.length > 1) {
        await browser.switchToWindow(windowHandles[windowHandles.length - 1])
        await browser.closeWindow()
        await browser.switchToWindow(windowHandles[0])
    }
    await browser.pause(500)
}


    async clickExploreDevDocs() {
        await this.devDocsButton.scrollIntoView()
        await browser.pause(500)
        await this.devDocsButton.waitForClickable({ timeout: 5000 })
        await this.devDocsButton.click()
        await browser.pause(2000)
        const windowHandles = await browser.getWindowHandles()
        await browser.switchToWindow(windowHandles[windowHandles.length-1])
        expect(await browser.getUrl()).toContain('developers.telnyx.com')
    }

    async clickCopyButton() {
        await this.copyButton.scrollIntoView()
        await browser.pause(500)
        await this.copyButton.waitForClickable({ timeout: 5000 })
        const isClickable = await this.copyButton.isClickable()
        expect(isClickable).toBe(true)
        await this.copyButton.click()
        await browser.pause(500)
    }

    async clickChatWithLanguageModel() {
        await this.codeTitle.scrollIntoView()
        await browser.pause(500)
        await this.codeTitle.waitForClickable({ timeout: 5000 })
        await this.codeTitle.click()
        await browser.pause(1000)
        await this.secondCodeBlock.waitForDisplayed({ timeout: 3000 })
        expect(await this.secondCodeBlock.isDisplayed()).toBe(true)
    }

    async clickPurchasePhoneNumber() {
        await this.purchasePhoneTab.scrollIntoView()
        await browser.pause(500)
        await this.purchasePhoneTab.waitForClickable({ timeout: 5000 })
        await this.purchasePhoneTab.click()
        await browser.pause(1000)
        await this.firstCodeBlock.waitForDisplayed({ timeout: 3000 })
        expect(await this.firstCodeBlock.isDisplayed()).toBe(true)
    }

    async verifyArrowButton() {
        await this.arrowButton.scrollIntoView()
        await browser.pause(500)
        const isDisplayed = await this.arrowButton.isDisplayed()
        expect(isDisplayed).toBe(true)
    }

    async verifyMainVideo() {
        await this.mainVideo.waitForDisplayed({ timeout: 5000 })
        const isDisplayed = await this.mainVideo.isDisplayed()
        expect(isDisplayed).toBe(true)
    }

    async verifyNativeSpeechVideo() {
    try {
        await this.pTextScroll.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
        await browser.pause(1000)
    } catch (e) {
    }
    
    await this.firstHIWVideo.scrollIntoView()
    await browser.pause(1000)
    const isVideoDisplayed = await this.firstHIWVideo.isDisplayed()
    expect(isVideoDisplayed).toBe(true)
}

    async verifyVoiceAIAgentsVideo() {
        await this.ourSolutionsSection.scrollIntoView()
        await browser.pause(1000)
        await this.voiceAIVideo.waitForDisplayed({ timeout: 5000 })
        const isDisplayed = await this.voiceAIVideo.isDisplayed()
        expect(isDisplayed).toBe(true)
    }
}