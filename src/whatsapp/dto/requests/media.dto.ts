export class MediaDto {
    id: string;
    link: string;
    caption?: string;
    filename?: string;
    provider?: string;
}

export class Audio {
}

export class Document {
}

export class Image {
}

export class Video extends MediaDto {
}


export class Sticker extends MediaDto {
}