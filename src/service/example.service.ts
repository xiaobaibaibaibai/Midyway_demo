import { Provide } from '@midwayjs/decorator';
import { IExampleOptions } from '../interface';
import { InjectEntityModel } from '@midwayjs/orm';
import { Person } from '../entity/person';
import { Repository } from 'typeorm';

@Provide()
export class ExampleService {
  @InjectEntityModel(Person)
  personModel: Repository<Person>;

  async addUser(options: Pick<IExampleOptions, 'name'>) {
    const { name } = options;

    let person = new Person();
    person.name = name;
    person.age = 18;

    const res = await this.personModel.save(person);

    console.log(res);

    return {
      id: res.id,
      username: name,
    };
  }
}
