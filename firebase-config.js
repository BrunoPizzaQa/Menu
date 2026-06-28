/*
 * Bruno — Firebase configuration
 * ------------------------------------------------------------------
 * Replace the placeholder values below with YOUR Firebase web config.
 * These keys are SAFE to be public (they are meant to live in the
 * browser). Real protection comes from the Firestore Security Rules.
 *
 * Where to get this: Firebase Console → Project settings (gear icon)
 *   → "Your apps" → Web app → "SDK setup and configuration" → Config.
 */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDIvwwVgaKyILaEccLdW3z5YGWr4AciMb0",
  authDomain: "brunoorder.firebaseapp.com",
  projectId: "brunoorder",
  storageBucket: "brunoorder.firebasestorage.app",
  messagingSenderId: "980286667429",
  appId: "1:980286667429:web:3e9ca7228eb98aabaeeb4c",
  measurementId: "G-R3WEBCSQRT"
};

/* Collection where orders are stored. No need to change. */
window.ORDERS_COLLECTION = "orders";
