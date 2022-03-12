import { Inject, Controller, Post, Body } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { ExampleService } from '../service/example.service';

@Controller('/example')
export class ExampleController {
  @Inject()
  ctx: Context;

  @Inject()
  exampleService: ExampleService;

  @Post('/add_user')
  async getUser(@Body('name') name) {
    const user = await this.exampleService.addUser({ name });
    return { success: true, message: 'OK', data: user };
  }
}
