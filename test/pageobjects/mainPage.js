import { $, $$ } from '@wdio/globals'
import { expect } from '@wdio/globals'

export default class MainPage {
    get productMenu () { return $("#radix-_R_4b9eivb_") }
    get productDropListMenu () { return $("div.w-full.col-span-8") }
    get signUpButton () { return $$("[href='/sign-up'] > span[data-content='Sign up']") }
    get contactUsLink () { return $('div.items-center > a[href="https://telnyx.com/contact-us"]') }
    get title () { return $("div.overflow-hidden.py-new-xs") }
    get callAgentButton () { return $("div.flex.w-full > a") }
    get hDvoiceAIBlock () { return $$("div.relative.bg-cream-100") }
    get startBuildingButton () { return $("div.flex.items-start.justify-start > a.uppercase") }
    get mcpDropListButton () { return $('#radix-_R_2elueivb_-trigger-3') }
    get mcpDropList () { return $('#radix-_R_2elueivb_-trigger-3 > div  p') }
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
    get arrowButton () { return $$('button[aria-label="Go to previous item"]')[1] }
    get aiAssistanceButton () { return $("div.fixed > button") }
    get aiAssistanceWindow () { return $(".rounded-xl.bg-black") }
    get howItWorksSection () { return $('section.relative.pb-xxl') }
    get ourSolutionsSection () { return $('#voice-ai-agents-0') }
    get acceptCookiesButton () { return $('div button#onetrust-accept-btn-handler') }

    async acceptCookies() {
        try {
            await this.acceptCookiesButton.waitForClickable()
            await this.acceptCookiesButton.click()
        } catch (e) {
        }
    }

    async open() {
        await browser.url('/')
        try {
            await browser.maximizeWindow()
        } catch (e) {
        }
        
    }


    //test cases
    async verifyTitleSequence() {
        const titles = ['Conversational AI', 'Text to Speech', 'Speech to Text']

        for (const expectedTitle of titles) {
            await browser.waitUntil(
                async () => {
                    const currentTitle = await this.title.getText()
                    return currentTitle === expectedTitle
                },
                {
                    timeout: 5000,
                    timeoutMsg: `Expected title to change to "${expectedTitle}"`
                }
            )
            console.log('Current title:', expectedTitle)
            expect(await this.title.getText()).toBe(expectedTitle)
            }
        }

    async openProductsMenu() {
        await this.productMenu.waitForClickable()
        await this.productMenu.click()
        await this.productDropListMenu.waitForDisplayed()
    }

    async clickCallAgentButton() {
        await this.callAgentButton.waitForDisplayed()
        await this.callAgentButton.scrollIntoView()
        await this.callAgentButton.click()
    }

    async clickSignUpInHeader() {
        const signUpBtn = await this.signUpButton[0]
        await signUpBtn.waitForClickable()
        await signUpBtn.click()
        expect(await browser.getUrl()).toContain('/sign-up')
    }

    async clickStartBuildingButton() {
        await this.startBuildingButton.scrollIntoView()
        await this.startBuildingButton.waitForClickable()
        await this.startBuildingButton.click()
    }

    async openContactUsPage() {
        await this.contactUsLink.waitForClickable()
        await this.contactUsLink.click()
        expect(await browser.getUrl()).toContain('contact-us')
    }

    async clickMCPIntegration() {
        await this.howItWorksSection.scrollIntoView()
        await this.mcpDropListButton.scrollIntoView()
        await this.mcpDropListButton.waitForClickable()
        await this.mcpDropListButton.click()
        await this.mcpDropList.waitForDisplayed()
    }

    async verifyHowItWorksAnimation() {
        await this.pTextScroll.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
        await this.firstHIWVideo.scrollIntoView()
        await this.firstHIWVideo.waitForDisplayed()
    }

    async openAIAssistance() {
        await this.aiAssistanceButton.waitForDisplayed()
        await this.aiAssistanceButton.click()
        await this.aiAssistanceWindow.waitForDisplayed()
    }

    async clickGPTIcon() {
        await this.gptIcon.scrollIntoView()
        await this.gptIcon.waitForClickable()
        await this.gptIcon.click()
        
        const windowHandles = await browser.getWindowHandles()
        if (windowHandles.length > 1) {
            await browser.switchToWindow(windowHandles[windowHandles.length - 1])
            await browser.closeWindow()
            await browser.switchToWindow(windowHandles[0])
        }
    }


    async clickExploreDevDocs() {
        await this.devDocsButton.scrollIntoView()
        await this.devDocsButton.waitForClickable()
        await this.devDocsButton.click()
        const windowHandles = await browser.getWindowHandles()
        await browser.switchToWindow(windowHandles[windowHandles.length-1])
        expect(await browser.getUrl()).toContain('developers.telnyx.com')
    }

    async clickCopyButton() {
        await this.copyButton.scrollIntoView()
        await this.copyButton.waitForClickable()
        const isClickable = await this.copyButton.isClickable()
        expect(isClickable).toBe(true)
        await this.copyButton.click()
    }

    async clickChatWithLanguageModel() {
        await this.codeTitle.scrollIntoView()
        await this.codeTitle.waitForClickable()
        await this.codeTitle.click()
        await this.secondCodeBlock.waitForDisplayed()
        await this.secondCodeBlock.waitForDisplayed()
    }

    async clickPurchasePhoneNumber() {
        await this.purchasePhoneTab.scrollIntoView()
        await this.purchasePhoneTab.waitForClickable()
        await this.purchasePhoneTab.click()
        await this.firstCodeBlock.waitForDisplayed()
        await this.firstCodeBlock.waitForDisplayed()
    }

    async verifyArrowButton() {
        await this.howItWorksSection.scrollIntoView()
        await this.arrowButton.scrollIntoView()
        await this.arrowButton.waitForClickable({ reverse: true })
    }

    async verifyMainVideo() {
        await this.mainVideo.waitForDisplayed()
        await this.mainVideo.waitForDisplayed()
    }

    async verifyNativeSpeechVideo() {
        try {
            const pText = await this.pTextScroll
            if (await pText.isExisting()) {
                await pText.scrollIntoView({ behavior: "smooth", block: "center" })
                await browser.pause(1000)
            }
        } catch (e) {
        }
        
        await this.firstHIWVideo.scrollIntoView()
        
        await this.firstHIWVideo.waitForDisplayed()
    }

    async verifyVoiceAIAgentsVideo() {
        await this.ourSolutionsSection.scrollIntoView()
        await this.voiceAIVideo.waitForDisplayed()
        await this.voiceAIVideo.waitForDisplayed()
    }
}