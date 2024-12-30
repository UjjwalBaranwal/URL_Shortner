# URL Shortener

This is a project for creating a URL shortener application. The application consists of a backend server and a frontend client, allowing users to shorten URLs and track their usage.

## Features
- Shorten long URLs into concise, shareable links.
- Track click counts for shortened URLs.
- Automatic redirection when accessing a shortened URL.

## Project Structure
```
./backend   # Backend code for managing the URL shortening service
./frontend  # Frontend code for user interaction and link management
```

## Getting Started

Follow the steps below to run the project locally:

### Prerequisites
- Node.js (version 14 or later)
- npm or yarn

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd ./backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run start
   ```
4. The backend server should now be running on `http://localhost:PORT` (default port is usually 3000).

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd ./frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm run start
   ```
4. The frontend client should now be running on `http://localhost:PORT` (default port is usually 3000 or 3001).

## Usage
1. Open the frontend in your web browser.
2. Enter a long URL into the input field and click the "Shorten" button.
3. Copy the generated short URL and use it to access the original link.
4. The backend will track the number of clicks for each short URL.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (or your chosen database for URL storage)
- **Hashing technique** : conversion to base62

## Contributing
Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact
For questions or support, feel free to reach out:
- **Author**: Ujjwal Baranwal
- **Email**: ujjwalbaranwal221715@gmail.com

---

Happy coding!

