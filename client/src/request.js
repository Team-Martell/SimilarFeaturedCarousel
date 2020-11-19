import $ from 'jquery'

var getMoreToConsider = (id, cb) => {
  $.ajax({
    method: 'GET',
    url: `/api/${id}/moreToConsider`,
    success: (data) => {
      cb(data);
    }
  })
}
var getSimilar = (id, cb) => {
  $.ajax({
    method: 'GET',
    url: `/api/${id}/similar`,
    success: (data) => {
      cb(data);
    }
  })
}
var getFeatured = (id, cb) => {
  $.ajax({
    method: 'GET',
    url: `/api/${id}/featured`,
    success: (data) => {
      cb(data);
    }
  })
}
var getAllData = (id, cb) => {
  var alldata = [];
  getMoreToConsider(id, (data) => {
    alldata.push(data);
    getSimilar(id, (data) => {
      alldata.push(data);
      getFeatured(id, (data) => {
        alldata.push(data);
        cb(alldata);
      })
    })
  })
}

export default {
  getMoreToConsider,
  getSimilar,
  getFeatured,
  getAllData
}
