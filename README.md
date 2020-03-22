### What it is 
This is the frontend of the Drive-In-Supermarkt Prototype for the #wirvsvirus hackathon.
It depends on [Moritz Lenz'](https://github.com/moritz/supermarket-drivein#readme) backend. Also, it uses [material-table](https://github.com/mbrn/material-table) and [google-maps-react](https://github.com/fullstackreact/google-maps-react).

### What it does?
It is a static website so far, so the table is searchable. 

### What needs to be done?
- Connect the google maps card to the table 
- How to register site: get information according to the [backend specs](https://github.com/moritz/supermarket-drivein#readme), send POST request, render table
- Get information from backend -> GET request
- Footer with Sites: "Kontakt", "FAQ", etc
- How to register as guest
- get google api key
- also, there needs to be another section at the backend for keeping track of the customer data.

### Documentation
#### Footer
Does nothing but return a paragraph.
#### GoogleMapsComponents
200px height; based on google-maps-react, possible ways to go forward: ask for permission to get locations -> display location of partner stores, display that stores in table
#### RegisterButtonComponent
Button Component that should open a dialog for getting the information of the merchants and the customers. 
#### SearchBarComponent
Handles the table and the search bar. At this moment, the data in the table is static. Implementation for the connection between front and backend is still necessary. But basic GET and POST functions are available. 
### Note
This is only a prototype and there is no warranty whatsoever that it will work for a specific topic and it has not been tested for every possible case. 


---------------------------------------------------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
