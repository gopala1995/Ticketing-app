import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.DB_URL);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Ticket = mongoose.model.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
