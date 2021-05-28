const HOME = "/";
const TRENDING = "/trending";
const NEW = "/new";
const JOIN = "/join";
const LOGIN = "/login";
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const STORIES = "/stories";
const STORIES_DETAIL = "/:id";
const STORIES_EDIT = "/:id/edit";
const STORIES_DELETE = "/:id/delete";
const PROTECTED = "/protected";

const routes = {
    home: HOME,
    trending: TRENDING,
    new: NEW,
    join: JOIN,
    login: LOGIN,
    users: USERS,
    userDetail: (id) => {
        if(id) {
            return `/users/${id}`;
        } {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    stories: STORIES,
    storiesDetail: (id) => {
        if (id) {
            return `/stories/${id}`;
        } else {
            return STORIES_DETAIL;
        }
    },
    storiesEdit: (id) => {
        if(id) {
            return `/stories/${id}/edit`;
        } else {
            return STORIES_EDIT;
        }
    },
    storiesDelete: (id) => {
        if(id) {
            return `/stories/${id}/delete`;
        } else {
            return STORIES_DELETE;
        }
    },
    protectPage: PROTECTED
};

export default routes;
