Hello, I hope you all are doing well.

## To start the application follow these steps:

After unzipping the program file:
Open command prompt
Go to sleektext/sleek directory
follow these commands
npm install
npm start

Now the server will start and you'd be able to see the webpage in the browser.

* Technologies Used: React js, Bootstarp, Axios, HTML5, CSS, Javascript etc.

* Screen Responsiveness: Bootstrap is used so that web pages render well on a variety of devices and window or screen size

* API Calls: Axios is used to make an HTTP request to fetch the data.

## Project Structure:

In the 'src' directory there are the following entities:

* COMPONENTS folder: This folder contains all the react components along with there respective CSS files.

* ASSETS folder: This folder contains/ shall contain the media files such as logos and images for the website. For now, we don't have any content in this folder because we are rendering images from the weblinks.

* PACAKAGE.JSON file: This file contains the information about the project e.g. Dependencies, Scripts, versions etc.

## LAYOUT :

It is a single page application.

* When the page loads/mounts an API call is made to a supposedly RESTfull API(containing student data}​ to get the data for showing on the webpage.

* The API end-point provides data in JSON format.

* Then the component's state is updated with the data obtained from the API.

* The student data is stored in an array-like data structure which is utilized by running a loop over it and the individual student data is rendered to the Html page.

* Rendered Student data is styled using CSS.

* Each student has expandable list view which will be displayed after the click on the dedicated button on the top right corner of every student card.

* Students tag is stored in local storage using key-value pairs, and data is rendered using a unique key(emails) on the Html page.

## How Filtering/Searching works?

* The student data is filtered using students first name and Lastname if the substring has written is present in any Students name then Students will display on the Html page.

* And filtering can be also be done using added tag by users. For each tag, the search loop is done for each student and if for the student's unique key if there is a tag present then, those student data we'll display on Html page.


**----------------------------------------------------------------------------------------------------------------------**

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
