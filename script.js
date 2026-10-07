console.log("JavaScript Loaded");
const firebaseConfig = {
    apiKey: "AIzaSyC1uIbSJnj8tiNg_2ngTjXy8popCTCMCQk",

    databaseURL:
    "https://smart-bus-monitoring-sys-2fc0b-default-rtdb.asia-southeast1.firebasedatabase.app",

    authDomain: "smart-bus-monitoring-sys-2fc0b.firebaseapp.com",

    projectId: "smart-bus-monitoring-sys-2fc0b"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

// Passenger Count

db.ref("bus1/peopleCount")
.on("value", (snapshot)=>{

    document.getElementById("peopleCount")
    .innerHTML = snapshot.val();
});

// Crowd Status
db.ref("bus1/crowdStatus").on("value",(snapshot)=>{

    const status = snapshot.val();

    const crowd =
    document.getElementById("crowdStatus");

    crowd.innerHTML = status;

    crowd.className = "status";

    if(status==="OVERCROWDED")
        crowd.classList.add("overcrowded");

    else if(status==="NORMAL CROWD")
        crowd.classList.add("normal");

    else
        crowd.classList.add("minimum");
});

// Seat Occupancy

db.ref("bus1/seat1Occupied")
.on("value",(snapshot)=>{

    const occupied = snapshot.val();

    const seat1 =
    document.getElementById("seat1");

    if(occupied)
        seat1.classList.add("occupied");
    else
        seat1.classList.remove("occupied");
});
