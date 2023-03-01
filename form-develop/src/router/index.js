import Vue from 'vue';
import Router from 'vue-router';
import Form from "../views/Form";
import Questionnaire from "../views/Question";
import Text from "../views/Text";
import answer from "../views/answer_list";
import 'bulma/css/bulma.css';

Vue.use(Router);


export default new Router({
    routes: [
        { path: '/', component: Form },
        { path: "/Question", component: Questionnaire },
        { path: "/Text", component: Text },
        { path: "/answer", component: answer }

    ]
});
