import {Address} from "./contact.dto";

export class LocationDto {
    longitude: string;
    latitude: string;
    name?: string;
    address?: Address;
}