
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
```
Directory structure:
└── baladurgag24-storytelling-platform-react-springboot/
    ├── README.md
    ├── gitattributes
    ├── LICENSE.txt
    ├── Backend/
    │   ├── API-GATEWAY/
    │   │   ├── mvnw
    │   │   ├── mvnw.cmd
    │   │   ├── pom.xml
    │   │   ├── .gitignore
    │   │   ├── src/
    │   │   │   ├── main/
    │   │   │   │   ├── java/
    │   │   │   │   │   └── com/
    │   │   │   │   │       └── example/
    │   │   │   │   │           └── demo/
    │   │   │   │   │               └── GatewayApplication.java
    │   │   │   │   └── resources/
    │   │   │   │       └── application.properties
    │   │   │   └── test/
    │   │   │       └── java/
    │   │   │           └── com/
    │   │   │               └── example/
    │   │   │                   └── demo/
    │   │   │                       └── GatewayApplicationTests.java
    │   │   └── .mvn/
    │   │       └── wrapper/
    │   │           └── maven-wrapper.properties
    │   ├── BACKEND/
    │   │   ├── mvnw
    │   │   ├── mvnw.cmd
    │   │   ├── pom.xml
    │   │   ├── .gitignore
    │   │   ├── logs/
    │   │   └── src/
    │   │       ├── main/
    │   │       │   ├── java/
    │   │       │   │   └── com/
    │   │       │   │       └── example/
    │   │       │   │           └── demo/
    │   │       │   │               ├── ProjectApplication.java
    │   │       │   │               ├── config/
    │   │       │   │               │   ├── ApplicationConfig.java
    │   │       │   │               │   ├── JwtAuthenticationFilter.java
    │   │       │   │               │   └── SecurityConfig.java
    │   │       │   │               ├── constant/
    │   │       │   │               │   └── Api.java
    │   │       │   │               ├── controller/
    │   │       │   │               │   ├── AuthenticationController.java
    │   │       │   │               │   ├── FavouriteController.java
    │   │       │   │               │   ├── FeedbackController.java
    │   │       │   │               │   ├── GenreController.java
    │   │       │   │               │   ├── ShortStoryController.java
    │   │       │   │               │   ├── StoryController.java
    │   │       │   │               │   └── UserController.java
    │   │       │   │               ├── dto/
    │   │       │   │               │   ├── Favouriterequest.java
    │   │       │   │               │   ├── request/
    │   │       │   │               │   │   ├── AuthenticationRequest.java
    │   │       │   │               │   │   └── RegisterRequest.java
    │   │       │   │               │   └── response/
    │   │       │   │               │       └── AuthenticationResponse.java
    │   │       │   │               ├── model/
    │   │       │   │               │   ├── Favourite.java
    │   │       │   │               │   ├── Feedback.java
    │   │       │   │               │   ├── Genre.java
    │   │       │   │               │   ├── ShortStory.java
    │   │       │   │               │   ├── StoryModel.java
    │   │       │   │               │   ├── User.java
    │   │       │   │               │   └── enumerate/
    │   │       │   │               │       └── Role.java
    │   │       │   │               ├── repository/
    │   │       │   │               │   ├── FavouriteRepository.java
    │   │       │   │               │   ├── FeedbackRepository.java
    │   │       │   │               │   ├── GenreRepository.java
    │   │       │   │               │   ├── ShortStoryRepository.java
    │   │       │   │               │   ├── StoryRepository.java
    │   │       │   │               │   └── UserRepository.java
    │   │       │   │               ├── service/
    │   │       │   │               │   ├── AuthService.java
    │   │       │   │               │   ├── FavouriteService.java
    │   │       │   │               │   ├── FeedbackService.java
    │   │       │   │               │   ├── GenreService.java
    │   │       │   │               │   ├── ShortStoryService.java
    │   │       │   │               │   ├── StoryService.java
    │   │       │   │               │   └── UserService.java
    │   │       │   │               └── util/
    │   │       │   │                   └── JwtUtil.java
    │   │       │   └── resources/
    │   │       │       └── application.properties
    │   │       └── test/
    │   │           └── java/
    │   │               └── com/
    │   │                   └── demo/
    │   │                       └── ProjectApplicationTests.java
    │   ├── MICROSERVICE/
    │   │   ├── mvnw
    │   │   ├── mvnw.cmd
    │   │   ├── pom.xml
    │   │   ├── .gitignore
    │   │   ├── src/
    │   │   │   ├── main/
    │   │   │   │   ├── java/
    │   │   │   │   │   └── com/
    │   │   │   │   │       └── demo/
    │   │   │   │   │           ├── MicroServiceApplication.java
    │   │   │   │   │           ├── Controller/
    │   │   │   │   │           │   └── FeedbackController.java
    │   │   │   │   │           ├── Model/
    │   │   │   │   │           │   └── Feedback.java
    │   │   │   │   │           ├── Repository/
    │   │   │   │   │           │   └── FeedbackRepository.java
    │   │   │   │   │           └── Service/
    │   │   │   │   │               └── FeedbackService.java
    │   │   │   │   └── resources/
    │   │   │   │       └── application.properties
    │   │   │   └── test/
    │   │   │       └── java/
    │   │   │           └── com/
    │   │   │               └── demo/
    │   │   │                   └── MicroServiceApplicationTests.java
    │   │   └── .mvn/
    │   │       └── wrapper/
    │   │           └── maven-wrapper.properties
    │   └── NAMING/
    │       ├── mvnw
    │       ├── mvnw.cmd
    │       ├── pom.xml
    │       ├── .gitignore
    │       ├── src/
    │       │   ├── main/
    │       │   │   ├── java/
    │       │   │   │   └── com/
    │       │   │   │       └── example/
    │       │   │   │           └── demo/
    │       │   │   │               └── NamingApplication.java
    │       │   │   └── resources/
    │       │   │       └── application.properties
    │       │   └── test/
    │       │       └── java/
    │       │           └── com/
    │       │               └── example/
    │       │                   └── demo/
    │       │                       └── NamingApplicationTests.java
    │       └── .mvn/
    │           └── wrapper/
    │               └── maven-wrapper.properties
    └── Frontend/
        ├── README.md
        ├── package-lock.json
        ├── package.json
        ├── .gitignore
        ├── public/
        │   ├── ad sin
        │   ├── admin sin.webp
        │   ├── analytics.webp
        │   ├── index.html
        │   ├── manifest.json
        │   ├── robots.txt
        │   ├── sign1.avif
        │   └── sign2.avif
        ├── src/
        │   ├── App.css
        │   ├── App.js
        │   ├── App.test.js
        │   ├── index.css
        │   ├── index.js
        │   ├── reportWebVitals.js
        │   ├── setupTests.js
        │   ├── pages/
        │   │   ├── AdminLogin/
        │   │   │   ├── adminlogin.css
        │   │   │   └── adminlogin.js
        │   │   ├── Contact/
        │   │   │   ├── Contact.css
        │   │   │   └── Contact.js
        │   │   ├── Creators Corner/
        │   │   │   ├── Creators.css
        │   │   │   └── Creators.js
        │   │   ├── Dashboardf/
        │   │   │   ├── dashboard.css
        │   │   │   ├── dashboard.js
        │   │   │   ├── dbadmins.js
        │   │   │   ├── dboverview.css
        │   │   │   ├── dboverview.js
        │   │   │   └── dbuserdetails.js
        │   │   ├── Faq/
        │   │   │   ├── F.js
        │   │   │   ├── Fa.css
        │   │   │   └── Fa.js
        │   │   ├── Genre/
        │   │   │   ├── Genre.css
        │   │   │   ├── Genre.js
        │   │   │   └── Stories/
        │   │   │       ├── StarRating.js
        │   │   │       ├── Stories.css
        │   │   │       └── Story.js
        │   │   ├── Home/
        │   │   │   ├── Home.css
        │   │   │   └── Home.js
        │   │   ├── Policies/
        │   │   │   └── PrivacyPolicy.js
        │   │   ├── Queries/
        │   │   │   ├── Queries.css
        │   │   │   └── Queries.js
        │   │   ├── ShortStory/
        │   │   │   ├── ShortStory.css
        │   │   │   ├── ShortStory.js
        │   │   │   └── Stories.css
        │   │   ├── SignIn/
        │   │   │   ├── Login.css
        │   │   │   └── Login.js
        │   │   ├── SignUp/
        │   │   │   ├── Create.css
        │   │   │   └── Create.js
        │   │   ├── Table/
        │   │   │   ├── feedbacktable.js
        │   │   │   ├── shortsorytable.js
        │   │   │   ├── storyPage.css
        │   │   │   ├── storytable.js
        │   │   │   └── usertable.js
        │   │   ├── Terms/
        │   │   │   └── Terms.js
        │   │   └── TextEditor/
        │   │       ├── TextEditor.css
        │   │       └── TextEditor.js
        │   └── redux/
        │       ├── reducer.js
        │       └── store.js
        └── .vscode/
            └── launch.json
```
