import { IdNotFoundError, ValidationError } from "../4-models/client-errors";
import { EventModel, IEventModel } from "../4-models/event-model";
import { EventTypeModel, IEventTypeModel } from "../4-models/eventType-model";

//Get all types of events
function getAllEventsTypes(): Promise<IEventTypeModel[]> {
    return EventTypeModel.find().exec();
}

//Get all events by event's type
function getAllEventsByType(eventTypeId: string): Promise<IEventModel[]> {
    const events = EventModel.find({ eventTypeId }).populate("eventType").exec();
    if (!events) throw new IdNotFoundError(eventTypeId);
    return events;
}

//Add new event
function addEvent(event: IEventModel): Promise<IEventModel> {
    const errors = event.validateSync();
    if (errors) throw new ValidationError(errors.message);
    return event.save();
}

//Delete one event by _id
function deleteEvent(_id: string) {
    const deletedEvent = EventModel.findByIdAndDelete(_id).exec();
    if (!deletedEvent) throw new IdNotFoundError(_id);
}

export default {
    getAllEventsTypes,
    getAllEventsByType,
    addEvent,
    deleteEvent
};
