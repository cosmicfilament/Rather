# Would You Rather Game - Second project in the Udacity React Redux Course
#### John Butler - React Redux project

## Installation:
You need to have  node.js and npm installed in order to run the app. Then, clone or download the files from the github repository to the directory you wish to use. Open the project and run npm install to get all of the dependencies.

Currently the app defaults to starting on localhost and port 3000. But, you can go int webpack.dev.config.js and change the hostname and port variables to the ip address of your computer and the port to the port you want to use if different from port 3000. If you put a valid ip address in then you can test it on a phone and or tablet, too.

There are 3 logins that can be used to test the app:
jpbutler/password1243
sarahedo/password1243
tylermcginnis/password123

## Details:
Rather is a "Would You Rather" game demo that works equally well on any size device by utilizing response web design principles.
You can answer questions and create new questions as well as see your score on the leaderboard. But, when you logout of the app all of your data and stats are lost as it does not save to a real database.


While logged in it simulates getting a token from the server that is good for 30 minutes so if you close the app without logging out first, you should be able to start right back up without re-logging in.

The application is built using react to generate the html, sass for the css and redux for state management.

While working on this project I also created my own boilerplate and did not use facebook's create-react-app scripts. The boilerplate project is also located in my github repository and can be accessed here: [React-Redux-Boilerplate](https://github.com/cosmicfilament/React-Redux-Boilerplate).
