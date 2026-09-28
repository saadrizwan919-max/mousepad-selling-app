# Mousepad Selling App

A mobile shopping app for browsing and buying mousepads, built with **React Native**, **Expo** and **TypeScript**. Browse designs by theme, pick a size, and add items to your cart.

## Demo



https://github.com/user-attachments/assets/7e2ebd7d-4a78-47be-84b4-d5f32ddb1cb5




## Features

- Browse mousepads grouped by theme on the home screen
- Product details screen with a large image, name and price
- Size selection (S, M, L, XL) where the price updates with the chosen size
- Add to cart with a dark snackbar confirmation ("Item added to cart")
- The same product in different sizes is kept as separate cart entries
- Adding the same product and size again increases its quantity
- Remove an item from the cart, or reduce its quantity, with the trash button
- Bottom tab navigation (Home, Cart) with a stack screen for product details

## Tech Stack

- [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routing, tabs + stack)
- TypeScript
- [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
- [@expo/vector-icons](https://icons.expo.fyi/) (Ionicons)
- [react-native-toast-message](https://github.com/calintamas/react-native-toast-message) for the snackbar

## Project Structure

```
mousepad-selling-app/
├── app/
│   ├── _layout.tsx          # Root stack navigator + Toast setup
│   ├── ProductDetails.tsx   # Product detail screen (size, price, add to cart)
│   └── (tabs)/
│       ├── _layout.tsx      # Bottom tab navigator
│       ├── index.tsx        # Home screen
│       └── Cart.tsx         # Cart screen
├── Data/
│   └── data.ts              # Product data, types and cart data
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- The **Expo Go** app on your phone, or an Android emulator / iOS simulator

### Installation

```bash
# Clone the repository
git clone https://github.com/saadrizwan919-max/mousepad-selling-app.git
cd mousepad-selling-app

# Install dependencies
npm install

# Start the development server
npx expo start
```

Then scan the QR code with Expo Go, or press `a` to open the Android emulator.

## How the Cart Works

The cart is stored in a shared array (`cartData`) in `Data/data.ts`. Each entry holds the product id, theme, name, image, selected size, price and quantity. Items are matched by **id + theme + size**, so the same design in two sizes appears as two rows.

## Author

**Muhammad Saad Rizwan**
GitHub: [@saadrizwan919-max](https://github.com/saadrizwan919-max)
