import * as salt6 from '../mod.ts';

// signup
let password = "csienqu123"
const salt = salt6.genSalt()
const hash = salt6.hash(password+salt)

// login
let input = Deno.args[0]
if (hash == salt6.hash(input+salt)) {
  console.log('login success!')
} else {
  console.log('login fail!')
}


