import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'

export default class ContactUsPage {
    get phoneField () { return $("#Phone_Number_Base__c") }

    async fillPhoneNumber(phoneNumber) {
        await this.phoneField.waitForDisplayed({ timeout: 5000 })
        await this.phoneField.setValue(phoneNumber)
        const phoneValue = await this.phoneField.getValue()
        expect(phoneValue).toBe(phoneNumber)
    }
}