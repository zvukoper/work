function addEvent3(person1, person2, person3, name, comment, sday, eday, start, end, month, year)
{

	var i = sday;
	while (i <= eday) {
		/// LOOP HERE
		var day = i;
		Ext.Ajax.request({
			url: 'coord/event',
			params: {
				xaction: 'create',
				data: '{"event":{"type_id":4,"dragResize":true,"stopdate":"'+year+'-'+month+'-'+day+'T'+end+':00","startdate":"'+year+'-'+month+'-'+day+'T'+start+':00","name":"'+name+'","comment":'+comment+',"user_id":'+person1+', "staff":[{"staff_id":57,"user_id":'+person2+',"tabel_apparature":true},{"staff_id":57,"user_id":'+person3+',"tabel_apparature":true}]}}'
			},
			callback: function(opt, suc, resp){
				if (suc){
					console.log(resp);
				}
			}
		});
		/// LOOP HERE END
		i++;
	}
};
function addEvent2(person1, person2, name, comment, sday, eday, start, end, month, year)
{

	var i = sday;
	while (i <= eday) {
		/// LOOP HERE
		var day = i;
		Ext.Ajax.request({
			url: 'coord/event',
			params: {
				xaction: 'create',
				data: '{"event":{"type_id":4,"dragResize":true,"stopdate":"'+year+'-'+month+'-'+day+'T'+end+':00","startdate":"'+year+'-'+month+'-'+day+'T'+start+':00","name":"'+name+'","comment":'+comment+',"user_id":'+person1+', "staff":[{"staff_id":57,"user_id":'+person2+',"tabel_apparature":true}]}}'
			},
			callback: function(opt, suc, resp){
				if (suc){
					console.log(resp);
				}
			}
		});
		/// LOOP HERE END
		i++;
	}
};

//ДИЗАЙНЕРЫ
var Mamaev = 960;
var Nikitin = 239;
var Akberov = 693;
var Sadovschikov = 1129;
var Kryzhnev = 978;
var Moroz = 927;
var Docenko = 241;
var Klimenkov = 692;
var Ilyushnikov = 592;

//РЕЖИССЁРЫ
var Sokolova = 319;
var Sokurova = 505;
var Ionin = 457;
var Ryabov = 146;
var Kanev = 141;
var Mamonova = 274;
var Shulz = 635;
var Smirnov = 787;
var Semenuta = 506;
var Yakimov = 394;

// +
var Belonogova = 1169;
var Porotnikov = 866;
var Saulyak = 675;
var Ushkov = 708;
var Malyshkin = 926;
var Boroday = 242;


addEvent2(Nikitin, Mamaev, "НАЗВАНИЕ", "ОПИСАНИЕ (пробел если не нужно)", "30", "30", "10:00", "11:00", "05", "2019"); //два участника
addEvent3(Nikitin, Mamaev, Boroday, "НАЗВАНИЕ", "ОПИСАНИЕ (пробел если не нужно)", "30", "30", "10:00", "11:00", "05", "2019"); // три участника
