      liNum = function(){
        //리스트 번호
        var $proli = $('.product-list').find('li');
        $proli.each(function(){
          var indexNum = $(this).index() + 1;
          $(this).find('dt').after('<span class="li-num">' + indexNum + '</span>');
          if(indexNum <= 10){
            $(this).find('.li-num').addClass('top10');
          }
        })
      }
      liNum();//리스트 번호
