Example TabbedHeader with 3 items.

    <TabbedHeader
        items={["Chris", "Sarah", "Jessie"]}
        activeIndex={state.activeIndex}
        onUpdateActiveIndex={(index) => {setState({activeIndex: index})}} />
