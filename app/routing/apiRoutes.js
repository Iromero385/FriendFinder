// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var contacts = require("./../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(contacts);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    var newPerson = req.body; 
    var compabilityScores = [];
    for(var i = 0; i < contacts.length;i++){
      var contactUser = contacts[i].scores; 
      var newPersonSurvery = newPerson.scores;
      var finalScore = 0;  
      for (var j = 0 ; j < contactUser.length; j++){
        finalScore += Math.abs(contactUser[j]-newPersonSurvery[j])
      }

      compabilityScores.push(finalScore);
    }
    var bestScoreMatch = Math.min(...compabilityScores);
    var indexOfBestScore = compabilityScores.indexOf(bestScoreMatch);
    var bestContactMatch = contacts[indexOfBestScore];
    // contacts.push(newPerson)
    res.json(bestContactMatch);

   
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  
};
