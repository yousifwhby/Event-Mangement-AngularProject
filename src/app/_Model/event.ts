import { Speaker } from "./speaker";
import { Student } from "./student";

export class Event {
    constructor(
        public _id:number,
        public title:string,
        public date:string,
        public mainSpeakerID:Speaker,
        public otherSpeakersID:Speaker[],
        public studentsID:Student[],
    ){}
}
