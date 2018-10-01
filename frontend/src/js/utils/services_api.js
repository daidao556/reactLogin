import $ from "jquery";

export default {
  sendDataWithAPI: function (url, data) {
    return $.ajax({
      method: "post",
      url: url,
      data: data
    })
      .done(function (respone) {
        console.log(respone);
      })
      .fail(function (err) {
        console.log(err);
      })
  },
}