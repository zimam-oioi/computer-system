import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService){}
    showData(){
        console.log('Disk started');
        this.powerService.supplyPower(10);
        return console.log('Sharing Data');
    }
}
