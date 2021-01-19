import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCS4ovUIDYZvdAVzgxmPDK7nRGKlALZlSg",
    authDomain: "tsu-react-final-exam.firebaseapp.com",
    databaseURL: "https://tsu-react-final-exam-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tsu-react-final-exam",
    storageBucket: "tsu-react-final-exam.appspot.com",
    messagingSenderId: "479362270830",
    appId: "1:479362270830:web:6c8b1dde7ad5de537f087f"
})


export const auth = app.auth()
export default app