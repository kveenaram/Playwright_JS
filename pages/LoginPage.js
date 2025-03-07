class LoginPage {

    // locators and methods related to login page
    constructor(page) {
        this.page = page // Intializing the page fixture that is coming from the test file
        this.username = this.page.getByPlaceholder('email@example.com')
        this.password = this.page.getByPlaceholder('enter your passsword')
        this.loginBtn = this.page.locator('#login')
        this.loginErrorMessage = this.page.locator("#toast-container")
        this.homePageIdentifier = this.page.locator("[routerlink='/dashboard/']")
    }
        // In JS, if a method is defined inside a class, we dont need to mention a function name keyword

        async launchURL(url) {
            await this.page.goto(url)

        }

        async validLogin(username, password) {
            await this.username.fill(username)
            await this.password.fill(password)
            await this.loginBtn.click()
           //assertions will go in test file
        }

        async invalidLogin(username, password) {
            await this.username.fill(username)
            await this.password.fill(password)
            await this.loginBtn.click()
        }
}
module.exports = { LoginPage }; // we need this to make the class as public to access in other files
