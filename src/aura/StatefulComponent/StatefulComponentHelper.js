({
    setState: function (cmp, state) {
        cmp.set('v.state', state);
    },

    getState: function (cmp) {
        return Object.assign({}, cmp.get('v.state'));
    }
});