import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
    name: { type: String, required: true },
    source: { type: String, required: true },
    destination: { type: String, required: true },
    fare: { type: Number, required: true },
    duration: { type: String, required: true }
});
export default mongoose.model('flight',flightSchema);