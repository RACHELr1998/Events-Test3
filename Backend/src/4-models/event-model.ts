import mongoose from "mongoose";
import { EventTypeModel } from "./eventType-model";

export interface IEventModel extends mongoose.Document {
    eventTypeId: mongoose.Schema.Types.ObjectId;
    eventDateTime: Date;
    description: string;
    address: string;
    participants: number;
}

export const EventSchema = new mongoose.Schema<IEventModel>({
    eventTypeId: mongoose.Schema.Types.ObjectId,
    eventDateTime: Date,
    description: String,
    address: String,
    participants: Number
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

EventSchema.virtual("eventType", {
    ref: EventTypeModel,
    localField: "eventTypeId",
    foreignField: "_id",
    justOne: true
})

export const EventModel = mongoose.model<IEventModel>("EventModel", EventSchema, "events");
