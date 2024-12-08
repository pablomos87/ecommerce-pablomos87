import { Controller, Post, Body } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('order-details')
@ApiTags('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) { }

  @Post()
  async create(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    try {
      return await this.orderDetailsService.createOrderDetail(createOrderDetailDto);
    } catch (error) {
      throw error;
    }
  }
};