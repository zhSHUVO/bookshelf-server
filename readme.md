# Backend API Documentation

This document provides an overview of the backend API endpoints and functionalities for the bookshelf system project.

## Technologies Used

List the technologies used in the backend, including programming languages, frameworks, libraries, and any external APIs or services.

-   Typescript
-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   CORS

## API Routes

### Book Routes

#### Get All Books

-   Endpoint: `GET /api/book`
-   Description: Retrieves a list of all books from the database.
-   Response: JSON array containing book objects.

#### Get Single Book

-   Endpoint: `GET /api/book/:id`
-   Description: Retrieves a single book by its unique identifier.
-   Request Parameter: `id` (string) - The unique identifier of the book.
-   Response: JSON object containing the book details.

#### Create Book

-   Endpoint: `POST /api/book`
-   Description: Creates a new book and adds it to the database.
-   Request Body: JSON object containing the book details.
-   Response: JSON object containing the newly created book details.

#### Update Book

-   Endpoint: `PATCH /api/book/:id`
-   Description: Updates the details of a specific book.
-   Request Parameter: `id` (string) - The unique identifier of the book.
-   Request Body: JSON object containing the updated book details.
-   Response: JSON object containing the updated book details.

#### Delete Book

-   Endpoint: `DELETE /api/book/:id`
-   Description: Deletes a specific book from the database.
-   Request Parameter: `id` (string) - The unique identifier of the book.
-   Response: JSON object confirming the deletion of the book.

#### Post Review

-   Endpoint: `POST /api/book/:id/review`
-   Description: Adds a review for a specific book.
-   Request Parameter: `id` (string) - The unique identifier of the book.
-   Request Body: JSON object containing the review details.
-   Response: JSON object confirming the addition of the review.

### User Routes

#### User Registration

-   Endpoint: `POST /api/user/register`
-   Description: Creates a new user account.
-   Request Body: JSON object containing the user registration details.
-   Response: JSON object confirming the successful user registration.

#### User Login

-   Endpoint: `POST /api/user/login`
-   Description: Authenticates the user and generates an access token.
-   Request Body: JSON object containing the user login credentials.
-   Response: JSON object containing the access token.

#### User Logout

-   Endpoint: `POST /api/user/logout`
-   Description: Invalidates the user's access token, logging them out.
-   Response: JSON object confirming the successful user logout.

## Development Setup

This project is dependent on/interconnected with another frontend project. Frontend project and documentation link is [here](https://github.com/zhSHUVO/bookshelf).

1. Clone the repository:
    ```shell
    git clone https://github.com/zhSHUVO/bookshelf-server.git
    ```
2. Navigate to the project directory:
    ```shell
    cd bookshelf-server
    ```
3. Install dependencies:
    ```shell
    npm install
    ```
4. Start the development server:
    ```shell
    npm run dev
    ```
5. Development server will run on `http://localhost:5000`.

6. Setup .env file. Example:

    ```shell
    PORT=---------

    MONGODB_DATABASE_URL=---------

    MONGODB_COMPASS_URL=---------
    ```

Make sure to configure the MongoDB connection and other necessary environment variables as per your development environment.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

If you'd like to contribute to this project, please follow the [Contributing Guidelines](CONTRIBUTING.md).

## Support

If you encounter any issues or have questions or suggestions, please [open an issue](https://github.com/your-username/your-project/issues).
