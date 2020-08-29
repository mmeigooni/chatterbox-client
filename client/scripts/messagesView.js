var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(message) {
    // var renderedMessage = MessageView.render({username: username, message: message});
    // filtering rooms should live her
    var renderedMessage = this.renderMessage(message);
    this.$chats.prepend(renderedMessage);
  },

  renderMessage: function(message) {
    return MessageView.render(message);
    // maybe this should show our recently submitted message
    // maybe also show all new messages on the server
  }


};


// is the design expecting us to use renderMessage as a helped to render?