export class AuKendoTest {
    constructor() {
        console.log("au-kendo-test constructed :)");
    }

    items: kendo.data.ObservableArray = new kendo.data.ObservableArray([]);
    dataSource: kendo.data.DataSource;

    activate() {

        console.log("au-kendo-test activate :)");

        var promise = new Promise((resolve, reject) => {

            this.dataSource = new kendo.data.DataSource({
                type: "json",
                transport: {
                    read: "./src/services/products.json"
                },
                pageSize: 21
            });
            this.dataSource.fetch();

            this.items = this.dataSource.view();
            this.dataSource.bind("change", (e) => {
                this.items = this.dataSource.view();
                resolve();
            });
        });

        return promise;
    }

    bind() {
        console.log("au-kendo-test-json in bind :)");
    }
}

// http://demos.telerik.com/kendo-ui/content/shared/js/products.js