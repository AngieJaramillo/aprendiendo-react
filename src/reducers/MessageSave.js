const reducerMessageSave = (state, action) => {
    let nuevoEstado = { ...state };
    switch (action.type) {
        case 'NEW':
            nuevoEstado.messageSave = 'Registrado Correctamente';
            break;
        case 'EDIT':
            nuevoEstado.messageSave = 'Actualizado Correctamente';
            break;
        default:
            break;
    };

    return nuevoEstado;

};

export default reducerMessageSave;