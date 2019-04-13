let cards = [
    {text: 'Backlog Card', table: 'Backlog'},
    {text: 'To Do Card', table: 'ToDo'},
    {text: 'In Progress Card', table: 'InProgress'},
    {text: 'Completed Card', table: 'Completed'},
  ];

  module.exports = {
      getCards: (req, res) => {
        //this method will fetch all cards for the appropriate table.
        console.log(cards)
        res.status(200).send(cards)
      },
  }