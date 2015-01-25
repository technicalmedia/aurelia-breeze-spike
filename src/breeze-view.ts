export class BreezeView {
    constructor() {
        console.log("breeze-view constructed :)");
    }

    items: kendo.data.ObservableArray = new kendo.data.ObservableArray([]);
    dataSource: kendo.data.DataSource;

    activate() {

        console.log("breeze-view activate :)");

        var promise = new Promise((resolve, reject) => {

                resolve();
        });

        return promise;
    }

    bind() {
        console.log("breeze-view in bind :)");
    }
}

// http://demos.telerik.com/kendo-ui/content/shared/js/products.js