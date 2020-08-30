var Rooms = {

  // created _data, which should hold all the rooms
  _data: new Set(),

  updateRooms: function(messages) {

    // create a method that does loops over all the messages and push every room to the Set
    _.each(messages, function(message) {
      var cleanMessage = sanitizeMessage(message);
      // console.log(`Rooms messages: ${message.roomname}`);
      Rooms._data.add(cleanMessage.roomname);

    });

    RoomsView.initialize();

  }


};