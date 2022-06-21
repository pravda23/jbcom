// renames all .html files in folder to blank file extensions

// run cmd
// navigate to /jbcom

// gives you capabilities to interact with file system in node
const fs = require("fs");

function toTxt() {
  return (
    fs.promises
      .readdir(".")
      .then((stuff) => {
        // return files ending in .html
        const result = stuff
          .filter((e) => {
            return e.toLowerCase().endsWith(".html");
          })
          // truncate .html
          .map((e) => {
            return fs.promises.rename(e, e.substring(0, e.length - 4));
          });
        console.log(result);
        return result;
      })
      // returns all files
      .then((e) => {
        return Promise.all(e);
      })
  );
}

toTxt();
