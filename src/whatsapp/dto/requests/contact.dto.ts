export class Address {
    street?: string; // Number and name
    city?: string;
    state?: string; // State abbrev
    zip?: string;
    country?: string; // Full country name
    country_code?: string; // Two-letter abbrev
    type?: string; // HOME or WORK
}

export class Email {
    email?: string; // email address
    type?: string; // HOME or WORK
}

export class Name {
    formatted_name: string;
    first_name: string;
    last_name?: string;
    middle_name?: string;
    suffix?: string;
    prefix?: string;
}

export class Organization {
    company?: string;
    department?: string;
    title?: string;
}

export class Phone {
    phone?: string;
    type?: string; // CELL, MAIN, IPHONE, HOME and WORK
    wa_id?: string; // Wapp ID
}

export class URL {
    url?: string;
    type?: string; // HOME or WORK;
}

export class ContactDto {
    addresses?: Address[];
    birthday?: Date;
    emails?: Email[];
    name: Name;
    org?: Organization;
    phones?: Phone[];
    urls: URL[];
}