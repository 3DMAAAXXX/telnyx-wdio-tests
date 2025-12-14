import MainPage from '../pageobjects/mainPage.js'
import SignUpPage from '../pageobjects/signUpPage.js'
import ContactUsPage from '../pageobjects/contactUsPage.js'

const mainPage = new MainPage()
const signUpPage = new SignUpPage()
const contactUsPage = new ContactUsPage()

describe('Telnyx Voice AI Application Tests', () => {

    before(async () => {
        await mainPage.acceptCookies()
    })
    
    beforeEach(async () => {
        await mainPage.open()
    })

    it('Main title change 3 times', async () => {
        await mainPage.verifyTitleSequence()
    })

    it('Click on "Products" in header show drop list', async () => {
        await mainPage.openProductsMenu()
    })

    it('Button "Call your agent" scroll to block "HD Voice AI"', async () => {
        await mainPage.clickCallAgentButton()
    })

    it('Button "Sign Up" open page registration', async () => {
        await mainPage.clickSignUpInHeader()
    })

    it('Promo field of the form registration shows after click on "Apply a promo code"', async () => {
        await mainPage.clickSignUpInHeader()
        await signUpPage.showPromoCodeField()
    })

    it('Correct fill registration form', async () => {
        await mainPage.clickSignUpInHeader()
        await signUpPage.completeSignUp(
            'rexese6435@ametitas.com',
            'Qwerty',
            'Asdfgh',
            'tsqfvxAv8J>$f'
        )
    })

    it('Button "START BUILDING" above the footer open page of registration', async () => {
        await mainPage.clickStartBuildingButton()
    })

    it('Button "Contact us" open page with form "Talk to an expert"', async () => {
        await mainPage.openContactUsPage()
    })

    it('Click on "MCP integration" in block "HOW IT WORKS" displays a description of this function', async () => {
        await mainPage.clickMCPIntegration()
    })

    it('Validation of the "Talk to an expert" phone field in the form with number', async () => {
        await mainPage.openContactUsPage()
        await contactUsPage.fillPhoneNumber('1234')
    })

    it('Verify "How It Works" Block Animation on Scroll', async () => {
        await mainPage.verifyHowItWorksAnimation()
    })

    it('Verify AI Assistant Widget Opens via Green Button', async () => {
        await mainPage.openAIAssistance()
    })

    it('Verify "Ask AI" Function via Footer GPT Icon', async () => {
        await mainPage.clickGPTIcon()
    })

    it('Verify Navigation to Dev Docs from "FOR DEVELOPERS" Block', async () => {
        await mainPage.clickExploreDevDocs()
    })

    it('Verify Copy Button in "FOR DEVELOPERS" Block', async () => {
        await mainPage.clickCopyButton()
    })

    it('Verify Code Change: "Chat with Language Model"', async () => {
        await mainPage.clickChatWithLanguageModel()
    })

    it('Verify Navigation Arrow: "Purchase a Phone Number"', async () => {
        await mainPage.verifyArrowButton()
    })

    it('Verify Main Video Autoplay on Page Load', async () => {
        await mainPage.verifyMainVideo()
    })

    it('Verify "Native-Speech Pipeline" Video in "HOW IT WORKS"', async () => {
        await mainPage.verifyNativeSpeechVideo()
    })

    it('Verify "Voice AI Agents" Video in "OUR SOLUTIONS"', async () => {
        await mainPage.verifyVoiceAIAgentsVideo()
    })
})