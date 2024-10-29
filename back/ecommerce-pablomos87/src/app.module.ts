import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OrdersModule } from './modules/orders/orders.module';
import { CategoriesModule } from './modules/categories/categories.module';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],

    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => 
        configService.get('databaseConfig'),
    }),
    UsersModule, 
    ProductsModule, 
    AuthModule, OrdersModule, CategoriesModule],
  
  controllers: [],
  providers: [],
})
export class AppModule {}
