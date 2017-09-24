//Send data to create document
function sendTxt() {
    document.getElementById('one').innerHTML = document.getElementById('val1').value;
    document.getElementsByClassName('two')[0].innerHTML = document.getElementById('val2').value;
    document.getElementsByClassName('two')[1].innerHTML = document.getElementById('val3').value;
    document.getElementById('three').innerHTML = document.getElementById('val3').value;
    document.getElementById('four').innerHTML = document.getElementById('val4').value;
    document.getElementById('five').innerHTML = document.getElementById('val5').value;
    document.getElementById('six').innerHTML = document.getElementById('val6').value;
    document.getElementById('date').innerHTML = formatDate();

    function formatDate() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),

            months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

        return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + 'p';
    }
}

//Print DOCUMENT

function printDoc() {
    window.print();
}

//Auto

// Autocompletle
var data =
    [{
           label:"Міністерство внутрішніх справ України",
           value:"01601, м.Київ, вул. Академіка Богомольця, 10"
       },
       {
           label:"Міністерство аграрної політики та продовольства України",
           value:"01001, м. Київ, вул. Хрещатик, 24"
       },
      {
           label:"Міністерство економічного розвитку і торгівлі України",
           value:"01008, м.Київ, вул. М. Грушевського, 12/2"
       },
      {
           label:"Міністерство з питань тимчасово окупованих територій та внутрішньо переміщених осіб України",
           value:"01196, м. Київ, пл. Лесі Українки, 1"
       },
      {
           label:"Міністерство екології та природних ресурсів України",
           value:"03035, м. Київ, вул. Митрополита Василя Липківського, 35"
       },
      {
           label:"Міністерство енергетики та вугільної промисловості України",
           value:"01601, м. Київ, вул. Хрещатик, 30"
       },
      {
           label:"Міністерство закордонних справ України",
           value:"01018, м. Київ, Михайлівська пл., 1"
       },
      {
           label:"Міністерство культури України",
           value:"01601, м. Київ, вул. І. Франка, 19"
       },
      {
           label:"Міністерство інфраструктури України",
           value:"01135, м. Київ, Проспект Перемоги, 14"
       },
      {
           label:"Міністерство освіти і науки України",
           value:"01135, м. Київ, пр. Перемоги, 10"
       },
      {
           label:"Міністерство оборони України",
           value:"03168, м. Київ, пр-кт Повітрофлотський, 6"
       },
      {
           label:"Міністерство охорони здоров'я України",
           value:"01601, м. Київ, вул. М. Грушевського, 7"
       },
      {
           label:"Міністерство регіонального розвитку, будівництва та житлово-комунального господарства України",
           value:"01601, м. Київ, вул. Велика Житомирська, 9"
       },
      {
           label:"Міністерство соціальної політики України",
           value:"01601, м. Київ, вул. Еспланадна, 8/10"
       },
      {
           label:"Міністерство фінансів України",
           value:"01008, м. Київ-8, вул. М. Грушевського, 12/2"
       },
      {
           label:"Міністерство юстиції України",
           value:"01001, м. Київ, вул. Городецького, 13"
       },
      {
           label:"Державна казначейська служба України",
           value:"01601, м. Київ, вул. Бастіонна, 6"
       },
      {
           label:"Державна міграційна служба України",
           value:"01601, м.Київ, вул. Академіка Богомольця, 10"
       },
      {
           label:"Державна регуляторна служба України",
           value:"01011, Київ, вул. Арсенальна, 9/11"
       },
      {
           label:"Державна служба України з питань безпечності харчових продуктів та захисту споживачів",
           value:"01001, м. Київ, вул. Бориса Грінченка, 1"
       },
      {
           label:"Державна служба України з питань праці",
           value:"01601, м. Київ, вул. Десятинна, 14"
       },
      {
           label:"Державна служба України з надзвичайних ситуацій",
           value:"01601, м. Київ, вул. О. Гончара, 55-а"
       },
      {
           label:"Державна фіскальна служба України",
           value:"04655, Київ, Львівська площа, 8"
       },
      {
           label:"Державна служба фінансового моніторингу України",
           value:"04050, м. Київ, вул. Білоруська, 24"
       },
      {
           label:"Державна служба України у справах ветеранів війни та учасників антитерористичної операції",
           value:"01001, м. Київ, пров. Музейний, 12"
       },
      {
           label:"Державна аудиторська служба України",
           value:"04070, м. Київ, вул. Сагайдачного, 4"
       },
      {
           label:"Державне агентство автомобільних доріг України",
           value:"03150, м. Київ, вул. Фізкультури, 9"
       },
      {
           label:"Державне агентство водних ресурсів України",
           value:"01004, м. Київ, вул. Велика Васильківська, 8"
       },
      {
           label:"Державне агентство з енергоефективності та енергозбереження України",
           value:"01001, м. Київ, пров. Музейний, 12"
       },
      {
           label:"Державне агентство лісових ресурсів України",
           value:"01601, м. Київ, вул. Ш. Руставелі, 9-a"
       },
      {
           label:"Державне агентство рибного господарства України",
           value:"04053, м. Київ, вул. Січових Стрільців, 45-а"
       },
      {
           label:"Державна архітектурно-будівельна інспекція України",
           value:"01133, м.Київ, бульвар Лесі Українки, 26"
       },
      {
           label:"Національне антикорупційне бюро",
           value:"03035, м. Київ, вул. Василя Сурикова, 3"
       },
      {
           label:"Національне агентство з питань запобігання корупції",
           value:"01103, м. Київ, бульвар Дружби народів, 28"
       },
      {
           label:"Адміністрація Президента України",
           value:"01220, м. Київ, вул. Банкова, 11"
       },
      {
           label:"Львівська міська рада",
           value:"79008, м. Львів, пл. Ринок, 1"
       },
      {
           label:"Львівська обласна державна адміністрація",
           value:"79008, Львів, вул. Винниченка, 18"
       },
      {
           label:"Київська міська рада",
           value:"01044, Київ, вул. Хрещатик, 36"
       },
      {
           label:"Головне управління статистики у Київській області",
           value:"04053, м. Київ, вул. Тургенєвська, 71"
       },
      {
           label:"Київська обласна державна адміністрація",
           value:"01196, м. Київ-196, площа Лесі Українки, 1"
       },
      {
           label:"Головне управління ДСНС України у Київській області",
           value:"04071, м. Київ, вул. Межигірська,8"
       },
      {
           label:"Головне управління Держпраці у Київській області",
           value:"04060, м. Київ, вул. Вавілових, 10"
       },
      {
           label:"Головне територіальне управління юстиції у Київській області",
           value:"02002, м. Київ, вул. Є. Сверстюка, 15"
       },
      {
           label:"Верховна Рада України",
           value:"01220, м. Київ, вул. Банкова, 6-8"
       },
      {
           label:"Кабінет Міністрів України",
           value:"01008, м. Київ, вул. Грушевського, 12/2"
       },
      {
           label:"Харківська обласна державна адміністрація",
           value:"61002, м. Харків, вул. Сумська, 64"
       },
      {
           label:"Харківська міська рада",
           value:"61003, м. Харків, пл. Конституції, 7"
       },
      {
           label:"Одеська обласна державна адміністрація",
           value:"65032, м. Одеса, пр-т. Шевченка, 4"
       },
      {
           label:"Одеська міська рада",
           value:"65004, м. Одеса, пл. Думська, 1"
       },
      {
           label:"Закарпатська обласна державна адміністрація",
           value:"88008, м. Ужгород, пл. Народна, 4"
       },
      {
           label:"Ужгородська міська рада",
           value:"88000, м. Ужгород, пл. Поштова, 3"
       },
      {
           label:"Верховний Суд України",
           value:"01043, м. Київ, вул. П. Орлика, 4"
       },
      {
           label:"Вищий господарський суд України",
           value:"01016, м. Київ, вул. О. Копиленка, 6"
       },
      {
           label:"Вищий спецiалiзований суд України з розгляду цивiльних i кримiнальних справ",
           value:"01043, м. Київ, вул. Пилипа Орлика, 4а"
       },
      {
           label:"Чернігівська обласна державна адміністрація",
           value:"14000, м. Чернігів, вул. Шевченка, 7"
       },
      {
           label:"Вінницька обласна державна адміністрація",
           value:"21100, м. Вінниця, вул. Соборна, 70"
       },
      {
           label:"Волинська обласна державна адміністрація",
           value:"43027, м. Луцьк, Київський майдан, 9"
       },
      {
           label:"Дніпропетровська обласна державна адміністрація",
           value:"49004, м. Дніпропетровськ, пр-т Олександра Поля, 1"
       },
      {
           label:"Житомирська обласна державна адміністрація",
           value:"10014, Житомир, майдан С. П. Корольова, 1"
       },
      {
           label:"Запорізька обласна державна адміністрація",
           value:"69107, Запоріжжя, пр-т Соборний, 164"
       },
      {
           label:"Івано-Франківська обласна державна адміністрація",
           value:"76004, м. Івано-Франківськ, вул. Грушевського, 21"
       },
      {
           label:"Кіровоградська обласна державна адміністрація",
           value:"25006, м. Кропивницький, пл. Героїв Майдану, 1"
       },
      {
           label:"Миколаївська обласна державна адміністрація",
           value:"54001, м. Миколаїв, вул. Адміральська, 22"
       },
      {
           label:"Полтавська обласна державна адміністрація",
           value:"36000, м. Полтава, вул. Соборності, 45"
       },
      {
           label:"Рівненська обласна державна адміністрація",
           value:"33028, м. Рівне, майдан Просвіти, 1"
       },
      {
           label:"Сумська обласна державна адміністрація",
           value:"40000, м. Суми, пл. Незалежності, 2"
       },
      {
           label:"Тернопільська обласна державна адміністрація",
           value:"46021, м. Тернопіль, вул. М. Грушевського, 8"
       },
      {
           label:"Херсонська обласна державна адміністрація",
           value:"73003, м. Херсон, Площа Свободи, 1"
       },
      {
           label:"Хмельницька обласна державна адміністрація",
           value:"29000, м. Хмельницький, Майдан Незалежності, Будинок рад"
       },
      {
           label:"Черкаська обласна державна адміністрація",
           value:"18007, м. Черкаси, бульвар Шевченка, 185"
       },
      {label:"Донецька обласна військово-цивільна адміністрація",
       value:"84300, Донецька область, м. Краматорськ, проспект Миру, 2"
       },
      {label:"Луганська обласна військово-цивільна адміністрація",
      value:"93405, Луганська область, м. Сєвєродонецьк, пр-т. Центральний, 59"},
      {label:"Чернівецька обласна державна адміністрація",
       value:"58002, м. Чернівці, вул. Грушевського, 1"}
   ];


		$(function() {
			$("#val1").autocomplete({
				source: data,
				focus: function(event, ui) {
					// prevent autocomplete from updating the textbox
					event.preventDefault();
					// manually update the textbox
					$(this).val(ui.item.label);
				},
				select: function(event, ui) {
					// prevent autocomplete from updating the textbox
					event.preventDefault();
					// manually update the textbox and hidden field
					$(this).val(ui.item.label);
					$("#val2").val(ui.item.value);
				}
			});
		});


    //Download PDF document
    var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {
    doc.fromHTML($('#pdf-file').html(), 15, 15, {
        'width': 100,
            'elementHandlers': specialElementHandlers
    });
    doc.save('Pubinfo.pdf');
});


    //Send mail
var nodemailer = require(['nodemailer']);

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
