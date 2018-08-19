# 30dayPactApp

### Client 
client is Ract App. 

To start just front end, go into client folder and 
`npm yarn start`

### server 


## To run both Client and Server 
npm concurrently is used.
`"scripts": {
    "start": "concurrently --kill-others \"npm start --prefix server\" \"npm start --prefix client\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },'