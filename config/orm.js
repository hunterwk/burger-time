const connection = require("./connection")

const orm = {
    selectAll: (table, cb) => {
        const queryS = "SELECT * FROM ??";
        connection.query(queryS, table, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (table, newRowData, cb) => {
        const queryS = "INSERT INTO ?? SET ?";
        const values = [table, newRowData];
    
        connection.query(queryS, values, (err, result) => {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    updateOne: (table, updateValues, condition, cb) => {
        const queryString = "UPDATE ?? SET ? WHERE ? LIMIT 1";
        const values = [table, updateValues, condition];
    
        console.log(queryString);
        connection.query(queryString, values, (err, result) => {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
}

module.exports = orm;