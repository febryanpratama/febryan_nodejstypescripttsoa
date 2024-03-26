## INFORMASI INSTALL LARAVEL ASSESMENT KLEDO

### Langkah Pertama

Buat database dengan nama database `tsoa_database` dengan driver posgresql

Buat suatu file .env dengan `DATABASE_URL="postgresql://postgres:root@localhost:5432/tsoa_database?schema=public"
SECRET_KEY="mysecretkey"`

jalankan perintah `npx prisma generate` dan `npx prisma migrate dev`

### Langkah Kedua

Jalankan perintah `yarn start`

## Dokumentasi Swagger

Anda dapat melihat endpoint swagger pada link berikut `localhost:3000/docs`
