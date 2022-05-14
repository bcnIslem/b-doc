
const state = {
    isLoading: true,
    authData: null,
    patients: [],
    patientToUpdate:[],
};

export const testUseAppSelector = (func) => func(state);