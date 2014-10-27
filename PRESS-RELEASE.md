# ReactJS-Fullstack Slush Generator#

## Summary ##
  >Slush Generator for React.js lets you quickly set up a fullstack project with an express server, useful options for database, front end framework, build-tool and testing integration.
  
### Client ###

  * Scripts: JavaScript, JSX, (CoffeeScript)
  * Markup: HTML, (Jade)
  * Stylesheets: CSS, (Stylus), (Sass), (Less)

### Server ###

  * Database: None, MongoDB
  * Authentication boilerplate: Yes, No
  * PasswordHashing: BCrypt, Crypto
  * oAuth integrations: Facebook Twitter Google
  * Socket.io integration: Yes, No


  ##Generators##
  * react-fullstack (aka react-fullstack:app)
  * react-fullstack:endpoint
  * react-fullstack:component
  * react-fullstack:crud
  * react-fullstack:action
  * react-fullstack:dispatcher
  * react-fullstack:store

## Problem ##
  > There is no fullstack ReactJS Generator. Existing react generators offer few features/options. React is gaining popularity and this issue needs to be addressed.

## Solution ##
  > Elegantly drafts scaffolds for faster implementation of React applications. Drastically reduces the learning curve and time spent writing boilerplate code. Integrates perfectly with Flux and has a complete backend using Express and Mongo.

## Quote from You ##
  >"I don't even know React but I could make a fullstack app using this. Move over Facebook!" - Teresa
  "I have ten million users rendered concurrently on my app. Angular couldn't handle it, but it was no problem for React Fullstack" - Richard
  "React can render every single note in the musical spectrum" - Marc
  "I just built this for the Github Stars" - James

## Usage
Install `slush generator`
```
npm install -g slush
```
Install `gulp`
```
npm install -g gulp
```
Make a new directory, and `cd` into it
```
mkdir my-new-project && cd $_
```
Install `react-fullstack generator`
```
npm install -g slush-react-fullstack
```
Generate your full app template
```
slush react-fullstack
```

Run `gulp` to preview on local host, don't forget to spin up an instance of mongo when doing so!

## Customer Quote ##
  > "I owe my entire company to this scaffold" - Tony Phillips

## Closing and Call to Action ##
  > Use React in your next web app, and use react-fullstack to save time.
