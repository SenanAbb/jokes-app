# jokes-app

### Used technology

- MySQL Installer (https://dev.mysql.com/downloads/installer/)
Through this installer we will install MySQL Server
- NodeJS (last version) (https://nodejs.org/en/download/)

### First steps
When we have all the technologies installed, we begin the project initialization process.

#### 1. MySQL Installer
**1.1.** When executing the installer, a window will open that will have several options on the right side. We click on **Add**.

**1.2.** A screen will open with different installation options. In our case, we select **Custom** and click on **Next**.

**1.3.** Select on the left side MySQL Servers -> MySQL Server -> MySQL Server 8.0 -> Select the latest available version, and click on the green arrow in the middle (right direction) to pass the product to installation.
It may happen that the list of products is empty, in this case, we must make sure that there is no search filter selected (text field).
Click on **Next**. Click on **Execute**. We wait for the installer to finish to go to the server configuration.

**1.4.** When you have finished installing, click on **Next**

**1.5.** A window will be displayed to configure the server. The first step is to select the port. By default it will be 3306. 

**1.6.** We click **Next** until we reach the Accounts and Roles window.

**1.7.** We create a root password, which we will have to remember later. Since we work locally I recommend using root as the password.

**1.8.** Click Next to the last screen, where we will start the server. If everything has gone well, all the checks should be green.

**1.9.** We have finished configuring our server. Let's verify that it works correctly. To do this, we open a terminal (CMD or Powershell if we work with Windows) and verify that the mysql command works, even if it does not log us in. In case you can't find the command, it's because we have to add the server binaries to the environment variables.

**1.10.** Once verified that the command works correctly, it is time to log in to the server that we have just created. For this we use the command `mysql -u root -p`
It will ask us for the password, which is the one we created previously, according to my recommendation, *root*.

**1.11.** If everything went well, it should welcome us to the server, showing information about it in the console. The next step is to create the database and the tables that we are going to use.
To do this, we go to the *jokes-app/jokes-app-backend/db/script.sql* file, copy its content and paste it into the console.

To verify that everything has gone correctly, we can use the `SHOW DATABASES;` command, which will show us a list with all the available databases. To use a specific database we write `USE [database_name];`. This makes us "enter" into the chosen database. Once inside, we can use the `SHOW TABLES;` command to verify that the table has been created correctly.

If everything went well, we have finished creating our database. We can now start working with the server that is going to connect to it.

#### 2. NodeJS
**2.1.** The first thing is to check that we have Node installed correctly. To do this, from a command console, we type `node -v`. If it shows us the version of node that we are using, it means that it is installed. If it comes out that *node* is not recognized as a command, we have to add it to the environment variables.

**2.2.** Now that we know we have node installed, from a terminal, we go to the root of the project */jokes-app/jokes-app-backend*

**2.3.** Being in this folder, we execute the `npm i` command to install all the dependencies of the project. These are:
 - Express
 - mysql
 - node-fetch
 - cors
 - Nodemon (development dependencie)

If everything went well we will see that the new folder *node_modules* has been created in the directory

**2.4.** With all the dependencies installed, it's time to populate the database with the JSON provided from GitHub. The first thing is to check that the credentials we have to make the connection with Node are correct. To do this we go to the *db/connection.js* file and modify the user and password fields according to the configuration we made in the MySQL installer. 

Now, we write in the terminal the command `node db/db_script.js`. 

This script accesses the GitHub URL, fetches the information in JSON format, and inserts it into the database. 

It can give some authentication error, the most common is the following:

** Client does not support authentication protocol requested by server; consider upgrading MySQL client**

If this happens, in the MySQL terminal we execute the following: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '[password]';`
where [password] is the server password (*root*) and then: `flush privileges;`

To verify that this has been done, we must go to the mysql console (the one used to create the database previously. If it has been closed, open another terminal and execute the steps in point 1.10 to re-enter the server and be able to see the databases) and write the command `SELECT COUNT(*) FROM jokes;`. This returns the total number of rows in the table, which must be greater than 0, and in this case, 400.

With all this, we already have the database initialized. We can now execute the API to receive requests.

To do this, we run the `nodemon` command from the terminal. The server will start, and if everything went well, we should see the message "Listening on port 4000" on the console. The server is now ready to receive requests from the client.

**2.5.** Let's initialize the client. To do this, from another terminal, we move to the route */jokes-app/jokes-app-frontend*. Once in the folder, we run the `npm i` command. The necessary packages will be installed to be able to execute the client. If everything went well, we will see that the new **node_modules** folder has been created, where all the project dependencies are located.

Once this is done, all that remains is to run the client with the `npm run dev` command. Let's remember that both in the frontend and in the backend we are working in development mode, if we want to work in production mode the commands are slightly different, but we are not going to see this in this project.

Now that the client is running, all that remains is to open a browser and go to the URL *http://locahost:3000* and use the application.