let messages = [
    { added: new Date(), message: "the message 1", name: "adam", id: 0 },
    { added: new Date(), message: "the message 2", name: "ben", id: 1 },
    { added: new Date(), message: "the message 3", name: "charlie", id: 2 },
];

function addMessage(message, name) {
    messages.push({ added: new Date(), message, name, id: messages.length });
}

function getMessages() {
    return messages;
}

function getMessage(id) {
    return messages[id];
}

module.exports = { addMessage, getMessages, getMessage };
