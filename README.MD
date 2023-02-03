## Project
For this project I'm going to be using the MEVN stack.

## Dev Environment
To set up the development environment, I installed Node.js, npm, MongoDB, and mongoose and then set up a database for my project.
I then initialised my project and installed Express and Vue.
I followed this by setting up my express server and configuring it to my DB in server.js
I then set up my vue application in main.js and made it make API requests to the Express server 


## Database
My approach to creating the database was to plan the data structure and the relationships between them for my project. For instance every book has (a) category/categories so a many to many relationship was used. I first defined all my Schemas and then modelled my relationships. I also used an indexing strategy to optimise the efficiency of my queries. I then inputted my sample data made with faker.js so the database can be tested. I also used some of MongoDB Atlas security features such as encrypting data at rest and TLS.

To create my database, I planned my data structure which can be found in dbStructure.csv. I then planned and modelled the relationships between them in my project.