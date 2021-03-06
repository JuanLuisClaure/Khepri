<search-component>
    <div>
        <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">
                <i class="glyphicon glyphicon-search"></i>
            </span>
            <input
                id="input"
                onkeyup={search}
                type="text"
                class="form-control"
                placeholder="Username">
        </div>
    </div>

    <script>
        this.observable = this.opts.observable;

        this.search = () => {
            let searchTerm = document.getElementById("input").value;
            if (searchTerm && this.observable)
                this.observable.trigger('search', searchTerm);
        }
    </script>

</search-component>
