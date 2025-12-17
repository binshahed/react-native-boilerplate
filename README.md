# Boilerplate App

A React Native mobile application built with Expo, featuring a modern UI with React Native Reusables and state management with Redux Toolkit.

## Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Routing**: [Expo Router](https://expo.dev/router) with typed routes
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) via [NativeWind](https://www.nativewind.dev/)
- **UI Components**: [React Native Reusables](https://reactnativereusables.com)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) with RTK Query
- **Architecture**: New Architecture enabled, Edge-to-Edge support

## Project Structure

```
├── app/                    # Expo Router screens
│   ├── (private)/          # Authenticated routes
│   │   ├── (tabs)/         # Tab navigation screens
│   │   └── users/          # User-related screens
│   ├── (public)/           # Public routes (login, etc.)
│   └── _layout.tsx         # Root layout
├── components/             # Reusable UI components
│   ├── modals/             # Modal components
│   ├── navigation/         # Navigation components
│   └── ui/                 # Base UI components
├── constants/              # App constants and configs
├── enums/                  # TypeScript enums
├── features/               # Feature modules
├── hooks/                  # Custom React hooks
├── layouts/                # Layout components
├── lib/                    # Utility libraries
├── services/               # API services
├── store/                  # Redux store
│   └── features/           # Redux slices
│       ├── api/            # RTK Query API
│       ├── auth/           # Authentication slice
│       ├── counter/        # Counter slice (example)
│       └── network/        # Network status slice
├── types/                  # TypeScript types
└── utils/                  # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn, npm, pnpm, or bun
- Expo CLI
- iOS Simulator (Mac only) or Android Emulator

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd react-native-boilerplate

# Install dependencies
yarn install
# or
npm install
```

### Running the App

```bash
# Start the development server
yarn dev
# or
npm run dev
```

Once started:
- Press `i` to launch on iOS Simulator (Mac only)
- Press `a` to launch on Android Emulator
- Press `w` to run in web browser
- Scan QR code with [Expo Go](https://expo.dev/go) app for physical device testing

## Building for Production

### Using Build Scripts

```bash
# Debug build
./build-script/common-build-debug.sh

# Production build
./build-script/common-build.sh

# Force clean and rebuild (debug)
./build-script/force-build-and-clean-debug.sh

# Force clean and rebuild (production)
./build-script/force-build-and-clean.sh
```

### Using EAS Build

```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Build for both platforms
eas build --platform all
```

## Adding UI Components

Add components from React Native Reusables:

```bash
# Add a specific component
npx shadcn@latest add https://reactnativereusables.com/r/new-york/input.json

# Add multiple components
npx shadcn@latest add https://reactnativereusables.com/r/new-york/button.json
npx shadcn@latest add https://reactnativereusables.com/r/new-york/textarea.json
```

Browse all available components at [reactnativereusables.com](https://reactnativereusables.com/r/new-york).

## Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configurations.

### Firebase Setup

- **iOS**: Place `GoogleService-Info.plist` in the root directory
- **Android**: Place `google-services.json` in the root directory

## Features

- 🔐 **Authentication**: Login/logout with Redux state management
- 📱 **Tab Navigation**: Dashboard, Menu, and Submission tabs
- 🎨 **Theme Support**: Light/dark mode with persistence
- 🌐 **Network Handling**: Network status monitoring with error modals
- 🚀 **New Architecture**: Enabled for better performance
- 🔥 **Edge-to-Edge**: Full-screen experience on Android

## Learn More

- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev/)
- [NativeWind Docs](https://www.nativewind.dev/)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [React Native Reusables](https://reactnativereusables.com)

## Deployment

Deploy with [Expo Application Services (EAS)](https://expo.dev/eas):

- [EAS Build](https://docs.expo.dev/build/introduction/) - Build native apps
- [EAS Updates](https://docs.expo.dev/eas-update/introduction/) - Over-the-air updates
- [EAS Submit](https://docs.expo.dev/submit/introduction/) - App store submission

## Author

Created by **Mohammad Bin Shahed**

## License

This project is proprietary software.
