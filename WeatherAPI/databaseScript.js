
function addToDatabase(){
    $.ajax({
      type : 'POST', 
      url : 'https://api.darksky.net/forecast/d160f7084fe55c294116b8159f4b4a9f/55.607823,13.016861',
      data :     'format=json',
      dataType : 'jsonp',
      success : function(parsed_json) {
      var summ = parsed_json['currently']['summary'];
      var temp_f = parsed_json['currently']['temperature'];
      var complete = (((temp_f - 32) * 5)/9);
      $.ajax({
          type: 'POST',
          url: '/temperatures',
          data: {temprature : complete}
        })
      }
    })
}
