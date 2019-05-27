# FriendFinder

Friend Finder is an app which matches you against stored friends to find common intrests.   The app has many levels which work together to accomplish this.   

home.html -- This is the landing page for the app.  Here the user is introduced to the look and feel of the app.   We can start the survey
             which sends us to the survey.html.
             
survey.html -- This is were the html for the survey is created.   All of the questions and selectable answers are located.   The user must 
              complete the survey and provide a nmae and photo to be accepted.   If the form is not filled out correctly or any                         information is incomplete, then the app will give an alert "Please fill out all fields before submitting".   This html also               contains the modal for displaying the "Best Match: from the app.
              
friends.js -- This is were the form data is stored from the survey from each user.   The data is stored in a array.   The data is usable
              with the "module.export".
              
htmlRouters.js --  Here the "path" is defined for the app.get to get the survey.html page or the default home.html page.

apiRoutes.js -- Here we app.get the friends.js file and use the data from the JSON res.   We use this data to create the logic needed to 
               find the difference between user and stored friends.   We can set variable for the data and find the match for the app.
               This data is updated in the JSON and also pushed to the newData the the newScores variable.
               
server.js --    This file is were the connection is made for the brouser to communicate to the app.   Here the user can type the url for 
                 the web app to locate the home.html.   This file also contains the body-parser middleware by default.
                       
         
              
                 
              
