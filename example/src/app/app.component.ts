import { Component } from '@angular/core';
import {Html5QrcodeResult} from "html5-qrcode/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  decodedText: string = '';

  qrCodeSuccess(qrCodeResult: Html5QrcodeResult) {
    console.log('Successfully scanned QR code', qrCodeResult);
  }
}
