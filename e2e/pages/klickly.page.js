class KlicklyPage {
    getSearchField() {
        return '[class="sc-hKwDye jMnEJn"]';
    }

    getSearchButton() {
        return '[class="ant-btn css-15rg2km ant-btn-primary ant-btn-sm sc-crHmcD eWRUbM sc-jtXEFf gaXnty"]';
    }    

    productToSearch1() {
        return 't-shirt4';
    }

    productSearch1Result() {
        return '[src="https://cdn.shopify.com/s/files/1/0782/9120/6453/files/3c92c819-468f-4edd-8098-551a16ea9f1c.a8809b55a1038c8f51139443cd9e92db.webp?v=1687417492&width=106"]';
    }

    product1Page() {
        return '[class="ant-image-img StyledImage-sc-16ad26w-0 hocGwI"]';
    }

    productToSearch2() {
        return 'STAR WARS';
    }

    productSearch2Result() {
        return '[class="ant-col ant-col-xs-12 ant-col-sm-12 ant-col-md-12 ant-col-xl-8 css-15rg2km"]';
    }

    productLast(){
        return '[src="https://cdn.shopify.com/s/files/1/0619/1366/1637/products/initial_product_1_30540be8-bf63-446a-99eb-24dcedc6c9f7.jpg?v=1668708663&width=106"]'
    }

}
require("cypress-xpath")
module.exports = new KlicklyPage()