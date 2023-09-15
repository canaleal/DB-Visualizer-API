// Import mongoose 
import mongoose from 'mongoose';

// Define script schema
const ScriptSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
    
})

// Export Mongoose model
export default mongoose.model('Script', ScriptSchema);