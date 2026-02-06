# Pandit Shambhu Nath Shukla Vishwavidyalaya (PSNS) Utils
# University Web Portal

This project is a modern, responsive university web portal built with React, TypeScript, and Vite. It features a dynamic user interface with detailed academic and administrative sections, utilizing Tailwind CSS for styling.

## 🛠 Technology Stack

- **Core Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM (v7)
- **Styling**: Tailwind CSS (loaded via CDN with custom configuration in `index.html`)
- **Icons**: Lucide React
- **Animations**: CSS Keyframes (configured in Tailwind theme)

---

## 📦 Dependencies

The project relies on the following key dependencies:
- `react`, `react-dom`: UI library core.
- `react-router-dom`: Client-side routing.
- `lucide-react`: Iconography.

Dev dependencies include:
- `vite`: Fast build tool and dev server.
- `typescript`: Static type checking.
- `@vitejs/plugin-react`: React support for Vite.

---

## 🚀 Running and Deploying

### Prerequisites
- **Node.js**: v18 or higher recommended.
- **npm**: Comes with Node.js.

### 🐧 Linux Server Deployment

1.  **Update System & Install Node.js**
    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```

2.  **Clone the Repository**
    ```bash
    git clone <repository-url>
    cd ptsns-standard
    ```

3.  **Install Dependencies**
    ```bash
    npm install
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```
    *This creates a `dist` folder containing static files.*

5.  **Serve the Application**
    You can use a static file server like `serve` or configure Nginx.
    ```bash
    # Install 'serve' globally
    sudo npm install -g serve
    
    # Run the server on port 3000 (background)
    serve -s dist -l 3000 &
    ```

### 🪟 Windows Server Deployment

1.  **Install Node.js**
    Download and install the LTS version from [nodejs.org](https://nodejs.org/).

2.  **Open PowerShell (as Administrator) and Navigate to Project**
    ```powershell
    cd C:\path\to\ptsns-standard
    ```

3.  **Install Dependencies**
    ```powershell
    npm install
    ```

4.  **Build for Production**
    ```powershell
    npm run build
    ```

5.  **Serve the Application**
    ```powershell
    npm install -g serve
    serve -s dist -l 3000
    ```

---

## 📂 Project Structure

The project follows a standard React application structure:

- **`App.tsx`**: Main application component containing the Router setup and top-level layout (Header, Navbar, Footer).
- **`index.tsx`**: Entry point that mounts the React app to the DOM.
- **`index.html`**: HTML entry point containing Tailwind CDN links and global font imports.
- **`vite.config.ts`**: Configuration for the Vite build tool.

### Directories

- **`components/`**
    Contains reusable UI components used across multiple pages.
    - *Examples*: `Navbar.tsx`, `Footer.tsx`, `Hero.tsx`, `FormalHeader.tsx`.

- **`pages/`**
    Contains full-page components acting as route targets.
    - *Examples*: `Home.tsx`, `About.tsx`, `ContactSection.tsx`, `GenericPage.tsx` (reusable layout for content pages).

- **`context/`**
    React Context providers for global state management.
    - *Examples*: `SearchContext.tsx`, `MobileMenuContext.tsx`.

- **`data/`**
    Contains static data files or configuration constants.

- **`public/`**
    Static assets like images and icons referenced directly in HTML or code.
