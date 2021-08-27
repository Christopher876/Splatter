interface IToken{
    accessToken : string;
    refreshToken : string;
}

class Token {
    public accessToken : string;
    public refreshToken : string;

    constructor(obj? : IToken) {
        this.accessToken = obj?.accessToken as string;
        this.refreshToken = obj?.refreshToken as string;
    }
}

export default Token;