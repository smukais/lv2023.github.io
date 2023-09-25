function addMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
  
    if (messageText === '') {
      alert('Lūdzu, ievadiet tekstu.');
      return;
    }
  
    const messageContainer = document.getElementById('messageContainer');
    const newMessage = document.createElement('div');
    newMessage.innerText = messageText;
    messageContainer.appendChild(newMessage);
  
   
    saveMessage(messageText);
  
    
    messageInput.value = '';
  }
  
  function saveMessage(message) {
    let messages = localStorage.getItem('messages');
  
    if (!messages) {
      messages = [];
    } else {
      messages = JSON.parse(messages);
    }
  
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
  }
  
  function loadMessages() {
    const messageContainer = document.getElementById('messageContainer');
    const messages = JSON.parse(localStorage.getItem('messages'));
  
    if (messages) {
      for (const message of messages) {
        const newMessage = document.createElement('div');
        newMessage.innerText = message;
        messageContainer.appendChild(newMessage);
      }
    }
  }
  
 
  loadMessages();
  