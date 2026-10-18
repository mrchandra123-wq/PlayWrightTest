export class YourInfoPage{
    constructor(page){
        this.page = page;
        this.firstNameTextField = page.locator('#first-name');
        this.lastNameTextField = page.locator('#last-name');
        this.zipcodeTextField = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
    }

    async fillForm(firstname,lastname,zipcode){
        this.firstNameTextField.fill(firstname);
        this.lastNameTextField.fill(lastname);
        this.zipcodeTextField.fill(zipcode);
        this.continueButton.click();
    }
}