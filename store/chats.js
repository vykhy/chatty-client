import { createSlice } from "@reduxjs/toolkit";

const chatsSlice = createSlice({
  name: "todos",
  initialState: new Array(),
  reducers: {
    addChat(state, action) {
      const {
        chat_id,
        user_id,
        profile_picture,
        email,
        username,
        messages,
        page,
        created_at,
      } = action.payload;
      state.push({
        chat_id,
        user_id,
        profile_picture,
        email,
        username,
        messages,
        page,
        created_at,
      });
    },
    addMessage(state, action) {
      const { chat_id, message } = action.payload;
      state.value.forEach((chat) => {
        if (chat.chat_id === chat_id) {
          chat.messages = [message, ...chat.messages];
        }
      });
    },
    addNewMessage(state, action) {
      const {
        user_id,
        message_id,
        chat_id,
        content,
        createdAt: created_at,
      } = action.payload;
      state.forEach((chat) => {
        if (chat.chat_id === chat_id) {
          chat.messages = [
            ...chat.messages,
            { user_id, message_id, content, created_at },
          ];
        }
      });
    },
    messageDelivered(state, action) {
      const { chat_id, message_id, delivered_at } = action.payload;

      state.forEach((chat) => {
        if (chat.chat_id == chat_id) {
          chat.messages = chat.messages.map((message) => {
            if (message.message_id == message_id) {
              return { ...message, delivered_at };
            }
            return message;
          });
        }
      });
      return state;
    },
    messageRead(state, action) {
      const { chat_id, message_id, read_at } = action.payload;

      state.forEach((chat) => {
        if (chat.chat_id == chat_id) {
          chat.messages = chat.messages.map((message) => {
            if (message.message_id == message_id) {
              return { ...message, read_at };
            }
            return message;
          });
        }
      });
      return state;
    },
    chatsLoaded(state, action) {
      return action.payload;
    },
    removeChats(state, action) {
      return [];
    },
  },
});

export const {
  addChat,
  addMessage,
  chatsLoaded,
  removeChats,
  addNewMessage,
  messageDelivered,
  messageRead,
} = chatsSlice.actions;
export default chatsSlice.reducer;
