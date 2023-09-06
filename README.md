# REST Countries API Integration

This project is a challenge to integrate with the REST Countries API and display country data in accordance with the provided designs. You have the freedom to choose any JavaScript framework or library for the front-end, and you can use any packages for making HTTP requests and styling your project.

## Features

Your task is to implement the following features:

1. **Homepage**:
   - Display a list of all countries from the API.
   - Users should be able to view basic country information on the homepage.

2. **Search**:
   - Implement a search functionality with an input field that allows users to search for a specific country by name.

3. **Filter by Region**:
   - Provide a way for users to filter countries by region (e.g., Africa, Americas, Asia, Europe, Oceania).

4. **Country Details**:
   - When a user clicks on a country from the list, show more detailed information on a separate page.
   - Include information like population, capital, languages, currencies, etc.
   - Allow users to navigate to the border countries of the selected country.

5. **Responsive Design**:
   - Ensure that the interface layout is optimal for various device screen sizes (e.g., desktop, tablet, mobile).

6. **Interactive Elements**:
   - Implement hover and focus states for all interactive elements on the page to enhance the user experience.

7. **Dark Mode**:
   - Add the ability for users to toggle between light and dark color schemes for the interface.

8. **Loading Page**:
   - Create a loading page or spinner to display while the data is being fetched from the API.

9. **404 Error Page**:
   - Design a custom 404 error page to handle any invalid URLs or missing resources gracefully.

## Installation

To get this project up and running, follow these steps:

1. Clone this repository to your local machine.

```bash
git clone <repository-url>
cd <project-directory>
npm install
npm start
Open your web browser and access the project at http://localhost:3000
```

## Technologies Used
- React
- Chakra UI

## Screenshots

Here are some screenshots of the project:

- **Homepage**:
  ![Homepage](/path/to/main-screenshot.png)

- **Country Details**:
  ![Country Details](/path/to/country-details-screenshot.png)

## API Integration

To fetch country data, you can use the following API endpoint:

[REST Countries API](https://restcountries.com/v3.1/all)