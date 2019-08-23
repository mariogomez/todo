This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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


### Persistency using AWS Amplify Framework
The Idea is to create an Infrastructure in AWS to give persistence and User handling via API Gateway, Lambda and Cognito
You can do the wizard provided by Amplify
The commands you need to execute are the following:
```
amplify init
amplify add hosting
amplify add auth
amplify add api
```

The `add api` command is a large one because there you should defined your API Gateway services and your Lambda Functions, this is an example of the configuration you're going to need:

```
~:todo$ amplify add api
? Please select from one of the below mentioned services REST
? Provide a friendly name for your resource to be used as a label for this category in the project: todoapi
? Provide a path (e.g., /items) /todos
? Choose a Lambda source Create a new Lambda function
? Provide a friendly name for your resource to be used as a label for this category in the project: todos
? Provide the AWS Lambda function name: todos
? Choose the function template that you want to use: CRUD function for Amazon DynamoDB table (Integration with Amazon API Gateway and Amazon DynamoDB)
? Choose a DynamoDB data source option Create a new DynamoDB table

Welcome to the NoSQL DynamoDB database wizard
This wizard asks you a series of questions to help determine how to set up your NoSQL database table.

? Please provide a friendly name for your resource that will be used to label this category in the project: todos
? Please provide table name: todos

You can now add columns to the table.

? What would you like to name this column: id
? Please choose the data type: string
? Would you like to add another column? Yes
? What would you like to name this column: title
? Please choose the data type: string
? Would you like to add another column? Yes
? What would you like to name this column: username
? Please choose the data type: string
? Would you like to add another column? Yes
? What would you like to name this column: created_at
? Please choose the data type: string
? Would you like to add another column? Yes
? What would you like to name this column: status
? Please choose the data type: string
? Would you like to add another column? No

Before you create the database, you must specify how items in your table are uniquely organized. You do this by specifying a primary key. The primary key uniquely identifies each item in the table so that no two items can have the same key. This can be an individual column, or a combination that includes a primary key and a sort key.

To learn more about primary keys, see:
http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey

? Please choose partition key for the table: username
? Do you want to add a sort key to your table? Yes
? Please choose sort key for the table: created_at

You can optionally add global secondary indexes for this table. These are useful when you run queries defined in a different column than the primary key.
To learn more about indexes, see:
http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.SecondaryIndexes

? Do you want to add global secondary indexes to your table? No
Succesfully added DynamoDb table locally
? Do you want to access other resources created in this project from your Lambda function? No
? Do you want to edit the local lambda function now? No
Succesfully added the Lambda function locally
? Restrict API access Yes
? Who should have access? Authenticated users only
? What kind of access do you want for Authenticated users? create, read, update, delete
? Do you want to add another path? No
Successfully added resource todoapi locally
```
Follow do a Search in the `src` and try to find the indications that starts with: "// For persistent approach:"