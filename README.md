## Các file hướng dẫn
Hướng dẫn các api
https://docs.google.com/document/d/1UcDDhTcBdsC4G4zG2U09UKcws-w0ehkrrRscsuGnxwg/edit?usp=share_link

Hướng dẫn cấu hình và deploy
https://docs.google.com/document/d/1exh8uUChX_heOnpVAN6n4bEYIO8_bs6e/edit?usp=share_link&ouid=109719456144402366114&rtpof=true&sd=true


## Hướng dẫn chạy ở local bằng npm
(Yêu cầu: phải cài npm)
Mở command prompt tại thư mục project
Cd vào thư mục server. Sau đó gõ lệnh
### `yarn`
và
### `yarn start`

Cd vào thư mục client. Sau đó lệnh 
### `npm install` 
và 
### `npm start`
Truy cập vào http://localhost:3000

## Hướng dẫn ở local bằng docker
(Yêu cầu: Phải cài đặt docker engine)
Mở command prompt tại thư mục project
Gõ lệnh 
### `docker compose build`
Gõ lệnh
### `docker compose up -d`
Truy cập vào http://localhost:81
