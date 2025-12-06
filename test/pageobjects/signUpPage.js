import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'

export default class SignUpPage {
    get promoLink () { return $("button.c-ewUecD > span") }
    get promoField () { return $("input#promo_code") }
    get emailField () { return $("input#email") }
    get firstNameField () { return $("input#first_name") }
    get lastNameField () { return $("input#last_name") }
    get passwordField () { return $('input[type="password"]') }
    get agreeCheckBox () { return $("input#terms_and_conditions") }
    get signUpButton () { return $("form.c-gJSRkV > button") }

    async showPromoCodeField() {
        await this.promoLink.waitForDisplayed({ timeout: 5000 })
        await this.promoLink.click()
        await this.promoField.waitForDisplayed({ timeout: 3000 })
        expect(await this.promoField.isDisplayed()).toBe(true)
    }

    async fillSignUpForm(email, firstName, lastName, password) {
        await this.emailField.waitForDisplayed({ timeout: 5000 })
        await this.emailField.setValue(email)
        await this.firstNameField.setValue(firstName)
        await this.lastNameField.setValue(lastName)
        await this.passwordField.setValue(password)
        await this.agreeCheckBox.scrollIntoView()
        await this.agreeCheckBox.click()
    }

    async submitSignUpForm() {
        await this.signUpButton.click()
        await browser.pause(2000)
    }

    async completeSignUp(email, firstName, lastName, password) {
        await this.fillSignUpForm(email, firstName, lastName, password)
        await this.submitSignUpForm()
    }
}