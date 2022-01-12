const url = 'https://tpgnxoyspk.execute-api.us-east-2.amazonaws.com/prod/loginClient'
import * as request from 'superagent';

export async function login(username, password) {
    console.log('in login')
    return await request.post(url).send({
        username,
        password,
        action: 'auth',
    }).then(resb => {
        const body = resb.body;
        console.log(resb);
        if (resb.error) {
            return resb;
        }
        localStorage.setItem('login.hash', body.hash);
        localStorage.setItem('login.nonce', body.nonce);
        return body;
    })
}

export function getLoginInfo() {
    const hash = localStorage.getItem('login.hash');
    if (!hash) return null;
    const nonce = localStorage.getItem('login.nonce');
    return {
        hash,
        nonce,
    }
}

export async function registerUser({ username, firstName, lastName }) {
    console.log('in register')
    return await request.post(url).send({
        username,
        firstName,
        lastName,
        action: 'registerUser',
    }).then(resb => {
        const body = resb.body;
        console.log(body);        
        return body;
    })
}
