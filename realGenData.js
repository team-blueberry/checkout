const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');


// var loadMil = function(num) {
//     var arr = [];
//     for (var i = num; i < num + 1000000; i++) {
//         var one = {
//             productId : i,
//             price : faker.commerce.price(0.50,999),
//             shippingCost : faker.commerce.price(0,9.99),
//             details : faker.random.words(),
//             quantity : faker.random.number(1,100),
//             fullfilledByAmazon : faker.random.boolean(),
//             soldBy : faker.company.companyName(),
//             sale : faker.random.boolean(),
//             electronic : faker.random.boolean(),
//             twoYearProtectionPlan : faker.commerce.price(),
//             fourYearProtectionPlan : faker.commerce.price(),
//             salePercent : faker.random.number(0,100)
//         }
//         arr.push(one);

//     }
//     console.log(arr[0]);
//     return arr;

// }

// const inserter = () => {
//     for (var i = 0; i < 2000000; i += 1000000) {
//         var arr = [];
//         Promise.resolve()
//             .then(arr = loadMil(i))
//             .then(() => {
//                 console.log('round', i)
//                 csvWriter.writeRecords(arr)
//             })
//     }
// }


var generateProducts = function(productBatchSize) {
    var arr = [];
    for (var i = currentProductBatch * productBatchSize; i < (productBatchSize + (currentProductBatch * productBatchSize)); i++) {
        let oneProduct = {};
        totalProductCount++;
        
        oneProduct.productId = i,
        oneProduct.price = faker.commerce.price(0.50,999),
        oneProduct.shippingCost = faker.commerce.price(0,9.99),
        oneProduct.details = faker.random.words(),
        oneProduct.quantity = faker.random.number(1,100),
        oneProduct.fullfilledByAmazon = faker.random.boolean(),
        oneProduct.soldBy = faker.company.companyName(),
        oneProduct.sale = faker.random.boolean(),
        oneProduct.electronic = faker.random.boolean(),
        oneProduct.twoYearProtectionPlan = faker.commerce.price(),
        oneProduct.fourYearProtectionPlan = faker.commerce.price(),
        oneProduct.salePercent = faker.random.number(0,100) // min and max!
        
        arr.push(oneProduct);
    }
    return arr;
}

var csvWriter = createCsvWriter({
    path: `outputFile.csv`,
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

// inserter();


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
// var arr = loadMil(i);
//     csvWriter3.writeRecords(arr)
//         .then(() => {
//             if (i < 10000000) {
//                 console.log('made it here')
//                 i += 1000000;
//                 inserter(i);
//             }
//         })
//         .catch(err => console.log("error", err))




// Promise.resolve()
//     .then(arr0 = loadMil(0))
//     .then(() => csvWriter.writeRecords(arr0))
//     .then(arr1 = loadMil(1000000))
//     .then(() => csvWriter3.writeRecords(arr1))
//     .then(loadMil(2000000))
//     .then(() => csvWriter3.writeRecords(arr))
//     .then(loadMil(3000000))
//     .then(() => csvWriter3.writeRecords(arr))
//     .then(loadMil(4000000))
//     .then(() => csvWriter3.writeRecords(arr))
//     .then(loadMil(5000000))
//     .then(() => csvWriter3.writeRecords(arr))
//     .then(loadMil(6000000))
//     .then(() => csvWriter3.writeRecords(arr))
//     .then(loadMil(7000000))
//     .then(() => csvWriter3.writeRecords(arr))
//     .then(loadMil(8000000))
//     .then(() => csvWriter3.writeRecords(arr))
//     .then(loadMil(9000000))
//     .then(() => csvWriter3.writeRecords(arr))
//     .then(() => console.log('finished!'))
