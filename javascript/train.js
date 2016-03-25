// 1. Link to Firebase
var trainData = new Firebase("https://timetracker-rcb.firebaseio.com/");

// 2. Button for adding trains
$("#addTrainBtn").on("click", function(){

    // Grabs user input
    var trnName = $("#trainNameInput").val().trim();
    var trnDestination = $("#destinationInput").val().trim();
    var trnStart = moment($("#startInput").val().trim(), "HH:MM").format("X");
    var trnFrequency = $("#frequencyInput").val().trim();

    // Creates local "temporary" object for holding train data
    var newTrain = {
        name:  trnName,
        destination: trnDestination,
        start: trnStart,
        frequency: trnFrequency
    }

    // Uploads train data to the database
    employeeData.push(newEmp);

    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination); 
    console.log(newTrain.start);
    console.log(newTrain.frequency)

    // Alert
    alert("Train successfully added");

    // Clears all of the text-boxes
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#startInput").val("");
    $("#frequencyInput").val("");

    // Prevents moving to new page
    return false;
});


// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
trainData.on("child_added", function(childSnapshot, prevChildKey){

    console.log(childSnapshot.val());

    // Store everything into a variable.
    var trnName = childSnapshot.val().name;
    var trnDestination = childSnapshot.val().destination;
    var trnStart = childSnapshot.val().start;
    var trnFrequency = childSnapshot.val().frequency;

    // TRain Info
    console.log(trnName);
    console.log(trnDestination);
    console.log(trnStart);
    console.log(trnFrequency);

    // Prettify the employee start
    var trnStartPretty = moment.unix(trnStart).format("HH:MM");

    var trnHours = moment().diff(moment.unix(trnStart, 'X'), "hours");
    console.log(trnHours);



    // Add each train's data into the table 
    $("#trainTable > tbody").append("<tr><td>" + trnName + "</td><td>" + trnDestination + "</td><td>" + trnStartPretty + "</td><td>" + trnDestination + "</td><td>" + trnFrequency + "</td><td>");

});
