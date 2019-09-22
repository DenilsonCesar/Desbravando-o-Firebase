import React, {useEffect} from 'react';

import Routes from './routes/routesSceens';

import firebase from 'firebase';

export default function src(){
  
  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyADbsbF9FXB3dej6xkudq-h5CxUZp2eByQ",
      authDomain: "cadastro-202819.firebaseapp.com",
      databaseURL: "https://cadastro-202819.firebaseio.com",
      projectId: "cadastro-202819",
      storageBucket: "",
      messagingSenderId: "402128231716",
      appId: "1:402128231716:web:e524a25ff91f3382"
    };
    firebase.initializeApp(firebaseConfig);
  }, [])

    return( 
      <Routes />
    )
  }

