$(document).ready(function(){
// перемешивание
function shuffle(o){
    for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);
    return o;
};
function randd(min, max) {
	var rnd = Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());

	return rnd;
};
function rand_sign()
{
	if(randd(0,99)>50)
		return 1;
	else
		return -1;
}
function rand_line(num){
	if(num === undefined)
		num = 89;
	var arr=[];
	for(var t=0; t<num; t++)
	{
		arr[t]=+t + +10;
	}
	return shuffle(arr);
}
// Константы //


var IMF_RF="<i class='fa  fa-refresh'></i>";
var IMF_QW="<i class='fa fa-question-circle'></i>";
//////////////
var bg_blur = 1, milepost_visible = 1;
if(localStorage.getItem("flag_blur")!= null)
	bg_blur = localStorage.getItem("flag_blur");

	function make_generator(){

		generator="<a href='http://youknowwho.ru/dnd' class='bt'><i class='fa fa-home'></i></a><!--button class='bt' id='go'>Сгенерировать улицу</button--><button class='bt' id='town_name'>Сгенерировать название</button><!--button id='rnd' class='bt'>Перегенерировать</button--><a class='bt' href='http://www.youknowwho.ru/message/?theme=dndstreet' target='_blank'>Написать отзыв или предложение</a>";
		$("#panel").html(generator);


	}
	function add_info_spoiler(){
		$(".description").after("<a href='#' class='info_toggle'>Скрыть описание</a>");
	}

	function d(max){
		return randd(1, max);
	}

	///////////////////

	function make_street()
	{
		var shops = "Оружейная, Мясная лавка, Лавка зелий, Кафе, Цветочная лавка, Портной, Хиромант, Молочный магазин, Сгорел!, Сапожник, Маг Иллюзионист, Лавка диковинок, Тату и Пирсинг, Мебельщик, Карты и наборы путешественников, Луки и стрелы, Винзавод, Строительные материалы, Свечи и Ароматы, Часовщик, Туристическое снаряжение, Бакалейная лавка, Женская обувь и Платья, Кондитерская, Пивоварня, Лавка алхимика, Лавка Травника, Лавка Пекаря, Книжная лавка, Храм, Оружейная лавка, Лавка старьевщика, Цирюльник, Гончарная мастерская, Мастерская скорняка, Мастерская каменщика, Лавка тканей, Лавка шляпника, Рыбная лавка, Мастерская художника, Мастерская скульптора, Мастерская краснодеревщика, Лавка зеленщика, Ломбард, Лавка красильщика, Мастерская переписчика, Столярная мастерская, Плотницкая мастерская, Мастерская слесаря, Лавка жестянщика";
		var houses = "Частный дом";
		var taverns = "Таверна";
		var objects = "Фонтан, Статуя, Киоск, Башня, Арка, Нищий, Сквер, Лестница, Колодец, Патруль стражников, Часовня, Площадь, Тупик";
		var buildings = "Игорный дом, Банк, Склад, Клуб, Гильхолл, Учебное заведение, Почта, Базар, Арена, Бордель, Библиотека, Архив, Муниципалитет, Бродячие артисты, Баня, Больница, Тюрьма, Приют, Антикаварная Лавка, Адвокатская контора, Охранное агентство, Ипподром";

		shops = shops.split(",");
		shops = shuffle(shops);
		houses = houses.split(",");
		houses = shuffle(houses);
		taverns = taverns.split(",");
		taverns = shuffle(taverns);
		objects = objects.split(",");
		objects = shuffle(objects);
		buildings = buildings.split(",");
		buildings = shuffle(buildings);

		var d100;
		var ret = "";
		var tmp='';
		for(var i=1; i<20; i++)
			{
			d100=randd(1,100);
			console.log("d100: "+d100);

			if(d100<3)
				{
					// buildings
					if(buildings.length>i)
						tmp=buildings[i]+"<br>";
					else
						{
						buildings = shuffle(buildings);
						tmp=buildings[0]+"<br>";
						}
				}
			else if(d100<10)
				{
					// objects
					if(objects.length>i)
						tmp=objects[i]+"<br>";
					else
						{
						objects = shuffle(objects);
						tmp=objects[0]+"<br>";
						}
				}
			else if(d100<50)
				{
					// houses
					console.log(houses.length);
					if(houses.length>i)
						tmp=houses[i]+"<br>";
					else
						{
						houses = shuffle(houses);
						tmp=houses[0]+"<br>";
						}
				}
			else if(d100<54)
				{
					// taverns
					if(taverns.length>i)
						tmp=taverns[i]+"<br>";
					else
						{
						taverns = shuffle(taverns);
						tmp=taverns[0]+"<br>";
						}
				}
			else
				{
					// shops
					tmp="Магазин: ";
					if(shops.length>i)
						tmp=shops[i]+"<br>";
					else
						{
						shops = shuffle(shops);
						tmp=shops[0]+"<br>";
						}
				}
				ret+=tmp.trim();
			}
		return ret;
	}
	function make_town()
	{
		var name_line_1_he = "Ясный, Светлый, Дальний, Старый, Большой, Малый, Новый, Ближний, Темный, Стылый, Быков, Кривой, Крутой, Лысый, Верхний, Веселый, Степной, Лесной, Сухой, Лебяжий, Песчаный";
		var name_line_1_she = "Ясная, Светлая, Дальняя, Старая, Большая, Малая, Новая, Ближняя, Темная, Стылая, Быкова, Кривая, Крутая, Лысая, Верхняя, Веселая, Степная, Лесная, Сухая, Лебяжья, Песчаная";
		var name_line_1_it = "Ясное, Светлое, Дальнее, Старое, Большое, Малое, Новое, Ближнее, Темное, Стылое, Быково, Кривое, Крутое, Лысое, Верхнее, Хреновое, Веселое, Степное, Лесное, Сухое, Лебяжье, Полное, Песчаное, Забавное, Круглое";
		var name_line_1_they = "Козьи, Ясные, Светлые, Дальние, Старые, Большие, Малые, Новые, Ближние, Темные, Стылые, Быковы, Кривые, Кривые, Крутые, Лысые, Верхние, Синие, Веселые, Степные, Лесные, Сухие, Песчаные, Пустые";
		var name_line_2_he = "Яр, Бор, Лес, Овраг, Овражек, Ручей, Рог, Гусь, Брод, Камень, Холм, Выселок, Хуторок, Тыкмык, Сук, Кум, Калач, Хомутец, Лоб, Котёл, Жбан, Лог, Рудник, Чумыш, Курган, Ракит, Исток, Склон, Вал, Берег, Мыс, Ковш";
		var name_line_2_she = "Холмовка, Бобровка, Падь, Куща, Балка, Горка, Скала, Грязь, Куриловка, Башня, Дубовка, Муходёровка, Бородёнка, Волчатка, Рыбушка, Вышенка, Дубрава, Капустинка, Калуженка, Гать, Речка, Долинка, Хорошавка, Калиновка, Нечаевка, Рожковка, Утянка, Глушинка, Пустынь, Кедровка, Шумиха, Травка, Отмель, Бурлинка";
		var name_line_2_she_2 = "Холм, Бобр, Кущ, Гряз, Курил, Дуб, Муходёр, Волч, Рыб, Выш, Дубр, Капуст, Калуж, Гат, Реч, Дол, Хорош, Калин, Рож, Глуш, Пуст, Кедр, Шум, Трав, Отмел, Бурл, Греч, Бык, Бур, Бук, Верст, Перст, Чум, Крап, Хам, Руд, Кур, Истр, Ковш, Кус, Жбан, Яр, Бор, Овраж, Руч, Брод, Холм, Хутор, Калач, Хомут, Лоб, Руд, Гнезд, Нерест, Дупл, Камыш, Омут, Цап, Хряп, Жук, Брас, Бук, Штыр, Бег, Бед, Бир, Бес, Бод, Бок, Вал, Вед, Вест, Воз, Вяз, Вык, Гад, Год, Дух, Зоб, Зод, Зад, Зуб, Лаг, Мех, Мен, Мет, Меш, Мор, Мир, Мер, Мыс, Нов, Нос, Пер, Пик, Рад, Раз, Ров, Рог, Род, Рок, Сор, Суд, Тер, Ток, Хот";
		var name_line_2_she_end = "авка, инка, енька, янка, овка, иха, ица, ушка, ница";
		var name_line_2_it = "Гадюкино, Кукуево, Кудыкино, Овнище, Дно, Камышино, Займище, Суково, Такое, Подберезье, Заречье, Борово, Мохово, Заборово, Осколково, Орехово, Ложкино,  Брагино, Чесноково, Комарово, Луговое, Совино, Соколово, Сошниково, Озеро, Стуково, Рыбное, Столбово, Ручьево, Место, Курочкино, Дупло, Гнездо";
		var name_line_2_they = "Попрыгушки, Овражки, Ручьи, Кочки, Столбы, Ели, Дубы, Омутищи, Камни, Выселки, Горшки, Рожки, Воробьи, Комары, Бодунищи, Бабенки, Огурцы, Пчелы, Змейки, Грязи, Винищи, Козляки, Мураши, Кобылки, Лепяги, Бельдяжки, Мурлы, Ломы, Чащи, Козлы, Лужи, Кобеляки, Кошки, Усищи, Раки, Полянки, Завалинки, Бочаги, Ключи, Рожки, Копытца, Сросты, Хутора, Балки, Конюхи, Горошки, Петухи, Мормышки, Мураши, Журавли, Окуньки, Бугры, Холмы, Омуты, Озерки, Камыши, Мысы, Табуны";

		var name_1_he = name_line_1_he.split(",");
		name_1_he = shuffle(name_1_he);
		var name_1_she = name_line_1_she.split(",");
		name_1_she = shuffle(name_1_she);
		var name_1_it = name_line_1_it.split(",");
		name_1_it = shuffle(name_1_it);
		var name_1_they = name_line_1_they.split(",");
		name_1_they = shuffle(name_1_they);

		var name_2_he = name_line_2_he.split(",");
		name_2_he = shuffle(name_2_he);
		var name_2_she = name_line_2_she.split(",");
		name_2_she = shuffle(name_2_she);
		var name_2_she_2 = name_line_2_she_2.split(",");
		name_2_she_2 = shuffle(name_2_she_2);
		var name_2_she_end = name_line_2_she_end.split(",");
		name_2_she_end = shuffle(name_2_she_end);
		var name_2_it = name_line_2_it.split(",");
		name_2_it = shuffle(name_2_it);
		var name_2_they = name_line_2_they.split(",");
		name_2_they = shuffle(name_2_they);


		var he_num = name_1_he.length * name_2_he.length;
		var she_num = name_1_she.length * name_2_she.length *2;
		var	she_num2=name_line_2_she_2.length * name_line_2_she_end.length;
		var it_num = name_1_it.length * name_2_it.length;
		var they_num = name_1_they.length * name_2_they.length;
		console.log("he_num: "+he_num);
		console.log("she_num: "+she_num);
		console.log("it_num: "+it_num);
		console.log("they_num: "+they_num);

		var dX=randd(4, he_num + she_num + it_num + they_num);
		var r1 = randd(0,4);
		var r2 = randd(0,4);
		var r3 = randd(0,6);
		console.log("dX: "+dX);
		console.log("r1: "+r1);
		console.log("r2: "+r2);
		console.log("r3: "+r3);
		var ret = "";
		if(dX <= he_num)
			{
			if(r1 != 0)
				{
				if(r2 != 0)
					{
					if(r3 !=0)
						ret = name_1_he[0]+" "+name_2_he[0];
					else
						ret = name_2_he[0]+" "+name_1_he[0];
					}
				else
					{
					ret = name_1_he[0];
					}
				}
			else
				{
				ret = name_2_he[0];
				}
			}
		else if(he_num + she_num)
			{
			var tmp_she = name_2_she[0];
			if(r1+r2 > 2)
				tmp_she = name_2_she_2[0].trim()+name_2_she_end[0].trim();

			if(r1 != 0)
				{
				if(r2 != 0)
					{
					if(r3 !=0)
						ret = name_1_she[0]+" "+tmp_she;
					else
						ret = tmp_she+" "+name_1_she[0];
					}
				else
					{
					ret = name_1_she[0];
					}
				}
			else
				{
					ret = tmp_she;
				}
			}
		else if(he_num + she_num + it_num)
			{
			if(r1 != 0)
				{
				if(r2 != 0)
					{
					if(r3 !=0)
						ret = name_1_it[0]+" "+name_2_it[0];
					else
						ret = name_2_it[0]+" "+name_1_it[0];
					}
				else
					{
					ret = name_1_it[0];
					}
				}
			else
				{
				ret = name_2_it[0];
				}
			}
		else
			{
			if(r1 != 0)
				{
				if(r2 != 0)
					{
					if(r3 !=0)
						ret = name_1_they[0]+" "+name_2_they[0];
					else
						ret = name_2_they[0]+" "+name_1_they[0];
					}
				else
					{
					ret = name_1_they[0];
					}
				}
			else
				{
				ret = name_2_they[0];
				}
			}



		return ret;
	}

	function make_texture(color)
		{
		var deg = randd(-9,9);
		var tx = randd(1,19);
		var ty = randd(1,19);
		var tz = randd(1,19);


		var cr = 200-10;
		var cg = 140-10;
		var cb = 70-10;

		//console.log("color1: "+color.clr1 + " color2: "+color.clr2);
		var m_color1 = "rgba("+(cr+tx-deg)+", "+(cg+ty-deg)+", "+(cb+tz-deg)+", .9)";
		var m_color2 = "rgba(234, 171, 104, 1)";
		var s_color1 = color.clr1;
		var s_color2 = color.clr2;

		m_color1 = rgba_average(m_color1, s_color1);
		m_color2 = rgba_average(m_color2, s_color2);
		/*
		var grad = "linear-gradient(135deg, transparent, rgba(234, 171, 104, 1) 80%),"+
		"linear-gradient(135deg, rgba(183, 126, 65, .9), transparent 2em),"+
		"repeating-linear-gradient("+(tz-1)+"deg, transparent, transparent 5px, rgba("+(cr+tx-deg)+", "+(cg+ty-deg)+", "+(cb+tz-deg)+", .9) 23px) 0 "+tx*deg+"px,"+
		"repeating-linear-gradient("+(tz-3)+"deg, transparent, transparent 7px, rgba("+(cr+ty-deg)+", "+(cg+tz-deg)+", "+(cb+tx-deg)+", .9) 19px) 0 "+ty*deg+"px,"+
		"repeating-linear-gradient("+(tz-2)+"deg, transparent, transparent 11px, rgba("+(cr+tz-deg)+", "+(cg+tx-deg)+", "+(cb+ty-deg)+", .9) 17px) 0 "+tz*deg+"px,"+
		"rgba("+(cr-tx-ty)+", "+(cg-tx-ty)+", "+(cb-tx-ty)+", 1)";
		*/

		//console.log("grad: "+grad);
		function set_grad(clr1, clr2)
			{
			function get_grad(color1, color2){
				var st_color1 = "rgba(183, 120, 53, 1)"; //"#b77835"; // dark
				var st_color2 = "rgba(234, 171, 104, 1)"; //"#eaab68"; // light
				var text_color = st_color1;
				//color1 = st_color1;
				//color2 = st_color2;
				var color_new = rgba_average(color1, st_color2, 3);

				text_color = color1 = rgba_average(color1, st_color1, 2);
				color2 = rgba_average(color1, st_color2, 7);
				var grad =
				"linear-gradient(145deg, transparent, "+color_new+" 85%),"+
				"linear-gradient(135deg, "+color1+", transparent 2em),"+
				"repeating-linear-gradient("+(tz-1)+"deg, transparent, transparent 5px, "+color2+" 23px) 0 "+tx*deg+"px,"+
				"repeating-linear-gradient("+(tz-3)+"deg, transparent, transparent 7px, "+color2+" 19px) 0 "+ty*deg+"px,"+
				"repeating-linear-gradient("+(tz-2)+"deg, transparent, transparent 11px, "+color2+" 17px) 0 "+tz*deg+"px,"+
				color1;

			$("#milepost_label").attr('style', "transform: rotate3d("+tx+", "+ty+", "+tz+", "+deg+"deg); background: "+grad + "; border-color: "+color_new+"; color: "+text_color+";");

			//$("#milepost_label").after("<div style='background: "+rgba_average(color1, st_color1, 9)+"'> _ </div> <div style='background: "+rgba_average(color1, st_color1, 5)+"'> _ </div> <div style='background: "+rgba_average(color1, st_color1, 5)+"'> _ </div> <div style='background: "+rgba_average(color1, st_color1, 1)+"'> _ </div> ");

			}
			var grad = get_grad(clr1, clr2);


		}
		set_grad(color.clr1, color.clr2);

		$("#milepost_pole").attr('style', "background: linear-gradient(135deg, "+rgba_change(color.clr2, 0, 0.3)+", "+rgba_change(color.clr1, 0, 0.3)+" 80%), linear-gradient(to top, transparent 70%, #b77435), repeating-linear-gradient("+(tx+83)+"deg, transparent, transparent 5px, rgba("+(cr+tz-deg)+", "+(cg+tx-deg)+", "+(cb+ty-deg)+", .3) 17px) "+tz*deg+"px 0, repeating-linear-gradient("+(tx+80)+"deg, transparent, transparent 3px, rgba("+(cr+tx-deg)+", "+(cg+ty-deg)+", "+(cb+tz-deg)+", .6) 19px) "+ty*deg+"px 0, rgba(234, 171, 104, 1)");
		//bbc = rgba_change(color.clr1, 0, 0.3);
		//$("#milepost #milepost_label:before").css('top', 0);

		var b_sky = randd(1,4);
		var b_land = randd(1,4);
		}

	function point(){
		this.x=0;
		this.y=0;
	}
	point.prototype.set = function(x,y){
		this.x=parseInt(x);
		this.y=parseInt(y);
	}

	function make_back()
		{
		//$("#background").css({'background': 'url("img/f1.jpg") center center', 'background-size': 'cover', "opacity": ".8"});

			var b_width = $("#background").width();
			var b_height = $("#background").height();

		if($("#canva").length<1)
			$("#background").append("<canvas id='canva' width='"+b_width+"' height='"+b_height+"'></canvas>");
		if($("#c_work").length<1)
			$("#background").append("<canvas id='c_work'></canvas>");

		var canvas = document.getElementById('canva');
		var work_canva = document.getElementById('c_work');
		if (canvas.getContext){
			var ctx = canvas.getContext('2d');
			var c_work = work_canva.getContext('2d');

			var c_width = $("#canva").width();
			var c_height = $("#canva").height();
			var hor_height = c_height/10*6;
			var cw_width = $("#c_work").width();
			var cw_height = $("#c_work").height();
			//console.log("c_width "  + c_width);
			//console.log("c_height "  + c_height);

			// drawing code here

			// полупрозрачный прямоугольник
			/*
			ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
			ctx.fillRect (30, 30, 55, 50);
			fillRect(x, y, width, height)
			strokeRect(x, y, width, height)
			clearRect(x, y, width, height)
			rect(x, y, width, height)

			beginPath()
			closePath()
			stroke()
			fill()

			ctx.beginPath();
			ctx.moveTo(75,50);
			ctx.lineTo(100,75);
			ctx.lineTo(100,25);
			ctx.fill();

			moveTo(x, y)

			ctx.beginPath();
			ctx.arc(75,75,50,0,Math.PI*2,true); // Внешняя окружность
			ctx.moveTo(110,75);
			ctx.arc(75,75,35,0,Math.PI,false);  // рот (по часовой стрелке)
			ctx.moveTo(65,65);
			ctx.arc(60,65,5,0,Math.PI*2,true);  // Левый глаз
			ctx.moveTo(95,65);
			ctx.arc(90,65,5,0,Math.PI*2,true);  // Правый глаз
			ctx.stroke();

			lineTo(x, y)

			arc(x, y, radius, startAngle, endAngle, anticlockwise)
			arcTo(x1, y1, x2, y2, radius)

			quadraticCurveTo(cp1x, cp1y, x, y)
			bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
			*/


			// очищаем холст
			ctx.clearRect(0, 0, c_width, c_height);
			c_work.clearRect(0, 0, cw_width, cw_height);
			/*
			// Create gradients
			var lingrad = ctx.createLinearGradient(0,0,0,150);
			lingrad.addColorStop(0, '#00ABEB');
			lingrad.addColorStop(0.5, '#fff');
			lingrad.addColorStop(0.5, '#26C000');
			lingrad.addColorStop(1, '#fff');

			var lingrad2 = ctx.createLinearGradient(0,50,0,95);
			lingrad2.addColorStop(0.5, '#000');
			lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

			// assign gradients to fill and stroke styles
			ctx.fillStyle = lingrad;
			ctx.strokeStyle = lingrad2;

			// draw shapes
			ctx.fillRect(10,10,130,130);
			ctx.strokeRect(50,50,50,50);
			*/

			// положение солнца
			x = randd(30, c_width-300);
			y = randd(0, c_height-c_height/2);
			k_pc = 100/(c_height-c_height/2); // процентное соотношение
			console.log("k_pc: "+k_pc);

			//sky
			var sky = ctx.createLinearGradient(0,0,0, c_height);
			sky.addColorStop(0, '#063570');
			sky.addColorStop(.5, '#a0c1da');
			sky.addColorStop(1, '#a0c1da');
			//sky.addColorStop(0, '#fff');
			//sky.addColorStop(1, '#000');
			ctx.fillStyle = sky;
			ctx.fillRect(0,0,c_width,c_height);
			console.log("y*k_pc: " +parseInt(y*k_pc));
			alpha = (randd(parseInt(y*k_pc),100)-30)/100;
			if(alpha<0)
				alpha=0;
			console.log("alpha: "+alpha);
			var sky2 = ctx.createLinearGradient(0,0,0, c_height);
			//sky2.addColorStop(0, 'rgba(61,27,37,1)');
			//sky2.addColorStop(0, "rgba(47,27,61,"+alpha+")");
			sky2.addColorStop(0, "rgba(106,5,11,"+alpha+")");
			//sky2.addColorStop(.1, "rgba(238, 153, 80, "+alpha+")");
			sky2.addColorStop(0.5, "rgba(248, 211,146, "+alpha+")");
			sky2.addColorStop(1, "rgba(248, 211,146, "+alpha+")");
			ctx.fillStyle = sky2;
			ctx.fillRect(0,0,c_width,c_height);

			// sun

			//c_work.fillStyle = "rgba(255, 255, 255, 0)";
			//c_work.fillRect(0, 0, cw_width, cw_height);

			k_sn=0.09; // зависимость размера от высоты
			r1=0;//(30+k_sn*y);
			r2=(70+k_sn*y);
			/*
			console.log("x: "+x);
			console.log("y: "+y);
			console.log("r1: "+r1);
			console.log("r2: "+r2);
			*/

			ctx.save();
			k_sk=1.3; // соотношение сторон
			ctx.scale(k_sk, 1);
			k_hl=2.0; // увеличение
			/*
			var halo = ctx.createRadialGradient(r2*k_hl, r2*k_hl, r1*k_hl, r2*k_hl, r2*k_hl, r2*k_hl);
			halo.addColorStop(0, 'rgba(255,255,255,.4)');
			halo.addColorStop(.4, 'rgba(253,233,224,.2)');
			halo.addColorStop(.7, 'rgba(253,233,224,.1)');
			halo.addColorStop(1, 'rgba(255,255,250,0)');

			ctx.fillStyle = halo;
			ctx.translate(x/k_sk-r2*k_sk, y-(r2*k_hl-r2));
			ctx.fillRect(0,0,r2*k_hl*2,r2*k_hl*2);
			ctx.restore();
			*/

			var halo2 = ctx.createRadialGradient(r2*k_hl, r2*k_hl, r1*k_hl, r2*k_hl, r2*k_hl, r2*k_hl);
			halo2.addColorStop(0, 'rgba(255,255,255,.4)');
			halo2.addColorStop(.4, 'rgba(243,172,127,.2)');
			halo2.addColorStop(.7, 'rgba(243,172,127,.1)');
			halo2.addColorStop(1, 'rgba(255,255,250,0)');

			ctx.fillStyle = halo2;
			ctx.translate(x/k_sk-r2*k_sk, y-(r2*k_hl-r2));
			ctx.fillRect(0,0,r2*k_hl*2,r2*k_hl*2);
			ctx.restore();


			//var sun = ctx.createRadialGradient(1.5*x, y, 30*k_sn, 1.5*x, y, 50*k_sn);

			var sun = ctx.createRadialGradient(r2, r2, r1, r2, r2, r2);
			sun.addColorStop(0, 'rgba(255,255,255,1)');
			sun.addColorStop(.5, 'rgba(255,255,255,1)');
			sun.addColorStop(.6, 'rgba(255,240,180,.5)');
			sun.addColorStop(1, 'rgba(255,255,250,0)');
			ctx.save();
			ctx.fillStyle = sun;
			ctx.translate(x,y);
			ctx.fillRect(0,0,r2*2,r2*2);
			ctx.restore();



			var sun2 = ctx.createRadialGradient(r2, r2, r1, r2, r2, r2);
			sun2.addColorStop(0, "rgba(254,254,225,0)");
			sun2.addColorStop(.3, "rgba(254,254,225,0)");
			sun2.addColorStop(.5, "rgba(254,238,153,"+alpha+")");
			sun2.addColorStop(1, "rgba(254,254,225,0)");
			ctx.save();
			ctx.fillStyle = sun2;
			ctx.translate(x,y);
			ctx.fillRect(0,0,r2*2,r2*2);
			ctx.restore();


			// cloud
			var cl1;

			for(j=0; j<19; j++)
			{
				x0=randd(0, c_width-100);
				y0=randd(0, c_height/2);

				ctx.save();
				ctx.scale((1+(c_height/2-y0)/100), (0.6+(c_height/2-y0)/100));
				//console.log(y0+"/100+0.6:  " + (0.6+y0/100)+ "-");
				for(var i=0; i<0; i++)
				{
					alpha = randd(2, 30)/100;

					//console.log("alpha: "+alpha);
					x1 = randd(x0-10, x0-1+11);
					y2 = randd(y0-10, y0-1);
					r1 = randd(7, 13);
					r2 = randd(14, 19);
					cl1= ctx.createRadialGradient(x1,y2,r1,x1,y2,r2 );
					cl1.addColorStop(0, 'rgba(255,255,255,'+alpha+')');
					cl1.addColorStop(1, 'rgba(255,255,250,0)');
					ctx.fillStyle = cl1;
					ctx.fillRect(0,0,c_width,c_height);
				}

				for(var i=0; i<6; i++)
				{
				alpha = randd(1, 10)/100;

					//console.log("alpha: "+alpha);
					x1 = randd(x0-10, x0-1+31);
					y2 = randd(y0-10, y0-1+20);
					r1 = randd(20, 33);
					r2 = randd(40, 79);
					cl1= ctx.createRadialGradient(x1,y2,r1,x1,y2,r2 );
					cl1.addColorStop(0, 'rgba(255,255,255,'+alpha+')');
					cl1.addColorStop(1, 'rgba(255,255,250,0)');
					ctx.fillStyle = cl1;
					ctx.fillRect(0,0,c_width,c_height);
				}
				/*
				for(i=0; i<15; i++)
				{
					x1 = randd(-10+x0, 20+x0);
					y2 = randd(y0-10+20, y0-10+20);
					r1 = randd(4, 6);
					r2 = randd(7, 11);
					cl1= ctx.createRadialGradient(x1,y2,r1,x1,y2,r2 );
					cl1.addColorStop(0, 'rgba(180,180,255,.2)');
					cl1.addColorStop(1, 'rgba(230,230,250,0)');
					ctx.fillStyle = cl1;
					ctx.fillRect(0,0,c_width,c_height);
				}
				*/
				ctx.restore();
			}



			//mountains

			function mountain_point(p1,p2, randp){
				//console.log(Math.pow((p2.x - p1.x),2));
				//console.log(Math.pow((p2.y - p1.y),2));
				//console.log(Math.sqrt(Math.pow((p2.x - p1.x),2)+Math.pow((p2.y - p1.y),2))/2);
				//console.log(Math.pow((p2.x−p1.x), 2));
				//console.log(Math.pow((p2.y−p1.y), 2));
				var rr=randp;
				if (!(randp >0 && randp<100)) {
					rr = parseInt(Math.sqrt(Math.pow((p2.x - p1.x),2)+Math.pow((p2.y - p1.y),2))/10);
				}

					//var rr=parseInt(Math.sqrt(Math.pow((p2.x - p1.x),2)+Math.pow((p2.y - p1.y),2))/5);
					x_r=randd(-rr,rr);
					y_r=randd(-rr,rr);

					pn = new point();
					pn.x = parseInt((p1.x+p2.x)/2-x_r);
					pn.y = parseInt((p1.y+p2.y)/2-y_r);
					//console.log("pn.x: "+pn.x);
					//	console.log("pn.y: "+pn.y);
					return pn;
			}


				function make_line(arry, max_i)
					{
					if(max_i === undefined)
						max_i = 7;
					var arry2=[];
					ar_l=0;
					for(p=0; p < max_i; p++)
						{
						ar_l=0;
						for(var key in arry){
							ar_l++;
						}
						arry2.push(arry[0]);
						for(k=0; k < ar_l-1; k++)
						{
							arry2.push(mountain_point(arry[k], arry[(k+1)], 3));
							arry2.push(arry[k+1]);
						}
						arry=[];
						arry=arry2;
						arry2=[];
						}
					return arry;
					}

			function make_mount(m_top, m_width, m_height){
				var p_arr=[], p_arr2=[], big_size=0, rand_x=0, ar_l=0;
				var m_left = new point();
				var m_right = new point();
				//var big_size=Math.max(c_width, c_height)*2;
				p_arr=[new point(), new point(), new point()];
				p_arr2=[];

				m_left.set(m_top.x-m_width/2, +m_top.y + +m_height);
				m_right.set(+m_top.x+ +m_width/2, +m_top.y + +m_height);


				p_arr[0].set(m_left.x, m_left.y);
				p_arr[1].set(m_top.x, m_top.y);
				p_arr[2].set(m_right.x, m_right.y);

				//ar_l=0;
				for(ar_l=0, p=0; p<6; p++)
					{
					ar_l=0;
					for(var key in p_arr){
						ar_l++;
					}
					p_arr2.push(p_arr[0]);
					for(k=0; k<ar_l-1; k++)
					{
						p_arr2.push(mountain_point(p_arr[k],p_arr[(k+1)]), -1);
						p_arr2.push(p_arr[k+1]);
					}
					p_arr=[];
					p_arr=p_arr2;
					p_arr2=[];
					}
				ar_l=0;
				for(var key in p_arr){
					ar_l++;
				}
				ctx.beginPath();
				ctx.moveTo(p_arr[0].x, p_arr[0].y);
						//console.log("--------------------");
				for(r=1;r<ar_l;r++)
					{
					ctx.lineTo(p_arr[r].x, p_arr[r].y);
					}
				ctx.lineTo(c_width, c_height);
				ctx.lineTo(0, c_height);
				ctx.lineTo(p_arr[0].x, p_arr[0].y);

				grad1=(parseInt(c_height/3 - m_top.y*.1));
				grad2=(parseInt(c_height - m_top.y*.5));
				var mounts = ctx.createLinearGradient(0, grad1, 0, grad2);
				mounts.addColorStop(0, "rgba(218,219,236, .7)");
				mounts.addColorStop(1, 'rgba(79,108,157, 1)');

				ctx.fillStyle = mounts;
				ctx.fill();
			}
			//paint_mount(1,1,1);
			function make_mount_chain(top_offset){
				if(top_offset === undefined)
					top_offset = 0;
				var big_size=Math.max(c_width, c_height)*2;
				var min_size=Math.min(c_width, c_height)*2;
				var max_count = randd(1,6);
				var m_step = parseInt(big_size / max_count);
				var m_start = parseInt(m_step/2);
				//hor_height
				var mount_top = new point();
				var mount_height = min_size/randd(15, 21);
				for(var i=0; i<max_count; i++)
				{
					var y_rand= randd(-10, 10)
					mount_top.set(+m_start + +(i*m_step-y_rand), hor_height-mount_height + +top_offset);
					make_mount(mount_top, 700 - top_offset*5, mount_height);
				}

			}
			function make_mountains()
			{
				var max_mount = randd(1,4);
				var offset = c_height/10;
				for(var i=0; i<max_mount; i++)
				{
					make_mount_chain(offset*i);
				}
			}
			make_mountains();

			// land
			{
			var land = ctx.createLinearGradient(0, 0, 0, c_height);
			land.addColorStop(0, 'transparent');
			land.addColorStop(.65, 'transparent');
			land.addColorStop(.66, 'rgba(115, 126, 20, .1)');
			land.addColorStop(.7, 'rgba(115, 126, 20, 1)');
			land.addColorStop(1, '#b29b3c');
			//sky.addColorStop(0, '#fff');
			//sky.addColorStop(1, '#000');
			ctx.fillStyle = land;
			ctx.fillRect(0,0,c_width,c_height);
			console.log("y*k_pc: " +parseInt(y*k_pc));
			alpha = (randd(parseInt(y*k_pc),100)-30)/100;
			if(alpha<0)
				alpha=0;
			console.log("alpha: "+alpha);
			var land2 = ctx.createLinearGradient(0,0,0, c_height);

			land2.addColorStop(0, 'transparent');
			land2.addColorStop(.65, 'transparent');
			land2.addColorStop(.66, "rgba(170,208,6,.1)");
			land2.addColorStop(.7, "rgba(170,208,6,"+alpha+")");
			land2.addColorStop(1, "rgba(25, 59,1, "+alpha+")");
			ctx.fillStyle = land2;
			ctx.fillRect(0,0,c_width,c_height);
			//ctx.stroke();
			}

			function paint_forest(mov_y){
				mov_y=-mov_y;
				var p_arr=[], p_arr2=[], big_size=0, rand_x=0, ar_l=0;
				p_arr=[new point(), new point(), new point()];
				p_arr2=[new point(), new point(), new point()];

				big_size=Math.max(c_width, c_height)*2;
				//console.log("max: "+big_size);
				rand_x=randd(-1, 1);
				/*
				p_arr[0].set(-rand_x, (parseInt(c_height)+parseInt(line*40)));
				p_arr[1].set((big_size-rand_x)/2, (parseInt(c_height/3)+parseInt(line*40)));
				p_arr[2].set((big_size-rand_x)/1, (parseInt(c_height)+parseInt(line*40)));
				*/

				p_arr[0].set(0, c_height/1.4-40-mov_y);
				p_arr[1].set(c_width/2, c_height/1.4-40-mov_y);
				p_arr[2].set(c_width, c_height/1.4-40-mov_y);
				p_arr=make_line(p_arr);


				p_arr2[0].set(c_width, c_height/1.4-mov_y);
				p_arr2[1].set(c_width/2, c_height/1.4-mov_y);
				p_arr2[2].set(0, c_height/1.4-mov_y);
				p_arr2=make_line(p_arr2);

				p_arr = p_arr.concat(p_arr2);

				ar_l=0;
				for(var key in p_arr){
					ar_l++;
				}
				ctx.beginPath();
				ctx.moveTo(p_arr[0].x, p_arr[0].y);
						//console.log("--------------------");
				for(r=1;r<ar_l;r++)
					{
						//console.log(p_arr[r].x+ " "+p_arr[r].y);
					ctx.lineTo(p_arr[r].x, p_arr[r].y);


					}
				//ctx.lineTo(c_width, c_height);
				//ctx.lineTo(0, c_height);
				ctx.lineTo(p_arr[0].x, p_arr[0].y);

				grad1=c_height/1.4-40-mov_y;
				grad2=c_height/1.4-mov_y;
				var forest = ctx.createLinearGradient(0, grad1, 0, grad2);

				forest.addColorStop(0, "rgba(102,113,72, .6)");
				forest.addColorStop(.9, 'rgba(58,77,51, .9)');
				forest.addColorStop(1, 'rgba(58,77,51, .8)');

				/*forest.addColorStop(0, "#fff");
				forest.addColorStop(1, '#000');*/
				ctx.fillStyle = forest;
				ctx.fill();
			}
			//paint_forest();
			for(g=0;g<4;g++)
			{
				paint_forest(g*15);
			}
			// hills
			/*
			var hill = ctx.createLinearGradient(0, c_height/3, 0, c_height);
			hill.addColorStop(0, 'rgba(150,171,80, .1)');
			hill.addColorStop(.8, 'rgba(110,120,115, .2)');
			hill.addColorStop(1, 'rgba(78,79,69, .2)');

			for(var i=0; i<3; i++)
			{
				x1 = 0-randd(1,30)*10;
				x2 = c_width-randd(-90,+90)*10;
				cx1=randd(x1/10, x2/20)*10;
				cx2 = randd(x2/20, x2/10)*10;
				ctx.beginPath();
				ctx.moveTo(x1, c_height);
				ctx.bezierCurveTo(cx1, c_height/1.5, cx2, c_height/1.5, x2, c_height);
				ctx.fillStyle = hill;
			ctx.fill();
			}
			*/
			/*
			for(i=0; i<0; i++)
				{
				alpha = randd(50, 90)/100;
				x0=randd(0, c_width-100);
				y0=randd(c_height/1.7, c_height);

					//console.log("alpha: "+alpha);
					x1 = randd(x0-10, x0-1+31);
					y2 = randd(y0-10, y0-1+20);
					r1 = randd(20, 33);
					r2 = randd(40, 179);
					cl1= ctx.createRadialGradient(x1,y2,r1,x1,y2,r2 );
					cl1.addColorStop(0, 'rgba(45,83,1,'+alpha+')');
					cl1.addColorStop(.8, 'rgba(45,83,1,'+alpha+')');
					cl1.addColorStop(1, 'rgba(45,83,1,0)');
					ctx.fillStyle = cl1;
					ctx.fillRect(0,0,c_width,c_height);
				}
				*/
				/*
			for(i=0; i<	0; i++)
				{
				alpha = randd(50, 90)/100;
				x0=randd(0, c_width-100);
				y0=randd(c_height/1.7, c_height);

					//console.log("alpha: "+alpha);
					x1 = randd(x0-10, x0-1+31);
					y2 = randd(y0-10, y0-1+20);
					r1 = randd(20, 33);
					r2 = randd(40, 179);
					cl1= ctx.createRadialGradient(x1,y2,r1,x1,y2,r2 );
					cl1.addColorStop(0, 'rgba(65,83,1,'+alpha+')');
					cl1.addColorStop(.8, 'rgba(65,83,1,'+alpha+')');
					cl1.addColorStop(1, 'rgba(65,83,1,0)');
					ctx.fillStyle = cl1;
					ctx.fillRect(0,0,c_width,c_height);
				}*/
			function make_pine(bottom_x, bottom_y, height)
			{
				if(height === undefined)
					height = 400;
				if(botom_x === undefined)
					var botom_x = 100;
				if(bottom_y === undefined)
					bottom_y = 100;
				var top_y = bottom_y-height;

				function make_trunk()
				{
					var tr_k = 1.1;
					var trunk = [new point(), new point()];
					trunk[0].set(botom_x, bottom_y);
					trunk[1].set(botom_x, top_y);
					trunk = make_line(trunk, 4);

					ar_l=0;
					for(var key in trunk){
						ar_l++;
					}
					ctx.beginPath();
					ctx.moveTo(trunk[0].x - (ar_l)*tr_k, trunk[0].y);
					for(var r=1;r<ar_l;r++)
						{
						ctx.lineTo(trunk[r].x - (ar_l-r)*tr_k , trunk[r].y);
						}
					for(var r=ar_l-1;r>=0;r--)
						{
						ctx.lineTo(trunk[r].x - (r-ar_l)*tr_k , trunk[r].y);
						}
					ctx.lineTo(trunk[0].x - (ar_l)*tr_k, trunk[0].y);

					grad1=top_y;
					grad2=bottom_y;
					//var trunk_gr_1 = ctx.createLinearGradient(0, grad1, 0, grad2);
					var trunk_gr_1 = ctx.createLinearGradient(+bottom_x+  tr_k*8, 0, bottom_x - (tr_k*8), 0);
					trunk_gr_1.addColorStop(0, "rgba(194,104,89,1)");
					trunk_gr_1.addColorStop(1, 'rgba(68,35,46,1)');
					ctx.fillStyle = trunk_gr_1;
					ctx.fill();

					var t_gr_2_k = .1;
					var trunk_gr_2 = ctx.createLinearGradient(+bottom_x+  tr_k*19 - randd(-2, +2), bottom_y, bottom_x - (tr_k*19) - randd(-2, +2), bottom_y+4);
					trunk_gr_2.addColorStop(0, "rgba(194,104,89,"+t_gr_2_k+")");
					trunk_gr_2.addColorStop(.1, 'rgba(68,35,46,'+t_gr_2_k+')');
					trunk_gr_2.addColorStop(.2, "rgba(194,104,89,"+t_gr_2_k+")");
					trunk_gr_2.addColorStop(.3, 'rgba(68,35,46,'+t_gr_2_k+')');
					trunk_gr_2.addColorStop(.4, "rgba(194,104,89,"+t_gr_2_k+")");
					trunk_gr_2.addColorStop(.5, 'rgba(68,35,46,'+t_gr_2_k+')');
					trunk_gr_2.addColorStop(.6, "rgba(194,104,89,"+t_gr_2_k+")");
					trunk_gr_2.addColorStop(.7, 'rgba(68,35,46,'+t_gr_2_k+')');
					trunk_gr_2.addColorStop(.8, "rgba(194,104,89,"+t_gr_2_k+"2)");
					trunk_gr_2.addColorStop(.9, 'rgba(68,35,46,'+t_gr_2_k+')');
					trunk_gr_2.addColorStop(1, "rgba(194,104,89,"+t_gr_2_k+")");
					ctx.fillStyle = trunk_gr_2;
					ctx.fill();

					var t_gr_3_k = .1;
					var trunk_gr_3 = ctx.createLinearGradient(+bottom_x+  tr_k*19 - randd(-2, +2), bottom_y, bottom_x - (tr_k*19) - randd(-2, +2), bottom_y-3);
					trunk_gr_3.addColorStop(0, "rgba(194,104,89,"+t_gr_3_k+")");
					trunk_gr_3.addColorStop(.1, 'rgba(68,35,46,'+t_gr_3_k+')');
					trunk_gr_3.addColorStop(.2, "rgba(194,104,89,"+t_gr_3_k+")");
					trunk_gr_3.addColorStop(.3, 'rgba(68,35,46,'+t_gr_3_k+')');
					trunk_gr_3.addColorStop(.4, "rgba(194,104,89,"+t_gr_3_k+")");
					trunk_gr_3.addColorStop(.5, 'rgba(68,35,46,'+t_gr_3_k+')');
					trunk_gr_3.addColorStop(.6, "rgba(194,104,89,"+t_gr_3_k+")");
					trunk_gr_3.addColorStop(.7, 'rgba(68,35,46,'+t_gr_3_k+')');
					trunk_gr_3.addColorStop(.8, "rgba(194,104,89,"+t_gr_3_k+"2)");
					trunk_gr_3.addColorStop(.9, 'rgba(68,35,46,'+t_gr_3_k+')');
					trunk_gr_3.addColorStop(1, "rgba(194,104,89,"+t_gr_3_k+")");
					ctx.fillStyle = trunk_gr_3;
					ctx.fill();
					ctx.strokeStyle="red";
					//ctx.stroke();
				}
				function make_krona()
				{
					function make_branch()
					{

					}

					ar_l=0;
					for(var key in trunk){
						ar_l++;
					}
					ctx.beginPath();
					ctx.moveTo(trunk[0].x - (ar_l)*tr_k, trunk[0].y);
					for(var r=1;r<ar_l;r++)
						{
						ctx.lineTo(trunk[r].x - (ar_l-r)*tr_k , trunk[r].y);
						}
					for(var r=ar_l-1;r>=0;r--)
						{
						ctx.lineTo(trunk[r].x - (r-ar_l)*tr_k , trunk[r].y);
						}
					ctx.lineTo(trunk[0].x - (ar_l)*tr_k, trunk[0].y);

					grad1=top_y;
					grad2=bottom_y;
					//var trunk_gr_1 = ctx.createLinearGradient(0, grad1, 0, grad2);
					var trunk_gr_1 = ctx.createLinearGradient(+bottom_x+  tr_k*8, 0, bottom_x - (tr_k*8), 0);
					trunk_gr_1.addColorStop(0, "rgba(194,104,89,1)");
					trunk_gr_1.addColorStop(1, 'rgba(68,35,46,1)');
					ctx.fillStyle = trunk_gr_1;
					ctx.fill();

					var t_gr_2_k = .1;
					var trunk_gr_2 = ctx.createLinearGradient(+bottom_x+  tr_k*19 - randd(-2, +2), bottom_y, bottom_x - (tr_k*19) - randd(-2, +2), bottom_y+4);
					trunk_gr_2.addColorStop(0, "rgba(194,104,89,"+t_gr_2_k+")");
					trunk_gr_2.addColorStop(.1, 'rgba(68,35,46,'+t_gr_2_k+')');
					trunk_gr_2.addColorStop(.2, "rgba(194,104,89,"+t_gr_2_k+")");
					trunk_gr_2.addColorStop(.3, 'rgba(68,35,46,'+t_gr_2_k+')');
					trunk_gr_2.addColorStop(.4, "rgba(194,104,89,"+t_gr_2_k+")");
					trunk_gr_2.addColorStop(.5, 'rgba(68,35,46,'+t_gr_2_k+')');
					trunk_gr_2.addColorStop(.6, "rgba(194,104,89,"+t_gr_2_k+")");
					trunk_gr_2.addColorStop(.7, 'rgba(68,35,46,'+t_gr_2_k+')');
					trunk_gr_2.addColorStop(.8, "rgba(194,104,89,"+t_gr_2_k+"2)");
					trunk_gr_2.addColorStop(.9, 'rgba(68,35,46,'+t_gr_2_k+')');
					trunk_gr_2.addColorStop(1, "rgba(194,104,89,"+t_gr_2_k+")");
					ctx.fillStyle = trunk_gr_2;
					ctx.fill();

					var t_gr_3_k = .1;
					var trunk_gr_3 = ctx.createLinearGradient(+bottom_x+  tr_k*19 - randd(-2, +2), bottom_y, bottom_x - (tr_k*19) - randd(-2, +2), bottom_y-3);
					trunk_gr_3.addColorStop(0, "rgba(194,104,89,"+t_gr_3_k+")");
					trunk_gr_3.addColorStop(.1, 'rgba(68,35,46,'+t_gr_3_k+')');
					trunk_gr_3.addColorStop(.2, "rgba(194,104,89,"+t_gr_3_k+")");
					trunk_gr_3.addColorStop(.3, 'rgba(68,35,46,'+t_gr_3_k+')');
					trunk_gr_3.addColorStop(.4, "rgba(194,104,89,"+t_gr_3_k+")");
					trunk_gr_3.addColorStop(.5, 'rgba(68,35,46,'+t_gr_3_k+')');
					trunk_gr_3.addColorStop(.6, "rgba(194,104,89,"+t_gr_3_k+")");
					trunk_gr_3.addColorStop(.7, 'rgba(68,35,46,'+t_gr_3_k+')');
					trunk_gr_3.addColorStop(.8, "rgba(194,104,89,"+t_gr_3_k+"2)");
					trunk_gr_3.addColorStop(.9, 'rgba(68,35,46,'+t_gr_3_k+')');
					trunk_gr_3.addColorStop(1, "rgba(194,104,89,"+t_gr_3_k+")");
					ctx.fillStyle = trunk_gr_3;
					ctx.fill();
					ctx.strokeStyle="red";
					//ctx.stroke();
				}
				make_trunk();
			}
			make_pine(100, 600, 400);
		} else {
			// canvas-unsupported code here
		}
		}



	function rgba_change(color, num, alpha, c_r, c_g, c_b)
	{
		if(alpha<0)
			alpha*=-1;
		if(alpha === undefined || alpha>1)
			alpha = 1;
		if(c_r === undefined)
			c_r=0;
		if(c_g === undefined)
			c_g=0;
		if(c_b === undefined)
			c_b=0;

		var cl1 = color.match(/([0-9\s,\.]+)/i);
		var cl1_1=cl1[1].split(",");
		if(num!=0 || c_r!=0 || c_g!=0 || c_b!=0)
			{

			for(var p=0; p<3; p++)
				{
				cl1_1[p]=+cl1_1[p] + +num;

				if(p==0 && c_r!=0)
					cl1_1[p]=+cl1_1[p] + +c_r;
				if(p==1 && c_g!=0)
					cl1_1[p]=+cl1_1[p] + +c_g;
				if(p==2 && c_b!=0)
					cl1_1[p]=+cl1_1[p] + +c_b;

				if(cl1_1[p]<0)
					cl1_1[p]=0;
				if(cl1_1[p]>255)
					cl1_1[p]=255;
				}
			}
		cl1_1[3]=alpha;
		color = "rgba("+cl1_1.join(",")+")";
		return color;
	}

	function rgba_average(color1, color2, prc)
	{
		if(prc === undefined|| prc<1 || prc>9)
			prc = 5;
		var cl1 = color1.match(/([0-9\s,\.]+)/i);
		var cl1_1=cl1[1].split(",");
		var cl2 = color2.match(/([0-9\s,\.]+)/i);
		var cl2_1=cl2[1].split(",");

		var c_r, c_g, c_b, c_a, color;

		/*
		c_r = ~~((+cl1_1[0]+ +cl2_1[0])/2);
		c_g = ~~((+cl1_1[1]+ +cl2_1[1])/2);
		c_b = ~~((+cl1_1[2]+ +cl2_1[2])/2);
		*/

		c_r = ~~(cl1_1[0]/(10/prc) + cl2_1[0]/(10/(10-prc)));
		c_g = ~~(cl1_1[1]/(10/prc) + cl2_1[1]/(10/(10-prc)));
		c_b = ~~(cl1_1[2]/(10/prc) + cl2_1[2]/(10/(10-prc)));

		al1 = parseFloat(cl1_1[3]);
		al2 = parseFloat(cl2_1[3]);
		al_r = (+al1+ +al2 );
		c_a = parseFloat(al_r/2);

		color = "rgba("+c_r+", "+c_g+", "+c_b+", "+c_a+")";
		return color;
	}

	function make_back_2()
		{
		//$("#background").css({'background': 'url("img/f1.jpg") center center', 'background-size': 'cover', "opacity": ".8"});

		var b_width = $("#background").width();
		var b_height = $("#background").height();

		if($("#canva").length<1)
			$("#background").append("<canvas id='canva'></canvas>");
		$("#canva").attr('width', b_width).attr('height', b_height)
		if($("#c_work").length<1)
			$("#background").append("<canvas id='c_work'></canvas>");

		var canvas = document.getElementById('canva');
		var work_canva = document.getElementById('c_work');
		if (canvas.getContext){
			var ctx = canvas.getContext('2d');
			var c_work = work_canva.getContext('2d');

			var c_width = $("#canva").width();
			var c_height = $("#canva").height();
			var hor_height = c_height/10*6;
			var cw_width = $("#c_work").width();
			var cw_height = $("#c_work").height();

			var sun_pos_h, sun_pos_hor, f_day=1;

			// очищаем холст
			ctx.clearRect(0, 0, c_width, c_height);
			c_work.clearRect(0, 0, cw_width, cw_height);

			var r_line = rand_line();
			/*/
			var colors = ['rgba(97, 202, 188, 1)',
			'rgba(242, 246, 221, 1)',
			'rgba(254, 224, 152, 1)',
			'rgba(253, 243, 194, 1)',
			'rgba(195, 177, 189, 1)',
			'rgba(253, 220, 211, 1)',
			'rgba(244, 169, 156, 1)',
			'rgba(236, 177, 111, 1)',
			'rgba(177, 50, 59, 1)',
			'rgba(255, 246, 102, 1)',
			'rgba(180, 207, 234, 1)',
			'rgba(214, 224, 225, 1)',
			'rgba(70, 57, 101, 1)',
			'rgba(142, 172, 236, 1)',
			];
			/**/
			var colors_day = [
			'rgba(97, 202, 188, 1)',
			'rgba(242, 246, 221, 1)',
			'rgba(254, 224, 152, 1)',
			'rgba(253, 243, 194, 1)',
			'rgba(195, 177, 189, 1)',
			'rgba(253, 220, 211, 1)',
			'rgba(204, 129, 116, 1)',
			'rgba(236, 177, 111, 1)',
			'rgba(177, 50, 59, 1)',
			'rgba(255, 246, 102, 1)',
			'rgba(180, 207, 234, 1)',
			'rgba(214, 224, 225, 1)',
			];
			var colors_night = [
			'rgba(70, 57, 101, 1)',
			'rgba(142, 172, 236, 1)',
			'rgba(89, 87, 134, 1)',
			'rgba(157, 199, 215, 1)',
			'rgba(51, 0, 69, 1)',
			'rgba(250, 168, 118, 1)',
			'rgba(0, 26, 53, 1)',
			'rgba(205, 189, 251, 1)',
			'rgba(0, 29, 40, 1)',
			'rgba(158, 174, 135, 1)'
			];
			for(var q=0; q<colors_day.length; q+=2)
			{
				console.log("%c     " + "%c     ", "background: "+colors_day[q]+";", "background: "+colors_day[q+1]+";");
			}
			for(var q=0; q<colors_night.length; q+=2)
			{
				console.log("%c     " + "%c     ", "background: "+colors_night[q]+";", "background: "+colors_night[q+1]+";");
			}

			var i, main_color1, main_color2;
			if(randd(0,2)>0)
			{
				i = randd(0, ~~((colors_day.length-1)/2))*2;
				main_color1 = rgba_change(colors_day[i], randd(-15,15));
				main_color2 =  rgba_change(colors_day[+i + +1], randd(-15,15));
				f_day=1;
			}
			else
			{
				i = randd(0, ~~((colors_night.length-1)/2))*2;
				main_color1 = rgba_change(colors_night[i], randd(-15,15));
				main_color2 =  rgba_change(colors_night[+i + +1], randd(-15,15));
				f_day=0;
			}


			console.log("Выбрано: ["+i+"]"+"%c     " + "%c     ", "background: "+main_color1+";", "background: "+main_color2+";");

			function make_sky(cl1, cl2){
				function print_sky(color1, color2){
					if(color1 === undefined)
						color1 = 'rgba(97, 202, 188, 1)';
					if(color2 === undefined)
						color2 = 'rgba(242, 246, 221, 1)';

					var sky = ctx.createLinearGradient(0,0,0, c_height);
					sky.addColorStop(0, color1);
					sky.addColorStop(.5, color2);
					sky.addColorStop(1, color2);
					ctx.fillStyle = sky;
					ctx.fillRect(0,0,c_width,c_height);
				}
				//var i = randd(0, colors.length/2)
				print_sky(cl1, cl2);
			}


			function make_sun(){
				function print_sun(pos, radius, color)
				{
					if(radius === undefined)
						radius = parseInt(c_height/9);
					if(pos === undefined)
					{
						pos = new point();
						pos.set(~~c_width/2, ~~c_height/4);
					}
					if(color === undefined)
						color = 'rgba(255,255,250, 1)';

					function get_moon(cx, cy, r, d){
						var vert_d=0;
						var px, py1, py2;
						vert_d= Math.sqrt(r*r-(d/2)*(d/2));
						px = cx;
						py1 =  cy - vert_d;
						py1 = +cy+ +vert_d;
					}

					color_start = rgba_change(color, 0, .8, 30, 30, 30);
					color_end = rgba_change(color, 0, .8, 0, -10, -10);

					var r_x1=pos.x-radius;
					var r_y1=pos.y-radius;
					var r_w=radius*2;
					var r_h=radius*2;

					var sun = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, radius);
					if(f_day==1)
					{

						sun.addColorStop(0, color_start);
						sun.addColorStop(.51, color_start);
						sun.addColorStop(.6, color_start);
						sun.addColorStop(.61, rgba_change(color_end, 0, .8));
						sun.addColorStop(.7, rgba_change(color_end, 0, .8));
						sun.addColorStop(.71, rgba_change(color_end, 0, .6));
						sun.addColorStop(.8, rgba_change(color_end, 0, .6));
						sun.addColorStop(.81, rgba_change(color_end, 0, .3));
						sun.addColorStop(.9, rgba_change(color_end, 0, .3));
						sun.addColorStop(.91, rgba_change(color_end, 0, .0));
						sun.addColorStop(1, rgba_change(color_end, 0, 0));
						ctx.fillStyle = sun;
						ctx.fillRect(r_x1, r_y1, r_w, r_h);
					}
					else
					{
						// get moon
						// cx, cy, r, d
						if(randd(0,2)==0)
							{
							var sign = rand_sign();
							radius = radius*2/3;
							var d= radius; //randd(radius*2/3, radius*3/2);
							vert_d= Math.sqrt(radius*radius-(d/2)*(d/2)); // длина вертикальная
							px = +pos.x + +d/2*sign; // x перечечения
							py1 =  pos.y - vert_d; // у1 пересечения
							py2 = +pos.y+ +vert_d; // у2 пересечения

							ctx.beginPath();
							ctx.moveTo(px, py1);
							ctx.bezierCurveTo(pos.x - radius*2*sign, pos.y-radius-d, pos.x - radius*2*sign, +pos.y + +radius + +d, px, py2);
							ctx.bezierCurveTo(pos.x - radius*sign, +pos.y + +d, pos.x - radius*sign, pos.y -d, px, py1);

							ctx.fillStyle =  rgba_change(color_start, 40, 1);
							ctx.fill();
							}
						else
							{
							sun.addColorStop(0, rgba_change(color_start, 40, 1));
							sun.addColorStop(.89, rgba_change(color_start, 40, 1));
							sun.addColorStop(.9, rgba_change(color_start, 40, 0));
							sun.addColorStop(1, rgba_change(color_start, 40, 0));
							ctx.fillStyle = sun;
							ctx.fillRect(r_x1, r_y1, r_w, r_h);
							}
						// /getmoon

						/*/
						sun.addColorStop(0, rgba_change(color_start, 40, 1));
						sun.addColorStop(.89, rgba_change(color_start, 40, 1));
						sun.addColorStop(.9, rgba_change(color_start, 40, 0));
						sun.addColorStop(1, rgba_change(color_start, 40, 0));
						/**/
					}
					//ctx.fillStyle = sun;

					/*
					if(f_day==1)
						{
						ctx.fillStyle = sun;
						ctx.fillRect(r_x1, r_y1, r_w, r_h);
						}
					else
						{

							//ctx.stroke();
						//ctx.fillRect(r_x1, r_y1, r_w, r_h);
						}
					*/
					/*/
					ctx.beginPath();
					ctx.rect(pos.x-5, pos.y-5, 10, 10);
					ctx.fillStyle = "red";
					ctx.fill();
					/**/

				}
				var sun_pos = new point();
				var k_h = c_height/(3*6);
				var k_red = randd(1, 6);
				var s_px = ~~(c_width/2-randd(-c_width/4, c_width/4));
				//var s_px = ~~(c_width/2);
				var s_py = k_h*k_red;
				sun_pos_hor = s_px;
				sun_pos.set(s_px, s_py);
				//console.log(k_h+" "+k_red);
				var radius = parseInt((c_height/8) * (k_h*k_red * 0.01));
				//var color = rgba_change('rgba(255,255,250, 1)', 0, 0, 0, -(k_red*7), -(k_red*9));
				var color = rgba_change(main_color2, 0, 0, (k_red), -(k_red*3), -(k_red*8));
				print_sun(sun_pos, radius, color);
				return rgba_change(color, 0, 1);
			}

		    /// do not insert in...
			function make_cloud(pos, height, width, color){
				var count = randd(3,7);
				var radius, cloud;
				if(height === undefined)
					height = 100;
				if(width === undefined)
					width = 300;
				if(pos === undefined)
					{
					pos = new point();
					pos.set(0, 90);
					}
				if(color === undefined)
					color = "#fff";
				for(var q=0; q<count; q++)
				{
					tmp = width/count;


					if(q<count/2){
						pos.x+=~~(width/count)*((q+1)*0.2);
						radius=randd(tmp*1.2,tmp*1.7)*((q+1)*0.2);
					}
					else{
						pos.x+=~~(width/count)*((q)*0.2);
						radius=randd(tmp*1.2,tmp*1.7)*((count-q)*0.2);
					}
					if(radius>height)
						radius=height;

					if(radius<0)
						radius*=-1;

					cloud = ctx.createRadialGradient(+pos.x+ +radius, pos.y, 1, +pos.x+ +radius, pos.y, radius);
					cloud.addColorStop(0, color);
					cloud.addColorStop(.99, color);
					cloud.addColorStop(1, rgba_change(color, 0, 0));
					//cloud.addColorStop(1, 'rgba(0,0,0,.2)');
					ctx.fillStyle = cloud;

					var r_x1=pos.x;
					var r_y1=pos.y - height;
					var r_w=width;
					var r_h=height;
					ctx.fillRect(r_x1, r_y1, r_w, r_h);
				}
			}
			function draw_clouds(){
				var cloud_pos = new point();
				var w, h, x, y, n_max=randd(2,6), m_max=randd(4,29);
				for(var n = 0; n<n_max; n++)
				{
					for(var m=0; m<m_max; m++)
					{
					if(randd(0,3)==0){
						w = ~~(c_width/(4*(n+1)));
						h = ~~(c_height/20*(n_max-n));
						x = ~~(c_width/m_max*(m+1)-randd(-c_width/m_max, c_width/m_max));
						y = ~~(c_height/20*(n+1)*3-randd(-c_height/m_max, c_height/m_max));
						cloud_pos.set(x, y);
						make_cloud(cloud_pos, h, w, main_color2);
						}
					}
				}
			}

			function print_hills(color1, color2, width, height){
				if(color1 === undefined)
					color1 = 'rgba(246, 178, 139, 1)';
				if(color2 === undefined)
					color2 = 'rgba(249, 184, 156, 1)';
				if(width === undefined)
					width = randd(c_width*.3, c_width*1.8);//r_line[0]*10;//randd(200, 600);
				if(width>c_width*2)
					width = width/2;
				if(width<600)
					width += 100;
				if(height === undefined)
					height = parseInt(Math.min(width/randd(10,15), randd(30, 80)));

				var start_p = new point(), end_p = new point();


				function make_hill_line(offset, range, color1, color2)
				{
					if(offset === undefined)
						offset = 0;
					if(range === undefined)
						range = 0;

					start_p.set(randd(-c_width/1.7,0), parseInt(c_height*5/7 + offset));

					function make_hill(start, height, width, range, color1, color2)
					{
						if(range === undefined)
							range = 0;
						width = width - (randd(-50, 50) - range*20);
						var mid = new point(), end = new point(), r_sid = 10;
						mid.set(parseInt(+start.x+ +width/2 + +randd(-r_sid,r_sid)), start.y-height + +randd(-r_sid,r_sid));
						end.set(parseInt(+start.x+ +width), start.y);
						ctx.moveTo(start.x, start.y);
						ctx.bezierCurveTo(+start.x + +parseInt(width/4), start.y, +start.x + +parseInt(width/4), mid.y, mid.x, mid.y);
						// make cactus here
						ctx.bezierCurveTo(+start.x + +parseInt(width/4*3), mid.y, +start.x + +parseInt(width/4*3), start.y, end.x, end.y);

						if(end.x<c_width)
							make_hill(end, height, width, range, color1, color2);
						else{
							ctx.lineTo(c_width, c_height);
							ctx.lineTo(0, c_height);
							ctx.lineTo(start_p.x, start_p.y);

							var lingrad = ctx.createLinearGradient(0, +c_height/3 + +offset,0, +c_height + +offset);
							/*var color1=colors[i];
							var color2=colors[+i + +1];*/

							lingrad.addColorStop(0, color1);
							lingrad.addColorStop(1, color2);
							ctx.fillStyle = lingrad;

							ctx.fill();
						}
					}
					ctx.beginPath();
					make_hill(start_p, height, width, range, color1, color2);
				}

					//var i = randd(0, colors.length/2);
					//var color1=colors[i];
					//var color2=colors[+i + +1];
					var max_line = randd(3,7);
					var color_offset = -(~~(randd(60, 90)/max_line));
				for(var r=0; r<max_line; r++)
				{
					color1 = rgba_change(color1, color_offset);
					color2 = rgba_change(color2, color_offset);
					make_hill_line(r*20, r, color1, color2);
				}
			}

			function make_cave(){
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(c_width, 0);
				ctx.lineTo(c_width, c_height);
				ctx.lineTo(0, c_height);
				ctx.lineTo(0, 0);

				ctx.moveTo(c_width/2, 0);
				ctx.lineTo(0, c_height/2);
				ctx.lineTo(c_width/2, c_height);
				ctx.lineTo(c_width, c_height/2);
				ctx.lineTo(c_width/2, 0);


				var lingrad = ctx.createLinearGradient(0, +c_height/3 + +offset,0, +c_height + +offset);
				/*var color1=colors[i];
				var color2=colors[+i + +1];*/

				lingrad.addColorStop(0, color1);
				lingrad.addColorStop(1, color2);
				ctx.fillStyle = lingrad;

				ctx.fill();
			}

			function make_land(color1, color2){
				var grd=ctx.createLinearGradient(0, c_height*4/5, 0, c_height);
				grd.addColorStop(0, rgba_change(color1, -60));
				grd.addColorStop(1, rgba_change(color2, -60));

				ctx.fillStyle=grd;
				ctx.fillRect(0,c_height*4/5,c_width,c_height/5);
			}

			function print_stars(ps_color)
			{
				if(ps_color === undefined)
					var ps_color = "rgba(255,255,255,1)";

				function make_star(ms_pos, rad, color){
					var pos = new point();
					if(ms_pos === undefined)
					{
						pos.set(100, 100);
					}
					else
					{
						pos.set(ms_pos.x, ms_pos.y);
					}
					if(rad === undefined)
					{
						var rad = 6;
					}
					if(color === undefined)
					{
						var color = rgba_change(main_color2, 50);
					}

					ctx.beginPath();
					ctx.moveTo(pos.x, pos.y-rad);//top
					ctx.lineTo(pos.x-(~~(rad/2)), pos.y);//left
					ctx.lineTo(pos.x, +pos.y + +rad);//bottom
					ctx.lineTo(+pos.x + +(~~(rad/2)), pos.y);//right
					ctx.fillStyle = color;
					ctx.fill();
				}

				if(f_day==0)
				{
				var hor_space = 50;
				var ver_space = 50;
				var	max_hor_count = c_width/hor_space;
				var max_ver_count = c_height/ver_space;
				var s_pos = new point();
				var s_x, s_y, s_r;
				for(var i=0; i<max_ver_count; i++)
				{
					for(var j=0; j<max_hor_count; j++)
					{
					if(randd(0,2)==0)
						{
						s_x = j*hor_space - ~~randd(-hor_space/3, hor_space/3);
						s_y = i*ver_space - ~~randd(-ver_space/3, ver_space/3);
						s_r= ~~(6-i*0.3 - randd(-1, 1));
						s_pos.set(s_x, s_y);
						ps_color = rgba_change(ps_color, 0 , randd(50,100)/100);
						make_star(s_pos, s_r, ps_color);
						}
					}
				}
				}
			}


			function make_forest(cl1, cl2)
			{
				function make_tree_1(cl1, cl2, basis, width){
					if(basis === undefined)
					{
						basis = new point();
						basis.set(100, c_height-100);
					}
					if(width === undefined)
						width = 50;
					var root = ~~(width/2.2);
					var pnt = new point();

					function make_trunk_up(get_point){
						var to_point = new point();
						var br = 20-randd(-10,10);
						var tr_height = 130-randd(-50,50);
						var new_p = new point();

						new_p.x = get_point.x;
						new_p.y = get_point.y - tr_height;
						ctx.lineTo(new_p.x, new_p.y);
						new_p.x = new_p.x-br;
						new_p.y = new_p.y-br;
						ctx.lineTo(new_p.x, new_p.y);
						new_p.x = +new_p.x+ +br;
						new_p.y = + new_p.y + +br/2;
						ctx.lineTo(new_p.x, new_p.y);

						if(new_p.y>0)
							make_trunk_up(new_p);
						else
							return new_p;
					}

					function make_trunk_down(get_point, end_point){
						var to_point = new point();
						var br = 20-randd(-10,10);
						var tr_height = 130-randd(-50,50);
						var new_p = new point();


						new_p.x = + get_point.x + +br;
						new_p.y = get_point.y - br/2;
						ctx.lineTo(new_p.x, new_p.y);
						new_p.x = new_p.x - br;
						new_p.y = +new_p.y + +br;
						ctx.lineTo(new_p.x, new_p.y);
						new_p.x = new_p.x;
						new_p.y = +new_p.y + +tr_height;
						ctx.lineTo(new_p.x, new_p.y);

						if(new_p.y<basis.y - (+root+ +tr_height*1.5))
							make_trunk_down(new_p);
						else
						{
							//new_p.x = new_p.x;
							new_p.y = basis.y-root;//+new_p.y + +tr_height;
							ctx.lineTo(new_p.x, new_p.y);
							new_p.x = +new_p.x + +root;
							new_p.y = +new_p.y + +root;
							ctx.lineTo(new_p.x, new_p.y);
						}
					}

					ctx.beginPath();
					var root_x1 = ~~(basis.x-width/2-root);
					var root_y1 = basis.y;
					var root_x2 = ~~(basis.x-width/2);
					var root_y2 = basis.y-root;
					ctx.moveTo(root_x1, root_y1);
					ctx.lineTo(root_x2, root_y2);
					pnt.set(root_x2, root_y2);
					make_trunk_up(pnt);
					pnt.set(basis.x, 0);
					make_trunk_down(pnt, basis);

					var tree = ctx.createLinearGradient(0,0,0,basis.y);
					tree.addColorStop(0, rgba_change(cl1, 10));
					tree.addColorStop(.99, rgba_change(cl2, 30));
					tree.addColorStop(1, rgba_change(cl2, 30, 0));
					ctx.fillStyle = tree;
					ctx.fill();
				}


				var s_max = randd(2, 6), d_max = randd(7, 13);
				//var s_max = 3, d_max = 4;
				var tree_point = new point();
				for(var s=0; s<s_max; s++)
				{
					for(var d=0; d<d_max; d++)
					{

						x = ~~(c_width/d_max*(d+1) - c_width/(d_max*2) - randd(-c_width/(d_max*4), c_width/(d_max*3)));
						//y = ~~((c_height*4/5)+ 40 + c_height/(3*s_max*1.2)*s - randd(c_height/(0, c_height/(3*s_max*2))));
						y = ~~((c_height*4/5)+ 40 + c_height/(3*s_max*1.2)*s - randd(-10, 10));

						/*
						x = ~~(c_width/d_max*(d+1) - c_width/(d_max*2) );
						y = ~~((c_height*2/3)+ 50 + c_height/(3*s_max*1.2)*s);
						*/
						tree_point.set(x, y);
						var cl1 = rgba_change(cl1, randd(-15, 10));
						var cl2 = rgba_change(cl2, randd(-15, 10));
						var wid = randd(30, 70);
						var rnd = randd(0,5);
						if(rnd<2)
						{
							make_tree_1(cl1, cl2, tree_point, wid);
							tree_point.x-=randd(90, 150);
							tree_point.y-=-15;
							make_cloud(tree_point, randd(80, 120), randd(250, 350), rgba_change(cl1, -30, 1));
						}
						/*/
						if(rnd==5){
							tree_point.x-=70;
							tree_point.y-=15;
							make_cloud(tree_point, 100, 300, rgba_change(cl1, -30, 0.95));
						}
						/**/
					}
				}
			}


			function draw_rocks()
			{
				function make_rock(mr_point, mr_height, mr_width, mr_color1, mr_color2)
					{
					function print_rock(color1, color2, r_pos, r_height, r_width){
						if(r_pos === null)
						{
							var r_pos = new point();
							r_pos.set(~~(c_width/2), ~~(c_height/3));
						}
						if(r_height === undefined)
						{
							r_height = ~~(c_height/2);
						}
						if(r_width === undefined)
						{
							r_width = +r_height + +r_height/2;
						}
						var rock_start_point = new point();
						rock_start_point.set(r_pos.x, r_pos.y - r_height);
						//console.log("sun_x: "+sun_pos_hor+" < mount_x: "+rock_start_point.x+ " c_width: "+c_width);
						//console.log("c_width: "+c_width);
						if(sun_pos_hor < rock_start_point.x)
						{
							//console.log("color change __");
							/**/
							var tmp_color0 = color1;
							color1 = color2;
							color2 = tmp_color0;
							/**/
						}

						var arry_left = [], arry_mid = [], arry_right = [], arry = [];
						var tmp_p1 = new point(), tmp_p2 = new point(), tmp_p3 = new point();

						function rock_point(p1, p2, randp, mod, h){
							var rr=randp;
							if (!(randp >0 && randp<100)) {
								rr = parseInt(Math.sqrt(Math.pow((p2.x - p1.x),2)+Math.pow((p2.y - p1.y),2))/10);
							}
							if(mod === undefined)
								mod=1;

							x_r=~~(randd(-rr,-rr/2)*mod);
							y_r=~~(randd(rr,rr/2));


							//x_r= -rr*mod;
							//y_r= -rr;
							if(h>0)
							{
								y_r	-= rr;
							}

							pn = new point();
							pn.x = parseInt((p1.x+p2.x)/2-x_r);
							pn.y = parseInt((p1.y+p2.y)/2-y_r);
							return pn;
							}

						function line_left(arry, max_i)
							{
							if(max_i === undefined)
								max_i = 7;
							var arry2=[];
							ar_l=0;
							for(p=0; p < max_i; p+=1)
								{
								ar_l = arry.length;
								arry2.push(arry[0]);
								for(k=0; k < ar_l-1; k++)
								{
									if(k%2==0)
									{
										arry2.push(rock_point(arry[k], arry[(k+1)], 9, 1, 1));
										arry2.push(rock_point(arry[k], arry[(k+1)], 9, -1));
									}
									arry2.push(arry[k+1]);
								}
								arry=[];
								arry=arry2;
								arry2=[];
								//console.log(arry);
								}
							return arry;
							}

							arry_left[0] = rock_start_point;
							var tl_x = ~~(rock_start_point.x - r_width/2);
							var tl_y = ~~(+rock_start_point.y + +r_height);
							tmp_p1.set(tl_x, tl_y);
							arry_left[1] = tmp_p1;
							arry_left = line_left(arry_left, 2);

						function line_mid(arry, max_i)
							{
							if(max_i === undefined)
								max_i = 2;
							max_i*=3;
							var arry2=[], new_p_x, new_p_y, new_p_x2, new_p_y2, new_p = new point(), rr=10, tmp_step;
							ar_l=0;
							var step = -(~~((arry[1].y-arry[0].y)/max_i));
							arry2[0]=arry[0];
							for(p=1; p < max_i; p+=1)
								{
								new_p_x = ~~(arry[0].x - randd(-rr, rr)*p*0.3);
								new_p_y = ~~(arry2[p-1].y - step);
								new_p_x2 = ~~(arry[0].x - randd(-rr, rr)*2*p*0.3);
								new_p_y2 = ~~(arry2[p-1].y - step*2.5);

								arry2[p] = new point();
								arry2[p].set(new_p_x, new_p_y);

								p++;
								arry2[p] = new point();
								arry2[p].set(new_p_x2, new_p_y2);

								p++;
								new_p_y = ~~(arry2[p-1].y - step);
								arry2[p] = new point();
								arry2[p].set(new_p_x, new_p_y2);
								}
							arry2[p]=arry[1];
							arry2[p].x-=randd(-step, step);
								arry=[];
								arry=arry2;
								arry2=[];
							return arry;
							}
							/**/
							arry_mid[0] = rock_start_point;
							var tm_x = ~~(rock_start_point.x);
							var tm_y = ~~(+rock_start_point.y + +r_height);
							tmp_p3.set(tm_x, tm_y);
							arry_mid[1] = tmp_p3;
							arry_mid = line_mid(arry_mid, 4);
							/**/

						function line_right(arry, max_i)
							{
							if(max_i === undefined)
								max_i = 7;
							var arry2=[];
							ar_l=0;
							for(p=0; p < max_i; p++)
								{
								ar_l=arry.length;
								arry2.push(arry[0]);
								for(k=0; k < ar_l-1; k++)
								{
									if(k%2==0)
									{
										arry2.push(rock_point(arry[k], arry[(k+1)], 9, -1, 1));
										arry2.push(rock_point(arry[k], arry[(k+1)], 9, 1));
									}
									arry2.push(arry[k+1]);
								}
								arry=[];
								arry=arry2;
								arry2=[];
								//console.log(arry);
								}
							return arry;
							}
							/**/arry_right[0] = rock_start_point;
							var tr_x = ~~(+rock_start_point.x + +r_width/2);
							var tr_y = ~~(+rock_start_point.y + +r_height);
							tmp_p2.set(tr_x, tr_y);
							arry_right[1] = tmp_p2; /**/
							arry_right = line_right(arry_right, 2);


							ctx.beginPath();

							var rock_rr = 0; //randd(-4,-1) * 5;
							arry = arry_left.reverse().concat(arry_right);

							for(e=0; e< arry.length; e++)
								{
								ctx.lineTo(arry[e].x, arry[e].y);
								//console.log("P: "+arry[e].x+" "+arry[e].y);

								}
							ctx.lineTo(arry[0].x, arry[0].y);

							ctx.fillStyle = rgba_change(color1, rock_rr);
							ctx.fill();


							arry = [];
							arry = arry_mid.reverse().concat(arry_right);

							ctx.beginPath();
							for(e=0; e< arry.length; e++)
								{
								ctx.lineTo(arry[e].x, arry[e].y);
								//console.log("P: "+arry[e].x+" "+arry[e].y);

								}
							ctx.lineTo(arry[0].x, arry[0].y);

							ctx.fillStyle = rgba_change(color2, rock_rr);
							ctx.fill();
							ctx.strokeStyle=rgba_change(color2, rock_rr);
							ctx.stroke();

							/*/
							ctx.beginPath();
							ctx.rect(r_pos.x-5, r_pos.y-5, 10, 10);
							ctx.fillStyle = "green";
							ctx.fill();
							/**/
					}

					var r_bott = new point();
					if(mr_point === undefined)
						{
						r_bott.set(~~(c_width/2), ~~(c_height*2/3));
						}
					else
						r_bott.set(mr_point.x, mr_point.y);

					print_rock(mr_color1, mr_color2, r_bott, mr_height);
				}
				var dr_bottom = new point(), dr_h, dr_w, dr_h_rnd;
				//dr_bottom.set(~~(c_width/2), ~~(c_height/3));
				var cl_rr = randd(-4,-1) * 5;
				var clr11 = rgba_change(main_color1, cl_rr);
				var clr22 = rgba_change(main_color2, cl_rr);
				var t_max = randd(0,9);
				var dr_b_x, dr_b_y;

				for(t=0; t<t_max; t++)
					{
					dr_b_x = ~~(c_width/2 - randd(-c_width/40, c_width/40)*10);
					dr_b_y = ~~(c_height*4/5 );
					dr_bottom.set(dr_b_x, dr_b_y);
					dr_h_rnd = randd(-c_height/6, c_height/6);
					dr_h = ~~(c_height/2 - dr_h_rnd);
					console.log("r height: "+dr_h);
					dr_w = ~~(dr_h*1.4 - randd(-c_width/6, c_width/46));
					make_rock(dr_bottom, dr_h, dr_w, clr11, clr22);
					}
			}

			/**
			 * @param {point} start point
			 * @param {number} main diametr
			 * @param {number} main height
			 *
			 */
			function make_cactus(mc_p1, mc_dt, mc_h){
				var mc_1 = new point(), mc_2 = new point(), mc_w;
				var db, rb;
				var f_direction = 1;
				var gap = 20;
				var m_x, m_y, bc1_x, bc1_y, bc2_x, bc2_y;

				if(mc_dt === undefined) // diameter trunk
					mc_dt = 20;
				db = ~~(mc_dt/3*2);     // inner diameter branch
				rb = ~~(db/5*2);        // outer radius branch

				if(mc_p1 === undefined)
					mc_1.set(100, 200);
				else
					mc_1.set(mc_p1.x, mc_p1.y)

				mc_2.set(+mc_1.x + +mc_dt, mc_1.y)

				if(mc_h === undefined)
					mc_h = 50;
				if(mc_w === undefined)
					mc_w = mc_2.x - mc_1.x;

				var rl = 10;
				var lb_line = mc_h/3*2 - randd(-rl, rl);
				var t1_line = +mc_h + +randd(rl, 30);
				var t2_line = randd(-rl*2, rl*2);
				var rb_line = mc_h/3*2 - randd(-rl, rl);
				var f_line = ~~randd(rl, mc_h/4*5);

				ctx.beginPath();
				ctx.moveTo(mc_1.x, mc_1.y); //strt
					m_x = mc_1.x; m_y = mc_1.y - f_line;
				ctx.lineTo(m_x, m_y); //fst line

					bc1_x = m_x - db -rb; bc1_y = m_y;
					bc2_x = bc1_x; bc2_y = bc1_y;
					m_x = m_x - db -rb; m_y = m_y  - db -rb;
				ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // left branch outer arc

					m_y = m_y-lb_line;
				ctx.lineTo(m_x, m_y); //left branch left line

					bc1_x = m_x; bc1_y = m_y - db/3*2;
					bc2_x = +m_x + +db; bc2_y = bc1_y;
					m_x = +m_x + +db;
				ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // left branch top arc

					m_y = +m_y + +lb_line;
				ctx.lineTo(m_x, m_y); //left branch right line

					bc1_x = m_x; bc1_y = +m_y + +rb;
					bc2_x = bc1_x; bc2_y = bc1_y
					m_x = +m_x + +rb; m_y = +m_y + +rb;
				ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // left branch inner arc

					m_y = m_y -t1_line;
				ctx.lineTo(m_x, m_y); //trunk left line

					bc1_x = m_x; bc1_y = m_y - mc_dt/3*2;
					bc2_x = +m_x + +mc_dt; bc2_y = bc1_y;
					m_x = +m_x + +mc_dt;
				ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // trunk top arc

					m_y = +m_y + +t1_line-t2_line;
				ctx.lineTo(m_x, m_y); //trunk right line

					bc1_x = +m_x + rb; bc1_y = m_y;
					bc2_x = bc1_x; bc2_y = bc1_y;
					m_x = +m_x + +rb; m_y = m_y - rb
				ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // right branch inner arc

					m_y = m_y -rb_line;
				ctx.lineTo(m_x, m_y); //right branch left line

					bc1_x = m_x; bc1_y = m_y - db/3*2;
					bc2_x = +m_x + +db; bc2_y = bc1_y;
					m_x = +m_x + +db;
				ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // right branch top arc

					m_y = +m_y + +rb_line;
				ctx.lineTo(m_x, m_y); //right branch right line

					bc1_x = m_x; bc1_y = +m_y + +rb + +db;
					bc2_x = bc1_x; bc2_y = bc1_y;
					m_x = m_x - rb - db; m_y = +m_y + +rb + +db
				ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // right branch outer arc

					m_y = mc_1.y;
				ctx.lineTo(m_x, m_y); //right trunk line
				ctx.stroke();
			}

			function draw_dr(){
				function print_dr_cactus(){
					/**
					 * @param {point} start point
					 * @param {number} main diametr
					 * @param {number} main height
					 *
					 */
					 /*/
					function make_cactus(mc_p1, mc_dt, mc_h){
						var mc_1 = new point(), mc_2 = new point(), mc_w;
						var db, rb;
						var f_direction = 1;
						var gap = 20;
						var m_x, m_y, bc1_x, bc1_y, bc2_x, bc2_y;

						if(mc_dt === undefined) // diameter trunk
							mc_dt = 20;
						db = ~~(mc_dt/3*2);     // inner diameter branch
						rb = ~~(db/5*2);        // outer radius branch

						if(mc_p1 === undefined)
							mc_1.set(100, 200);
						else
							mc_1.set(mc_p1.x, mc_p1.y)

						mc_2.set(+mc_1.x + +mc_dt, mc_1.y)

						if(mc_h === undefined)
							mc_h = 50;
						if(mc_w === undefined)
							mc_w = mc_2.x - mc_1.x;

						var rl = 10;
						var lb_line = mc_h/3*2 - randd(-rl, rl);
						var t1_line = +mc_h + +randd(rl, 30);
						var t2_line = randd(-rl*2, rl*2);
						var rb_line = mc_h/3*2 - randd(-rl, rl);
						var f_line = ~~randd(rl, mc_h/4*5);

						ctx.beginPath();
						ctx.moveTo(mc_1.x, mc_1.y); //strt
							m_x = mc_1.x; m_y = mc_1.y - f_line;
						ctx.lineTo(m_x, m_y); //fst line

							bc1_x = m_x - db -rb; bc1_y = m_y;
							bc2_x = bc1_x; bc2_y = bc1_y;
							m_x = m_x - db -rb; m_y = m_y  - db -rb;
						ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // left branch outer arc

							m_y = m_y-lb_line;
						ctx.lineTo(m_x, m_y); //left branch left line

							bc1_x = m_x; bc1_y = m_y - db/3*2;
							bc2_x = +m_x + +db; bc2_y = bc1_y;
							m_x = +m_x + +db;
						ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // left branch top arc

							m_y = +m_y + +lb_line;
						ctx.lineTo(m_x, m_y); //left branch right line

							bc1_x = m_x; bc1_y = +m_y + +rb;
							bc2_x = bc1_x; bc2_y = bc1_y
							m_x = +m_x + +rb; m_y = +m_y + +rb;
						ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // left branch inner arc

							m_y = m_y -t1_line;
						ctx.lineTo(m_x, m_y); //trunk left line

							bc1_x = m_x; bc1_y = m_y - mc_dt/3*2;
							bc2_x = +m_x + +mc_dt; bc2_y = bc1_y;
							m_x = +m_x + +mc_dt;
						ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // trunk top arc

							m_y = +m_y + +t1_line-t2_line;
						ctx.lineTo(m_x, m_y); //trunk right line

							bc1_x = +m_x + rb; bc1_y = m_y;
							bc2_x = bc1_x; bc2_y = bc1_y;
							m_x = +m_x + +rb; m_y = m_y - rb
						ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // right branch inner arc

							m_y = m_y -rb_line;
						ctx.lineTo(m_x, m_y); //right branch left line

							bc1_x = m_x; bc1_y = m_y - db/3*2;
							bc2_x = +m_x + +db; bc2_y = bc1_y;
							m_x = +m_x + +db;
						ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // right branch top arc

							m_y = +m_y + +rb_line;
						ctx.lineTo(m_x, m_y); //right branch right line

							bc1_x = m_x; bc1_y = +m_y + +rb + +db;
							bc2_x = bc1_x; bc2_y = bc1_y;
							m_x = m_x - rb - db; m_y = +m_y + +rb + +db
						ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // right branch outer arc

							m_y = mc_1.y;
						ctx.lineTo(m_x, m_y); //right trunk line
						ctx.stroke();
					}
					/**/
					var p = new point();
					p.set(100, 200);
					make_cactus(p, 20);
					p.set(200, 200);
					make_cactus(p, 30);
					p.set(300, 200);
					make_cactus(p, 20);
				}
				print_dr_cactus();
			}

			make_sky(main_color1, main_color2);
			print_stars(main_color2);
			var sun_color = make_sun();
			/**/
			draw_clouds();
			draw_rocks();
			print_hills(main_color1, main_color2);
			if(randd(0,1)==1)
			{
				make_land(main_color1, main_color2);
				make_forest(main_color1, main_color2);
			}
			// make_cave();

			/**/
			//draw_dr();
			return {
				clr1: main_color1,
				clr2: main_color2
				};
		} else {
			// canvas-unsupported code here
		}
		}
	function show_milepost(name, id){
		// показать background
		$("body").css("background", "#fff");
		if($("#background").length<1)
			$("body").prepend("<div id='background'></div>");

		var label = "<div id='milepost_label'>"+name+"</div>";
		var pole = "<div id='milepost_pole'></div>";
		var milepost = "<div id='milepost'>"+label+pole+"</div>";
		$("#"+id).html(milepost);

		var color_overlay = make_back_2();
		//console.log("c_o: "+color_overlay);
		make_texture(color_overlay);
		if(bg_blur ==1)
			$("#background").attr('class', 'blur');
	}
	$(window).resize(function(){
		make_back_2();
	});

	$('body').keyup(function(eventObject){
	 //alert('Клавиша клавиатуры приведена в нажатое состояние. Код вводимого символа - ' + eventObject.which);
	 if(eventObject.which == 16) // Shift
	 {
		 if($("#background").attr('class') == 'blur')
		 {
			 $("#background").removeAttr('class');
			 bg_blur = 0;
		 }
		 else
		 {
			 $("#background").attr('class', 'blur');
			 bg_blur = 1;
		 }
		localStorage.setItem("flag_blur", bg_blur);
	 }
	 if(eventObject.which == 192) //~
	 {
		 if($("#result").is(':visible'))
		 {
			 $("#result").hide();
			 milepost_visible = 0;
		 }
		 else
		 {
			 $("#result").show();
			 milepost_visible = 1;
		 }
		localStorage.setItem("flag_milepost", milepost_visible);
	 }
	 if(eventObject.which == 32 || eventObject.which == 13) //Space Enter
	 {
		$("#town_name").click();
	 }
	});

	$("body").on("click", "#go", function(){


		$("#result").html("");

		$("#result").append(make_street);

	});
	$("body").on("click", "#town_name", function(){


		$("#result").html("");
		show_milepost(make_town(), 'result');


	});
	make_generator();
	show_milepost(make_town(), 'result');




	$("body").on("click", "#info", function(){
		if($("#dbg").length<1)
		{
			$("body").append("<div id='dbg'></div>");
		}
		$("#dbg").show();
		if($(".mod_win").length<1)
		{
			$("body").append("<div class='mod_win'></div>");
		}
		$(".mod_win").show();


		$(".mod_win").html(info);
	});
	$("body").on("click", "#dbg", function(){
		$("#dbg").hide();
		$(".mod_win").hide();
	});
	$("body").on("click", ".info_toggle", function(){
		if($(this).text()=="Скрыть описание")
		{
			$(this).text("Показать описание");
			$(".description").slideUp();
		}
		else
		{
			$(this).text("Скрыть описание");
			$(".description").slideDown();
		}

		return false;
	});

});
