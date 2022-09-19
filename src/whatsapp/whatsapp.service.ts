import {ForbiddenException, Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {TextDto} from "./dto/requests/text.dto";
import {MediaDto} from "./dto/requests/media.dto";
import {ContactDto} from "./dto/requests/contact.dto";
import {LocationDto} from "./dto/requests/location.dto";
import {InteractiveDto} from "./dto/requests/interactive.dto";
import {catchError, lastValueFrom, map} from "rxjs";
import {ResponseDto} from "./dto/responses/response";

@Injectable()
export class WhatsappService {
    constructor(private readonly httpService: HttpService) {
    }

    private whatsapp_url = '';
    private token = '';
    private requestConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        },
        params: {}
    }

    async sendTextMessage(text: TextDto): Promise<ResponseDto> {
        const res = await lastValueFrom(this.httpService.post(this.whatsapp_url, text, this.requestConfig)
            .pipe(map((response) => response.data))
            .pipe(catchError((error) => {
                    console.log(error)
                    throw new ForbiddenException('API Unavailable')
                })
            ))

        console.log(res);
        return;
    }


    async sendMediaMessage(media: MediaDto) {
        await lastValueFrom(this.httpService.post(this.whatsapp_url, media)
            .pipe(map((response) => response.data))
            .pipe(catchError((error) => {
                    console.log(error)
                    throw new ForbiddenException('API Unavailable')
                })
            ));
    }

    async sendContactMessage(contact: ContactDto) {
        await lastValueFrom(this.httpService.post(this.whatsapp_url, contact)
            .pipe(map((response) => response.data))
            .pipe(catchError((error) => {
                    console.log(error)
                    throw new ForbiddenException('API Unavailable')
                })
            ));
    }

    async sendLocationMessage(location: LocationDto) {
        await lastValueFrom(this.httpService.post(this.whatsapp_url, location)
            .pipe(map((response) => response.data))
            .pipe(catchError((error) => {
                    console.log(error)
                    throw new ForbiddenException('API Unavailable')
                })
            ));
    }

    async sendInteractiveMessage(interactive: InteractiveDto) {
        await lastValueFrom(this.httpService.post(this.whatsapp_url, interactive)
            .pipe(map((response) => response.data))
            .pipe(catchError((error) => {
                    console.log(error)
                    throw new ForbiddenException('API Unavailable')
                })
            ));
    }
}
