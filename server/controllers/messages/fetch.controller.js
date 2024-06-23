import Message from "../../models/message.model.js";

export const FetchController = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 }).limit(100).exec();
        return res.status(200).send({ messages: messages });
    } catch (err) {
        console.error("An error occurred at the FetchController\n" + err.message);
        return res.status(500).send({ error: err.message });
    };
}