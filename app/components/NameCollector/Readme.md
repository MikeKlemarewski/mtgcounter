An input that is used to collect multiple names

    initialState = {names: []};

    <div>
        <NameCollector
            count={3}
            onSubmit={(name) => {state.names.push(name); alert(state.names)}}
            onComplete={() => {alert('complete!')}} />

    </div>
