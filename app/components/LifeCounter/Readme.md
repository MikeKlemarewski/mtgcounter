Life counter with a circle around it indicating life total

    initialState = {lifeTotal: 20};
    
    <LifeCounter
        lifeTotal={state.lifeTotal}
        onLifeChange={(delta) => {setState({lifeTotal: state.lifeTotal + delta})}} />
