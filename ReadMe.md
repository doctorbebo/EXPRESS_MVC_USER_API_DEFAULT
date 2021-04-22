# Basic layout for MVC with Express. 

## Model: handles data manipulation and database saving. 
## View: handles the presentation of the data
* Note: The public folder is sent directly to the client and is **public**! 
## Controller: recieves requests and tells model and view what to do and respondes to request. 
* Note: Mostly the controller will handle requests and responses within the routes folder for a simple app. As the app grows the routes should be seperated into smaller more focused express routes.

The Starting point of the application is in the app.js file. ```npm run start``` will start the app. Note: `npm run dev` will start the app with nodemon which dynamically restarts the app upon saving changes. 

