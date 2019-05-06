// Data logging to AdaFruit IO

// =======================
// Generic data logging

class DataLogger {
    constructor(uid) {
        this.uid = uid;
        this.sessionId = uniqueID();
        this.imageNumber = 1;
        this.totalElapsed = 0;
    }

    jsonify(obj) {
        var nobj = obj;
        nobj["sessionId"] = this.sessionId;
        return JSON.stringify(nobj);
    }
    
    _log(obj) {
        console.log(this.jsonify(obj));
    }

    // Save session info
    logUserSession(noob, screenWidth, screenheight, devicePixelRatio, userAgent) {
        this._log({type: "session",
                   userId: this.uid,
                   firstTime: noob,
                   screenWidth: screenWidth,
                   screenheight: screenheight,
                   devicePixelRatio: devicePixelRatio,
                   userAgent: userAgent});
    }
    
    // Save the user's classification of an image
    logImageScore(imageUrl, score, time) {
        this.totalElapsed += time;
        this._log({type: "score",
                   imageUrl: imageUrl,
                   imageNumber: this.imageNumber++,
                   score: score,
                   time: time});
    }

    // Save the user's email address because they have requested to be
    // notified of the research outcomes
    logUserEmail(email) {
        this._log({type: "email",
                   email: email});
    }
};

// =======================
// Firebase logging

function InitFirebase() {
    var firebaseConfig = {
        apiKey: "AIzaSyCVBKG4upXrtDRSNMGcLzV-Wy5UwjLLtcE",
        authDomain: "human-predators.firebaseapp.com",
        databaseURL: "https://human-predators.firebaseio.com",
        projectId: "human-predators",
        storageBucket: "human-predators.appspot.com",
        messagingSenderId: "179167711766",
        appId: "1:179167711766:web:e01bc266965cfd4c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

class FirebaseLogger extends DataLogger {
    _log(obj) {
        // Add created_at field
        obj.created_at = new Date().toISOString();
        //console.log("FIREBASE: " + this.jsonify(obj));
        firebase.database().ref('mimic-scores').push().set(obj)
            .then(function(snapshot) {
                console.log('FIREBASE success: ' + snapshot);
                //success(); // some success method
            }, function(error) {
                console.log('FIRBASE error: ' + error);
                //error(); // some error method
            });
    }
};

// =======================
// AdaFruit logging

class AdaFruitLogger extends DataLogger {

    // AdaFruit parameters
    get user() { return "FruitJim"; }
    get feed() { return "mimics"; }
    get ioKey() { return "2464cd35a78145bf8c61b212e2b70723"; }
    
    _log(obj) {
        //console.log("ADAFRUIT: " + this.jsonify(obj));

        // POST a message to AdaFruit IO
        var http = new XMLHttpRequest();
        var url =  "https://io.adafruit.com/api/v2/" + this.user + "/feeds/" + this.feed + "/data";
        var params = "value=" + encodeURIComponent(this.jsonify(obj));
        http.open('POST', url, true);

        // Send the proper header information along with the request
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // API key
        http.setRequestHeader("X-AIO-Key", this.ioKey);

        http.onreadystatechange = function() { //Call a function when the state changes.
            // if(http.readyState == 4 && http.status == 200) {
            //     alert(http.responseText);
            // }
        }
        http.send(params);
    }
};

// === Logger of choice ====

function GetLogger() {
    // Returns the Firbase logger, initialised with the user's ID
    return new FirebaseLogger(GetUserId());
    // // Returns the AdaFruit logger, initialised with the user's ID
    // return new AdaFruitLogger(GetUserId());
}
