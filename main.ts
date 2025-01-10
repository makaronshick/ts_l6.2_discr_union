enum Actions {
    create = 'CREATE_USER',
    delete = 'DELETE_USER',
    update = 'UPDATE_USER',
    block = 'BLOCK_USER',
}

interface ICreateUserAction {
    type: 'CREATE_USER';
    payload: { name: string; age: number };
}

interface IDeleteUserAction {
    type: 'DELETE_USER';
    payload: { userId: number };
}

interface IUpdateUserAction {
    type: 'UPDATE_USER';
    payload: { userId: number; name?: string; age?: number };
}

interface IBlockUserAction {
    type: 'BLOCK_USER';
    payload: { userId: number; reason: string };
}

type Action = ICreateUserAction | IDeleteUserAction | IUpdateUserAction | IBlockUserAction | never;

function handleAction(action: Action): void {
    switch (action.type) {
        case Actions.create:
            console.log(`Creating user: Name = ${action.payload.name}, Age = ${action.payload.age}`);
            break;
        case Actions.delete:
            console.log(`User with ID ${action.payload.userId} has been deleted.`);
            break;
        case Actions.update:
            const updates = [];
            if (action.payload.name) {
                updates.push(`Name = ${action.payload.name}`)
            };
            if (action.payload.age) {
                updates.push(`Age = ${action.payload.age}`)
               };
            console.log(`Updating user with ID ${action.payload.userId}: ${updates.join(', ')}`);
            break;
        case Actions.block:
            console.log(`User with ID ${action.payload.userId} has been blocked. Reason: ${action.payload.reason}`);
            break;
        default:
            throw new Error(`Unhandled action type: ${action}`);
    }
}

handleAction({ type: 'CREATE_USER', payload: { name: 'Alice', age: 25 } });           // Creating user: Name = Alice, Age = 25
handleAction({ type: 'DELETE_USER', payload: { userId: 42 } });                       // User with ID 42 has been deleted.
handleAction({ type: 'UPDATE_USER', payload: { userId: 42, name: 'Bob' } });          // Updating user with ID 42: Name = Bob
handleAction({ type: 'BLOCK_USER', payload: { userId: 42, reason: 'Some reason' } }); // User with ID 42 has been blocked. Reason: Some reason

//handleAction({ type: 'OLOLO_USER', payload: { userId: 42, reason: 'Some reason' } }); // Error ожидаем + подчеркивает красненьким
