import {dirname} from 'path'
import {DataSource} from 'typeorm'

export const DatabaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (): Promise<DataSource> => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        username: 'todoUser',
        password: 'todoPwd',
        database: 'todoDb',
        entities: [__dirname + '/../**/*.Entity{.ts,.js}'],
      })
      return dataSource.initialize()
    },
  },
]
