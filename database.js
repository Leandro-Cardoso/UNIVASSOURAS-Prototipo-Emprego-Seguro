// TABLES:
function isTable(name) {
    if (localStorage.getItem(name) !== null) {
        return true;
    }
    else {
        return false;
    }
}

function createTable(name) {
    try {
        localStorage.setItem(name, "[]");
    }
    catch (error) {
        console.error("Error:", error);
    }
}

function createTables(tables) {
    for (n in tables) {
        if (!isTable(tables[n])) {
            createTable(tables[n]);
            console.log("Tabela:", tables[n], "criada...");
        }
        else {
            console.log("Tabela:", tables[n], "ja existe !!!");
        }
    }
}

function getTable(name) {
    return JSON.parse(localStorage.getItem(name)) || [];
}

// ELEMENTS:
function isElement(element, table) {
    let elements = getTable(table);

    if (element in elements) {
        return true;
    }
    else {
        return false;
    }
}

function insertElement(element, table) {
    if (!isElement(element, table)) {
        let elements = getTable(table);

        elements.push(element);
        localStorage.setItem(table, JSON.stringify(element));
        console.log("Element:", JSON.stringify(element), "inserido em", table, "...");
    }
    else {
        console.error("Error:", JSON.stringify(element), "ja existe !!!");
    }
}

// todo: remover elemento. (removeElement)
// todo: alterar elemento. (setElement)

// Criar tabelas:
tables = ["users", "services", "chats"];
createTables(tables);

// TESTES:
element = {"username" : "leandro", "password" : "123456"};
//insertElement(element, "users");

//localStorage.clear();
