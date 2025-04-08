import { Comment } from 'src/entities/comment.entity';
import { Topic } from 'src/entities/topic.entity';
import { User } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'learn_nest',
  host: 'localhost',
  port: 5432,
  username: '',
  password: '',
  entities: [User, Topic, Comment],
  synchronize: true,
  logging: false,
};

export default config;
