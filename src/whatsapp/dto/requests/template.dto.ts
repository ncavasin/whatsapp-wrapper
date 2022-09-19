import Enum from 'enum'


export class Template {
    namespace: string;
    name: string;
    language: string;
    components: Components[];
}

export class Button {
    type: ButtonType;
    payload: string;
    text: string;
}

export class ButtonType {
    type = new Enum(['payload', 'text'], 'ButtonType')
}

export class Components {
    type: ComponentType; // header, body or footer only.
    parameters?: Parameter[];
}

export class ComponentType {
    type = new Enum(['header', 'body', 'footer'], 'ComponentType')
}

export class Currency {
    fallback_value: string;
    code: string;
    amount_1000: number;
}

export class DateTime {
    fallback_value: string;
}

export class Parameter {
    type: ParameterType;
    type_content: object; // generic way
}

export class ParameterType {
    type = new Enum(['currency', 'date_time', 'document', 'image', 'text', 'video'], 'ParameterType')
}
