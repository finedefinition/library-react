export const oktaConfig = {
    clientId: '0oa8xbq1c8y3nMdyY5d7',
    issuer: 'https://dev-90993097.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}