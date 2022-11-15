import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventModel } from 'src/app/models/event-model.model';
import { EventTypeModel } from 'src/app/models/eventType-model.model';
import { EventService } from 'src/app/services/event.service';

@Component({
    selector: 'app-add-data',
    templateUrl: './add-data.component.html',
    styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

    public eventsTypes: EventTypeModel[];
    public event = new EventModel;

    constructor(private eventService: EventService, private router: Router) { }

    async ngOnInit(): Promise<void> {
        try {
            this.eventsTypes = await this.eventService.getAllEventsTypes();
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    public async send() {
        try {
            await this.eventService.addEvent(this.event);
            alert("The event has been added!");
            this.router.navigateByUrl("/list");
        }
        catch (err: any) {
            alert(err.message);
        }
    }
}
