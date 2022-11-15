import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/models/event-model.model';
import { EventTypeModel } from 'src/app/models/eventType-model.model';
import { EventService } from 'src/app/services/event.service';

@Component({
    selector: 'app-list-data',
    templateUrl: './list-data.component.html',
    styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {

    public eventsTypes: EventTypeModel[];
    public events: EventModel[];

    constructor(private eventService: EventService) { }

    async ngOnInit(): Promise<void> {
        try {
            this.eventsTypes = await this.eventService.getAllEventsTypes();
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    public async getEvent(args: Event): Promise<void> {
        try {
            const eventTypeId = (args.target as HTMLSelectElement).value;
            this.events = await this.eventService.getAllEventsByType(eventTypeId);
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    public async deleteEvent(_id: string): Promise<void> {
        try {
            const ok = window.confirm("Are you sure?");
            if (!ok) return;

            await this.eventService.deleteEvent(_id);

            alert("The event has been deleted!");

            const index = this.events.findIndex(e => e._id === _id);
            this.events.splice(index, 1);
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    public isPassed(date: Date): boolean {
        const now = new Date().toISOString().slice(0, 10);
        const dateEvent = new Date(date).toISOString().slice(0, 10)
        return dateEvent <= now;
    }

}
