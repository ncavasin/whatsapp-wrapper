import {Body, Controller, Post} from '@nestjs/common';
import {WhatsappService} from './whatsapp.service';
import {TextMessageDto} from "./dto/text-message.dto";
import {LocationMessageDto} from "./dto/location-message.dto";
import {MultimediaMessageDto} from "./dto/multimedia-message.dto";
import {InteractiveMessageDto} from "./dto/interactive-message.dto";
import {ContactMessageDto} from "./dto/contact-message.dto";

@Controller('whatsapp')
export class WhatsappController {
    constructor(private readonly whatsappService: WhatsappService) {
    }

    @Post('/text-message')
    sendTextMessage(@Body() textMessageDto: TextMessageDto) {

    }

    @Post('/multimedia-message')
    sendMultimediaMessage(@Body() multimediaMessageDto: MultimediaMessageDto) {

    }

    @Post('/location-message')
    sendLocationMessage(@Body() locationMessageDto: LocationMessageDto) {

    }

    @Post('/contact-message')
    sendContactMessage(@Body() contactMessageDto: ContactMessageDto) {

    }

    @Post('/interactive-message')
    sendInteractiveMessage(@Body() interactiveMessageDto: InteractiveMessageDto) {

    }
}
