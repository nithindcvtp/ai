# Family AI Gateway

GitHub Pages-compatible prototype.

## Files

- `index.html` - website
- `style.css` - design
- `script.js` - token verification

## Important

The token in `script.js` is only a frontend website access token.

It does NOT:
- authenticate to ChatGPT
- provide access to a ChatGPT Premium account
- contain an OpenAI API key
- provide access to private ChatGPT conversations

Because GitHub Pages is public, anyone who obtains the token can inspect the JavaScript and use it. This is therefore suitable only as a prototype/interface.

For real private family access, use a backend with server-side authentication and keep the OpenAI API key on the server.
