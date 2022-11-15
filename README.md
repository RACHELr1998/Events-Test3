# Events-Test
Events-Test - Full Stack Web App (MongoDB, Node.js and Angular)

# Dependencies:
angular: ^14.2.0

MongoDB with Compass

## Import the Database:
1. Open Command Prompt Run as Administrator.
2. Path to folder cd C:\Program Files\MongoDB\Server\6.0\bin
3. Write the following command: mongorestore -d Events dump/Events.
4. Open MongoDB- I used Compass to run.
5. Refresh the list of databases.

## Download and Install:
1. Download my project and cd into it using the following commands:
```
git clone https://github.com/RACHELr1998/Events-Test4
cd Events
```
2. Install required node modules for the Backend and the Frontend using the following commands:
```
cd Frontend
npm i
cd ../Backend
npm i
```

## Run Instructions:
1. Make sure the MySQL server is up and running – For XAMPP you also need to make sure that Apache and MySQL are running to be able to access phpMyAdmin.
2. First, Run the Backend: (Make sure you’re on the Events folder)
```
cd Backend
npm start
```
3. Next, Run the Frontend:
```
cd ../Frontend
npm start
```

This should open up on http://localhost:4200/ and load up!
