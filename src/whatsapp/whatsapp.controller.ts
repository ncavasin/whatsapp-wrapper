import {Body, Controller, Post} from '@nestjs/common';
import {WhatsappService} from './whatsapp.service';
import {TextDto} from "./dto/requests/text.dto";
import {MediaDto} from "./dto/requests/media.dto";
import {LocationDto} from "./dto/requests/location.dto";
import {ContactDto} from "./dto/requests/contact.dto";
import {InteractiveDto} from "./dto/requests/interactive.dto";

@Controller('whatsapp')
export class WhatsappController {
    constructor(private readonly whatsappService: WhatsappService) {
    }

    @Post('/contact')
    sendContactMessage(@Body() contactDto: ContactDto) {
        this.whatsappService.sendContactMessage(contactDto);
    }

    @Post('/interactive')
    sendInteractiveMessage(@Body() interactiveDto: InteractiveDto) {
        this.whatsappService.sendInteractiveMessage(interactiveDto)
    }

    @Post('/media')
    sendMediaMessage(@Body() mediaDto: MediaDto) {
        this.whatsappService.sendMediaMessage(mediaDto);
    }

    @Post('/location')
    sendLocationMessage(@Body() locationDto: LocationDto) {
        this.whatsappService.sendLocationMessage(locationDto);
    }

    @Post('/text')
    sendTextMessage(@Body() textDto: TextDto) {
        this.whatsappService.sendTextMessage(textDto);
    }
}
