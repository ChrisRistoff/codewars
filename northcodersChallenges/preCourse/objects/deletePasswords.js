function deleteManyPasswords(users) {

  for (let i=0;i<users.length;i++) {
    delete users[i].password
  }

  return users
}


const users = [
  {
    name: 'Sam',
    password: '123abc'
  },

  {
    name: 'Tyler',
    password: 'abc123'
  },

  {
    name: 'Brook',
    password: 'qwerty'
  }
]

console.log(deleteManyPasswords(users))
