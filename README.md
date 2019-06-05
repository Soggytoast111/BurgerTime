# BurgerTime

BurgerTime is a little nonsense app that was mostly an exercise in integrating SQL, Express, and Handlebars into seemless delivery of a user experience.  The user is presented with some burgers that are either "served" or "eaten".  Clicking the "served" burgers sends them to the "eaten" column.  Clicking the "eaten" burgers throws them away.  A form at the bottom of the page can serve up new burgers.

## Getting Started

If you just want to play around with the app, you can visit the deployed version at:  https://gentle-tor-60024.herokuapp.com/

If you want to start your own local server to host the app, clone this repo and then run npm install (or manually install express and express-handlebars) from your node environment.

With the server running, visit localhost:8080 to fire up the BurgerTime app.

### Prerequisites

(Nothing is required to see the deployed app - just visit the link.)

The server requires node.js javascript environment.

Dependencies in node are express and express-hanldebars.

### Installing

"npm install" from the command line should install all dependencies.  Otherwise you could install them manually.

### What it does

The "burgers" are stored in an SQL database with a property of either "served" or "eaten".  Handlebars takes in this data on the back-end and then generates a web page on-the-fly for the user to interact with.  

Clicking a burger in the "served" column runs an SQL command to change it's flag to "eaten" - and when the page is refreshed it now appears in the other column as a trash can.  Clicking a trash can runs an SQL command to delete the entry from the database.  

The form at the bottom of the page allows the user to insert new burgers into the database - these can be flagged as either "served" or "eaten" (so that they appear in either column).
