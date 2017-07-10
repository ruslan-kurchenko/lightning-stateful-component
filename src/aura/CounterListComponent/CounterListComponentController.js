({
    doInit: function (cmp, event, helper) {
        helper.setState(cmp, {counters: [{value: 0}]});
    },

    increment: function (cmp, event, helper) {
        const index = event.currentTarget.dataset.index;
        const state = helper.getState(cmp);

        state.counters[index].value = state.counters[index].value + 1;

        helper.setState(cmp, state);
    },

    decrement: function (cmp, event, helper) {
        const index = event.currentTarget.dataset.index;
        const state = helper.getState(cmp);

        state.counters[index].value = state.counters[index].value - 1;

        helper.setState(cmp, state);
    },

    addCounter: function (cmp, event, helper) {
        const state = helper.getState(cmp);
        state.counters.push({value: 0});

        helper.setState(cmp, state);
    }
});