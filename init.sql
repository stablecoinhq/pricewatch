create database if not exists pricewatch default character set utf8mb4;
create database if not exists pricewatch_test default character set utf8mb4;

create user IF NOT EXISTS pricewatch_user@'%' IDENTIFIED  WITH mysql_native_password BY 'pricewatch_pass';
create user IF NOT EXISTS pricewatch_test_user@'%' IDENTIFIED  WITH mysql_native_password BY 'pricewatch_test_pass';

GRANT ALL PRIVILEGES ON pricewatch.* TO 'pricewatch_user'@'%';
GRANT ALL PRIVILEGES ON pricewatch_test.* TO 'pricewatch_test_user'@'%';

flush privileges;