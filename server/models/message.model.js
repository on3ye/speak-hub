import mongoose from "mongoose";
const { Schema } = mongoose;

const messageSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    senderId: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

export default Message;
