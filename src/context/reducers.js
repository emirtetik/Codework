export default function reducers(state, action) {
    switch (action.type) {
        case "ADD_FAV" :
            const {data} = action.payload;
            if (state.favJobList.find(item => item.id === data.id)) {
                return state
            }
            const newFavJob = [data, ...state.favJobList]
            return {...state, favJobList: newFavJob}

        case "REMOVE_FAV" :
            const {id} = action.payload;
            const newFavJobList = state.favJobList.filter(item => item.id !== id)
            return {...state, favJobList: newFavJobList}

        case "ADD_SUBMIT" :
            const {data: subJob} = action.payload;
            if (state.subJobList.find(item => item.id === subJob.id)) {
                return state
            }
            const newSubmitJob = [subJob, ...state.subJobList]
            return {...state, subJobList: newSubmitJob};
    
        default:
            return state;
    }
}