# ✍️ Blog App Project

A blogging platform where users can write posts in various categories, comment on others’ blogs, and manage all content through an admin panel.

## Table of Contents

- [Features](#features)
- [Packages](#packages)
- [Project Structure](#project-structure)
- [Acknowledgements](#acknowledgements)
- [Contact Information](#contact-information)

## Features

- **Developed with Next.js for server-side rendering and SEO optimization**
- **User authentication and authorization**
- **Blog post creation and editing**
- **Comment system for user interaction**
- **Like and Bookmark Blogs for better User Experience**
- **Search, Sort and Pagination for Blogs List**
- **Admin panel for managing blogs, comments and categories**

## Packages

- **next**: React framework with SSR and routing.
- **axios**: HTTP client for API integration.
- **tanstack/react-query**: Handles server-side data fetching and caching.
- **react-hook-form**: Form validation and management.
- **react-hot-toast**: Notifications and alerts.
- **classnames**: Utility for conditionally joining and managing CSS class names.
- **query-string**: Parses and stringifies URL query strings.
- **heroicons/react**: A set of free MIT-licensed SVG icons for React.
- **yup**: JavaScript schema builder for value parsing and form validation.

## Project Structure

```bash
project-root/
│
├── public/           # Public assets available directly
│ ├── fonts/          # Custom fonts used in the project
│ └── images/         # Static images and icons
│
├── src/              # Main source code
│ ├── app/            # Next.js app directory (pages, layouts, routes)
│ ├── components/     # Reusable UI components
│ ├── constants/      # Constant values and configuration variables
│ ├── contexts/       # React context providers for global state
│ ├── hooks/          # Custom React hooks
│ ├── lib/            # Form actions that shared across the app
│ ├── providers/      # Application-level providers
│ ├── services/       # API & data fetching logic
│ ├── styles/         # Global styles and theme files
│ ├── ui/             # Shared UI elements (buttons, inputs, modals, etc.)
│ ├── utils/          # Utility/helper functions
│ └── middleware.js   # Middleware for handling authentication, redirects, etc.
│
└── README.md         # Project documentation

```

## Acknowledgements

Special thanks to [Saheb Mohammadi](https://github.com/sahebmohammadi) for developing the backend of this project.

## Contact Information

For any questions or feedback, please reach out at [ghasemi84mahdi@gmail.com](mailto:ghasemi84mahdi@gmail.com).
