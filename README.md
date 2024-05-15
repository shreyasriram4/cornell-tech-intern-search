# Cornell Tech Intern Search App

The Cornell Tech Intern Search App is a React-based application designed to facilitate the search and filtering of intern candidates by various criteria such as name, role, and GPA. This application uses Ant Design components to provide a user-friendly interface and an aesthetic presentation.

## Features

- **Dynamic Search Filtering**: Users can filter candidates based on first name, last name, role, and GPA.
- **Interactive UI**: Utilizes Ant Design for React to create an interactive and visually appealing user interface.
- **Responsive Design**: Ensures that the application is usable on both desktop and mobile devices.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (which comes with [npm](http://npmjs.com/))
- [Git](https://git-scm.com/)

## Setup

Clone the repository to get started with the app:

```bash
git clone https://repositorylink.git
cd project-folder

```

## Installation

Run the following command:

```bash
npm install
```

## Running the Application

To run the application, you need to start both the React development server and the JSON server for the backend API.

```bash
npx json-server --watch db.json --port 3001
```

```bash
npm start
```

This will run the app. Open http://localhost:3000 to view it in the browser.

## Usage

Once both servers are running, you can use the application to search for candidates:

1. Search by Name: Enter the first or last name of the candidate. Both lowercase and uppercase are acceptable. Part of string searches are also accounted for - for instance, by entering "Mel", the entry of "Melissa" can still be retrieved.
2. Filter by Role: Select one or multiple roles to filter the candidates. To account for as many roles as possible, roles such as "Data Science, ML/AI intern" have been separated by commas, and both accounted for separately.
3. Adjust GPA: Move the slider to set the minimum GPA threshold.

## My Approach

In developing the Cornell Tech Intern Search App, my primary focus was to create an intuitive and efficient user interface that enhances the user experience in searching for intern candidates. I opted for React along with Ant Design to leverage advanced UI components that offer both aesthetic appeal and interactive functionality. The application was structured to support real-time filtering of candidates based on criteria such as name, role, and GPA, allowing for quick and dynamic searches. To handle state management and facilitate seamless updates to the UI, I used React's useState and useEffect hooks, ensuring that the application remains responsive and performant. To provide the backend for this application, I utilized JSON Server to simulate a REST API, which allows for development and testing without the need for a live backend setup. This approach not only expedited the development process but also ensured that the application could be easily connected to a real server in the future with minimal adjustments.

An index.js is set up by default in the src directory, but it references App.js, which is found within the pages folder. Additionally, App.js relies on SearchInput and CandidateList within the components folder.


