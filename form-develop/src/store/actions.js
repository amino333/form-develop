export default {
    commitKeyword(store, keyword) {
        store.commit('setKeyword', keyword)
    },

    commitgender(store, gender) {
        store.commit('setgender', gender)
    },
    commitmonth(store, month) {
        store.commit('setmonth', month);
    },
    commitdays(store, days) {
        store.commit('setdays', days);
    },
    commityear(store, year) {
        store.commit('setyear', year);
    },
    commitanswer(store, answer) {
        store.commit('setanswer', answer);
    },
    commitanswer2(store, answer2) {
        store.commit('setanswer2', answer2);
    },
    commitanswer3(store, answer3) {
        store.commit('setanswer3', answer3);
    }
}
