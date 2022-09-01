let initialState = {
    contactList: [],
};

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_CONTACT':
            // state 속 contactList를 유지하되 name이랑 phoneNumber를 넣어준다.
            return {
                ...state,
                contactList: [
                    ...state.contactList,
                    {
                        name: payload.name,
                        phoneNumber: payload.phoneNumber,
                    },
                ],
            };
        default:
            return { ...state };
    }
}

export default reducer;
