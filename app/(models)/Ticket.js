import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb://localhost:27017/TicketinApp");
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
  }
);

module.exports  = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

