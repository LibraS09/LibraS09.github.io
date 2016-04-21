$(function(){
  var html = $('#page').html();
  var form =[
    {fio: ' Оксана ',
    img: 'img/fademsg.bmp',
    work: 'Работаю в сфере образования',
    t: ['нужна новая работа',
        'хорошая зарплата',
        'перспективы развития'],
    tel: '+3807777777',
    vk: 'http://vk.com',
    f: 'текст текст текст текст текст'
    }
  ];
  var content = tmpl(html, {data: form});
  $('body').append(content);
  // console.log (form.length);
});
