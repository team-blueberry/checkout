const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const csvWriter = createCsvWriter({
    path: 'outputFile1.csv',
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
    ]
});

const csvWriter2 = createCsvWriter({
    path: 'outputFile1.csv',
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

var arr = [];

var loadMil = function(num) {
    arr = [];
    for (var i = num; i < num + 1000000; i++) {
        arr.push({
            productId : i,
            price : faker.commerce.price(0.50,999),
            shippingCost : faker.commerce.price(0,9.99),
            details : faker.random.words(),
            quantity : faker.random.number(1,100),
            fullfilledByAmazon : faker.random.boolean(),
            soldBy : faker.company.companyName(),
            sale : faker.random.boolean(),
            electronic : faker.random.boolean(),
            twoYearProtectionPlan : faker.commerce.price(),
            fourYearProtectionPlan : faker.commerce.price(),
            salePercent : faker.random.number(0,100)
        })

    }
    console.log(arr[1000000 - 1])

}


Promise.resolve()
    .then(loadMil(0))
    .then(() => csvWriter.writeRecords(arr))
    .then(loadMil(1000000))
    .then(() => csvWriter2.writeRecords(arr))
    .then(loadMil(2000000))
    .then(() => csvWriter2.writeRecords(arr))
    .then(loadMil(3000000))
    .then(() => csvWriter2.writeRecords(arr))
    .then(loadMil(4000000))
    .then(() => csvWriter2.writeRecords(arr))
    .then(loadMil(5000000))
    .then(() => csvWriter2.writeRecords(arr))
    .then(loadMil(6000000))
    .then(() => csvWriter2.writeRecords(arr))
    .then(loadMil(7000000))
    .then(() => csvWriter2.writeRecords(arr))
    .then(loadMil(8000000))
    .then(() => csvWriter2.writeRecords(arr))
    .then(loadMil(9000000))
    .then(() => csvWriter2.writeRecords(arr))
    .then(() => console.log('finished!'))
