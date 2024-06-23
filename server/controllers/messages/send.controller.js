import Message from "../../models/message.model.js";

export const SendController = async (req, res) => {
    try {
        const { message } = req.body;
        const senderId = req.user._id;
        const newMessage = new Message({
            content: message,
            senderId: senderId,
        });

        if (!newMessage) return res.status(500).send({ error: "Unable to create message! "});
        await newMessage.save();
        return res.status(200).send({ message: "Message sent successfully!"});
    } catch (err) {
        console.error("An error occurred at the SendController\n" + err.message);
        return res.status(500).send({ error: err.message });
    };
}