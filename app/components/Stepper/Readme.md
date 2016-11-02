Stepper component that can be tapped or dragged to change the life count.


    initialState = {lifeTotal: 20};

    <Stepper
        number={state.lifeTotal}
        onChange={(delta) => {setState({lifeTotal: state.lifeTotal + delta})}} />
