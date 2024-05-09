import mongoose from "mongoose";

const votesSchema = new mongoose.Schema({
  trump: Number,
  biden: Number,
});

const Votes = mongoose.models.Votes || mongoose.model("Votes", votesSchema);

export default Votes;
