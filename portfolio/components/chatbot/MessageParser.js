class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
    this.commands = {
      'hello': this.handleHello,
      'help': this.handleHelp,
      'bye': this.handleBye,
    };
  }

  parse(message) {
    this.actionProvider.handleUserInput(message);

    const command = message.toLowerCase().trim();
    if (this.commands[command]) {
      return this.commands[command]();
    } else {
      return "I don't understand that command.";
    }
  }

  handleHello() {
    return 'Hello I am KaeGee! How can I assist you today?';
  }

  handleHelp() {
    return 'Here are some commands you can use: hello, help, bye.';
  }

  handleBye() {
    return 'Goodbye! Have a great day!';
  }
}
export default MessageParser;
// This class is responsible for parsing user messages and executing corresponding actions.