import { LoginPage } from "./LoginPage";

export class PageMapper{
    constructor(page){
        this.page = page;
        this.loginPageInstance = new LoginPage(page);
    }
getLoginPageInstance()    {
    return this.loginPageInstance;
}
}