

export class AuthService{

    loggedIn = false;
    redirectUrl: any;

    isAuthenticated(): any{
        const promise = new Promise((resolve,rejects)=>{
            setTimeout(()=>{
                resolve(this.loggedIn);
            }, 700);
        })

        return promise;
    }

    login(){
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }
}