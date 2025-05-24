class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async handleUserInput(message) {
    const res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ message: userMessage }),
        headers: {
          'Content-Type': 'application/json',
        },
  })

  const {reply} = await res.json();

  const botMessage = this.createChatBotMessage(reply)
  this.setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));
  }  // Add more action methods as needed
}
export default ActionProvider;