server.js - main file being exceuted contains port set up.      
            beofre this happens app.js will be called

app.js.   - organize order in which middleware and route files are called

db/index.js - file for db config. All db related stuff goes here

config/index.js - file where basic app config goes. any additonal middleware goes here.

routes/ - folder where all route files will be.

utlis/ the foloder where you can have all helpter methods (in starter you are provied with capitcalize method but can add as many as your app requires)

error-handiling/index.js - used for 404 and 500 erros

views/ folder containing default vieews. All of them using handlebars.
    
    - error.hbs - view that will be rendered in case we have an error on the server
    
    -index.hbs-  the view that will be rendered when navigating to the root
    
    -layout.hbs - a layout file created by default.

public/ - folder to store  static files. In app.js has basic set up. Points all static files in and from the public folder

node_modules/ - folder that holds installation of all the dependencies/packages used. should not be changes (UNLESS IT ISN'T THERE LOL)

package.json - has every dependency we will need.

.env - file that will hold private PAI keys and other information. Won't be pushed to github lol

.gitirnore- used to ignore changes in the indicated file so git doens't track them lol



