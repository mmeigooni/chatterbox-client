var MessageView = {

  render: _.template(
    `
    <div class="chat">
        <div class="username"><%= username %> <br> <span class="message"><%= message %></span></div>
      </div>`)

};