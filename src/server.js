// O  benefício de se o usar strict mode é reduzir a chance de existirem no código bugs difíceis de localizar. 
// Como um conflito de nome ao se criar uma global implícita, ou a existência de duas chaves iguais em objeto 
// literal.
"use strict";

const app = require("./app");

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`app listen on port: ${PORT}`);
});