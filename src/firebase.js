import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA6OxPLN41w0tdQkITtcpY36XWjDkRN29U",
    authDomain: "simple-auth-13aee.firebaseapp.com",
    projectId: "simple-auth-13aee",
    storageBucket: "simple-auth-13aee.appspot.com",
    messagingSenderId: "399054075688",
    appId: "1:399054075688:web:bfcbaec30c1c99f91b821d"
}

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

// export {app, auth};
export {auth};
export default app;