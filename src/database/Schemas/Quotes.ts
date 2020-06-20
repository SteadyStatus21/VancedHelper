import { Document, Schema, model } from 'mongoose';

export interface Quotes extends Document {
	messageID: string;
	channelID: string;
	authorID: string;
	content: string;
	author: {
		name: string;
		avatar: string;
	};
	attachment?: string;
}

const QuoteSchema = new Schema({
	messageID: String,
	channelID: String,
	authorID: String,
	content: String,
	author: {
		name: String,
		avatar: String
	},
	attachment: String
});

export default model<Quotes>('Quotes', QuoteSchema);
