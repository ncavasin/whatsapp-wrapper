import Enum from 'enum'
import {Image, Video} from "./media.dto";


export class InteractiveDto {
    action: Action;
    body: Body;
    footer: Footer;
    header: Header;
    type: InteractiveType;
}

export class InteractiveType {
    type = new Enum(['button', 'list', 'product', 'product_list'], 'InteractiveType')
}

export class Action {
    button: string;
    buttons: Button[];
    catalog_id: string;
    product_retailer_id: string;
    sections: Section[]
}

export class Button {
    type: string;
    title: string;
    id: string;
}

export class Section {
    product_items: Product[];
    rows: Row[];
    title: string
}

export class Product {
    product_retailer_id: string
}

export class Row {
    id: string;
    title: string;
    description?: string
}

export class HeaderType {
    type = new Enum(['text', 'video', 'image', 'document'], 'HeaderType')
}

export class Header {
    document: Document;
    image: Image;
    text: string;
    type: HeaderType;
    video: Video;
}

export class Body {
    text: string;
}

export class Footer {
    text: string;
}




