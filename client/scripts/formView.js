var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var dirtyMessage = {username: window.location.search.substr(10), text: $('#message')[0].value, roomname: 'placeholder'};
    // Stop the browser from submitting the form
    var cleanMessage = sanitizeMessage(dirtyMessage);
    MessagesView.render(cleanMessage);


    // need a way to take the info from the form that would have formview's info
    // want to work with messagesview.render
    // send it to the models
    // debugger;
    Parse.create(cleanMessage);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};