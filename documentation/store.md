# Redux store objects

### authUser

````js
authUser: {
    uid: 'jpbutler'
    token: 'uuid'
}
````

### user

````js
jpbutler: {
    uid: 'jpbutler',
    password: 'password123',
    name: 'John Butler',
    avatarURL: '../images/avatars/man-1.png',
    answers: {
        "uuid": 'optionOne',
        "uuid": 'optionOne',
        "uuid": 'optionTwo',
        "uuid": 'optionTwo'
    },
    questions: ['uuid', 'uuid'
    ]
}
````

### question

````js
 "uuid": {
    id: 'uuid',
    author: 'jpbutler',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['jpbutler', ...],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  }
  ````
