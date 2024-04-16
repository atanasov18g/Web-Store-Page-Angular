import { Inject } from "@angular/core";

export class Task {

    constructor(public title: string,
        public description: string,
        public assignedTo: string,
        public createdAt: string,
        public priority: string,
        public status: string,
        public id?: string,) { }
}





// title: string;
// description: string;
// assignedTo: string;
// createdAt: string;
// priority: string;
// status: string;
// id?: string;

// @Inject('title') title: string, @Inject('description') description: string, @Inject('assignedTo') assignedTo: string, @Inject('createdAt') createdAt: string,
//         @Inject('priority') priority: string, @Inject('status') status: string, @Inject('id') id: string) {

//         this.title = title;
//         this.description = description;
//         this.assignedTo = assignedTo;
//         this.createdAt = createdAt;
//         this.priority = priority;
//         this.status = status;
//         this.id = id;