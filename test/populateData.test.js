const populate = require('../populateData.js').populateData;
var axios = require('axios');
var fs = require('fs');



describe('check mock data', () => {
  it('if it exists', () => {
    fs.readFile('../data/mockData.json', 'utf-8', function(err,data){
      if(err) console.log('err');
      expect(data).toBeDefined();
    })
  })
})
