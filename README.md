# Angular HTML5 QRCode

This is the angular adaptation of the "**[HTML5 QRCode](https://github.com/mebjas/html5-qrcode)**". For the documentation please have a look at https://github.com/mebjas/html5-qrcode.

Install using:
```bash
npm i ngx-html5-qrcode-16
```
Angular usage - viz. example project in github
  ```html
<div style="width: 800px; height: 600px;">
    <html5-qrcode(decodedText)="decodedText = $event" (decodedResult)="qrCodeSuccess($event)"></html5-qrcode>
</div>
  ```

Other options:
 - useFrontCamera=true|false
 - config - Html5QrcodeCameraScanConfig entity from the original library
   - Example: {fps: 10, qrbox: {width: 250, height: 250}}

## Development
Pull requests are welcome.

Building the package:
```bash
ng-packagr -p ng-package.json 
```

Deploying the package:
```bash
cd dist
npm version <new-version>
npm publish
```
