$.ajax({
    url: "ajj.php",
    data: {'cmd' : 'every_30sec'},
    type: 'POST',
    dataType: 'json',
    beforeSend: function() {},
    success: function(results) {
     console.log(results);
     
    },
    error: function(xhr) {},
    complete: function() {},
   });