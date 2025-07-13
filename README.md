# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


# 📝 React Native Todo App

A minimal and elegant Todo application built using **React Native**, supporting:

- ✨ Light & Dark themes (toggleable)
- 💾 Persistent todos and theme using `AsyncStorage`
- 🎨 Dynamic styling via `ThemeContext`
- 🔁 Smooth animated transitions with `react-native-reanimated`
- 📱 Mobile-friendly UI with custom font support (Inter)

---

## 📸 Screenshots

| Light Mode | Dark Mode |
|------------|-----------|
| ![light](screenshots/light.png) | ![dark](screenshots/dark.png) |

---

## 🚀 Features

- Add, toggle, and delete todos
- Stores all data in `AsyncStorage` (survives refresh/restart)
- Light/Dark theme support using `Feather` icons
- Custom font: Inter (via `@expo-google-fonts`)
- Clean and responsive UI
- Animated `FlatList` transitions using `react-native-reanimated`

---

## 🛠️ Technologies Used

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [AsyncStorage](https://github.com/react-native-async-storage/async-storage)
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/)
- [@expo-google-fonts/inter](https://github.com/expo/google-fonts)

---

## 📂 Folder Structure

