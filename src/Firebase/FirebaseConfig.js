import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKtsyRtIMjNm_e94iFJ84IBr5janEbEMs",
    authDomain: "reactecommerce-a189a.firebaseapp.com",
    projectId: "reactecommerce-a189a",
    storageBucket: "reactecommerce-a189a.appspot.com",
    messagingSenderId: "737602174228",
    appId: "1:737602174228:web:7e02b5e333a3634b571601"
};

const app = initializeApp(firebaseConfig);
const data = getFirestore(app);
export default data;