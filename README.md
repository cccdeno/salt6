# salt6 -- A package to salt your password

## Example

```js
import * as salt6 from 'https://deno.land/x/salt6/mod.ts';

function signup(password) {
  const salt = salt6.genSalt()
  const hash = salt6.hash(password+salt)
  return {salt, hash}
}

function login(input, salt, hash) {
  return hash == salt6.hash(input+salt)
}

// signup
let password = "csienqu123"
let {salt, hash} = signup(password)

// login
let input = Deno.args[0]
if (login(input, salt, hash)) {
  console.log('login success!')
} else {
  console.log('login fail!')
}
```

## Run

```
$ deno run salt1.js csienqu123
login success!

$ deno run salt1.js csienqu12
login fail!
```
