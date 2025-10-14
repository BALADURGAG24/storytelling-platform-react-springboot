
# storytelling-platform-react-springboot

A modern **Storytelling Platform** designed to enable users to create, share, and explore stories. This application features a user-friendly **React** frontend and a powerful **Spring Boot** backend with **JPA** for database interaction, enabling rich features like user authentication, story creation, editing, and commenting. The platform allows both authors and readers to engage with each other's stories.

## Technologies Used

- **Frontend**: React (for the user interface)
- **Backend**: Spring Boot (for the RESTful API) 
- **Database**: 
  - H2 (for development) 
  - MySQL/PostgreSQL (for production) via JPA (Java Persistence API)
- **Authentication**: JWT (JSON Web Tokens) for secure user login 
- **Styling**: Tailwind CSS or Material-UI for UI components 
- **State Management**: React Context or Redux (if needed)
- **API Communication**: Axios for HTTP requests

## Features

- **User Authentication**: 
  - Users can register, log in, and manage their accounts using JWT-based authentication.

- **Create and Manage Stories**: 
  - Users can create, edit, and delete their stories.

- **Story Comments**: 
  - Readers can comment on stories, and authors can respond.

- **Story Categories**: 
  - Categorize stories into different genres or themes like fantasy, adventure, mystery, etc.

- **Like and Share Stories**: 
  - Users can like and share their favorite stories.

- **Responsive Design**: 
  - Optimized for mobile and desktop views.
  - Mobile-friendly UI optimized for all screen sizes.

## Project Structure

```plaintext
├── backend (Spring Boot)
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── example
│   │   │   │           └── storytellingplatform
│   │   │   │               ├── controller
│   │   │   │               ├── model
│   │   │   │               ├── repository
│   │   │   │               ├── service
│   │   │   │               ├── security
│   │   │   │               └── exception
│   │   │   └── resources
│   │   │       ├── application.properties
│   │   │       └── data.sql (optional for seeding DB)
├── frontend (React)
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── StoryForm.js
│   │   │   ├── StoryCard.js
│   │   │   ├── CommentSection.js
│   │   │   └── Navbar.js
│   │   ├── pages
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── StoryPage.js
│   │   ├── services
│   │   │   └── apiService.js
│   │   ├── App.js
│   │   └── main.js
│   └── vite.config.js
├── .gitignore
├── README.md
└── package.json (frontend)
