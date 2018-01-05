# TimeMap
TimeMap is a calendar that makes your scheduling easy and simple.   
It's also a personal assitant that reminds you of your upcoming events and the time to leave for your next event.
<https://TimeMap.github.io>

## Getting Started
#### Set up the enviroment
Install
1. [nodejs](https://nodejs.org/en/)
2. [postgresql](https://www.postgresql.org/) (you may need to set up the database)

Then enter the following commend.
```
npm install
```
#### Set the enviroment veriable
You need to set up the following enviroment veriables:  
`NODE_ENV`, `PG_HOSTNAME`, `PG_PORT`, `PG_USERNAME`, `PG_PASSWORD`, and `PG_DB_NAME`.  

For windows, you can create a file `env.bat` like this:  
```
echo 'Setting up environment variables...'

set NODE_ENV=development

set PG_HOSTNAME=localhost
set PG_PORT=5432
set PG_USERNAME=the_db_user_name
set PG_PASSWORD=the_db_password
set PG_DB_NAME=the_db_name

echo 'Done'
```
Then enter the following commend.  
```
call env.bat
```

#### Set up the database

```
npm run schema
```

#### Start the server

```
npm run server
```

#### Start the client
To run the webpack-dev-server
```
npm start
```

## Deploy
#### Client side
```
npm run build
```
This will create `index.bundle.js` and `vendor.bounder.js` in the `dist` folder for the client side.  

#### Server side
We use a new [repo](https://github.com/TRKuan/timemap-webapp-server) the make the project clean.
