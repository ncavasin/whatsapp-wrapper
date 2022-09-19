import Enum from 'enum'
import {Template} from "./template.dto";

export class Message {
    // Type can be: contact, interactive, location, media, text and template
    type: string;
    // Destination's id
    to: string;
    recipient_type?: string;
    template: Template;
    hsm: true;
}

export class MessageType {
    type = new Enum(['contact', 'interactive', 'location', 'media', 'text', 'template'], 'MessageType')
}