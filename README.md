#Test Laravel Vuejs using jwt login
###Tạo file .env và config database
###Chạy lệnh 
- composer install (nếu có lỗi thì thay bằng lệnh composer install --ignore-platform-reqs)
- php artisan key:generate
- php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
- php artisan jwt:secret
- php artisan migrate
- php artisan serve
- npm i
- npm run watch




