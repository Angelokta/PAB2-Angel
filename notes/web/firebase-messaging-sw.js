importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

// Gunakan konfigurasi web dari firebase_options.dart Anda
firebase.initializeApp({
  apiKey: "AIzaSyBqjpMzEDcZ4v1nGlvSasp2TNZeO1VI8eY",
  authDomain: "notes-9d0f2.firebaseapp.com",
  projectId: "notes-9d0f2",
  storageBucket: "notes-9d0f2.firebasestorage.app",
  messagingSenderId: "78645284128",
  appId: "1:78645284128:web:74f7bc07f9c369694ddb45",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/favicon.png",
  };
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
