var fs = require('fs');
var Product = require('./db').Product;

// Connect Mongoose to our local MongoDB via URI specified above and export it below
// DATA FOR PRODUCTS
var saveStuff = () => {
  const product = Product.productModel;
  fs.readFile('data/mockData.json', 'utf-8', function (err, data) {
    if (err) {
      console.log(err);
    } else {
      //console.log(JSON.parse(data));
      var data = JSON.parse(data);
      //console.log(Product);
      //console.log('prod ', Product);
      data.map(d => {
        let item = new product(d);
        console.log(item);
        item.save(err => {
          if (err => console.log('error with save')) ;else {
            console.log('saved');
          }
        });
      });
    }
  });
};
saveStuff();

// Product.save({
//   price : d.price,
//   shippingCost : d.shippingCost,
//   details : d.shippingCost,
//   quantity : d.quantity,
//   fullfilledByAmazon : d.fullfilledByAmazon,
//   soldBy : d.soldBy,
//   giftWrap : d.giftWrap,
//   electronic : d.electronic,
//   fourYearProtectionPlan : d.fourYearProtectionPlan,
//   twoYearProtectionPlan: d.twoYearProtectionPlan
// })
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BvcHVsYXRlRGF0YS5qcyJdLCJuYW1lcyI6WyJmcyIsInJlcXVpcmUiLCJQcm9kdWN0Iiwic2F2ZVN0dWZmIiwicHJvZHVjdCIsInByb2R1Y3RNb2RlbCIsInJlYWRGaWxlIiwiZXJyIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJtYXAiLCJkIiwiaXRlbSIsInNhdmUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLEtBQUtDLFFBQVEsSUFBUixDQUFUO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxNQUFSLEVBQWdCQyxPQUE5Qjs7QUFFQTtBQUNBO0FBQ0EsSUFBSUMsWUFBWSxNQUFNO0FBQ2xCLFFBQU1DLFVBQVVGLFFBQVFHLFlBQXhCO0FBQ0FMLEtBQUdNLFFBQUgsQ0FBWSxvQkFBWixFQUFrQyxPQUFsQyxFQUEyQyxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDekQsUUFBSUQsR0FBSixFQUFTO0FBQ1BFLGNBQVFDLEdBQVIsQ0FBWUgsR0FBWjtBQUNELEtBRkQsTUFFTztBQUNMO0FBQ0EsVUFBSUMsT0FBT0csS0FBS0MsS0FBTCxDQUFXSixJQUFYLENBQVg7QUFDQTtBQUNBO0FBQ0FBLFdBQUtLLEdBQUwsQ0FBU0MsS0FBSztBQUNaLFlBQUlDLE9BQU8sSUFBSVgsT0FBSixDQUFZVSxDQUFaLENBQVg7QUFDQUwsZ0JBQVFDLEdBQVIsQ0FBWUssSUFBWjtBQUNBQSxhQUFLQyxJQUFMLENBQVdULE9BQU87QUFDaEIsY0FBTUEsR0FBRCxJQUFTRSxRQUFRQyxHQUFSLENBQVksaUJBQVosQ0FBZCxFQUE4QyxDQUE5QyxLQUNLO0FBQ0hELG9CQUFRQyxHQUFSLENBQVksT0FBWjtBQUNEO0FBQ0YsU0FMRDtBQU1ELE9BVEQ7QUFVRDtBQUNGLEdBbkJMO0FBb0JELENBdEJIO0FBdUJFUDs7QUFFTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicG9wdWxhdGVEYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcbnZhciBQcm9kdWN0ID0gcmVxdWlyZSgnLi9kYicpLlByb2R1Y3Q7XG5cbi8vIENvbm5lY3QgTW9uZ29vc2UgdG8gb3VyIGxvY2FsIE1vbmdvREIgdmlhIFVSSSBzcGVjaWZpZWQgYWJvdmUgYW5kIGV4cG9ydCBpdCBiZWxvd1xuLy8gREFUQSBGT1IgUFJPRFVDVFNcbnZhciBzYXZlU3R1ZmYgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdCA9IFByb2R1Y3QucHJvZHVjdE1vZGVsO1xuICAgIGZzLnJlYWRGaWxlKCdkYXRhL21vY2tEYXRhLmpzb24nLCAndXRmLTgnLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04ucGFyc2UoZGF0YSkpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhQcm9kdWN0KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3Byb2QgJywgUHJvZHVjdCk7XG4gICAgICAgICAgICBkYXRhLm1hcChkID0+IHtcbiAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBuZXcgcHJvZHVjdChkKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgICAgIGl0ZW0uc2F2ZSggZXJyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIChlcnIpID0+IGNvbnNvbGUubG9nKCdlcnJvciB3aXRoIHNhdmUnKSApO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIH1cbiAgc2F2ZVN0dWZmKCk7XG5cbiAgICAgICAgLy8gUHJvZHVjdC5zYXZlKHtcbiAgICAgICAgLy8gICBwcmljZSA6IGQucHJpY2UsXG4gICAgICAgIC8vICAgc2hpcHBpbmdDb3N0IDogZC5zaGlwcGluZ0Nvc3QsXG4gICAgICAgIC8vICAgZGV0YWlscyA6IGQuc2hpcHBpbmdDb3N0LFxuICAgICAgICAvLyAgIHF1YW50aXR5IDogZC5xdWFudGl0eSxcbiAgICAgICAgLy8gICBmdWxsZmlsbGVkQnlBbWF6b24gOiBkLmZ1bGxmaWxsZWRCeUFtYXpvbixcbiAgICAgICAgLy8gICBzb2xkQnkgOiBkLnNvbGRCeSxcbiAgICAgICAgLy8gICBnaWZ0V3JhcCA6IGQuZ2lmdFdyYXAsXG4gICAgICAgIC8vICAgZWxlY3Ryb25pYyA6IGQuZWxlY3Ryb25pYyxcbiAgICAgICAgLy8gICBmb3VyWWVhclByb3RlY3Rpb25QbGFuIDogZC5mb3VyWWVhclByb3RlY3Rpb25QbGFuLFxuICAgICAgICAvLyAgIHR3b1llYXJQcm90ZWN0aW9uUGxhbjogZC50d29ZZWFyUHJvdGVjdGlvblBsYW5cbiAgICAgICAgLy8gfSlcbiJdfQ==