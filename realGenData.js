const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');



var generateProducts = function(productBatchSize) {
    var arr = [];
    for (var i = currentProductBatch * productBatchSize; i < (productBatchSize + (currentProductBatch * productBatchSize)); i++) {
        let oneProduct = {};
        totalProductCount++;
        
        oneProduct.productId = i,
        oneProduct.price = faker.commerce.price(0.50,999),
        oneProduct.shippingCost = faker.commerce.price(0,9.99),
        oneProduct.details = faker.random.words(),
        oneProduct.quantity = faker.random.number({min: 1, max: 100}),
        oneProduct.fullfilledByAmazon = faker.random.boolean(),
        oneProduct.soldBy = faker.company.companyName(),
        oneProduct.sale = faker.random.boolean(),
        oneProduct.electronic = faker.random.boolean(),
        oneProduct.twoYearProtectionPlan = faker.commerce.price(),
        oneProduct.fourYearProtectionPlan = faker.commerce.price(),
        oneProduct.salePercent = faker.random.number({min: 0, max: 80}) // min and max!
        
        arr.push(oneProduct);
    }
    return arr;
}





var csvWriter = createCsvWriter({
    path: `productOutput.csv`,
    header: [
        {id: 'productId', title: 'productId'},
        {id: 'price', title: 'price'},
        {id: 'shippingCost', title: 'shippingCost'},
        {id: 'details', title: 'details'},
        {id: 'quantity', title: 'quantity'},
        {id: 'fulfilledByAmazon', title: 'fulfilledByAmazon'},
        {id: 'soldBy', title: 'soldBy'},
        {id: 'sale', title: 'sale'},
        {id: 'electronic', title: 'electronic'},
        {id: 'twoYearProtectionPlan', title: 'twoYearProtectionPlan'},
        {id: 'fourYearProtectionPlan', title: 'fourYearProtectionPlan'},
        {id: 'salePercent', title: 'salePercent'},
    ],
    append: true
});



const productBatchSize = 10000, productBatches = 1000;
let totalProductCount = 0, currentProductBatch = 0;

const writeProductsData = () => {
    let arr = null;
    arr = generateProducts(productBatchSize);

    csvWriter.writeRecords(arr)
        .then(() => {
            if (currentProductBatch < productBatches) {
                currentProductBatch++
                if (totalProductCount < (productBatches * productBatchSize)) {
                    writeProductsData();
                }
            }
        })
        .catch((err) => {
            console.log(err);
        })
}
writeProductsData();

