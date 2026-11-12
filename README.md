# Nexa Studio

A responsive four-page business website created for a React.js and Vite assignment. It presents a fictional digital studio and demonstrates reusable React components, page navigation, basic state, and CSS styling.

## Requirements

- Four separate pages: Home, About, Services, and Contact.
- Four content sections on every page.
- A shared Header and Footer, implemented as reusable components.
- A navigation menu for moving between pages.
- Responsive styling with CSS.
- React fundamentals, including components, list rendering with `map()`, and state with `useState`.

## Pages and routes

| Page | Route | Content sections |
| --- | --- | --- |
| Home | `/` | Hero, introduction, approach highlights, call to action |
| About | `/about` | Hero, studio story, values, call to action |
| Services | `/services` | Hero, services list, process, call to action |
| Contact | `/contact` | Hero, contact form/details, project note, contact call to action |

The shared navigation and footer are rendered around each page. The Contact form includes required-field and email validation, and displays a confirmation message using React state. It is a front-end demo and does not send or store submissions.

## Built with

- React
- Vite
- React Router
- CSS

## Getting started

Install Node.js 20.19+ or 22.12+, then run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── Footer.jsx
│   └── Header.jsx
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   └── Services.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Download, clone, and run

Make sure Node.js 20.19+ or 22.12+ is installed.

### Clone with Git

```bash
git clone https://github.com/zamanrm/four-page-react-vite-website.git
cd four-page-react-vite-website
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

### Download as a ZIP

On the GitHub repository page, select **Code** → **Download ZIP**, then extract the ZIP. Open a terminal in the extracted project folder and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.
