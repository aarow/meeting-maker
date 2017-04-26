export interface Meeting {
    id?: number;
    title: string;
    allDay?:boolean;	
    start: string;
    end?: string;
    url?: string;
    className?:string;	
    editable?:boolean;	
    startEditable?: boolean;	
    durationEditable?: boolean;
    resourceEditable?: boolean;	
    rendering?: string;
    overlap?: boolean;
    constraint?	: number;
    source?: Meeting;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
}
