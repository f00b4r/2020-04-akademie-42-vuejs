export function modelCreateUser({ commit }, payload) {
    commit('LOADING', true);

    const r1 = fetch(`/api/users/?email=${payload.email}`);

    if (r1.statusCode === 200) {
        commit('ADD_ERROR', { message: "duplicate user" });
    } else {
        const r2 = fetch(`/api/users/new`);
        commit('APPEND_USER', { user: r2 });
    }

    commit('LOADING', false);
}