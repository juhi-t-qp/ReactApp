import { DataSource } from 'typeorm'
import { TodoEntity } from '@modules/todo/domain/entities/TodoEntity'

export const DatabaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async (): Promise<DataSource> => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                username: 'todoUser',
                password: 'Todo@1234',
                database: 'todoDb',
                entities: [TodoEntity],
                synchronize: true,
            })
            return dataSource.initialize()
        },
    },
]
