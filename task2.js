const fs = require("fs");

const content = "Node.js is awesome!";

fs.writeFile("info.txt", content, "utf8", (err) => {
  if (err) {
    console.error("Ошибка при записи файла:", err.message);
    return;
  }

  console.log('Файл "info.txt" успешно создан.');
});

fs.readFile("info.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Ошибка при чтении файла:", err.message);
    return;
  }

  console.log(`Содержимое файла "info.txt": ${data}`);
});
