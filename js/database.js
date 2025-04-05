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
function getElement(value, key, table) {
    let elements = getTable(table);

    for (let i = 0; i < elements.length; i++) {
        if (elements[i][key] === value) {
            return i;
        }
    }

    return null;
}

function insertElement(element, key, table) {
    let elements = getTable(table);

    if (getElement(element[key], key, table) === null) {
        elements.push(element);
        localStorage.setItem(table, JSON.stringify(elements));
        console.log("Element:", JSON.stringify(element[key]), "inserido em", table, "...");
    }
}

function removeElement(element, key, table) {
    let elements = getTable(table);

    for (let i = 0; i < elements.length; i++) {
        if (elements[i][key] === element[key]) {
            elements.splice(i, 1);
            localStorage.setItem(table, JSON.stringify(elements));
            break;
        }
    }
}

function setElement(element, key, table) {
    let elements = getTable(table);

    for (let i = 0; i < elements.length; i++) {
        if (elements[i][key] === element[key]) {
            elements[i] = element;
            localStorage.setItem(table, JSON.stringify(elements));
            break;
        }
    }
}

// CHECKS:
function isUserEmail(email) {
    const users = getTable("users");

    if (users.length > 0) {
        for (let i = 0; i < users.length; i++) {
            let user = users[i];

            if (user.email === email) {
                return true;
            }
        }

        return false;
    }
    else {
        return false;
    }
}

// Criar tabelas:
tables = ["users", "services", "chats", "user"];
createTables(tables);

// TESTES:
//element = {"username" : "leandro", "password" : "123456"};
//insertElement(element, "users");

//localStorage.clear();
