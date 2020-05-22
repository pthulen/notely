
Notely is a fullstack MERN application. 

With Notely, users can send out surveys to a list of emails to gather
information.  The application uses Google Oauth to sign in and save
user profiles to a MongoDB Altas database.  Users can purchase credits
using an embedded Stripe credit card payment system.  Once users have
purchased credits and sent out surveys, the can view the responses of 
their surveys in their account.

To run a development server:
Make sure all dependencies are install in the main directory as well as
in the client directory by running "npm install" in both directories

From the main directory run the command "npm run dev"
This will start up the backend server as well as the frontend server

In order to have a fully functioning developemt server ensure that you
have set up and stored the relevent keys for:
MongoDB 
GoogleOauth
Sendgrid (for sending out the surveys via email)
Stripe

All keys are stored in the config folder, a file to hold will need to be
created to hold your Development keys.  The client will automatically 
detect if in dev or production and use the appropriate keys. 
 
