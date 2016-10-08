import riot from 'riot';
import store from '../../redux/root';
import { searchComponent } from './search.component';
import { fetchUser } from '../../redux/modules/github';

class searchController {

    constructor() {

        this.obs = riot.observable();

        this.mountTag();
        this.listen();

    }

    mountTag() {

        this.search = riot.mount('search-component', store.getState().user)[0];

        if (this.search)
            this.search.update({ observable: this.obs });
    }

    listen() {

        this.obs.on('search', (username) => {
            store.dispatch(fetchUser(username));
        });

        store.subscribe(() => {
            this.search.update(store.getState().user);
        });
    }
}

module.exports = searchController;
