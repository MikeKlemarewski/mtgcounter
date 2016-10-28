Life counter component can be tapped or dragged to change the life count.


    initialState = {lifeTotal: 20};

    <LifeCounter
        lifeTotal={state.lifeTotal}
        onLifeChange={(delta) => {setState({lifeTotal: state.lifeTotal + delta})}} />
