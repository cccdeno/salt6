import * as T from 'https://deno.land/x/tdd/mod.ts'
import * as salt6 from '../mod.ts'

Deno.test("TDD", () => {
  // signup
  let password = "csienqu123"
  const salt = salt6.genSalt()
  const hash = salt6.hash(password+salt)

  // login
  T.ok(hash === salt6.hash("csienqu123"+salt))
  T.ok(hash !== salt6.hash("csienqu12"+salt))
})

