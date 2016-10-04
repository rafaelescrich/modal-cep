jQuery(function($){
	var localEntrega;

    var arrayCEP = [
	    22230090, 22231010, 22231020, 22231030, 22231040,  22231050, 22231060, 22250000, 22250010, 22250040, 22250140, 22250145, 22250150,
	    22250160, 22250170, 22250180, 22250190, 22250200, 22250210, 22250900, 22250901, 22250904, 22250905, 22250906, 22250907, 22250908, 22250909,
	    22251000, 22251010, 22251020, 22251030, 22251040, 22251050, 22251060, 22251070, 22251080, 22251090, 22260000, 22260001, 22260002, 22260003, 22260004,
	    22260005, 22260006, 22260007, 22260009, 22260010, 22260020, 22260030, 22260040, 22260050, 22260070, 22260080, 22260090, 22260100, 22260110, 22260120,
	    22260140, 22260900, 22270000, 22270001, 22270003, 22270005, 22270010, 22270012, 22270014, 22270016, 22270020, 22270030, 22270040, 22270050, 22270060,
	    22270070, 22270080, 22270901, 22270902, 22270903, 22271000, 22271010, 22271020, 22271021, 22271022, 22271030, 22271090, 22271091, 22271092, 22271100,
	    22271110, 22280002, 22280003, 22280004, 22280005, 22280010, 22280020, 22280030, 22280040, 22280050, 22280060, 22280070, 22280080, 22280090, 22280100,
	    22280110, 22280120, 22280130, 22281000, 22281010, 22281020, 22281032, 22281033, 22281034, 22281035, 22281036, 22281040, 22281050, 22281060, 22281070,
	    22281080, 22281090, 22281100, 22281110, 22281120, 22281131, 22281132, 22281140, 22281900, 22290000, 22290010, 22290020, 22290030, 22290031, 22290040,
	    22290060, 22290070, 22290080, 22290090, 22290130, 22290140, 22290150, 22290160, 22290170, 22290175, 22290190, 22290210, 22290230, 22290240, 22290901,
	    22290903, 22290904, 22290905, 22290906, 22460020, 22460030, 22460035, 22460036, 22460040, 22460050, 22460060, 22460070, 22460080, 22460090, 22460100,
	    22460110, 22460120, 22460130, 22460140, 22460170, 22460180, 22460190, 22460200, 22460210, 22460220, 22460230, 22460240, 22460250, 22460260, 22460280,
	    22460290, 22460300, 22460310, 22460320, 22460900, 22460901, 22460902, 22460903, 22460904, 22460905, 22461000, 22461010, 22461020, 22461030, 22461040,
	    22461050, 22461060, 22461070, 22461080, 22461090, 22461100, 22461110, 22461120, 22461130, 22461140, 22461151, 22461152, 22461160, 22461070, 22461190,
	    22461200, 22461210, 22461230, 22461240, 22461250, 22461260, 22010000, 22011001, 22011002, 22011010, 22011020, 22011030, 22011040, 22011050, 22011060,
	    22011080, 22011090, 22011100, 22011900, 22011901, 22020001, 22020002, 22020010, 22020020, 22020030, 22020040, 22020050, 22020060, 22020070, 22021000,
	    22021001, 22021010, 22021020, 22021030, 22021040, 22021050, 22061900, 22070000, 22070001, 22070002, 22210030, 22210040, 22210050, 22210060, 22210065,
	    22210070, 22210080, 22210085, 22210901, 22210902, 22210903, 22210904, 22210905, 22210906, 22220030, 22220040, 22220050, 22220060, 22220080, 22220900,
	    22221000, 22230000, 22230001, 22230010, 22230020, 22230030, 22230040, 22230050, 22230060, 22230061, 22230080, 22230900, 22230901, 22230902, 22230903,
	    22231130, 22231140, 22231150, 22250020, 22250030, 22250050, 22250060, 22250080, 22250090, 22250100, 22250110, 22250120, 22250902, 22250903, 22221070,
	    22221080, 22221090, 22221100, 22221130, 22221140, 22231080, 22231090, 22231100, 22231110, 22231120, 22231160, 22231170, 22231180, 22231190, 22231200,
	    22231220, 22231900, 22231901, 22240000, 22240003, 22240004, 22240005, 22240006, 22240020, 22240060, 22240070, 22240100, 22240110, 22240130, 22240140,
	    22240150, 22240160, 22240170, 22240900, 22241000, 22241010, 22241020, 22245000, 22245030, 22245040, 22245070, 22245080, 22245090, 22245100, 22245110,
	    22245120, 22245130, 22245140, 22245150, 22261070, 22460000, 22460010, 22460011, 22460012, 22460014, 22470040, 22470050, 22470051, 22470110, 22470150,
	    22470180, 22071050, 22210000, 22410100, 22411080, 22461220, 22470001, 22470002, 22470003, 22470004, 22430030, 22430041, 22430042, 22430050, 22430060,
	    22430070, 22430080, 22430090, 22430100, 22430110, 22430120, 22430130, 22430140, 22430160, 22430170, 22430180, 22430190, 22430200, 22430210, 22430220,
	    22431000, 22431001, 22431002, 22431003, 22431004, 22431010, 22431020, 22431030, 22431040, 22431050, 22431070, 22431080, 22440000, 22440005, 22440020,
	    22440032, 22440033, 22440034, 22440035, 22440040, 22440050, 22440060, 22440900, 22440901, 22441000, 22441012, 22441013, 22441014, 22441015, 22441020,
	    22441025, 22441030, 22441040, 22441050, 22441060, 22441070, 22441080, 22441090, 22441100, 22441110, 22441120, 22441130, 22441140, 22450000, 22450001,
	    22450002, 22450003, 22450020, 22450030, 22450040, 22450050, 22450070, 22450080, 22450090, 22450100, 22450110, 22450120, 22450130, 22450140, 22450150,
	    22450160, 22450170, 22450180, 22450190, 22450200, 22450210, 22430150, 22431008, 22450060, 22450290, 22451000, 22451010, 22451020, 22451030, 22451040,
	    22451041, 22451042, 22451044, 22451045, 22451047, 22451050, 22451060, 22451070, 22451080, 22451090, 22451100, 22451110, 22451120, 22451130, 22451140,
	    22451150, 22451160, 22451170, 22451180, 22451190, 22451210, 22451220, 22451230, 22451240, 22451250, 22451262, 22451263, 22451264, 22451265, 22451270,
	    22451280, 22451290, 22451300, 22451310, 22451320, 22451330, 22451420, 22451430, 22451200, 22451900, 22451901, 22470060, 22470070, 22470090, 22470100,
	    22610030, 22610170, 22610320, 22430150, 22431008, 22450060, 22450290, 22451000, 22451010, 22451020, 22451030, 22451040, 22451041, 22451042, 22451044,
	    22451045, 22451047, 22451050, 22451060, 22451070, 22451080, 22451090, 22451100, 22451110, 22451120, 22451130, 22451140, 22451150, 22451160, 22451170,
	    22451180, 22451190, 22451200, 22451210, 22451220, 22451230, 22451240, 22451250, 22451262, 22451263, 22451264, 22451265, 22451270, 22451280, 22451290,
	    22451300, 22451310, 22451320, 22451330, 22451900, 22451901, 22470060, 22470070, 22470090, 22470100, 22610030, 22610170, 22610320, 22641002, 22641003,
	    22641004, 22641005, 22641010, 22641020, 22641030, 22641040, 22641050, 22641060, 22641070, 22641080, 22641090, 22641100, 22641110, 22641120, 22641130,
	    22641140, 22641150, 22641160, 22641170, 22641180, 22641190, 22641195, 22641200, 22641210, 22641220, 22641222, 22641250, 22641260, 22641270, 22641280,
	    22641290, 22641300, 22641310, 22641320, 22641330, 22641340, 22641370, 22641420, 22641430, 22641435, 22641440, 22641450, 22641460, 22641470, 22641480,
	    22641490, 22641500, 22641504, 22641506, 22641508, 22641510, 22641512, 22641514, 22641516, 22641518, 22641530, 22641540, 22641550, 22641560, 22641564,
	    22641565, 22641566, 22641567, 22641569, 22641570, 22641572, 22641573, 22641574, 22641580, 22641590, 22641600, 22641610, 22641620, 22641630, 22641640,
	    22641650, 22641660, 22641680, 22641681, 22641690, 22641700, 22641710, 22641722, 22641724, 22753000, 22753005, 22753010, 22753020, 22753030, 22753031,
	    22753032, 22753035, 22753053, 22753060, 22753065, 22753070, 22753073, 22753075, 22753080, 22753083, 22753085, 22753090, 22611030, 22611040, 22611050,
	    22611060, 22611070, 22611080, 22611190, 22611201, 22611202, 22611220, 22611230, 22611240, 22611250, 22611260, 22611270, 22611280, 22611290, 22611300,
	    22620000, 22620011, 22620012, 22620020, 22620031, 22620032, 22620040, 22620050, 22620061, 22620062, 22620070, 22620081, 22620082, 22620090, 22620100,
	    22620110, 22620120, 22620130, 22620140, 22620150, 22620160, 22620170, 22620171, 22620172, 22620180, 22620190, 22620200, 22620210, 22620220, 22620230,
	    22620240, 22620250, 22620260, 22620270, 22620280, 22620290, 22620300, 22620310, 22620311, 22620320, 22620330, 22620340, 22620350, 22620360, 22620370,
	    22620380, 22620390, 22620400, 22620900, 22620901, 22620902, 22620904, 22620905, 22621000, 22621010, 22621020, 22621030, 22621040, 22621050, 22621060,
	    22621070, 22621080, 22621090, 22621100, 22621110, 22621120, 22621130, 22621140, 22621150, 22621160, 22621170, 22621180, 22621190, 22621200, 22621210,
	    22621221, 22621222, 22621231, 22621232, 22621242, 22621243, 22621244, 22621245, 22621251, 22621252, 22621260, 22621270, 22621280, 22621290, 22621300,
	    22621310, 22630000, 22630005, 22630010, 22630011, 22630012, 22630013, 22630020, 22630021, 22630022, 22630030, 22630050, 22630060, 22640906, 22640907,
	    22641002, 22641003, 22641004, 22641005, 22630070, 22630080, 22630090, 22630100, 22630110, 22630120, 22630140, 22630150, 22630160, 22630170, 22630180,
	    22630190, 22630200, 22630210, 22630220, 22630230, 22630240, 22630250, 22630260, 22630270, 22630280, 22630290, 22630300, 22630310, 22630320, 22630330,
	    22630340, 22630350, 22630360, 22630370, 22630390, 22630400, 22630410, 22630420, 22630430, 22630440, 22630900, 22630901, 22631000, 22631001, 22631002,
	    22631003, 22631004, 22631005, 22631010, 22631020, 22631030, 22631040, 22631051, 22631052, 22631054, 22631060, 22631070, 22631080, 22631090, 22631100,
	    22631110, 22631120, 22631130, 22631140, 22631150, 22631160, 22631170, 22631180, 22631190, 22631200, 22631210, 22631220, 22631230, 22631240, 22631250,
	    22631260, 22631270, 22631280, 22631290, 22631300, 22631310, 22631320, 22631330, 22631340, 22631350, 22631360, 22631370, 22631380, 22631390, 22631400,
	    22631410, 22631420, 22631430, 22631440, 22631450, 22631455, 22631460, 22631470, 22631900, 22631901, 22631902, 22631903, 22631904, 22631905, 22631906,
	    22631907, 22631908, 22640000, 22640010, 22640015, 22640020, 22640030, 22640032, 22640034, 22640036, 22640040, 22640050, 22640060, 22640070, 22640085,
	    22640100, 22640101, 22640102, 22640105, 22640110, 22640120, 22640130, 22640140, 22640150, 22640160, 22640170, 22640180, 22640190, 22640200, 22640210,
	    22640220, 22640230, 22640240, 22640250, 22640260, 22640270, 22640280, 22640290, 22640300, 22640330, 22640332, 22640334, 22640336, 22640338, 22640340,
	    22640342, 22640344, 22640346, 22640348, 22640350, 22640352, 22640354, 22640356, 22640358, 22640900, 22640901, 22640902, 22640903, 22640904, 22640905,
	    22641520, 22641670, 22641900, 22775001, 22775002, 22775003, 22775036, 22775039, 22775040, 22775044, 22775050, 22775055, 22775056, 22775057, 22775900,
	    22775904, 22775905, 22776000, 22776010, 22776020, 22776030, 22776040, 22776050, 22776060, 22776070, 22776080, 22776090, 22790021, 22790400, 22790490,
	    22790491, 22790492, 22790493, 22790494, 22790495, 22790500, 22790515, 22790640, 22790690, 22790701, 22790702, 22790703, 22790704, 22790715, 22790765,
	    22790775, 22793000, 22793001, 22793002, 22793011, 22793012, 22793020, 22793030, 22793040, 22793050, 22793060, 22793070, 22793071, 22793072, 22793073,
	    22793074, 22793075, 22793076, 22793077, 22793078, 22793079, 22793080, 22793081, 22793082, 22793084, 22793095, 22793098, 22793100, 22793102, 22793104,
	    22793105, 22793106, 22793108, 22793110, 22793112, 22793114, 22793116, 22793118, 22793120, 22793122, 22793124, 22793126, 22793128, 22793130, 22793132,
	    22793134, 22793136, 22793138, 22793140, 22793142, 22793144, 22793150, 22793155, 22793160, 22793162, 22793163, 22793164, 22793165, 22793166, 22793167,
	    22793170, 22793172, 22793173, 22793174, 22793175, 22793176, 22793177, 22793178, 22793180, 22793182, 22793184, 22793185, 22793186, 22793187, 22793190,
	    22793200, 22793210, 22793220, 22793230, 22793235, 22793236, 22793240, 22793245, 22793250, 22793255, 22793260, 22793261, 22793262, 22793263, 22793264,
	    22793265, 22793266, 22793267, 22793268, 22793269, 22793270, 22793271, 22793272, 22793273, 22793274, 22793275, 22793276, 22793277, 22793280, 22793281,
	    22793282, 22793283, 22793285, 22793290, 22793291, 22793292, 22793293, 22793294, 22793295, 22793296, 22793297, 22793298, 22793300, 22793302, 22793305,
	    22793310, 22793311, 22793312, 22793313, 22793314, 22793315, 22793316, 22793317, 22793318, 22793319, 22793320, 22793321, 22793322, 22793323, 22793324,
	    22793325, 22793326, 22793327, 22793328, 22793329, 22793330, 22793331, 22793332, 22793333, 22793334, 22793335, 22793336, 22793337, 22793338, 22793339,
	    22793340, 22793341, 22793342, 22793343, 22793345, 22793350, 22793355, 22793360, 22793365, 22793370, 22793380, 22793390, 22793395, 22793400, 22793410,
	    22793420, 22793430, 22793440, 22793450, 22793460, 22793470, 22793480, 22793500, 22793510, 22793520, 22793530, 22793540, 22793550, 22793560, 22793570,
	    22793580, 22793590, 22793600, 22793610, 22793620, 22793630, 22793640, 22793650, 22793660, 22793670, 22793680, 22793690, 22793700, 22793710, 22793720,
	    22793730, 22793740, 22793750, 22793760, 22793770, 22793780, 22793790, 22793800, 22793810, 22793820, 22793830, 22793840, 22793900, 22793901, 22793902,
	    22793903, 22793904, 22793905, 22793906, 22793907, 22793909, 22793910, 22793911, 22793912, 22793913, 22793914, 22793915, 22793916, 22793917, 22793918,
	    22793919, 22793920, 22793921, 22793922, 22793923, 22793924, 22793925, 22793926, 22795006, 22795007, 22795180, 22795190, 22795245, 22795246, 22795250,
	    22795300, 22795320, 22795330, 22795370, 22795420, 22795430, 22795641, 22795690, 22795900, 22795901, 22030000, 22030001, 22030002, 22030010, 22030020,
	    22030030, 22030040, 22030050, 22030900, 22031000, 22031010, 22031011, 22031012, 22031020, 22031030, 22031040, 22031050, 22031060, 22031070, 22031071,
	    22031072, 22031090, 22031100, 22031120, 22031900, 22031901, 22040001, 22040002, 22040010, 22040020, 22040030, 22040040, 22040041, 22040042, 22040050,
	    22040900, 22040901, 22041001, 22041010, 22041011, 22041012, 22041020, 22041030, 22041040, 22041050, 22041060, 22041070, 22041080, 22041090, 22041900,
	    22041901, 22041902, 22050001, 22050002, 22050010, 22050011, 22050020, 22050030, 22050031, 22050032, 22050900, 22050901, 22050902, 22050903, 22051000,
	    22051001, 22051002, 22051010, 22051011, 22051012, 22051020, 22051030, 22060001, 22060002, 22060020, 22060030, 22060040, 22060900, 22061000, 22061010,
	    22061020, 22061030, 22061040, 22061050, 22061060, 22061070, 22061080, 22070011, 22070012, 22070020, 22070900, 22071000, 22071010, 22071020, 22071030,
	    22071100, 22080000, 22080001, 22080002, 22080010, 22080030, 22080040, 22080041, 22081000, 22081010, 22081020, 22081025, 22081030, 22081031, 22081032,
	    22470010, 22470030, 22470120, 22470130, 22470170, 22470190, 22470201, 22470202, 22470210, 22470220, 22470230, 22470240, 22470280, 22470290, 22470300,
	    22471002, 22471003, 22471004, 22471006, 22471060, 22471070, 22471080, 22471090, 22471100, 22471110, 22471120, 22471130, 22471140, 22471150, 22471160,
	    22471170, 22471180, 22471190, 22471200, 22471210, 22471220, 22471230, 22471240, 22471250, 22471270, 22471310, 22471330, 22471340, 22071110, 22080045,
	    22080046, 22080050, 22080060, 22080070, 22081040, 22081041, 22081042, 22081050, 22081060, 22410000, 22410001, 22410002, 22410003, 22410010, 22410020,
	    22410030, 22410040, 22410050, 22410060, 22410070, 22410080, 22410090, 22410900, 22410901, 22410902, 22410903, 22410904, 22410905, 22410906, 22411000,
	    22411001, 22411002, 22411003, 22411010, 22411020, 22411030, 22411040, 22411050, 22411060, 22411071, 22411072, 22420000, 22420002, 22420004, 22420006,
	    22420008, 22420010, 22420012, 22420020, 22420030, 22420040, 22420041, 22420042, 22420043, 22421000, 22421010, 22421020, 22421022, 22421023, 22421024,
	    22421025, 22421026, 22421027, 22421028, 22421029, 22421030, 22430000, 22430010, 22430020
	    ];


	$(document).ready(function() {
	    $('#modalCEP').modal({keyboard: true});
	    $('#modalCEP').modal('show');
		$("#cep").mask("99999-999");
	});
	
	$.fn.verificaCEP = function() {
		$.fn.buscaCEP(document.getElementById("cep").value) ? $.fn.mostraModalResposta("entrega") : $.fn.mostraModalResposta("naoEntrega");
	};
	
	$.fn.buscaCEP = function(cep) {
		var cepLimpo = cep.replace(/-/g, "");
		cepLimpo = parseInt(cepLimpo);
		var entregavel = false;
		for (var i = 0; i < arrayCEP.length; i++) {
			if(arrayCEP[i]==cepLimpo) {
				if(cepLimpo >= 22260160 && cepLimpo <= 22271080) {
					localEntrega = 'Humaitá';
				} else if (cepLimpo >= 22230090 && cepLimpo <= 22290906) {
					localEntrega = 'Botafogo';
				} else if (cepLimpo >= 22460020 && cepLimpo <= 22461260) {
					localEntrega = 'Jardim Botânico';
				} else if (cepLimpo >= 22010000 && cepLimpo <= 22070002) {
					localEntrega = 'Copacabana';
				} else if (cepLimpo >= 22210030 && cepLimpo <= 22250903) {
					localEntrega = 'Flamengo';
				} else if (cepLimpo >= 22221070 && cepLimpo <= 22245150) {
					localEntrega = 'Laranjeiras';
				}
			  entregavel = true;
			    break;
			} else {
			  entregavel = false;
			}
		}
		return entregavel;
	};
	
	$.fn.mostraModalResposta = function(tipoModal) {
	    if (tipoModal == "entrega") {
	    	document.getElementById("localEntrega").innerHTML = localEntrega;
	        $('#modalCEP').modal('hide');
	        $('#modalResposta').modal('show');
	        $('#entrega').show();
	    }
	    if (tipoModal == "naoEntrega") {
	        $('#modalCEP').modal('hide');
	        $('#modalResposta').modal('show');
	        $('#naoEntrega').show();
	    }
	};
       
});