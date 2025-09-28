import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('MongoDB connected')
        })

        // Use the URI as provided. Do NOT append a database name here because
        // atlas SRV URLs already contain it and appending breaks DNS resolution.
        const uriFromEnv = process.env.MONGODB_URI;
        const fallbackLocal = 'mongodb://127.0.0.1:27017/skillsbarter';
        const uri = uriFromEnv && uriFromEnv.trim().length > 0 ? uriFromEnv : fallbackLocal;

        await mongoose.connect(uri);
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        throw err;
    }
}

export default connectDB;