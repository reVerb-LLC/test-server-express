const app = require("./src/app");
const PORT = 3003;

async function init() {
  app.listen(PORT, () => {
    console.log(`Server 3 listening on port ${PORT}`);
  });
}

init();
