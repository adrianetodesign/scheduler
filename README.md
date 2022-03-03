# Interview Scheduler

## Final Product

![Interview Scheduler Root Page](https://github.com/adrianetodesign/scheduler/blob/master/docs/final-product.png)

## Features
- Interview Scheduler is a seamless, dynamic, single-page app thanks to the power of React.
- With built-in and custom react hooks, you are able to add, edit, and delete any interviews in real-time. 
- When any changes are made to the schedule, the display list for days of the week automatically updates to let you know how many time slots are still available per day.

## Getting Started
1. Install dependencies with `npm install`.
2. Get and install the [server](https://github.com/lighthouse-labs/scheduler-api).
 
    1. Install server depencies with `npm install` in server directory.
    2. Follow instructions for creating the database with PostgreSQL.
    3. run the server with `npm start`.
3. Back in the main application directory, run `npm start` as well.
4. Go to [http://localhost:8000/](http://localhost:8000/).

## How to Use
### Add an Interview to the Schedule
![Add an Interview](https://github.com/adrianetodesign/scheduler/blob/master/docs/schedule-create.gif)

### Edit an Existing Interview
![Edit an Interview](https://github.com/adrianetodesign/scheduler/blob/master/docs/schedule-edit.gif)

### Delete an Interview
![Delete an Interview](https://github.com/adrianetodesign/scheduler/blob/master/docs/schedule-delete.gif)

### Browse through the Different Days
![Browse Days](https://github.com/adrianetodesign/scheduler/blob/master/docs/schedule-browse.gif)

## Dependencies
- Axios
- Classnames
- Normalize.css
- React
- React-dom
- React-scripts

## Dev Dependencies
- babel/core: ^7.4.3
- storybook/addon-actions: ^5.0.10
- storybook/addon-backgrounds: ^5.0.10
- storybook/addon-links: ^5.0.10
- storybook/addons: ^5.0.10
- storybook/react: ^5.0.10
- testing-library/jest-dom: ^4.0.0
- testing-library/react: ^8.0.7
- testing-library/react-hooks: ^7.0.2
- babel-loader: ^8.0.5
- cypress: ^9.5.1
- node-sass: ^4.14.0
- prop-types: ^15.8.1