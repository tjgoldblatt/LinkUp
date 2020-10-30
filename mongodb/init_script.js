var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mongo:27017/mydatabase";


//This section connects to the db and creates the Group Collection
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydatabase");
  //Creates Users collection 
  dbo.createCollection("group", function(err, res) {
    if (err) throw err;
    console.log("Group Collection created!");
    db.close();
  });

  //Inserts example entry into Group Collection to test query capabilities
  var group = { groupID: 000, groupName: "Team E", groupMembers: {} };
  dbo.collection("group").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("Example Entry inserted");
    db.close();
  });
});