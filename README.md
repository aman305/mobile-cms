# Mobile CMS App

A mobile CMS application built using Expo for React Native. This app uses Firebase for authentication and Firestore to store and manage data. It features user authentication, a home screen displaying documents, and detailed pages for both documents and user profiles.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Authentication**: Users can sign up and log in using email and password.
- **Firestore Integration**: Stores user data and documents in Firestore.
- **Home Screen**: Displays documents after successful authentication.
- **Detail Pages**: Detailed view for each document and user profile.
- **Custom Components**: Includes custom buttons and toast notifications for better user experience.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
    ```bash
    git clone git@github.com:username/repository.git
    cd repository
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Firebase**:
    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project or use an existing one.
    - Enable Email/Password authentication in the Authentication section.
    - Create Firestore database with two collections: `user` and `document`.
    - Add your Firebase configuration to a `firebaseConfig.js` file in the project.

4. **Run the development server**:
    ```bash
    expo start
    ```

## Usage

- **Sign Up/Log In**: Create an account or log in with your email and password.
- **Home Screen**: View the main documents.
- **Detail Pages**: Tap on a document or user profile to see detailed information.
- **Custom Buttons**: Interact with custom buttons for various actions.
- **Toast Notifications**: Receive toast notifications for important actions and alerts.

