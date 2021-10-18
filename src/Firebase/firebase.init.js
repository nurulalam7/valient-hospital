import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const initializeauthentication=()=>{
    initializeApp(firebaseConfig);
}
export default initializeauthentication;