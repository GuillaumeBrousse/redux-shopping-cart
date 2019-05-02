const logger = (store) => next => action => {
	if (action.type !== 'useless'){
		store.dispatch({
			type:'useless',
		})
	}
	console.log('action', action, store.getState())
	next(action)
}

export default logger;