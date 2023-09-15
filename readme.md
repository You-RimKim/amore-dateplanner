d'Amore Date Planner

https://amoredateplanner.cyclic.app/

## Description
    d'Amore is a date planner app, on which users can get inspiration for their next dates.
    By signing up and logging in, users can share their preferences regarding the date ideas in four categories: Location (outdoor or indoor), Adventure level (not at all, somewhat, very), Budget (low, medium, high) and Duration (couple of hours, half a day or weekend).
    Based on their preferences, users will get date ideas which are stored in the data base.
    Further, they can explore other similar date ideas.
    Users can get new ideas by changing their preferences.


## MVP
    - Users start on the welcome page and see different options on the right top:
        - About us
        - Signup
        - Login
        - Profile
        - Date Ideas
        - Logout
    - About us tells the user about the backstory of this app.
    - On Signup the user is asked to create a profile with an username, email address and password. All fields are required.
    - On Login the user can log into the app and will be redirected to their Profile page.
    - On the Profile page the user will be asked our their preferences.
    - On Date Ideas all possible date ideas will be displayed after user has given their preferences.
    - Via Logout the user will be redirected to the welcome page.

## Backlog Functionalities
    - Future possible features:
        - Saving favourite date ideas
        - Extending date idea data base
        - Adding more detailed descriptions about the date ideas
        - Edit profile page


## Used Technologies
    - HTML
    - Handlebars HBS
    - CSS Bootstrap
    - JavaScript
    - DOM Manipulation
    - JS Express
    - Node.js
    - JS Image()
    - Mongoose
    - MongoDB and MongoDB Atlas Cloud


## Folder & Data structure
    - bin
        - seedds.js
    - config
        - index.js
        - session.config.js
    - db
        - index.js
    - error-handling
        - index.js
    - middleware
        - route-guard.js
    - models
        - Ideas.model.js
        - User.model.js
    - public
        - images
        - js
            - script.js
        - stylesheets
            - style.css
    - routes
        - auth.routes.js
        - datesuggestions.routes.js
        - index.routes.js
    - views
        - auth 
            - login.hbs
            - signup.hbs
        - partials
            - questionnaire.hbs
        - users
            - datesuggestions.hbs
            - user-profile.hbs
        - about-us.hbs
        - error.hbs
        - index.hbs
        - layout.hbs
        - not-found.hbs
    - app.js
    - server.js


## States
    - Welcome Screen 
    - About Us Screen
    - Sign Up Screen
    - Login Screen
    - Profile Page
    - Date Ideas Page


## Ideal Task Order
    - Sketching out the wireframes and logic of app 
    - First route, views, models templates
    - Assigning tasks and dividing works
    - Installing all packages (npm express, bcryptjs, handlebars, etc.)
    - First deployment
    - Connecting the database
    - Creating all files and connecting them
    - Troubleshooting
    - Researching resources (images, videos and audio)
    - Styling (CSS Bootstrap)


## Links
    - Miro Board: https://miro.com/welcomeonboard/bGlHUzNGOEtDQzdrclNRNHU0N0J2cGw4R1JaTEtGeHZuSnBTekZ4R0I1Uk5JSWhOSXBmUWlFYXp2Y2Z6MU1CYnwzNDU4NzY0NTYzNDYxNDQ3MDY0fDI=?share_link_id=828491617158
    - Slides: https://www.canva.com/design/DAFuf8_w5bY/on7BgnmsGTQew-0bovqHrA/view?utm_content=DAFuf8_w5bY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink
    - Github Repository: https://github.com/You-RimKim/amore-dateplanner
    - Deployment: https://amoredateplanner.cyclic.app/


## Resources used:
    - 