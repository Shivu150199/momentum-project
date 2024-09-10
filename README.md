

### Project Link
**GitHub Repository**: https://github.com/Shivu150199/momentum-project
**Deployed link**: https://momentum-project.onrender.com/


### Overview
This project is designed to visualize a graph using data fetched from a mock API. The frontend is built with **Create React App (CRA)** for a seamless React environment. The **React Flow** library is used to manage and render the graph, while **Tailwind CSS** provides a utility-first approach to styling.

### Technologies Used
- **React (CRA)**: A JavaScript library for building user interfaces.
- **React Flow**: A library for building interactive node-based graphs.
- **Tailwind CSS**: A utility-first CSS framework for styling.

### Project Structure
```bash
├── public
├── src
│   ├── assets       # Static files and images
│   ├── components   # Reusable components such as Graph, Node, etc.
│   ├── styles       # Tailwind configuration and global styles
│   └── App.js       # Main application component
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json     # Project dependencies and scripts
```

### Key Features
1. **Graph Visualization**:
   - Displays a dynamic graph based on data received from the mock API.

2. **Tailwind CSS Styling**:
   - Clean and responsive user interface.

### Installation and Setup
Follow these steps to set up and run the project locally:

1. **Clone the repository:**
   ```bash
   git clone repo url
   cd foldername
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the project:**
   ```bash
   npm start
   ```

### Usage
1. **Graph Component**:
   The `Graph` component is responsible for rendering the graph. It uses React Flow to display nodes and edges, which are passed as props from the API response.

2. **Custom Styling**:
   Tailwind CSS is applied to ensure the layout is responsive and visually appealing. Custom utility classes can be configured in the `tailwind.config.js` file.

### Tailwind CSS Configuration
To modify the theme, colors, or spacing for the Tailwind CSS styles, update the `tailwind.config.js` file.

To set up Tailwind CSS in your project, follow these steps:

1. **Install Tailwind CSS via npm:**

   Run the following command to install Tailwind CSS along with its required dependencies:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Generate Tailwind Configuration Files:**

   Once Tailwind is installed, generate the `tailwind.config.js` and `postcss.config.js` files by running:
   ```bash
   npx tailwindcss init -p
   ```

   This will create a `tailwind.config.js` file for configuring your Tailwind setup.

3. **Configure Tailwind:**

   In your `tailwind.config.js`, configure the content property to point to all the files in your project that will use Tailwind's utility classes:
   ```js
   module.exports = {
     content: [
       './src/**/*.{js,jsx,ts,tsx}',
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

4. **Add Tailwind Directives to CSS:**

   In your CSS file (usually located in `src/styles/global.css` or `src/index.css`), add the following Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Run the Project:**

   After configuring Tailwind CSS, you can run the project using:
   ```bash
   npm start
   ```

This will ensure Tailwind CSS is properly set up and ready to be used for styling your project.

