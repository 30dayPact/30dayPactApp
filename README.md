# 30dayPactApp
30 day challenges with your friends or simple commitment to better self.

- Your dashboard displays progress of each challenges. 
- The challenge pact-room displays progress of pact members. 

## How to install 
- Make a directory where you want the project to be. 
- Make sure you have latest node.js installed.
- Inside of your project folder, create an empty Git repository.

`git init`
- Clone the project repository into a the directory using repository url: https://github.com/30dayPact/30dayPactApp.git

`git clone https://github.com/30dayPact/30dayPactApp.git`
- Go into client folder.

`cd client `

- Install dependency.

`npm install`
- Repeat this process in the server folder.

`cd ..` -- get out from client folder

`cd server` -- go into server folder

`npm install`

- Install dependency on the project root directory. 

`cd ..` -- get out from server folder.

`npm install`

## To run the app (both Client and Server)
- In the project root directory, use npm start command.
`npm start`

To start both client and server, npm concurrently is used.

`"scripts": {
    "start": "concurrently --kill-others \"npm start --prefix server\" \"npm start --prefix client\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },`

### Client 
client side is build with React. 

To start just front end, go into client folder. 

`npm yarn start`

### Server 
- under construction

### ToDo:
- [x] UI/UX design
- [x] Basic component construction 
- [x] Databse construction - mongoDB
- [x]
- [x]
- [x]
