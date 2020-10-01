const { app } = require("electron");

(async () => {
  // undefined, undefined
  console.log(app, typeof app);

  // ここでエラー
  await electron.app.whenReady();
})();