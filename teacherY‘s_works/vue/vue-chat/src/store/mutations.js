import Vue from 'vue'
export default {
  receiveAll (state, messages) {
    console.log(messages)
    let lastMessage
    messages.forEach(message => {
      if (!state.threads[message.threadID]) {
        createThread(state, message.threadID, message.threadName)
      } 
      if (!lastMessage || message.timestamp > lastMessage.timestamp) {
        lastMessage = message
      }
      addMessage(state, message)
    })
    setCurrentThread(state, lastMessage.threadID)
  },
  setCurrentThread(state, id){
    state.currentThreadID = id
    state.threads[id].lastMessage.isRead = true
  }
}
function setCurrentThread (state, id) {
  state.currentThreadID = id
  state.threads[id].lastMessage.isRead = true
}
function addMessage(state, message) {
  message.isRead = message.threadID === state.currentThreadID
  const thread = state.threads[message.threadID]
  if (!thread.messages.some(id => id === message.id)) {
    thread.messages.push(message.id)
    thread.lastMessage = message
  }
  Vue.set(state.messages, message.id, message)
}
function createThread(state, id, name) {
  Vue.set(state.threads, id, {
    id,
    name,
    messages: [],
    lastMessage: null
  })
}