# Data Binding: Ràng buộc dữ liệu

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.
Project này đã được tạo với [Angular CLI] phiên bản 10.1.3

## Install Package (cài package trước khi run)

Open terminal and run `npm install`
Mở terminal và run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Chạy `ng serve` cho dev server. Hướng đến `http://localhost:4200/`. Ứng dụng sẽ tự động tải lại nếu bạn có thay đổi trong bất kì file mã nguồn nào.

## INTERPOLATION (nouns: danh từ): Sự thêm vào
Khi tạo ra component mới ta có các file sau
* File TypeScript đuổi .ts
* File Template đuôi .html
* File CSS|SCSS|... style của Template đó
* File để Test đuôi .spect.ts

Giả sử khi bạn có một dữ liệu nào đó được lấy về trong file .ts mà muốn hiển thị ra màn hình thì phải làm sao?
Lúc đó chúng ta có  interpolation `{{expression}}`
Cặp dấu `{{` và `}}` được thêm vào bên trong file template để hiển thị dữ liệu từ .ts file của component ra template.

__app.component.ts__
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello = 'hello world';
}
```
__app.component.html__
```
<p>
  {{hello}}
</p>
```
__Kết quả sau khi chạy__

![Image of Yaktocat](https://scontent-hkg4-2.xx.fbcdn.net/v/t1.0-9/120132793_2771933739694798_5965221724466810002_n.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=2OuSV-_9stcAX85qjoJ&_nc_ht=scontent-hkg4-2.xx&oh=e8a309fb98d8fef253f6887ced4163b7&oe=5F982A8C)
____

