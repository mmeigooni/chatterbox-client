var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(message, roomname) {
    console.log(roomname);
    // if there is a roomname
    // only render messages with that roomname
    // filtering rooms should live here
    if (message.roomname === roomname) {
      var renderedMessage = this.renderMessage(message);
      this.$chats.prepend(renderedMessage);
    }
  },

  renderMessage: function(message) {
    return MessageView.render(message);
    // maybe this should show our recently submitted message
    // maybe also show all new messages on the server
  }


};


// is the design expecting us to use renderMessage as a helped to render?