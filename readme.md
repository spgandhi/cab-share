# Steps to setup the app
### Install Meteor
Install meteor from here [link](https://meteor.com/install)

### Install Node Modules
Go inside the app directory and run the below command
~~~~
meteor npm install
~~~~
This will install all the necessary packages which are also mentioned in package.json file in the root directory

### Install Meteor Packages
Go inside the app directory and run the below command
~~~~
meteor update
~~~~
This will install all the meteor packages (which a little different from node modules).

### Run the app
In the app directory enter the command ```meteor``` and the app will build up, install all the necessary meteor packages and finally run the app at ```http://localhost:3000```
