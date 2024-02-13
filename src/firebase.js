import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAgWuaVw-bp-7090IA4S3q2mXTl0_R2f5s',
  authDomain: 'learnlingo-78c4c.firebaseapp.com',
  databaseURL:
    'https://learnlingo-78c4c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learnlingo-78c4c',
  storageBucket: 'learnlingo-78c4c.appspot.com',
  messagingSenderId: '195391377407',
  appId: '1:195391377407:web:b311f245062f968b45a1ca',
};

const app = initializeApp(firebaseConfig);

export default app;
