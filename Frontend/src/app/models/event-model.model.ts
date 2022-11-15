import { EventTypeModel } from "./eventType-model.model";

export class EventModel {
    public _id: string;
    public eventTypeId: string;
    public eventType: EventTypeModel
    public eventDateTime: Date;
    public description: string;
    public address: string;
    public participants: number;
}