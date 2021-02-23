const fs = require("fs");

fs.readdir(
  "./node_modules/codemirror/mode",
  {
    encoding: "utf-8",
    withFileTypes: true,
  },
  (err, folders) => {
    const languages = folders.map((flder) => flder.name);
    const data = JSON.stringify({ languages }, null, 2);

    fs.writeFile("codemirror-languages.json", data, (err) => {
      if (err) throw err;
      console.log("codemirror-languages.json written");
    });
  }
);

fs.readdir(
  "./node_modules/codemirror/theme",
  {
    encoding: "utf-8",
    withFileTypes: true,
  },
  (err, file) => {
    const themes = file.map((flder) => flder.name);
    const data = JSON.stringify({ themes }, null, 2);

    fs.writeFile("codemirror-themes.json", data, (err) => {
      if (err) throw err;
      console.log("codemirror-themes.json written");
    });
  }
);
