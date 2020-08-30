var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // grab which which room is selected
    // access rooms _data set and pull only the messages room
    var roomsArray = Array.from(Rooms._data);
    console.log('this is the rooms array', roomsArray);
    _.each(roomsArray, function(room) {
      RoomsView.$select.append(`<option>${room}</option>`);
    });
  },

  render: function() {
    MessagesView.render(message, roomname);
  }

};
