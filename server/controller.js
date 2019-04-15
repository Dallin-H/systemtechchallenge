let cards = [
  { ID: 1, text: "Backlog Card", table: "Backlog" },
  { ID: 2, text: "To Do Card", table: "ToDo" },
  { ID: 3, text: "In Progress Card", table: "InProgress" },
  { ID: 4, text: "Completed Card", table: "Completed" },
];

module.exports = {
  getCards: (req, res) => {
    // send the card array to the component
    res.status(200).send(cards);
  },
  moveCard: (req, res) => {
    const { ID, string } = req.body;
    let foundIndex = cards.findIndex(card => card.ID == ID);
    let currentObj = cards[foundIndex];

    // check the table and the input, then move accordingly.

    if (currentObj.table === "Backlog" && string === "left") {
      currentObj.table = "Completed";
      cards[foundIndex] = currentObj;
    } else if (currentObj.table === "Backlog" && string === "right") {
      currentObj.table = "ToDo";
      cards[foundIndex] = currentObj;
    } else if (currentObj.table === "ToDo" && string === "left") {
      currentObj.table = "Backlog";
      cards[foundIndex] = currentObj;
    } else if (currentObj.table === "ToDo" && string === "right") {
      currentObj.table = "InProgress";
      cards[foundIndex] = currentObj;
    } else if (currentObj.table === "InProgress" && string === "left") {
      currentObj.table = "ToDo";
      cards[foundIndex] = currentObj;
    } else if (currentObj.table === "InProgress" && string === "right") {
      currentObj.table = "Completed";
      cards[foundIndex] = currentObj;
    } else if (currentObj.table === "Completed" && string === "left") {
      currentObj.table = "InProgress";
      cards[foundIndex] = currentObj;
    } else if (currentObj.table === "Completed" && string === "right") {
      currentObj.table = "Backlog";
      cards[foundIndex] = currentObj;
    } 
    res.status(200).send(cards);
  },
  addCard: (req, res) => {
    // find the highest ID, add 1 to it then create a new object for the cards array and push it on.
    const {text, table} = req.body;
    let arrayID = cards.map(el => el.ID)
    let highestID = Math.max.apply(null, arrayID)
    let newObj = {ID: highestID + 1, text: text, table}
    cards.push(newObj)
    res.sendStatus(200)
  }
};
