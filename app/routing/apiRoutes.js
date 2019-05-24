var friends = require("../data/tableData");




module.exports = function(app) {
  

  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  app.post("/api/friends", function(req, res) {
    
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  

  app.post("/api/clear", function(req, res) {
    
    tableData.length = [];
    waitListData.length = [];

    res.json({ ok: true });
  });
};
