'use strict';

/**
  * @file
  * @module
  * @exports
*/

const _server = {};

import { TOKEN_EXPIRY } from './constants';

_server._getNewToken = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(getNewToken()), 1000);
  });
};

_server._getUsers = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
};

_server._getQuestions = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
};
// author, optionOneText, optionTwoText
_server._saveQuestion = (question) => {
  return new Promise((res, rej) => {
    const uid = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      };

      users = {
        ...users,
        [uid]: {
          ...users[uid],
          questions: users[uid].questions.concat([formattedQuestion.id])
        }
      };

      res(formattedQuestion)
    }, 1000);
  });
};

// uid, question.id, optionOne || optionTwo
_server._saveQuestionAnswer = ({ uid, qid, answer }) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [uid]: {
          ...users[uid],
          answers: {
            ...users[uid].answers,
            [qid]: answer
          }
        }
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([uid])
          }
        }
      };

      res()
    }, 2000);
  });
};

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

function getNewToken() {
  return Date.now() + TOKEN_EXPIRY;
};

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  };
};

let users = {
  sarahedo: {
    uid: 'sarahedo',
    password: 'password123',
    name: 'Sarah Edo',
    avatarURL: './src/images/man-4.png',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    uid: 'tylermcginnis',
    password: 'password123',
    name: 'Tyler McGinnis',
    avatarURL: './src/images/man-2.png',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  jpbutler: {
    uid: 'jpbutler',
    password: 'password123',
    name: 'John Butler',
    avatarURL: './src/images/man-1.png',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'jpbutler',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['jpbutler', 'sarahedo'],
      text: 'become a supervillian'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['jpbutler'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'jpbutler',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['jpbutler'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
};


export default _server;
