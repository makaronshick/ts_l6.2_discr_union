var Actions;
(function (Actions) {
    Actions["create"] = "CREATE_USER";
    Actions["delete"] = "DELETE_USER";
    Actions["update"] = "UPDATE_USER";
    Actions["block"] = "BLOCK_USER";
})(Actions || (Actions = {}));
function handleAction(action) {
    switch (action.type) {
        case Actions.create:
            console.log("Creating user: Name = ".concat(action.payload.name, ", Age = ").concat(action.payload.age));
            break;
        case Actions.delete:
            console.log("User with ID ".concat(action.payload.userId, " has been deleted."));
            break;
        case Actions.update:
            var updates = [];
            if (action.payload.name) {
                updates.push("Name = ".concat(action.payload.name));
            }
            ;
            if (action.payload.age) {
                updates.push("Age = ".concat(action.payload.age));
            }
            ;
            console.log("Updating user with ID ".concat(action.payload.userId, ": ").concat(updates.join(', ')));
            break;
        case Actions.block:
            console.log("User with ID ".concat(action.payload.userId, " has been blocked. Reason: ").concat(action.payload.reason));
            break;
        default:
            throw new Error("Unhandled action type: ".concat(action));
    }
}
handleAction({ type: 'CREATE_USER', payload: { name: 'Alice', age: 25 } });
handleAction({ type: 'DELETE_USER', payload: { userId: 42 } });
handleAction({ type: 'UPDATE_USER', payload: { userId: 42, name: 'Bob' } });
handleAction({ type: 'BLOCK_USER', payload: { userId: 42, reason: 'Some reason' } });
//handleAction({ type: 'OLOLO_USER', payload: { userId: 42, reason: 'Some reason' } }); // Error
