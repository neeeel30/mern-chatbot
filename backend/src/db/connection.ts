import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
  try {
    await connect("mongodb+srv://neelp3093:mongodb1234@cluster0.cb5nqzf.mongodb.net/chatbot?retryWrites=true&w=majority&appName=Cluster0");
  } catch (error) {
    console.log(error);
    throw new Error("Could not Connect To MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);                                     
    throw new Error("Could not Disconnect From MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };