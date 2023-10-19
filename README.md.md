- Challenge Description:
  Create a React application that fetches a list of posts from a JSONPlaceholder API and displays them. Use Redux for state management and async actions to fetch the data.

- Requirements:

1. Set up a React project with Redux and Redux Thunk for async actions.
2. Create a Redux store to manage the state of your application.
3. Define Redux actions and reducers for fetching and storing posts data.
4. Create a React component (PostList) that connects to the Redux store to fetch and display a list of posts.
5. Use asynchronous actions to fetch the list of posts from the JSONPlaceholder API when the PostList component is mounted.
6. Display the list of posts with their titles and bodies in a user-friendly format (e.g., in a list or cards).
7. Handle loading, success, and error states when fetching data and display appropriate messages to the user.
8. Add a button or UI element that allows the user to refresh or re-fetch the data.

- API Endpoint:
  You can use the JSONPlaceholder API for this challenge. The endpoint to fetch posts is: https://jsonplaceholder.typicode.com/posts

- Hints:
  . You'll need to set up Redux, create action creators for fetching posts, define reducers, and connect the component to Redux using the connect function or React Redux hooks.
  . Use Redux Thunk middleware to handle asynchronous actions in Redux.
  . Make use of useEffect in your React component to trigger the data fetching when the component is mounted.
  . Display loading and error messages based on the status of the async operation.
  . Ensure that your Redux store stores the fetched posts data.
  . Implement a button or UI element to allow users to refresh the data.

Remember to install necessary dependencies (React, Redux, Redux Thunk) and set up your project accordingly. This challenge will help you practice asynchronous data fetching, Redux state management, and rendering data in a React application.
