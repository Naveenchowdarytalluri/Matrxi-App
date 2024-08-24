# Matrix App

## Overview

**Matrix App** is a React.js application that displays a 3x3 matrix of interactive boxes. Each box changes color to green when clicked. Upon clicking the last box, all previously clicked boxes change to orange in the order they were clicked. This application demonstrates basic React concepts, including state management and event handling.

## Features

- **Interactive 3x3 Matrix**: A grid of 9 boxes that can be clicked.
- **Color Change**: Boxes turn green when clicked.
- **Sequential Color Change**: Upon clicking the last box, all previously clicked boxes turn orange in the order they were clicked.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **CSS**: For styling the matrix and boxes.
- **npm**: Node package manager for managing dependencies.

## Installation

### Prerequisites

- **Node.js**: Ensure Node.js and npm are installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Naveenchowdarytalluri/Matrxi-App.git
2. **Navigate to the Project Directory** 

   ```bash
   cd Matrxi-App
3. **Install Dependencies**

   ```bash
   npm install

### Running the Application

1. Start the Development Server

   ```bash 
   npm start
2. Open the Application


- Open a web browser and go to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Usage

- **Click on any box** in the 3x3 grid to change its color to green.
- **Click on the last box** to change all previously clicked boxes to orange in the order they were clicked.

## Project Structure

- `src/`
  - `components/`
    - `Matrix.js`: Main component for rendering the 3x3 matrix and handling click events.
    - `Box.js`: Component representing an individual box in the matrix.
  - `App.js`: Main application component.
  - `index.js`: Entry point of the application.
- `public/`
  - `index.html`: HTML file template.
- `package.json`: Project metadata and dependencies.

## Contributing

Contributions are welcome! To contribute to this project:

1. **Fork the Repository** on GitHub.
2. **Create a New Branch**

   ```bash
   git checkout -b feature-branch
3. Make Your Changes and Commit

   ```bash
   git add .
   git commit -m "Add your feature or fix here"
4. Push to Your Fork
 
   ```bash
   git push origin feature-branch
5. Create a Pull Request on GitHub

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **React**: For providing a powerful library for building user interfaces.
- **GitHub**: For hosting and managing the project repository.

