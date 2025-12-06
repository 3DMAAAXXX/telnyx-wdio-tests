import MainPageClass from '../pageobjects/mainPage.js'
import SignUpPageClass from '../pageobjects/signUpPage.js'
import ContactUsPageClass from '../pageobjects/contactUsPage.js'

const MainPage = new MainPageClass()
const SignUpPage = new SignUpPageClass()
const ContactUsPage = new ContactUsPageClass()

describe('Telnyx Voice AI Application Tests', () => {
    
    beforeEach(async () => {
        await MainPage.open()
    })

    it('Main title change 3 times', async () => {
        await MainPage.verifyTitleSequence()
    })

    it('Click on "Products" in header show drop list', async () => {
        await MainPage.openProductsMenu()
    })

    it('Button "Call your agent" scroll to block "HD Voice AI"', async () => {
        await MainPage.clickCallAgentButton()
    })

    it('Button "Sign Up" open page registration', async () => {
        await MainPage.clickSignUpInHeader()
    })

    it('Promo field of the form registration shows after click on "Apply a promo code"', async () => {
        await MainPage.clickSignUpInHeader()
        await SignUpPage.showPromoCodeField()
    })

    it('Correct fill registration form', async () => {
        await MainPage.clickSignUpInHeader()
        await SignUpPage.completeSignUp(
            'rexese6435@ametitas.com',
            'Qwerty',
            'Asdfgh',
            'tsqfvxAv8J>$f'
        )
    })

    it('Button "START BUILDING" above the footer open page of registration', async () => {
        await MainPage.clickStartBuildingButton()
    })

    it('Button "Contact us" open page with form "Talk to an expert"', async () => {
        await MainPage.openContactUsPage()
    })

    it('Click on "MCP integration" in block "HOW IT WORKS" displays a description of this function', async () => {
        await MainPage.clickMCPIntegration()
    })

    it('Validation of the "Talk to an expert" phone field in the form with number', async () => {
        await MainPage.openContactUsPage()
        await ContactUsPage.fillPhoneNumber('1234')
    })

    it('Verify animation in block "How it works"', async () => {
        await MainPage.verifyHowItWorksAnimation()
    })

    it('Verify "AI Assistant"', async () => {
        await MainPage.openAIAssistance()
    })

    it('Verify function "Ask ai"', async () => {
        await MainPage.clickGPTIcon()
    })

    it('Verify "Explore Dev Docs"', async () => {
        await MainPage.clickExploreDevDocs()
    })

    it('Verify copy button', async () => {
        await MainPage.clickCopyButton()
    })

    it('Verify changing code in block "FOR DEVELOPERS"', async () => {
        await MainPage.clickChatWithLanguageModel()
    })

    it('Verify arrow in block "FOR DEVELOPERS"', async () => {
        await MainPage.verifyArrowButton()
    })

    it('Verify main video', async () => {
        await MainPage.verifyMainVideo()
    })

    it('Verify video "Native-speech pipeline"', async () => {
        await MainPage.verifyNativeSpeechVideo()
    })

    it('Verify video "Voice AI Agents"', async () => {
        await MainPage.verifyVoiceAIAgentsVideo()
    })
})