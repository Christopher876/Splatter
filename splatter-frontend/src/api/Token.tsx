import internal from "stream";

interface IToken{
    access_token : string;
    refresh_token : string;
    expires_in: number;
    refresh_expires_in: number;
    token_type: string;
    not_before_policy: number;
    session_state: string;
    scope: string
}

class Token {
    public accessToken : string;
    public refreshToken : string;
    public expires_in: number;
    public refresh_expires_in: number;
    public token_type: string;
    public not_before_policy: number;
    public session_state: string;
    public scope: string

    constructor(obj? : IToken) {
        this.accessToken = obj?.access_token as string;
        this.refreshToken = obj?.refresh_token as string;
        this.expires_in = obj?.expires_in as number;
        this.refresh_expires_in = obj?.refresh_expires_in as number;
        this.token_type = obj?.token_type as string;
        this.not_before_policy = obj?.not_before_policy as number;
        this.session_state = obj?.session_state as string;
        this.scope = obj?.scope as string;
    }
}

export default Token;