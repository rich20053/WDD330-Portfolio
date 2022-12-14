
const testData = [
    {
        id: 1,
        fname: 'Lebron1',
        lname: 'James1',
        team: 'LAL1',
        position: 'PF',
        games:  25,
        points: 250,
        rebounds: 200,
        assists: 150,
        steals: 105,
        blocks: 65,   
        index: 0      
    },
    {
        id: 2,
        fname: 'Lebron3',
        lname: 'James3',
        team: 'LAL',
        position: 'PF',
        games:  25,
        points: 250,
        rebounds: 200,
        assists: 150,
        steals: 105,
        blocks: 65,   
        index: 1      
    },
    {
        id: 3,
        fname: '3Lebron',
        lname: '3James',
        team: 'LAL',
        position: 'PF',
        games:  25,
        points: 250,
        rebounds: 200,
        assists: 150,
        steals: 105,
        blocks: 65,   
        index: 2      
    },
    {
        id: 4,
        fname: '4Lebron',
        lname: 'J4ames',
        team: 'LAL',
        position: 'PF',
        games:  25,
        points: 250,
        rebounds: 200,
        assists: 150,
        steals: 105,
        blocks: 65,   
        index: 3      
    },
    {
        id: 5,
        fname: '5Lebron',
        lname: 'James',
        team: 'LAL',
        position: 'PF',
        games:  25,
        points: 250,
        rebounds: 200,
        assists: 150,
        steals: 105,
        blocks: 65,   
        index: 4      
    }
];

const jsonPlayerData = [{"id":20000441,"fname":"Bradley","lname":"Beal","team":"WAS","position":"SG","games":"49","points":"792","rebounds":"240","assists":"412","steals":"6","blocks":"109","index":0},{"id":20000442,"fname":"John","lname":"Wall","team":"LAC","position":"PG","games":"49","points":"920","rebounds":"188","assists":"356","steals":"258","blocks":"114","index":1},{"id":20000443,"fname":"Otto","lname":"Porter Jr.","team":"TOR","position":"SF","games":"48","points":"1335","rebounds":"17","assists":"109","steals":"61","blocks":"102","index":2},{"id":20000452,"fname":"Garrett","lname":"Temple","team":"NO","position":"SG","games":"55","points":"1454","rebounds":"37","assists":"370","steals":"51","blocks":"23","index":3},{"id":20000453,"fname":"Terrence","lname":"Ross","team":"ORL","position":"SG","games":"54","points":"89","rebounds":"236","assists":"569","steals":"91","blocks":"204","index":4},{"id":20000455,"fname":"Jonas","lname":"Valanciunas","team":"NO","position":"C","games":"47","points":"940","rebounds":"204","assists":"174","steals":"253","blocks":"32","index":5},{"id":20000456,"fname":"DeMar","lname":"DeRozan","team":"CHI","position":"SF","games":"45","points":"693","rebounds":"517","assists":"481","steals":"266","blocks":"18","index":6},{"id":20000457,"fname":"Kyle","lname":"Lowry","team":"MIA","position":"PG","games":"55","points":"468","rebounds":"272","assists":"408","steals":"32","blocks":"80","index":7},{"id":20000464,"fname":"James","lname":"Johnson","team":"IND","position":"PF","games":"58","points":"1414","rebounds":"716","assists":"480","steals":"181","blocks":"142","index":8},{"id":20000468,"fname":"Anthony","lname":"Davis","team":"LAL","position":"C","games":"49","points":"1321","rebounds":"722","assists":"269","steals":"233","blocks":"112","index":9},{"id":20000471,"fname":"Eric","lname":"Gordon","team":"HOU","position":"SF","games":"51","points":"584","rebounds":"301","assists":"129","steals":"148","blocks":"139","index":10},{"id":20000474,"fname":"Jrue","lname":"Holiday","team":"MIL","position":"PG","games":"52","points":"829","rebounds":"661","assists":"459","steals":"113","blocks":"138","index":11},{"id":20000482,"fname":"Draymond","lname":"Green","team":"GS","position":"PF","games":"51","points":"963","rebounds":"728","assists":"176","steals":"185","blocks":"202","index":12},{"id":20000483,"fname":"Harrison","lname":"Barnes","team":"SAC","position":"SF","games":"56","points":"501","rebounds":"783","assists":"263","steals":"76","blocks":"206","index":13},{"id":20000485,"fname":"Stephen","lname":"Curry","team":"GS","position":"PG","games":"55","points":"893","rebounds":"646","assists":"20","steals":"214","blocks":"200","index":14},{"id":20000486,"fname":"Klay","lname":"Thompson","team":"GS","position":"SG","games":"46","points":"1047","rebounds":"290","assists":"54","steals":"129","blocks":"36","index":15},{"id":20000487,"fname":"Andre","lname":"Iguodala","team":"GS","position":"SF","games":"57","points":"969","rebounds":"256","assists":"25","steals":"58","blocks":"23","index":16},{"id":20000492,"fname":"Justin","lname":"Holiday","team":"ATL","position":"SF","games":"53","points":"1014","rebounds":"790","assists":"421","steals":"166","blocks":"184","index":17},{"id":20000497,"fname":"Giannis","lname":"Antetokounmpo","team":"MIL","position":"PF","games":"56","points":"974","rebounds":"421","assists":"577","steals":"184","blocks":"53","index":18},{"id":20000500,"fname":"Khris","lname":"Middleton","team":"MIL","position":"SF","games":"48","points":"37","rebounds":"278","assists":"285","steals":"151","blocks":"117","index":19},{"id":20000515,"fname":"Jimmy","lname":"Butler","team":"MIA","position":"SF","games":"47","points":"711","rebounds":"411","assists":"180","steals":"259","blocks":"20","index":20},{"id":20000516,"fname":"Derrick","lname":"Rose","team":"NY","position":"PG","games":"55","points":"1549","rebounds":"381","assists":"335","steals":"25","blocks":"31","index":21},{"id":20000517,"fname":"Taj","lname":"Gibson","team":"WAS","position":"PF","games":"57","points":"1450","rebounds":"849","assists":"250","steals":"188","blocks":"107","index":22},{"id":20000522,"fname":"Doug","lname":"McDermott","team":"SA","position":"SF","games":"60","points":"576","rebounds":"447","assists":"452","steals":"27","blocks":"32","index":23},{"id":20000539,"fname":"Dwight","lname":"Powell","team":"DAL","position":"C","games":"54","points":"387","rebounds":"53","assists":"556","steals":"180","blocks":"17","index":24},{"id":20000544,"fname":"James","lname":"Harden","team":"PHI","position":"SG","games":"59","points":"1699","rebounds":"412","assists":"543","steals":"127","blocks":"39","index":25},{"id":20000549,"fname":"Clint","lname":"Capela","team":"ATL","position":"C","games":"50","points":"964","rebounds":"728","assists":"74","steals":"34","blocks":"16","index":26},{"id":20000554,"fname":"Patrick","lname":"Beverley","team":"LAL","position":"PG","games":"49","points":"273","rebounds":"521","assists":"382","steals":"202","blocks":"192","index":27},{"id":20000560,"fname":"Marcus","lname":"Smart","team":"BOS","position":"PG","games":"56","points":"1269","rebounds":"16","assists":"34","steals":"317","blocks":"109","index":28},{"id":20000562,"fname":"Jae","lname":"Crowder","team":"PHO","position":"PF","games":"58","points":"479","rebounds":"822","assists":"692","steals":"31","blocks":"185","index":29},{"id":20000564,"fname":"Kelly","lname":"Olynyk","team":"UTA","position":"C","games":"48","points":"244","rebounds":"674","assists":"111","steals":"157","blocks":"68","index":30},{"id":20000571,"fname":"LeBron","lname":"James","team":"LAL","position":"SF","games":"50","points":"1347","rebounds":"73","assists":"491","steals":"254","blocks":"165","index":31},{"id":20000572,"fname":"Kevin","lname":"Love","team":"CLE","position":"PF","games":"51","points":"728","rebounds":"697","assists":"602","steals":"229","blocks":"58","index":32},{"id":20000574,"fname":"Kyrie","lname":"Irving","team":"BKN","position":"PG","games":"59","points":"572","rebounds":"307","assists":"127","steals":"188","blocks":"24","index":33},{"id":20000579,"fname":"Matthew","lname":"Dellavedova","team":"SAC","position":"PG","games":"46","points":"963","rebounds":"498","assists":"211","steals":"260","blocks":"121","index":34},{"id":20000584,"fname":"Joe","lname":"Harris","team":"BKN","position":"SF","games":"59","points":"1170","rebounds":"400","assists":"165","steals":"314","blocks":"34","index":35},{"id":20000587,"fname":"Thaddeus","lname":"Young","team":"TOR","position":"PF","games":"50","points":"573","rebounds":"542","assists":"592","steals":"123","blocks":"152","index":36},{"id":20000588,"fname":"Brook","lname":"Lopez","team":"MIL","position":"C","games":"50","points":"349","rebounds":"418","assists":"216","steals":"87","blocks":"9","index":37},{"id":20000591,"fname":"Bojan","lname":"Bogdanovic","team":"DET","position":"PF","games":"56","points":"1664","rebounds":"157","assists":"246","steals":"2","blocks":"100","index":38},{"id":20000594,"fname":"Mason","lname":"Plumlee","team":"CHA","position":"C","games":"59","points":"1363","rebounds":"48","assists":"596","steals":"183","blocks":"95","index":39},{"id":20000603,"fname":"Al","lname":"Horford","team":"BOS","position":"C","games":"57","points":"834","rebounds":"518","assists":"487","steals":"120","blocks":"3","index":40},{"id":20000606,"fname":"Dennis","lname":"Schr??der","team":"LAL","position":"PG","games":"55","points":"782","rebounds":"147","assists":"636","steals":"16","blocks":"155","index":41},{"id":20000613,"fname":"Mike","lname":"Muscala","team":"OKC","position":"PF","games":"56","points":"1039","rebounds":"569","assists":"233","steals":"210","blocks":"89","index":42},{"id":20000617,"fname":"Nicolas","lname":"Batum","team":"LAC","position":"PF","games":"56","points":"991","rebounds":"7","assists":"158","steals":"28","blocks":"182","index":43},{"id":20000618,"fname":"Robin","lname":"Lopez","team":"CLE","position":"C","games":"50","points":"549","rebounds":"615","assists":"485","steals":"57","blocks":"100","index":44},{"id":20000619,"fname":"Damian","lname":"Lillard","team":"POR","position":"PG","games":"54","points":"299","rebounds":"29","assists":"509","steals":"101","blocks":"45","index":45},{"id":20000620,"fname":"CJ","lname":"McCollum","team":"NO","position":"PG","games":"58","points":"880","rebounds":"434","assists":"265","steals":"245","blocks":"220","index":46},{"id":20000629,"fname":"Wesley","lname":"Matthews","team":"MIL","position":"SG","games":"59","points":"328","rebounds":"836","assists":"529","steals":"47","blocks":"227","index":47},{"id":20000632,"fname":"Jeff","lname":"Green","team":"DEN","position":"PF","games":"50","points":"539","rebounds":"32","assists":"106","steals":"139","blocks":"29","index":48},{"id":20000635,"fname":"Mike","lname":"Conley","team":"UTA","position":"PG","games":"57","points":"864","rebounds":"841","assists":"622","steals":"179","blocks":"203","index":49},{"id":20000642,"fname":"JaMychal","lname":"Green","team":"GS","position":"PF","games":"48","points":"559","rebounds":"341","assists":"194","steals":"240","blocks":"127","index":50},{"id":20000646,"fname":"Kawhi","lname":"Leonard","team":"LAC","position":"SF","games":"59","points":"812","rebounds":"335","assists":"497","steals":"22","blocks":"120","index":51},{"id":20000650,"fname":"Danny","lname":"Green","team":"MEM","position":"SG","games":"60","points":"751","rebounds":"883","assists":"516","steals":"58","blocks":"1","index":52},{"id":20000655,"fname":"Cory","lname":"Joseph","team":"DET","position":"PG","games":"53","points":"1167","rebounds":"720","assists":"387","steals":"186","blocks":"194","index":53},{"id":20000656,"fname":"Patty","lname":"Mills","team":"BKN","position":"PG","games":"47","points":"1271","rebounds":"22","assists":"518","steals":"127","blocks":"31","index":54},{"id":20000659,"fname":"Kyle","lname":"Anderson","team":"MIN","position":"SF","games":"50","points":"248","rebounds":"596","assists":"127","steals":"213","blocks":"69","index":55},{"id":20000661,"fname":"Blake","lname":"Griffin","team":"BOS","position":"PF","games":"59","points":"270","rebounds":"492","assists":"224","steals":"323","blocks":"6","index":56},{"id":20000663,"fname":"DeAndre","lname":"Jordan","team":"DEN","position":"C","games":"56","points":"1557","rebounds":"348","assists":"233","steals":"212","blocks":"99","index":57},{"id":20000664,"fname":"Chris","lname":"Paul","team":"PHO","position":"PG","games":"47","points":"783","rebounds":"467","assists":"466","steals":"277","blocks":"79","index":58},{"id":20000667,"fname":"Austin","lname":"Rivers","team":"MIN","position":"PG","games":"45","points":"238","rebounds":"3","assists":"201","steals":"111","blocks":"50","index":59},{"id":20000676,"fname":"Tobias","lname":"Harris","team":"PHI","position":"SF","games":"59","points":"927","rebounds":"871","assists":"470","steals":"118","blocks":"24","index":60},{"id":20000678,"fname":"Nikola","lname":"Vucevic","team":"CHI","position":"C","games":"54","points":"759","rebounds":"205","assists":"621","steals":"183","blocks":"170","index":61},{"id":20000679,"fname":"Evan","lname":"Fournier","team":"NY","position":"SG","games":"50","points":"269","rebounds":"561","assists":"517","steals":"156","blocks":"65","index":62},{"id":20000681,"fname":"Aaron","lname":"Gordon","team":"DEN","position":"PF","games":"51","points":"739","rebounds":"146","assists":"426","steals":"269","blocks":"19","index":63},{"id":20000684,"fname":"Dewayne","lname":"Dedmon","team":"MIA","position":"C","games":"50","points":"874","rebounds":"74","assists":"364","steals":"131","blocks":"147","index":64},{"id":20000689,"fname":"Victor","lname":"Oladipo","team":"MIA","position":"SG","games":"50","points":"1180","rebounds":"397","assists":"98","steals":"35","blocks":"107","index":65},{"id":20000708,"fname":"Jordan","lname":"Clarkson","team":"UTA","position":"SG","games":"58","points":"1242","rebounds":"690","assists":"464","steals":"85","blocks":"166","index":66},{"id":20000710,"fname":"Julius","lname":"Randle","team":"NY","position":"PF","games":"52","points":"1222","rebounds":"199","assists":"374","steals":"109","blocks":"54","index":67},{"id":20000716,"fname":"Nerlens","lname":"Noel","team":"DET","position":"C","games":"55","points":"210","rebounds":"536","assists":"579","steals":"207","blocks":"171","index":68},{"id":20000726,"fname":"Joel","lname":"Embiid","team":"PHI","position":"C","games":"47","points":"493","rebounds":"417","assists":"311","steals":"27","blocks":"186","index":69},{"id":20000727,"fname":"Jerami","lname":"Grant","team":"POR","position":"PF","games":"46","points":"167","rebounds":"137","assists":"519","steals":"10","blocks":"76","index":70},{"id":20000742,"fname":"Paul","lname":"George","team":"LAC","position":"SF","games":"50","points":"104","rebounds":"181","assists":"112","steals":"224","blocks":"64","index":71},{"id":20000743,"fname":"George","lname":"Hill","team":"MIL","position":"PG","games":"48","points":"976","rebounds":"116","assists":"453","steals":"180","blocks":"48","index":72},{"id":20000752,"fname":"Kemba","lname":"Walker","team":"DAL","position":"PG","games":"53","points":"1414","rebounds":"590","assists":"37","steals":"198","blocks":"5","index":73},{"id":20000758,"fname":"Bismack","lname":"Biyombo","team":"PHO","position":"C","games":"51","points":"1083","rebounds":"322","assists":"363","steals":"295","blocks":"43","index":74},{"id":20000762,"fname":"Noah","lname":"Vonleh","team":"BOS","position":"C","games":"54","points":"210","rebounds":"676","assists":"115","steals":"261","blocks":"137","index":75},{"id":20000780,"fname":"Udonis","lname":"Haslem","team":"MIA","position":"PF","games":"60","points":"755","rebounds":"493","assists":"322","steals":"26","blocks":"132","index":76},{"id":20000788,"fname":"Tim","lname":"Hardaway Jr.","team":"DAL","position":"SF","games":"47","points":"1308","rebounds":"404","assists":"263","steals":"108","blocks":"142","index":77},{"id":20000795,"fname":"Andrew","lname":"Wiggins","team":"GS","position":"SF","games":"53","points":"1227","rebounds":"225","assists":"324","steals":"142","blocks":"108","index":78},{"id":20000797,"fname":"Ricky","lname":"Rubio","team":"CLE","position":"PG","games":"62","points":"1759","rebounds":"109","assists":"1","steals":"234","blocks":"153","index":79},{"id":20000800,"fname":"Gorgui","lname":"Dieng","team":"SA","position":"C","games":"49","points":"142","rebounds":"426","assists":"541","steals":"94","blocks":"142","index":80},{"id":20000804,"fname":"Zach","lname":"LaVine","team":"CHI","position":"SG","games":"45","points":"93","rebounds":"642","assists":"219","steals":"256","blocks":"123","index":81},{"id":20000810,"fname":"Andre","lname":"Drummond","team":"CHI","position":"C","games":"47","points":"571","rebounds":"214","assists":"539","steals":"166","blocks":"91","index":82},{"id":20000811,"fname":"Kentavious","lname":"Caldwell-Pope","team":"DEN","position":"SG","games":"45","points":"1286","rebounds":"285","assists":"357","steals":"48","blocks":"91","index":83},{"id":20000816,"fname":"Spencer","lname":"Dinwiddie","team":"DAL","position":"SG","games":"49","points":"1164","rebounds":"19","assists":"335","steals":"109","blocks":"162","index":84},{"id":20000822,"fname":"Danilo","lname":"Gallinari","team":"BOS","position":"PF","games":"60","points":"1625","rebounds":"211","assists":"229","steals":"326","blocks":"30","index":85},{"id":20000827,"fname":"Jusuf","lname":"Nurkic","team":"POR","position":"C","games":"51","points":"1255","rebounds":"727","assists":"560","steals":"236","blocks":"62","index":86},{"id":20000828,"fname":"JaVale","lname":"McGee","team":"DAL","position":"C","games":"61","points":"1757","rebounds":"215","assists":"218","steals":"360","blocks":"48","index":87},{"id":20000832,"fname":"Gary","lname":"Harris","team":"ORL","position":"SG","games":"53","points":"789","rebounds":"444","assists":"230","steals":"160","blocks":"22","index":88},{"id":20000833,"fname":"Gordon","lname":"Hayward","team":"CHA","position":"SF","games":"52","points":"963","rebounds":"233","assists":"145","steals":"44","blocks":"81","index":89},{"id":20000837,"fname":"Alec","lname":"Burks","team":"DET","position":"SG","games":"57","points":"1326","rebounds":"683","assists":"290","steals":"190","blocks":"127","index":90},{"id":20000840,"fname":"Rudy","lname":"Gobert","team":"MIN","position":"C","games":"54","points":"1392","rebounds":"582","assists":"625","steals":"1","blocks":"195","index":91},{"id":20000842,"fname":"Joe","lname":"Ingles","team":"MIL","position":"SF","games":"55","points":"727","rebounds":"300","assists":"455","steals":"7","blocks":"201","index":92},{"id":20000847,"fname":"Marcus","lname":"Morris Sr.","team":"LAC","position":"PF","games":"47","points":"1082","rebounds":"7","assists":"157","steals":"153","blocks":"116","index":93},{"id":20000848,"fname":"Markieff","lname":"Morris","team":"BKN","position":"PF","games":"46","points":"47","rebounds":"239","assists":"540","steals":"261","blocks":"180","index":94},{"id":20000849,"fname":"Goran","lname":"Dragic","team":"CHI","position":"PG","games":"57","points":"665","rebounds":"307","assists":"39","steals":"290","blocks":"94","index":95},{"id":20000852,"fname":"Alex","lname":"Len","team":"SAC","position":"C","games":"55","points":"552","rebounds":"737","assists":"211","steals":"322","blocks":"88","index":96},{"id":20000856,"fname":"P.J.","lname":"Tucker","team":"PHI","position":"PF","games":"52","points":"1314","rebounds":"469","assists":"314","steals":"258","blocks":"2","index":97},{"id":20000858,"fname":"T.J.","lname":"Warren","team":"BKN","position":"SF","games":"49","points":"1109","rebounds":"561","assists":"587","steals":"80","blocks":"119","index":98},{"id":20000860,"fname":"Rudy","lname":"Gay","team":"UTA","position":"SF","games":"53","points":"314","rebounds":"335","assists":"566","steals":"59","blocks":"192","index":99},{"id":20000874,"fname":"Serge","lname":"Ibaka","team":"MIL","position":"C","games":"49","points":"1465","rebounds":"732","assists":"519","steals":"13","blocks":"108","index":100},{"id":20000875,"fname":"Steven","lname":"Adams","team":"MEM","position":"C","games":"61","points":"1611","rebounds":"864","assists":"168","steals":"328","blocks":"96","index":101},{"id":20000877,"fname":"Russell","lname":"Westbrook","team":"LAL","position":"PG","games":"57","points":"936","rebounds":"133","assists":"141","steals":"228","blocks":"106","index":102},{"id":20000881,"fname":"Reggie","lname":"Jackson","team":"LAC","position":"PG","games":"60","points":"455","rebounds":"471","assists":"92","steals":"126","blocks":"21","index":103},{"id":20000884,"fname":"Kevin","lname":"Durant","team":"BKN","position":"SF","games":"59","points":"1123","rebounds":"466","assists":"687","steals":"300","blocks":"109","index":104},{"id":20000887,"fname":"Will","lname":"Barton","team":"WAS","position":"SG","games":"50","points":"309","rebounds":"612","assists":"23","steals":"68","blocks":"152","index":105},{"id":20000896,"fname":"Reggie","lname":"Bullock","team":"DAL","position":"SF","games":"60","points":"169","rebounds":"860","assists":"14","steals":"166","blocks":"47","index":106},{"id":20000901,"fname":"Ish","lname":"Smith","team":"DEN","position":"PG","games":"59","points":"1728","rebounds":"171","assists":"665","steals":"256","blocks":"141","index":107},{"id":20000903,"fname":"Robert","lname":"Covington","team":"LAC","position":"SF","games":"45","points":"754","rebounds":"640","assists":"505","steals":"32","blocks":"151","index":108},{"id":20000933,"fname":"Seth","lname":"Curry","team":"BKN","position":"SG","games":"48","points":"1443","rebounds":"374","assists":"413","steals":"233","blocks":"87","index":109},{"id":20001389,"fname":"Richaun","lname":"Holmes","team":"SAC","position":"PF","games":"52","points":"1161","rebounds":"517","assists":"84","steals":"31","blocks":"204","index":110},{"id":20001393,"fname":"Kelly","lname":"Oubre Jr.","team":"CHA","position":"SF","games":"52","points":"1375","rebounds":"381","assists":"521","steals":"159","blocks":"186","index":111},{"id":20001396,"fname":"Frank","lname":"Kaminsky","team":"ATL","position":"PF","games":"49","points":"28","rebounds":"473","assists":"499","steals":"198","blocks":"85","index":112},{"id":20001400,"fname":"Josh","lname":"Richardson","team":"SA","position":"SF","games":"61","points":"1213","rebounds":"71","assists":"424","steals":"272","blocks":"150","index":113},{"id":20001401,"fname":"Justise","lname":"Winslow","team":"POR","position":"SF","games":"55","points":"711","rebounds":"683","assists":"618","steals":"43","blocks":"106","index":114},{"id":20001405,"fname":"Willy","lname":"Hernangomez","team":"NO","position":"C","games":"55","points":"413","rebounds":"776","assists":"641","steals":"86","blocks":"31","index":115},{"id":20001406,"fname":"Kristaps","lname":"Porzingis","team":"WAS","position":"C","games":"56","points":"1514","rebounds":"123","assists":"334","steals":"240","blocks":"102","index":116},{"id":20001413,"fname":"Terry","lname":"Rozier","team":"CHA","position":"PG","games":"50","points":"586","rebounds":"149","assists":"222","steals":"111","blocks":"171","index":117},{"id":20001416,"fname":"Norman","lname":"Powell","team":"LAC","position":"SF","games":"50","points":"336","rebounds":"501","assists":"147","steals":"182","blocks":"6","index":118},{"id":20001418,"fname":"Delon","lname":"Wright","team":"WAS","position":"PG","games":"45","points":"270","rebounds":"96","assists":"459","steals":"253","blocks":"102","index":119},{"id":20001420,"fname":"Bobby","lname":"Portis","team":"MIL","position":"PF","games":"51","points":"590","rebounds":"424","assists":"218","steals":"168","blocks":"123","index":120},{"id":20001421,"fname":"Cedi","lname":"Osman","team":"CLE","position":"SF","games":"61","points":"609","rebounds":"378","assists":"467","steals":"55","blocks":"55","index":121},{"id":20001424,"fname":"Myles","lname":"Turner","team":"IND","position":"C","games":"57","points":"767","rebounds":"160","assists":"90","steals":"228","blocks":"172","index":122},{"id":20001430,"fname":"Tyus","lname":"Jones","team":"MEM","position":"PG","games":"53","points":"1368","rebounds":"220","assists":"51","steals":"261","blocks":"182","index":123},{"id":20001431,"fname":"Karl-Anthony","lname":"Towns","team":"MIN","position":"PF","games":"54","points":"47","rebounds":"557","assists":"432","steals":"268","blocks":"164","index":124},{"id":20001433,"fname":"Trey","lname":"Lyles","team":"SAC","position":"PF","games":"56","points":"794","rebounds":"802","assists":"14","steals":"24","blocks":"73","index":125},{"id":20001434,"fname":"Raul","lname":"Neto","team":"CLE","position":"PG","games":"47","points":"710","rebounds":"229","assists":"443","steals":"98","blocks":"89","index":126},{"id":20001437,"fname":"Cameron","lname":"Payne","team":"PHO","position":"PG","games":"58","points":"1564","rebounds":"506","assists":"380","steals":"137","blocks":"65","index":127},{"id":20001438,"fname":"Pat","lname":"Connaughton","team":"MIL","position":"SG","games":"57","points":"1441","rebounds":"600","assists":"650","steals":"29","blocks":"114","index":128},{"id":20001441,"fname":"Nikola","lname":"Jokic","team":"DEN","position":"C","games":"57","points":"1485","rebounds":"536","assists":"515","steals":"46","blocks":"132","index":129},{"id":20001447,"fname":"Montrezl","lname":"Harrell","team":"PHI","position":"C","games":"47","points":"979","rebounds":"658","assists":"10","steals":"129","blocks":"40","index":130},{"id":20001449,"fname":"Boban","lname":"Marjanovic","team":"HOU","position":"C","games":"51","points":"396","rebounds":"501","assists":"522","steals":"244","blocks":"102","index":131},{"id":20001455,"fname":"Kevon","lname":"Looney","team":"GS","position":"C","games":"50","points":"451","rebounds":"52","assists":"581","steals":"173","blocks":"164","index":132},{"id":20001457,"fname":"Larry","lname":"Nance Jr.","team":"NO","position":"PF","games":"47","points":"1080","rebounds":"444","assists":"514","steals":"12","blocks":"119","index":133},{"id":20001458,"fname":"D'Angelo","lname":"Russell","team":"MIN","position":"PG","games":"49","points":"826","rebounds":"1","assists":"590","steals":"142","blocks":"64","index":134},{"id":20001460,"fname":"Devin","lname":"Booker","team":"PHO","position":"SG","games":"61","points":"1354","rebounds":"616","assists":"336","steals":"346","blocks":"167","index":135},{"id":20001521,"fname":"Thanasis","lname":"Antetokounmpo","team":"MIL","position":"SF","games":"60","points":"189","rebounds":"893","assists":"706","steals":"307","blocks":"182","index":136},{"id":20001525,"fname":"T.J.","lname":"McConnell","team":"IND","position":"PG","games":"56","points":"1149","rebounds":"590","assists":"330","steals":"83","blocks":"62","index":137},{"id":20001527,"fname":"Christian","lname":"Wood","team":"DAL","position":"PF","games":"55","points":"247","rebounds":"740","assists":"65","steals":"26","blocks":"212","index":138},{"id":20001597,"fname":"Dario","lname":"Saric","team":"PHO","position":"PF","games":"59","points":"987","rebounds":"836","assists":"37","steals":"26","blocks":"42","index":139},{"id":20001623,"fname":"Rodney","lname":"McGruder","team":"DET","position":"SF","games":"56","points":"1269","rebounds":"578","assists":"561","steals":"320","blocks":"222","index":140},{"id":20001630,"fname":"Khem","lname":"Birch","team":"TOR","position":"C","games":"57","points":"505","rebounds":"645","assists":"486","steals":"213","blocks":"68","index":141},{"id":20001661,"fname":"Ben","lname":"Simmons","team":"BKN","position":"PG","games":"46","points":"394","rebounds":"584","assists":"405","steals":"79","blocks":"105","index":142},{"id":20001666,"fname":"Jamal","lname":"Murray","team":"DEN","position":"PG","games":"50","points":"170","rebounds":"726","assists":"103","steals":"120","blocks":"86","index":143},{"id":20001668,"fname":"Davis","lname":"Bertans","team":"DAL","position":"PF","games":"59","points":"8","rebounds":"864","assists":"401","steals":"262","blocks":"104","index":144},{"id":20001671,"fname":"Brandon","lname":"Ingram","team":"NO","position":"SG","games":"59","points":"1644","rebounds":"473","assists":"345","steals":"188","blocks":"177","index":145},{"id":20001672,"fname":"Jaylen","lname":"Brown","team":"BOS","position":"SF","games":"49","points":"646","rebounds":"122","assists":"548","steals":"98","blocks":"6","index":146},{"id":20001673,"fname":"Buddy","lname":"Hield","team":"IND","position":"SG","games":"60","points":"48","rebounds":"205","assists":"220","steals":"92","blocks":"21","index":147},{"id":20001678,"fname":"Malik","lname":"Beasley","team":"UTA","position":"SG","games":"59","points":"169","rebounds":"235","assists":"302","steals":"8","blocks":"166","index":148},{"id":20001679,"fname":"Dejounte","lname":"Murray","team":"ATL","position":"SG","games":"47","points":"914","rebounds":"279","assists":"498","steals":"44","blocks":"120","index":149},{"id":20001680,"fname":"Taurean","lname":"Prince","team":"MIN","position":"SF","games":"54","points":"1510","rebounds":"667","assists":"336","steals":"56","blocks":"215","index":150},{"id":20001683,"fname":"Domantas","lname":"Sabonis","team":"SAC","position":"C","games":"58","points":"1697","rebounds":"646","assists":"455","steals":"309","blocks":"49","index":151},{"id":20001687,"fname":"Jakob","lname":"Poeltl","team":"SA","position":"C","games":"47","points":"146","rebounds":"576","assists":"198","steals":"188","blocks":"109","index":152},{"id":20001689,"fname":"Damian","lname":"Jones","team":"LAL","position":"C","games":"54","points":"309","rebounds":"807","assists":"134","steals":"50","blocks":"43","index":153},{"id":20001694,"fname":"Ivica","lname":"Zubac","team":"LAC","position":"C","games":"60","points":"954","rebounds":"755","assists":"211","steals":"128","blocks":"90","index":154},{"id":20001697,"fname":"Juancho","lname":"Hernangomez","team":"TOR","position":"PF","games":"61","points":"770","rebounds":"537","assists":"644","steals":"32","blocks":"84","index":155},{"id":20001701,"fname":"Malcolm","lname":"Brogdon","team":"BOS","position":"SG","games":"60","points":"440","rebounds":"660","assists":"457","steals":"232","blocks":"218","index":156},{"id":20001707,"fname":"Caris","lname":"LeVert","team":"CLE","position":"SF","games":"53","points":"620","rebounds":"609","assists":"561","steals":"29","blocks":"144","index":157},{"id":20001708,"fname":"Georges","lname":"Niang","team":"PHI","position":"SF","games":"55","points":"593","rebounds":"552","assists":"374","steals":"9","blocks":"184","index":158},{"id":20001710,"fname":"Pascal","lname":"Siakam","team":"TOR","position":"PF","games":"47","points":"1042","rebounds":"230","assists":"413","steals":"16","blocks":"40","index":159},{"id":20001722,"fname":"Furkan","lname":"Korkmaz","team":"PHI","position":"SG","games":"57","points":"405","rebounds":"624","assists":"202","steals":"132","blocks":"24","index":160},{"id":20001730,"fname":"Gary","lname":"Payton II","team":"POR","position":"PG","games":"47","points":"725","rebounds":"48","assists":"110","steals":"246","blocks":"140","index":161},{"id":20001733,"fname":"Fred","lname":"VanVleet","team":"TOR","position":"PG","games":"48","points":"337","rebounds":"431","assists":"84","steals":"139","blocks":"10","index":162},{"id":20001745,"fname":"Bogdan","lname":"Bogdanovic","team":"ATL","position":"SG","games":"48","points":"279","rebounds":"415","assists":"476","steals":"111","blocks":"165","index":163},{"id":20001746,"fname":"Ryan","lname":"Arcidiacono","team":"NY","position":"PG","games":"57","points":"822","rebounds":"650","assists":"412","steals":"49","blocks":"18","index":164},{"id":20001747,"fname":"Danuel","lname":"House Jr.","team":"PHI","position":"PF","games":"50","points":"1200","rebounds":"304","assists":"344","steals":"124","blocks":"117","index":165},{"id":20001757,"fname":"Dorian","lname":"Finney-Smith","team":"DAL","position":"PF","games":"57","points":"1262","rebounds":"294","assists":"70","steals":"273","blocks":"57","index":166},{"id":20001760,"fname":"Bryn","lname":"Forbes","team":"MIN","position":"SG","games":"51","points":"766","rebounds":"536","assists":"201","steals":"203","blocks":"35","index":167},{"id":20001791,"fname":"Damion","lname":"Lee","team":"PHO","position":"SG","games":"52","points":"1527","rebounds":"600","assists":"566","steals":"118","blocks":"115","index":168},{"id":20001796,"fname":"Derrick","lname":"Jones Jr.","team":"CHI","position":"SF","games":"48","points":"1238","rebounds":"35","assists":"291","steals":"243","blocks":"72","index":169},{"id":20001801,"fname":"Alex","lname":"Caruso","team":"CHI","position":"SG","games":"59","points":"313","rebounds":"81","assists":"259","steals":"118","blocks":"121","index":170},{"id":20001822,"fname":"Hamidou","lname":"Diallo","team":"DET","position":"SG","games":"46","points":"900","rebounds":"253","assists":"257","steals":"240","blocks":"60","index":171},{"id":20001823,"fname":"Lonzo","lname":"Ball","team":"CHI","position":"PG","games":"56","points":"622","rebounds":"671","assists":"459","steals":"193","blocks":"123","index":172},{"id":20001824,"fname":"De'Aaron","lname":"Fox","team":"SAC","position":"PG","games":"60","points":"1240","rebounds":"354","assists":"257","steals":"317","blocks":"180","index":173},{"id":20001825,"fname":"Markelle","lname":"Fultz","team":"ORL","position":"PG","games":"50","points":"783","rebounds":"663","assists":"221","steals":"144","blocks":"65","index":174},{"id":20001826,"fname":"Dennis","lname":"Smith Jr.","team":"CHA","position":"PG","games":"55","points":"829","rebounds":"131","assists":"614","steals":"260","blocks":"118","index":175},{"id":20001829,"fname":"Jayson","lname":"Tatum","team":"BOS","position":"PF","games":"52","points":"719","rebounds":"111","assists":"6","steals":"33","blocks":"169","index":176},{"id":20001830,"fname":"Jonathan","lname":"Isaac","team":"ORL","position":"PF","games":"56","points":"348","rebounds":"202","assists":"124","steals":"325","blocks":"119","index":177},{"id":20001831,"fname":"Lauri","lname":"Markkanen","team":"UTA","position":"PF","games":"53","points":"605","rebounds":"191","assists":"559","steals":"207","blocks":"186","index":178},{"id":20001832,"fname":"Frank","lname":"Ntilikina","team":"DAL","position":"PG","games":"59","points":"898","rebounds":"83","assists":"448","steals":"179","blocks":"166","index":179},{"id":20001833,"fname":"Malik","lname":"Monk","team":"SAC","position":"SG","games":"61","points":"1346","rebounds":"903","assists":"541","steals":"177","blocks":"206","index":180},{"id":20001834,"fname":"Zach","lname":"Collins","team":"SA","position":"C","games":"58","points":"635","rebounds":"276","assists":"538","steals":"173","blocks":"49","index":181},{"id":20001835,"fname":"John","lname":"Collins","team":"ATL","position":"PF","games":"61","points":"626","rebounds":"116","assists":"732","steals":"29","blocks":"188","index":182},{"id":20001836,"fname":"Bam","lname":"Adebayo","team":"MIA","position":"C","games":"51","points":"445","rebounds":"213","assists":"455","steals":"297","blocks":"36","index":183},{"id":20001837,"fname":"Jarrett","lname":"Allen","team":"CLE","position":"C","games":"59","points":"1558","rebounds":"422","assists":"63","steals":"258","blocks":"177","index":184},{"id":20001838,"fname":"OG","lname":"Anunoby","team":"TOR","position":"SF","games":"59","points":"399","rebounds":"439","assists":"480","steals":"8","blocks":"97","index":185},{"id":20001840,"fname":"Luke","lname":"Kennard","team":"LAC","position":"SG","games":"56","points":"311","rebounds":"326","assists":"576","steals":"258","blocks":"24","index":186},{"id":20001844,"fname":"Donovan","lname":"Mitchell","team":"CLE","position":"SG","games":"61","points":"443","rebounds":"159","assists":"391","steals":"154","blocks":"155","index":187},{"id":20001845,"fname":"Justin","lname":"Jackson","team":"BOS","position":"SF","games":"54","points":"241","rebounds":"678","assists":"236","steals":"164","blocks":"1","index":188},{"id":20001852,"fname":"Thomas","lname":"Bryant","team":"LAL","position":"C","games":"51","points":"170","rebounds":"267","assists":"179","steals":"176","blocks":"173","index":189},{"id":20001853,"fname":"Josh","lname":"Hart","team":"POR","position":"SF","games":"62","points":"1625","rebounds":"690","assists":"649","steals":"26","blocks":"136","index":190},{"id":20001856,"fname":"Derrick","lname":"White","team":"BOS","position":"SG","games":"55","points":"799","rebounds":"743","assists":"419","steals":"239","blocks":"13","index":191},{"id":20001857,"fname":"Tony","lname":"Bradley","team":"CHI","position":"C","games":"47","points":"470","rebounds":"483","assists":"382","steals":"42","blocks":"131","index":192},{"id":20001858,"fname":"Kyle","lname":"Kuzma","team":"WAS","position":"PF","games":"57","points":"1314","rebounds":"642","assists":"614","steals":"245","blocks":"211","index":193},{"id":20001859,"fname":"Davon","lname":"Reed","team":"DEN","position":"SG","games":"54","points":"981","rebounds":"804","assists":"167","steals":"100","blocks":"46","index":194},{"id":20001862,"fname":"Tyler","lname":"Dorsey","team":"DAL","position":"SG","games":"50","points":"432","rebounds":"443","assists":"17","steals":"190","blocks":"17","index":195},{"id":20001870,"fname":"Vlatko","lname":"Cancar","team":"DEN","position":"SF","games":"59","points":"479","rebounds":"821","assists":"209","steals":"222","blocks":"210","index":196},{"id":20001871,"fname":"Monte","lname":"Morris","team":"WAS","position":"PG","games":"46","points":"1186","rebounds":"51","assists":"381","steals":"114","blocks":"125","index":197},{"id":20001873,"fname":"Dillon","lname":"Brooks","team":"MEM","position":"SF","games":"54","points":"829","rebounds":"57","assists":"467","steals":"29","blocks":"108","index":198},{"id":20001874,"fname":"Isaiah","lname":"Hartenstein","team":"NY","position":"C","games":"54","points":"1476","rebounds":"523","assists":"145","steals":"257","blocks":"205","index":199},{"id":20001875,"fname":"Edmond","lname":"Sumner","team":"BKN","position":"PG","games":"55","points":"1528","rebounds":"665","assists":"423","steals":"56","blocks":"214","index":200},{"id":20001886,"fname":"Chris","lname":"Boucher","team":"TOR","position":"PF","games":"50","points":"649","rebounds":"98","assists":"147","steals":"187","blocks":"26","index":201},{"id":20001889,"fname":"Luke","lname":"Kornet","team":"BOS","position":"C","games":"50","points":"1215","rebounds":"737","assists":"472","steals":"175","blocks":"134","index":202},{"id":20001901,"fname":"Daniel","lname":"Theis","team":"IND","position":"C","games":"53","points":"1574","rebounds":"308","assists":"379","steals":"181","blocks":"68","index":203},{"id":20001909,"fname":"Maxi","lname":"Kleber","team":"DAL","position":"C","games":"58","points":"1483","rebounds":"123","assists":"112","steals":"318","blocks":"175","index":204},{"id":20001912,"fname":"Torrey","lname":"Craig","team":"PHO","position":"SF","games":"53","points":"340","rebounds":"675","assists":"412","steals":"29","blocks":"48","index":205},{"id":20001913,"fname":"Royce","lname":"O'Neale","team":"BKN","position":"SF","games":"48","points":"326","rebounds":"641","assists":"295","steals":"252","blocks":"45","index":206},{"id":20001984,"fname":"Luka","lname":"Doncic","team":"DAL","position":"PG","games":"57","points":"1303","rebounds":"194","assists":"675","steals":"320","blocks":"200","index":207},{"id":20001985,"fname":"Mo","lname":"Bamba","team":"ORL","position":"C","games":"52","points":"1230","rebounds":"117","assists":"179","steals":"83","blocks":"153","index":208},{"id":20001986,"fname":"Grayson","lname":"Allen","team":"MIL","position":"SF","games":"56","points":"882","rebounds":"631","assists":"610","steals":"329","blocks":"69","index":209},{"id":20001987,"fname":"Donte","lname":"DiVincenzo","team":"GS","position":"SG","games":"57","points":"160","rebounds":"431","assists":"144","steals":"55","blocks":"71","index":210},{"id":20001988,"fname":"Michael","lname":"Porter Jr.","team":"DEN","position":"SF","games":"54","points":"1559","rebounds":"248","assists":"584","steals":"214","blocks":"84","index":211},{"id":20001989,"fname":"Trae","lname":"Young","team":"ATL","position":"PG","games":"55","points":"1507","rebounds":"584","assists":"428","steals":"20","blocks":"202","index":212},{"id":20001990,"fname":"Deandre","lname":"Ayton","team":"PHO","position":"C","games":"54","points":"9","rebounds":"793","assists":"375","steals":"112","blocks":"139","index":213},{"id":20001991,"fname":"Jaren","lname":"Jackson Jr.","team":"MEM","position":"PF","games":"49","points":"1442","rebounds":"734","assists":"256","steals":"49","blocks":"88","index":214},{"id":20001993,"fname":"Kevin","lname":"Huerter","team":"SAC","position":"SG","games":"47","points":"383","rebounds":"124","assists":"407","steals":"6","blocks":"61","index":215},{"id":20001994,"fname":"Kevin","lname":"Knox II","team":"DET","position":"SF","games":"62","points":"1142","rebounds":"34","assists":"401","steals":"180","blocks":"222","index":216},{"id":20001995,"fname":"Marvin","lname":"Bagley III","team":"DET","position":"PF","games":"46","points":"1242","rebounds":"22","assists":"280","steals":"71","blocks":"176","index":217},{"id":20001996,"fname":"Wendell","lname":"Carter Jr.","team":"ORL","position":"C","games":"54","points":"1463","rebounds":"171","assists":"230","steals":"106","blocks":"47","index":218},{"id":20001997,"fname":"Collin","lname":"Sexton","team":"UTA","position":"PG","games":"49","points":"467","rebounds":"676","assists":"181","steals":"94","blocks":"31","index":219},{"id":20001998,"fname":"Mikal","lname":"Bridges","team":"PHO","position":"SF","games":"50","points":"153","rebounds":"72","assists":"59","steals":"184","blocks":"27","index":220},{"id":20001999,"fname":"Shai","lname":"Gilgeous-Alexander","team":"OKC","position":"PG","games":"45","points":"471","rebounds":"125","assists":"403","steals":"94","blocks":"54","index":221},{"id":20002002,"fname":"Troy","lname":"Brown Jr.","team":"LAL","position":"SF","games":"58","points":"1619","rebounds":"710","assists":"148","steals":"23","blocks":"42","index":222},{"id":20002005,"fname":"Aaron","lname":"Holiday","team":"ATL","position":"PG","games":"54","points":"209","rebounds":"802","assists":"544","steals":"34","blocks":"57","index":223},{"id":20002006,"fname":"Josh","lname":"Okogie","team":"PHO","position":"SG","games":"48","points":"757","rebounds":"482","assists":"536","steals":"185","blocks":"126","index":224},{"id":20002007,"fname":"Anfernee","lname":"Simons","team":"POR","position":"SG","games":"50","points":"189","rebounds":"190","assists":"534","steals":"66","blocks":"30","index":225},{"id":20002008,"fname":"Lonnie","lname":"Walker IV","team":"LAL","position":"SG","games":"45","points":"145","rebounds":"255","assists":"454","steals":"221","blocks":"80","index":226},{"id":20002010,"fname":"Devonte'","lname":"Graham","team":"NO","position":"PG","games":"47","points":"6","rebounds":"398","assists":"209","steals":"261","blocks":"92","index":227},{"id":20002015,"fname":"Jarred","lname":"Vanderbilt","team":"UTA","position":"SF","games":"61","points":"43","rebounds":"54","assists":"227","steals":"237","blocks":"222","index":228},{"id":20002016,"fname":"Mitchell","lname":"Robinson","team":"NY","position":"C","games":"46","points":"1071","rebounds":"76","assists":"152","steals":"164","blocks":"59","index":229},{"id":20002017,"fname":"Kostas","lname":"Antetokounmpo","team":"CHI","position":"PF","games":"52","points":"406","rebounds":"692","assists":"380","steals":"124","blocks":"8","index":230},{"id":20002019,"fname":"Landry","lname":"Shamet","team":"PHO","position":"SG","games":"58","points":"897","rebounds":"93","assists":"503","steals":"302","blocks":"47","index":231},{"id":20002024,"fname":"Robert","lname":"Williams III","team":"BOS","position":"C","games":"54","points":"119","rebounds":"78","assists":"596","steals":"165","blocks":"97","index":232},{"id":20002027,"fname":"Gary","lname":"Trent Jr.","team":"TOR","position":"SG","games":"54","points":"1035","rebounds":"388","assists":"60","steals":"284","blocks":"25","index":233},{"id":20002028,"fname":"Jevon","lname":"Carter","team":"MIL","position":"SG","games":"59","points":"1319","rebounds":"432","assists":"109","steals":"235","blocks":"2","index":234},{"id":20002029,"fname":"De'Anthony","lname":"Melton","team":"PHI","position":"PG","games":"50","points":"928","rebounds":"668","assists":"509","steals":"99","blocks":"190","index":235},{"id":20002031,"fname":"Chimezie","lname":"Metu","team":"SAC","position":"C","games":"52","points":"184","rebounds":"480","assists":"35","steals":"221","blocks":"158","index":236},{"id":20002032,"fname":"Jalen","lname":"Brunson","team":"NY","position":"PG","games":"50","points":"298","rebounds":"504","assists":"218","steals":"171","blocks":"55","index":237},{"id":20002033,"fname":"Shake","lname":"Milton","team":"PHI","position":"PG","games":"48","points":"1263","rebounds":"454","assists":"175","steals":"72","blocks":"95","index":238},{"id":20002035,"fname":"Svi","lname":"Mykhailiuk","team":"NY","position":"SF","games":"50","points":"1141","rebounds":"449","assists":"183","steals":"163","blocks":"49","index":239},{"id":20002036,"fname":"Moritz","lname":"Wagner","team":"ORL","position":"PF","games":"61","points":"1041","rebounds":"260","assists":"550","steals":"365","blocks":"159","index":240},{"id":20002039,"fname":"Alize","lname":"Johnson","team":"SA","position":"PF","games":"59","points":"988","rebounds":"618","assists":"11","steals":"301","blocks":"87","index":241},{"id":20002040,"fname":"Bruce","lname":"Brown","team":"DEN","position":"SG","games":"60","points":"278","rebounds":"259","assists":"448","steals":"319","blocks":"28","index":242},{"id":20002041,"fname":"Keita","lname":"Bates-Diop","team":"SA","position":"SF","games":"49","points":"926","rebounds":"640","assists":"233","steals":"193","blocks":"32","index":243},{"id":20002045,"fname":"Drew","lname":"Eubanks","team":"POR","position":"C","games":"60","points":"484","rebounds":"853","assists":"23","steals":"110","blocks":"58","index":244},{"id":20002056,"fname":"Kenrich","lname":"Williams","team":"OKC","position":"SF","games":"59","points":"796","rebounds":"302","assists":"607","steals":"330","blocks":"92","index":245},{"id":20002057,"fname":"Duncan","lname":"Robinson","team":"MIA","position":"SF","games":"49","points":"853","rebounds":"510","assists":"400","steals":"59","blocks":"128","index":246},{"id":20002058,"fname":"Yuta","lname":"Watanabe","team":"BKN","position":"PF","games":"57","points":"404","rebounds":"802","assists":"95","steals":"332","blocks":"47","index":247},{"id":20002080,"fname":"Wenyen","lname":"Gabriel","team":"LAL","position":"PF","games":"46","points":"1252","rebounds":"314","assists":"520","steals":"86","blocks":"163","index":248},{"id":20002081,"fname":"Kendrick","lname":"Nunn","team":"LAL","position":"PG","games":"59","points":"1163","rebounds":"181","assists":"63","steals":"280","blocks":"25","index":249},{"id":20002118,"fname":"Theo","lname":"Pinson","team":"DAL","position":"SG","games":"51","points":"489","rebounds":"315","assists":"257","steals":"14","blocks":"200","index":250},{"id":20002127,"fname":"Jordan","lname":"McLaughlin","team":"MIN","position":"PG","games":"53","points":"1402","rebounds":"364","assists":"454","steals":"123","blocks":"42","index":251},{"id":20002138,"fname":"Malcolm","lname":"Hill","team":"CHI","position":"SF","games":"57","points":"861","rebounds":"659","assists":"575","steals":"136","blocks":"10","index":252},{"id":20002172,"fname":"Jock","lname":"Landale","team":"PHO","position":"C","games":"47","points":"981","rebounds":"255","assists":"400","steals":"8","blocks":"95","index":253},{"id":20002195,"fname":"Haywood","lname":"Highsmith","team":"MIA","position":"SF","games":"51","points":"800","rebounds":"72","assists":"88","steals":"95","blocks":"83","index":254},{"id":20002200,"fname":"Javonte","lname":"Green","team":"CHI","position":"PF","games":"58","points":"992","rebounds":"822","assists":"317","steals":"260","blocks":"62","index":255},{"id":20002213,"fname":"Jae'Sean","lname":"Tate","team":"HOU","position":"SF","games":"46","points":"834","rebounds":"372","assists":"312","steals":"74","blocks":"107","index":256},{"id":20002254,"fname":"Gabe","lname":"Vincent","team":"MIA","position":"PG","games":"52","points":"533","rebounds":"94","assists":"122","steals":"6","blocks":"12","index":257},{"id":20002266,"fname":"Ja","lname":"Morant","team":"MEM","position":"PG","games":"61","points":"746","rebounds":"585","assists":"660","steals":"20","blocks":"59","index":258},{"id":20002268,"fname":"De'Andre","lname":"Hunter","team":"ATL","position":"SF","games":"46","points":"461","rebounds":"621","assists":"550","steals":"106","blocks":"47","index":259},{"id":20002270,"fname":"Darius","lname":"Garland","team":"CLE","position":"PG","games":"58","points":"1648","rebounds":"403","assists":"91","steals":"188","blocks":"41","index":260},{"id":20002271,"fname":"Zion","lname":"Williamson","team":"NO","position":"PF","games":"56","points":"30","rebounds":"651","assists":"292","steals":"39","blocks":"178","index":261},{"id":20002272,"fname":"RJ","lname":"Barrett","team":"NY","position":"SF","games":"52","points":"878","rebounds":"166","assists":"118","steals":"275","blocks":"113","index":262},{"id":20002273,"fname":"Jarrett","lname":"Culver","team":"ATL","position":"SG","games":"45","points":"612","rebounds":"570","assists":"135","steals":"41","blocks":"62","index":263},{"id":20002274,"fname":"Jaxson","lname":"Hayes","team":"NO","position":"C","games":"55","points":"803","rebounds":"233","assists":"431","steals":"201","blocks":"167","index":264},{"id":20002275,"fname":"Rui","lname":"Hachimura","team":"WAS","position":"PF","games":"57","points":"912","rebounds":"87","assists":"145","steals":"225","blocks":"77","index":265},{"id":20002276,"fname":"Cam","lname":"Reddish","team":"NY","position":"SF","games":"52","points":"1405","rebounds":"651","assists":"83","steals":"82","blocks":"187","index":266},{"id":20002277,"fname":"Romeo","lname":"Langford","team":"SA","position":"SG","games":"54","points":"665","rebounds":"140","assists":"264","steals":"271","blocks":"10","index":267},{"id":20002278,"fname":"Grant","lname":"Williams","team":"BOS","position":"PF","games":"58","points":"1652","rebounds":"860","assists":"146","steals":"168","blocks":"185","index":268},{"id":20002279,"fname":"P.J.","lname":"Washington","team":"CHA","position":"PF","games":"60","points":"1258","rebounds":"569","assists":"352","steals":"329","blocks":"190","index":269},{"id":20002280,"fname":"Coby","lname":"White","team":"CHI","position":"SG","games":"61","points":"1806","rebounds":"293","assists":"317","steals":"182","blocks":"166","index":270},{"id":20002282,"fname":"Goga","lname":"Bitadze","team":"IND","position":"C","games":"53","points":"863","rebounds":"251","assists":"71","steals":"281","blocks":"188","index":271},{"id":20002283,"fname":"Brandon","lname":"Clarke","team":"MEM","position":"PF","games":"57","points":"711","rebounds":"267","assists":"71","steals":"292","blocks":"168","index":272},{"id":20002284,"fname":"Tyler","lname":"Herro","team":"MIA","position":"SG","games":"55","points":"235","rebounds":"524","assists":"416","steals":"290","blocks":"173","index":273},{"id":20002285,"fname":"Nickeil","lname":"Alexander-Walker","team":"UTA","position":"PG","games":"48","points":"1424","rebounds":"641","assists":"205","steals":"121","blocks":"80","index":274},{"id":20002286,"fname":"Darius","lname":"Bazley","team":"OKC","position":"PF","games":"49","points":"851","rebounds":"114","assists":"407","steals":"89","blocks":"123","index":275},{"id":20002287,"fname":"Chuma","lname":"Okeke","team":"ORL","position":"PF","games":"53","points":"458","rebounds":"550","assists":"267","steals":"20","blocks":"158","index":276},{"id":20002288,"fname":"Matisse","lname":"Thybulle","team":"PHI","position":"SG","games":"56","points":"677","rebounds":"249","assists":"499","steals":"139","blocks":"161","index":277},{"id":20002289,"fname":"Cameron","lname":"Johnson","team":"PHO","position":"PF","games":"47","points":"1193","rebounds":"31","assists":"135","steals":"263","blocks":"10","index":278},{"id":20002291,"fname":"Bol","lname":"Bol","team":"ORL","position":"C","games":"59","points":"1198","rebounds":"209","assists":"352","steals":"42","blocks":"37","index":279},{"id":20002292,"fname":"Nicolas","lname":"Claxton","team":"BKN","position":"C","games":"57","points":"231","rebounds":"11","assists":"506","steals":"193","blocks":"84","index":280},{"id":20002294,"fname":"Cody","lname":"Martin","team":"CHA","position":"SF","games":"58","points":"352","rebounds":"401","assists":"461","steals":"104","blocks":"2","index":281},{"id":20002295,"fname":"Kevin","lname":"Porter Jr.","team":"HOU","position":"PG","games":"57","points":"1467","rebounds":"836","assists":"356","steals":"190","blocks":"182","index":282},{"id":20002296,"fname":"Dylan","lname":"Windler","team":"CLE","position":"SF","games":"46","points":"588","rebounds":"225","assists":"277","steals":"116","blocks":"125","index":283},{"id":20002297,"fname":"Isaiah","lname":"Roby","team":"SA","position":"PF","games":"55","points":"592","rebounds":"594","assists":"19","steals":"317","blocks":"36","index":284},{"id":20002300,"fname":"Jordan","lname":"Poole","team":"GS","position":"PG","games":"52","points":"846","rebounds":"728","assists":"387","steals":"223","blocks":"132","index":285},{"id":20002302,"fname":"Mfiondu","lname":"Kabengele","team":"BOS","position":"C","games":"55","points":"676","rebounds":"360","assists":"561","steals":"2","blocks":"119","index":286},{"id":20002303,"fname":"Talen","lname":"Horton-Tucker","team":"UTA","position":"SG","games":"54","points":"138","rebounds":"260","assists":"261","steals":"93","blocks":"201","index":287},{"id":20002304,"fname":"KZ","lname":"Okpala","team":"SAC","position":"PF","games":"48","points":"579","rebounds":"13","assists":"165","steals":"245","blocks":"34","index":288},{"id":20002306,"fname":"Bruno","lname":"Fernando","team":"HOU","position":"C","games":"50","points":"224","rebounds":"588","assists":"233","steals":"187","blocks":"31","index":289},{"id":20002307,"fname":"Ty","lname":"Jerome","team":"GS","position":"PG","games":"58","points":"1048","rebounds":"681","assists":"260","steals":"336","blocks":"80","index":290},{"id":20002308,"fname":"Nassir","lname":"Little","team":"POR","position":"SF","games":"54","points":"76","rebounds":"110","assists":"610","steals":"192","blocks":"15","index":291},{"id":20002309,"fname":"Keldon","lname":"Johnson","team":"SA","position":"SF","games":"60","points":"554","rebounds":"198","assists":"41","steals":"275","blocks":"134","index":292},{"id":20002311,"fname":"Admiral","lname":"Schofield","team":"ORL","position":"PF","games":"49","points":"1314","rebounds":"148","assists":"357","steals":"120","blocks":"12","index":293},{"id":20002312,"fname":"Terance","lname":"Mann","team":"LAC","position":"SG","games":"60","points":"876","rebounds":"642","assists":"185","steals":"346","blocks":"99","index":294},{"id":20002316,"fname":"Jalen","lname":"McDaniels","team":"CHA","position":"PF","games":"49","points":"497","rebounds":"163","assists":"339","steals":"273","blocks":"129","index":295},{"id":20002318,"fname":"John","lname":"Konchar","team":"MEM","position":"SG","games":"60","points":"1097","rebounds":"630","assists":"617","steals":"13","blocks":"37","index":296},{"id":20002319,"fname":"Jaylen","lname":"Nowell","team":"MIN","position":"SG","games":"53","points":"858","rebounds":"5","assists":"518","steals":"77","blocks":"102","index":297},{"id":20002329,"fname":"Daniel","lname":"Gafford","team":"WAS","position":"PF","games":"60","points":"384","rebounds":"670","assists":"308","steals":"268","blocks":"30","index":298},{"id":20002333,"fname":"Dean","lname":"Wade","team":"CLE","position":"PF","games":"56","points":"1556","rebounds":"197","assists":"344","steals":"125","blocks":"14","index":299},{"id":20002336,"fname":"Naz","lname":"Reid","team":"MIN","position":"C","games":"58","points":"200","rebounds":"550","assists":"313","steals":"235","blocks":"44","index":300},{"id":20002339,"fname":"Luguentz","lname":"Dort","team":"OKC","position":"SF","games":"58","points":"909","rebounds":"95","assists":"71","steals":"327","blocks":"129","index":301},{"id":20002343,"fname":"Max","lname":"Strus","team":"MIA","position":"SG","games":"58","points":"1383","rebounds":"845","assists":"693","steals":"285","blocks":"33","index":302},{"id":20002352,"fname":"Moses","lname":"Brown","team":"LAC","position":"C","games":"59","points":"1312","rebounds":"329","assists":"529","steals":"60","blocks":"53","index":303},{"id":20002356,"fname":"Oshae","lname":"Brissett","team":"IND","position":"PF","games":"57","points":"981","rebounds":"256","assists":"221","steals":"15","blocks":"49","index":304},{"id":20002374,"fname":"DaQuan","lname":"Jeffries","team":"NY","position":"PG","games":"48","points":"368","rebounds":"226","assists":"58","steals":"36","blocks":"27","index":305},{"id":20002386,"fname":"Amir","lname":"Coffey","team":"LAC","position":"PF","games":"55","points":"300","rebounds":"55","assists":"133","steals":"318","blocks":"27","index":306},{"id":20002414,"fname":"Juan","lname":"Toscano-Anderson","team":"LAL","position":"PF","games":"59","points":"1414","rebounds":"334","assists":"128","steals":"231","blocks":"68","index":307},{"id":20002490,"fname":"Garrison","lname":"Mathews","team":"HOU","position":"SG","games":"47","points":"593","rebounds":"148","assists":"461","steals":"11","blocks":"144","index":308},{"id":20002491,"fname":"Caleb","lname":"Martin","team":"MIA","position":"PF","games":"55","points":"1645","rebounds":"600","assists":"593","steals":"288","blocks":"41","index":309},{"id":20002493,"fname":"Terence","lname":"Davis","team":"SAC","position":"SG","games":"48","points":"1344","rebounds":"421","assists":"286","steals":"255","blocks":"119","index":310},{"id":20002523,"fname":"Anthony","lname":"Edwards","team":"MIN","position":"SG","games":"50","points":"1285","rebounds":"667","assists":"461","steals":"117","blocks":"196","index":311},{"id":20002527,"fname":"James","lname":"Wiseman","team":"GS","position":"C","games":"60","points":"1455","rebounds":"577","assists":"9","steals":"254","blocks":"127","index":312},{"id":20002528,"fname":"LaMelo","lname":"Ball","team":"CHA","position":"PG","games":"55","points":"574","rebounds":"73","assists":"328","steals":"315","blocks":"177","index":313},{"id":20002529,"fname":"Patrick","lname":"Williams","team":"CHI","position":"PF","games":"53","points":"173","rebounds":"447","assists":"526","steals":"126","blocks":"35","index":314},{"id":20002530,"fname":"Isaac","lname":"Okoro","team":"CLE","position":"SG","games":"56","points":"292","rebounds":"342","assists":"310","steals":"83","blocks":"27","index":315},{"id":20002531,"fname":"Onyeka","lname":"Okongwu","team":"ATL","position":"C","games":"53","points":"783","rebounds":"659","assists":"304","steals":"73","blocks":"157","index":316},{"id":20002532,"fname":"Killian","lname":"Hayes","team":"DET","position":"PG","games":"61","points":"1613","rebounds":"305","assists":"215","steals":"270","blocks":"27","index":317},{"id":20002533,"fname":"Obi","lname":"Toppin","team":"NY","position":"PF","games":"56","points":"246","rebounds":"572","assists":"161","steals":"101","blocks":"36","index":318},{"id":20002534,"fname":"Deni","lname":"Avdija","team":"WAS","position":"SF","games":"57","points":"1071","rebounds":"89","assists":"232","steals":"106","blocks":"138","index":319},{"id":20002535,"fname":"Jalen","lname":"Smith","team":"IND","position":"PF","games":"60","points":"1447","rebounds":"411","assists":"58","steals":"262","blocks":"156","index":320},{"id":20002536,"fname":"Devin","lname":"Vassell","team":"SA","position":"SG","games":"58","points":"1535","rebounds":"813","assists":"521","steals":"44","blocks":"176","index":321},{"id":20002537,"fname":"Tyrese","lname":"Haliburton","team":"IND","position":"PG","games":"50","points":"1294","rebounds":"486","assists":"194","steals":"263","blocks":"171","index":322},{"id":20002538,"fname":"Kira","lname":"Lewis Jr.","team":"NO","position":"PG","games":"60","points":"1370","rebounds":"873","assists":"515","steals":"11","blocks":"124","index":323},{"id":20002539,"fname":"Aaron","lname":"Nesmith","team":"IND","position":"SF","games":"53","points":"1338","rebounds":"690","assists":"183","steals":"226","blocks":"145","index":324},{"id":20002540,"fname":"Cole","lname":"Anthony","team":"ORL","position":"PG","games":"55","points":"490","rebounds":"635","assists":"192","steals":"14","blocks":"35","index":325},{"id":20002541,"fname":"Isaiah","lname":"Stewart","team":"DET","position":"C","games":"52","points":"772","rebounds":"298","assists":"61","steals":"23","blocks":"197","index":326},{"id":20002542,"fname":"Aleksej","lname":"Pokusevski","team":"OKC","position":"PF","games":"52","points":"135","rebounds":"470","assists":"15","steals":"43","blocks":"162","index":327},{"id":20002543,"fname":"Josh","lname":"Green","team":"DAL","position":"SG","games":"60","points":"1614","rebounds":"349","assists":"195","steals":"48","blocks":"13","index":328},{"id":20002544,"fname":"Saddiq","lname":"Bey","team":"DET","position":"SF","games":"55","points":"1126","rebounds":"203","assists":"620","steals":"43","blocks":"150","index":329},{"id":20002545,"fname":"Precious","lname":"Achiuwa","team":"TOR","position":"PF","games":"46","points":"1344","rebounds":"175","assists":"137","steals":"211","blocks":"131","index":330},{"id":20002546,"fname":"Tyrese","lname":"Maxey","team":"PHI","position":"PG","games":"45","points":"111","rebounds":"264","assists":"477","steals":"197","blocks":"171","index":331},{"id":20002547,"fname":"Zeke","lname":"Nnaji","team":"DEN","position":"C","games":"57","points":"1362","rebounds":"484","assists":"153","steals":"87","blocks":"146","index":332},{"id":20002548,"fname":"Leandro","lname":"Bolmaro","team":"UTA","position":"SF","games":"46","points":"502","rebounds":"442","assists":"25","steals":"257","blocks":"40","index":333},{"id":20002549,"fname":"R.J.","lname":"Hampton","team":"ORL","position":"PG","games":"45","points":"50","rebounds":"484","assists":"211","steals":"215","blocks":"89","index":334},{"id":20002550,"fname":"Immanuel","lname":"Quickley","team":"NY","position":"PG","games":"48","points":"568","rebounds":"348","assists":"478","steals":"82","blocks":"164","index":335},{"id":20002551,"fname":"Payton","lname":"Pritchard","team":"BOS","position":"PG","games":"60","points":"352","rebounds":"684","assists":"697","steals":"31","blocks":"193","index":336},{"id":20002552,"fname":"Udoka","lname":"Azubuike","team":"UTA","position":"C","games":"57","points":"1493","rebounds":"332","assists":"360","steals":"220","blocks":"194","index":337},{"id":20002553,"fname":"Jaden","lname":"McDaniels","team":"MIN","position":"PF","games":"58","points":"52","rebounds":"479","assists":"446","steals":"230","blocks":"178","index":338},{"id":20002554,"fname":"Malachi","lname":"Flynn","team":"TOR","position":"PG","games":"56","points":"743","rebounds":"694","assists":"302","steals":"124","blocks":"6","index":339},{"id":20002555,"fname":"Desmond","lname":"Bane","team":"MEM","position":"SG","games":"46","points":"79","rebounds":"574","assists":"503","steals":"153","blocks":"16","index":340},{"id":20002557,"fname":"Vernon","lname":"Carey Jr.","team":"WAS","position":"PF","games":"54","points":"1055","rebounds":"486","assists":"398","steals":"177","blocks":"75","index":341},{"id":20002559,"fname":"Th??o","lname":"Maledon","team":"CHA","position":"PG","games":"46","points":"1170","rebounds":"10","assists":"76","steals":"211","blocks":"78","index":342},{"id":20002560,"fname":"Xavier","lname":"Tillman Sr.","team":"MEM","position":"C","games":"60","points":"140","rebounds":"128","assists":"195","steals":"206","blocks":"100","index":343},{"id":20002562,"fname":"V??t","lname":"Krej????","team":"ATL","position":"SG","games":"57","points":"66","rebounds":"768","assists":"427","steals":"29","blocks":"137","index":344},{"id":20002563,"fname":"Saben","lname":"Lee","team":"PHI","position":"PG","games":"46","points":"296","rebounds":"312","assists":"511","steals":"262","blocks":"15","index":345},{"id":20002566,"fname":"Tre","lname":"Jones","team":"SA","position":"PG","games":"48","points":"172","rebounds":"455","assists":"112","steals":"113","blocks":"121","index":346},{"id":20002567,"fname":"Nick","lname":"Richards","team":"CHA","position":"C","games":"58","points":"507","rebounds":"676","assists":"149","steals":"111","blocks":"148","index":347},{"id":20002569,"fname":"Jordan","lname":"Nwora","team":"MIL","position":"PF","games":"48","points":"599","rebounds":"361","assists":"148","steals":"241","blocks":"31","index":348},{"id":20002571,"fname":"Marko","lname":"Simonovic","team":"CHI","position":"C","games":"51","points":"550","rebounds":"768","assists":"402","steals":"165","blocks":"35","index":349},{"id":20002574,"fname":"Isaiah","lname":"Joe","team":"OKC","position":"SG","games":"61","points":"1577","rebounds":"729","assists":"80","steals":"317","blocks":"239","index":350},{"id":20002577,"fname":"Kenyon","lname":"Martin Jr.","team":"HOU","position":"SF","games":"50","points":"1136","rebounds":"370","assists":"333","steals":"98","blocks":"103","index":351},{"id":20002584,"fname":"Paul","lname":"Reed","team":"PHI","position":"PF","games":"50","points":"1481","rebounds":"364","assists":"246","steals":"17","blocks":"174","index":352},{"id":20002586,"fname":"Devon","lname":"Dotson","team":"WAS","position":"PG","games":"53","points":"1539","rebounds":"725","assists":"436","steals":"73","blocks":"87","index":353},{"id":20002588,"fname":"Lamar","lname":"Stevens","team":"CLE","position":"SG","games":"52","points":"1203","rebounds":"220","assists":"567","steals":"207","blocks":"31","index":354},{"id":20002597,"fname":"Trent","lname":"Forrest","team":"ATL","position":"PG","games":"61","points":"1141","rebounds":"470","assists":"651","steals":"291","blocks":"168","index":355},{"id":20002599,"fname":"??mer","lname":"Yurtseven","team":"MIA","position":"C","games":"55","points":"1491","rebounds":"713","assists":"442","steals":"245","blocks":"22","index":356},{"id":20002600,"fname":"Naji","lname":"Marshall","team":"NO","position":"SF","games":"53","points":"623","rebounds":"265","assists":"491","steals":"301","blocks":"98","index":357},{"id":20002603,"fname":"Nathan","lname":"Knight","team":"MIN","position":"PF","games":"46","points":"396","rebounds":"687","assists":"217","steals":"185","blocks":"82","index":358},{"id":20002610,"fname":"Trevelin","lname":"Queen","team":"IND","position":"SG","games":"62","points":"908","rebounds":"95","assists":"443","steals":"213","blocks":"243","index":359},{"id":20002615,"fname":"Anthony","lname":"Gill","team":"WAS","position":"PF","games":"54","points":"951","rebounds":"34","assists":"254","steals":"40","blocks":"71","index":360},{"id":20002625,"fname":"Mamadi","lname":"Diakite","team":"CLE","position":"PF","games":"48","points":"820","rebounds":"432","assists":"325","steals":"201","blocks":"53","index":361},{"id":20002628,"fname":"Anthony","lname":"Lamb","team":"GS","position":"SF","games":"45","points":"53","rebounds":"103","assists":"79","steals":"235","blocks":"107","index":362},{"id":20002631,"fname":"Kevon","lname":"Harris","team":"ORL","position":"SG","games":"47","points":"489","rebounds":"28","assists":"3","steals":"258","blocks":"120","index":363},{"id":20002651,"fname":"Corey","lname":"Kispert","team":"WAS","position":"SF","games":"53","points":"915","rebounds":"793","assists":"172","steals":"193","blocks":"202","index":364},{"id":20002652,"fname":"Chris","lname":"Duarte","team":"IND","position":"SG","games":"54","points":"1617","rebounds":"625","assists":"380","steals":"94","blocks":"36","index":365},{"id":20002653,"fname":"Jaden","lname":"Springer","team":"PHI","position":"SG","games":"57","points":"829","rebounds":"486","assists":"264","steals":"155","blocks":"89","index":366},{"id":20002654,"fname":"Franz","lname":"Wagner","team":"ORL","position":"SF","games":"47","points":"565","rebounds":"488","assists":"23","steals":"253","blocks":"161","index":367},{"id":20002655,"fname":"Moses","lname":"Moody","team":"GS","position":"SG","games":"61","points":"1109","rebounds":"515","assists":"64","steals":"238","blocks":"110","index":368},{"id":20002656,"fname":"Ziaire","lname":"Williams","team":"MEM","position":"SF","games":"60","points":"1270","rebounds":"595","assists":"166","steals":"210","blocks":"238","index":369},{"id":20002657,"fname":"Jalen","lname":"Johnson","team":"ATL","position":"PF","games":"58","points":"1046","rebounds":"562","assists":"86","steals":"54","blocks":"80","index":370},{"id":20002658,"fname":"Cam","lname":"Thomas","team":"BKN","position":"SG","games":"61","points":"1019","rebounds":"723","assists":"232","steals":"140","blocks":"137","index":371},{"id":20002661,"fname":"Jonathan","lname":"Kuminga","team":"GS","position":"PF","games":"53","points":"1299","rebounds":"169","assists":"296","steals":"123","blocks":"56","index":372},{"id":20002662,"fname":"Scottie","lname":"Barnes","team":"TOR","position":"SF","games":"48","points":"1386","rebounds":"27","assists":"562","steals":"210","blocks":"60","index":373},{"id":20002663,"fname":"Keon","lname":"Johnson","team":"POR","position":"SG","games":"48","points":"769","rebounds":"167","assists":"240","steals":"180","blocks":"151","index":374},{"id":20002664,"fname":"Davion","lname":"Mitchell","team":"SAC","position":"PG","games":"50","points":"1254","rebounds":"400","assists":"434","steals":"102","blocks":"12","index":375},{"id":20002665,"fname":"Josh","lname":"Giddey","team":"OKC","position":"SG","games":"58","points":"196","rebounds":"437","assists":"22","steals":"50","blocks":"128","index":376},{"id":20002666,"fname":"Alperen","lname":"Seng??n","team":"HOU","position":"C","games":"57","points":"893","rebounds":"349","assists":"226","steals":"129","blocks":"206","index":377},{"id":20002667,"fname":"Cade","lname":"Cunningham","team":"DET","position":"PG","games":"46","points":"536","rebounds":"355","assists":"499","steals":"246","blocks":"123","index":378},{"id":20002668,"fname":"Jalen","lname":"Green","team":"HOU","position":"SG","games":"54","points":"1208","rebounds":"184","assists":"652","steals":"312","blocks":"25","index":379},{"id":20002669,"fname":"Evan","lname":"Mobley","team":"CLE","position":"PF","games":"60","points":"1308","rebounds":"836","assists":"251","steals":"251","blocks":"229","index":380},{"id":20002670,"fname":"Jalen","lname":"Suggs","team":"ORL","position":"PG","games":"53","points":"1357","rebounds":"347","assists":"29","steals":"247","blocks":"8","index":381},{"id":20002671,"fname":"James","lname":"Bouknight","team":"CHA","position":"SG","games":"56","points":"1050","rebounds":"166","assists":"622","steals":"276","blocks":"223","index":382},{"id":20002672,"fname":"Kai","lname":"Jones","team":"CHA","position":"C","games":"52","points":"663","rebounds":"229","assists":"36","steals":"167","blocks":"63","index":383},{"id":20002673,"fname":"Isaiah","lname":"Jackson","team":"IND","position":"PF","games":"60","points":"212","rebounds":"205","assists":"372","steals":"92","blocks":"181","index":384},{"id":20002674,"fname":"Ayo","lname":"Dosunmu","team":"CHI","position":"PG","games":"57","points":"321","rebounds":"713","assists":"609","steals":"80","blocks":"156","index":385},{"id":20002675,"fname":"Usman","lname":"Garuba","team":"HOU","position":"PF","games":"58","points":"477","rebounds":"764","assists":"218","steals":"157","blocks":"76","index":386},{"id":20002676,"fname":"Tre","lname":"Mann","team":"OKC","position":"PG","games":"55","points":"237","rebounds":"731","assists":"649","steals":"234","blocks":"191","index":387},{"id":20002677,"fname":"Greg","lname":"Brown III","team":"POR","position":"PF","games":"60","points":"964","rebounds":"375","assists":"116","steals":"117","blocks":"37","index":388},{"id":20002678,"fname":"Neemias","lname":"Queta","team":"SAC","position":"C","games":"62","points":"1380","rebounds":"634","assists":"43","steals":"314","blocks":"201","index":389},{"id":20002681,"fname":"Quentin","lname":"Grimes","team":"NY","position":"PG","games":"58","points":"1522","rebounds":"862","assists":"462","steals":"247","blocks":"100","index":390},{"id":20002683,"fname":"Jeremiah","lname":"Robinson-Earl","team":"OKC","position":"C","games":"59","points":"16","rebounds":"44","assists":"8","steals":"133","blocks":"38","index":391},{"id":20002684,"fname":"Luka","lname":"Garza","team":"MIN","position":"C","games":"54","points":"583","rebounds":"409","assists":"618","steals":"311","blocks":"159","index":392},{"id":20002685,"fname":"McKinley","lname":"Wright IV","team":"DAL","position":"PG","games":"59","points":"603","rebounds":"850","assists":"104","steals":"203","blocks":"28","index":393},{"id":20002686,"fname":"Sam","lname":"Hauser","team":"BOS","position":"PF","games":"57","points":"168","rebounds":"749","assists":"278","steals":"102","blocks":"22","index":394},{"id":20002688,"fname":"Josh","lname":"Christopher","team":"HOU","position":"SG","games":"53","points":"1151","rebounds":"417","assists":"335","steals":"169","blocks":"205","index":395},{"id":20002689,"fname":"Jason","lname":"Preston","team":"LAC","position":"PG","games":"52","points":"1536","rebounds":"508","assists":"45","steals":"193","blocks":"205","index":396},{"id":20002690,"fname":"Brandon","lname":"Boston Jr.","team":"LAC","position":"SG","games":"55","points":"1130","rebounds":"461","assists":"430","steals":"312","blocks":"193","index":397},{"id":20002691,"fname":"Jericho","lname":"Sims","team":"NY","position":"C","games":"58","points":"433","rebounds":"32","assists":"433","steals":"106","blocks":"145","index":398},{"id":20002692,"fname":"Miles","lname":"McBride","team":"NY","position":"PG","games":"47","points":"703","rebounds":"582","assists":"68","steals":"3","blocks":"136","index":399},{"id":20002693,"fname":"Isaiah","lname":"Livers","team":"DET","position":"SF","games":"56","points":"1618","rebounds":"488","assists":"214","steals":"266","blocks":"33","index":400},{"id":20002694,"fname":"JT","lname":"Thor","team":"CHA","position":"PF","games":"58","points":"257","rebounds":"427","assists":"30","steals":"131","blocks":"136","index":401},{"id":20002696,"fname":"Isaiah","lname":"Todd","team":"WAS","position":"PF","games":"59","points":"1471","rebounds":"104","assists":"166","steals":"286","blocks":"105","index":402},{"id":20002697,"fname":"Day'Ron","lname":"Sharpe","team":"BKN","position":"C","games":"50","points":"134","rebounds":"458","assists":"182","steals":"266","blocks":"151","index":403},{"id":20002699,"fname":"Herbert","lname":"Jones","team":"NO","position":"SF","games":"50","points":"467","rebounds":"21","assists":"76","steals":"136","blocks":"120","index":404},{"id":20002700,"fname":"Trey","lname":"Murphy III","team":"NO","position":"SF","games":"56","points":"1261","rebounds":"554","assists":"137","steals":"313","blocks":"45","index":405},{"id":20002701,"fname":"Bones","lname":"Hyland","team":"DEN","position":"PG","games":"53","points":"1287","rebounds":"573","assists":"283","steals":"157","blocks":"162","index":406},{"id":20002703,"fname":"Charles","lname":"Bassey","team":"SA","position":"C","games":"52","points":"1418","rebounds":"316","assists":"427","steals":"189","blocks":"11","index":407},{"id":20002708,"fname":"Sandro","lname":"Mamukelashvili","team":"MIL","position":"PF","games":"50","points":"1149","rebounds":"161","assists":"602","steals":"173","blocks":"124","index":408},{"id":20002709,"fname":"Santi","lname":"Aldama","team":"MEM","position":"PF","games":"48","points":"17","rebounds":"497","assists":"142","steals":"56","blocks":"176","index":409},{"id":20002711,"fname":"Kessler","lname":"Edwards","team":"BKN","position":"SF","games":"59","points":"425","rebounds":"5","assists":"287","steals":"121","blocks":"106","index":410},{"id":20002712,"fname":"Dalano","lname":"Banton","team":"TOR","position":"PG","games":"53","points":"867","rebounds":"755","assists":"532","steals":"229","blocks":"166","index":411},{"id":20002714,"fname":"Aaron","lname":"Wiggins","team":"OKC","position":"SG","games":"45","points":"1127","rebounds":"230","assists":"183","steals":"226","blocks":"60","index":412},{"id":20002719,"fname":"Duane","lname":"Washington Jr.","team":"PHO","position":"PG","games":"45","points":"997","rebounds":"34","assists":"406","steals":"72","blocks":"72","index":413},{"id":20002720,"fname":"Austin","lname":"Reaves","team":"LAL","position":"SG","games":"53","points":"43","rebounds":"275","assists":"186","steals":"309","blocks":"34","index":414},{"id":20002723,"fname":"Trendon","lname":"Watford","team":"POR","position":"PF","games":"46","points":"866","rebounds":"509","assists":"170","steals":"22","blocks":"134","index":415},{"id":20002727,"fname":"Micah","lname":"Potter","team":"UTA","position":"C","games":"51","points":"616","rebounds":"448","assists":"439","steals":"200","blocks":"126","index":416},{"id":20002728,"fname":"Justin","lname":"Champagnie","team":"TOR","position":"SG","games":"57","points":"351","rebounds":"514","assists":"26","steals":"267","blocks":"155","index":417},{"id":20002732,"fname":"Jose","lname":"Alvarado","team":"NO","position":"PG","games":"57","points":"483","rebounds":"802","assists":"75","steals":"234","blocks":"200","index":418},{"id":20002736,"fname":"Jordan","lname":"Goodwin","team":"WAS","position":"PG","games":"56","points":"1520","rebounds":"766","assists":"153","steals":"57","blocks":"202","index":419},{"id":20002738,"fname":"Terry","lname":"Taylor","team":"IND","position":"SF","games":"60","points":"1656","rebounds":"298","assists":"195","steals":"49","blocks":"213","index":420},{"id":20002749,"fname":"Eugene","lname":"Omoruyi","team":"OKC","position":"SF","games":"60","points":"1613","rebounds":"760","assists":"562","steals":"227","blocks":"205","index":421},{"id":20002751,"fname":"David","lname":"Duke Jr.","team":"BKN","position":"SG","games":"58","points":"313","rebounds":"488","assists":"237","steals":"117","blocks":"36","index":422},{"id":20002759,"fname":"Dru","lname":"Smith","team":"MIA","position":"PG","games":"46","points":"437","rebounds":"54","assists":"176","steals":"269","blocks":"6","index":423},{"id":20002766,"fname":"Daishen","lname":"Nix","team":"HOU","position":"PG","games":"55","points":"1477","rebounds":"379","assists":"475","steals":"178","blocks":"186","index":424},{"id":20002786,"fname":"Jeff","lname":"Dowtin Jr.","team":"TOR","position":"PG","games":"60","points":"1273","rebounds":"435","assists":"386","steals":"160","blocks":"56","index":425},{"id":20002789,"fname":"Braxton","lname":"Key","team":"DET","position":"SF","games":"49","points":"843","rebounds":"724","assists":"136","steals":"177","blocks":"95","index":426},{"id":20002799,"fname":"Ish","lname":"Wainright","team":"PHO","position":"SF","games":"55","points":"342","rebounds":"645","assists":"132","steals":"80","blocks":"135","index":427},{"id":20002844,"fname":"Matt","lname":"Ryan","team":"MIN","position":"SF","games":"54","points":"1478","rebounds":"663","assists":"588","steals":"138","blocks":"88","index":428},{"id":20002859,"fname":"Lindy","lname":"Waters III","team":"OKC","position":"SF","games":"48","points":"1395","rebounds":"1","assists":"4","steals":"19","blocks":"173","index":429},{"id":20002861,"fname":"Ochai","lname":"Agbaji","team":"UTA","position":"SG","games":"56","points":"1208","rebounds":"828","assists":"131","steals":"21","blocks":"174","index":430},{"id":20002862,"fname":"Patrick","lname":"Baldwin Jr.","team":"GS","position":"SF","games":"59","points":"1722","rebounds":"775","assists":"202","steals":"95","blocks":"160","index":431},{"id":20002863,"fname":"Paolo","lname":"Banchero","team":"ORL","position":"PF","games":"60","points":"1386","rebounds":"493","assists":"343","steals":"55","blocks":"166","index":432},{"id":20002864,"fname":"Dominick","lname":"Barlow","team":"SA","position":"PF","games":"49","points":"730","rebounds":"723","assists":"156","steals":"63","blocks":"66","index":433},{"id":20002865,"fname":"MarJon","lname":"Beauchamp","team":"MIL","position":"SG","games":"49","points":"1447","rebounds":"170","assists":"517","steals":"30","blocks":"89","index":434},{"id":20002867,"fname":"Malaki","lname":"Branham","team":"SA","position":"SG","games":"62","points":"1671","rebounds":"506","assists":"23","steals":"95","blocks":"230","index":435},{"id":20002868,"fname":"Christian","lname":"Braun","team":"DEN","position":"SG","games":"58","points":"1666","rebounds":"308","assists":"624","steals":"121","blocks":"126","index":436},{"id":20002869,"fname":"Kendall","lname":"Brown","team":"IND","position":"SG","games":"51","points":"706","rebounds":"455","assists":"426","steals":"120","blocks":"30","index":437},{"id":20002870,"fname":"Chet","lname":"Holmgren","team":"OKC","position":"C","games":"56","points":"767","rebounds":"180","assists":"668","steals":"233","blocks":"0","index":438},{"id":20002871,"fname":"Jabari","lname":"Smith Jr.","team":"HOU","position":"PF","games":"51","points":"766","rebounds":"372","assists":"276","steals":"257","blocks":"165","index":439},{"id":20002872,"fname":"Jaden","lname":"Ivey","team":"DET","position":"SG","games":"53","points":"303","rebounds":"482","assists":"430","steals":"176","blocks":"202","index":440},{"id":20002873,"fname":"Keegan","lname":"Murray","team":"SAC","position":"PF","games":"58","points":"350","rebounds":"47","assists":"8","steals":"80","blocks":"51","index":441},{"id":20002874,"fname":"Shaedon","lname":"Sharpe","team":"POR","position":"SG","games":"60","points":"655","rebounds":"703","assists":"175","steals":"285","blocks":"180","index":442},{"id":20002875,"fname":"Jalen","lname":"Duren","team":"DET","position":"C","games":"52","points":"1021","rebounds":"286","assists":"421","steals":"126","blocks":"180","index":443},{"id":20002876,"fname":"AJ","lname":"Griffin","team":"ATL","position":"SF","games":"58","points":"232","rebounds":"157","assists":"2","steals":"70","blocks":"71","index":444},{"id":20002877,"fname":"Johnny","lname":"Davis","team":"WAS","position":"SG","games":"55","points":"760","rebounds":"60","assists":"642","steals":"87","blocks":"211","index":445},{"id":20002878,"fname":"Dyson","lname":"Daniels","team":"NO","position":"PG","games":"61","points":"691","rebounds":"156","assists":"129","steals":"249","blocks":"17","index":446},{"id":20002879,"fname":"Bennedict","lname":"Mathurin","team":"IND","position":"SG","games":"57","points":"149","rebounds":"665","assists":"597","steals":"231","blocks":"214","index":447},{"id":20002880,"fname":"Ousmane","lname":"Dieng","team":"OKC","position":"SF","games":"53","points":"667","rebounds":"703","assists":"211","steals":"136","blocks":"48","index":448},{"id":20002881,"fname":"Jeremy","lname":"Sochan","team":"SA","position":"PF","games":"61","points":"59","rebounds":"484","assists":"146","steals":"333","blocks":"7","index":449},{"id":20002882,"fname":"TyTy","lname":"Washington Jr.","team":"HOU","position":"PG","games":"52","points":"477","rebounds":"693","assists":"171","steals":"98","blocks":"124","index":450},{"id":20002883,"fname":"Tari","lname":"Eason","team":"HOU","position":"SF","games":"46","points":"814","rebounds":"355","assists":"188","steals":"152","blocks":"6","index":451},{"id":20002884,"fname":"Mark","lname":"Williams","team":"CHA","position":"C","games":"51","points":"707","rebounds":"575","assists":"280","steals":"74","blocks":"18","index":452},{"id":20002885,"fname":"Kennedy","lname":"Chandler","team":"MEM","position":"PG","games":"57","points":"425","rebounds":"222","assists":"667","steals":"247","blocks":"184","index":453},{"id":20002886,"fname":"Blake","lname":"Wesley","team":"SA","position":"SG","games":"49","points":"669","rebounds":"67","assists":"258","steals":"256","blocks":"35","index":454},{"id":20002887,"fname":"EJ","lname":"Liddell","team":"NO","position":"PF","games":"50","points":"648","rebounds":"201","assists":"154","steals":"226","blocks":"197","index":455},{"id":20002888,"fname":"Nikola","lname":"Jovic","team":"MIA","position":"SF","games":"55","points":"1405","rebounds":"720","assists":"554","steals":"97","blocks":"215","index":456},{"id":20002889,"fname":"Walker","lname":"Kessler","team":"UTA","position":"C","games":"50","points":"1125","rebounds":"343","assists":"532","steals":"234","blocks":"84","index":457},{"id":20002890,"fname":"Trevor","lname":"Keels","team":"NY","position":"SG","games":"47","points":"942","rebounds":"411","assists":"206","steals":"277","blocks":"7","index":458},{"id":20002891,"fname":"Jaden","lname":"Hardy","team":"DAL","position":"SG","games":"62","points":"651","rebounds":"111","assists":"686","steals":"294","blocks":"94","index":459},{"id":20002893,"fname":"Bryce","lname":"McGowens","team":"CHA","position":"SG","games":"54","points":"1321","rebounds":"241","assists":"515","steals":"6","blocks":"28","index":460},{"id":20002894,"fname":"Christian","lname":"Koloko","team":"TOR","position":"PF","games":"58","points":"1119","rebounds":"837","assists":"269","steals":"43","blocks":"188","index":461},{"id":20002895,"fname":"Wendell","lname":"Moore Jr.","team":"MIN","position":"SG","games":"58","points":"1137","rebounds":"355","assists":"653","steals":"115","blocks":"123","index":462},{"id":20002896,"fname":"Jalen","lname":"Williams","team":"OKC","position":"SF","games":"48","points":"447","rebounds":"120","assists":"25","steals":"224","blocks":"36","index":463},{"id":20002897,"fname":"Dalen","lname":"Terry","team":"CHI","position":"SF","games":"53","points":"849","rebounds":"216","assists":"613","steals":"229","blocks":"106","index":464},{"id":20002898,"fname":"John","lname":"Butler Jr.","team":"POR","position":"PF","games":"57","points":"596","rebounds":"278","assists":"635","steals":"306","blocks":"150","index":465},{"id":20002899,"fname":"Julian","lname":"Champagnie","team":"PHI","position":"SF","games":"62","points":"22","rebounds":"515","assists":"233","steals":"81","blocks":"110","index":466},{"id":20002900,"fname":"Max","lname":"Christie","team":"LAL","position":"SG","games":"49","points":"1261","rebounds":"136","assists":"577","steals":"262","blocks":"9","index":467},{"id":20002902,"fname":"JD","lname":"Davison","team":"BOS","position":"PG","games":"57","points":"1573","rebounds":"116","assists":"96","steals":"276","blocks":"150","index":468},{"id":20002903,"fname":"Moussa","lname":"Diabate","team":"LAC","position":"PF","games":"51","points":"928","rebounds":"32","assists":"457","steals":"126","blocks":"174","index":469},{"id":20002905,"fname":"Keon","lname":"Ellis","team":"SAC","position":"SG","games":"46","points":"605","rebounds":"626","assists":"538","steals":"263","blocks":"71","index":470},{"id":20002907,"fname":"Ron","lname":"Harper Jr.","team":"TOR","position":"SF","games":"58","points":"114","rebounds":"219","assists":"562","steals":"28","blocks":"184","index":471},{"id":20002908,"fname":"Caleb","lname":"Houstan","team":"ORL","position":"SG","games":"57","points":"869","rebounds":"622","assists":"366","steals":"269","blocks":"190","index":472},{"id":20002910,"fname":"Jake","lname":"LaRavia","team":"MEM","position":"PF","games":"48","points":"1355","rebounds":"276","assists":"495","steals":"203","blocks":"77","index":473},{"id":20002913,"fname":"Josh","lname":"Minott","team":"MIN","position":"PF","games":"48","points":"20","rebounds":"221","assists":"255","steals":"98","blocks":"171","index":474},{"id":20002914,"fname":"Andrew","lname":"Nembhard","team":"IND","position":"PG","games":"51","points":"466","rebounds":"288","assists":"590","steals":"56","blocks":"55","index":475},{"id":20002915,"fname":"Scotty","lname":"Pippen Jr.","team":"LAL","position":"PG","games":"59","points":"322","rebounds":"710","assists":"674","steals":"105","blocks":"118","index":476},{"id":20002916,"fname":"David","lname":"Roddy","team":"MEM","position":"PF","games":"52","points":"45","rebounds":"504","assists":"362","steals":"230","blocks":"48","index":477},{"id":20002917,"fname":"Ryan","lname":"Rollins","team":"GS","position":"SG","games":"48","points":"118","rebounds":"96","assists":"312","steals":"64","blocks":"85","index":478},{"id":20002918,"fname":"Dereon","lname":"Seabron","team":"NO","position":"SG","games":"60","points":"1387","rebounds":"181","assists":"582","steals":"297","blocks":"59","index":479},{"id":20002919,"fname":"Jabari","lname":"Walker","team":"POR","position":"PF","games":"50","points":"374","rebounds":"20","assists":"600","steals":"274","blocks":"140","index":480},{"id":20002920,"fname":"Peyton","lname":"Watson","team":"DEN","position":"SF","games":"51","points":"756","rebounds":"534","assists":"16","steals":"120","blocks":"197","index":481},{"id":20002921,"fname":"Jaylin","lname":"Williams","team":"OKC","position":"PF","games":"50","points":"747","rebounds":"12","assists":"150","steals":"212","blocks":"143","index":482},{"id":20002923,"fname":"Alondes","lname":"Williams","team":"BKN","position":"PG","games":"56","points":"261","rebounds":"591","assists":"604","steals":"188","blocks":"150","index":483},{"id":20002927,"fname":"Vince","lname":"Williams Jr.","team":"MEM","position":"SG","games":"49","points":"365","rebounds":"463","assists":"386","steals":"193","blocks":"47","index":484},{"id":20002928,"fname":"Isaiah","lname":"Mobley","team":"CLE","position":"PF","games":"56","points":"1506","rebounds":"557","assists":"70","steals":"185","blocks":"220","index":485},{"id":20002930,"fname":"Tyrese","lname":"Martin","team":"ATL","position":"SG","games":"47","points":"866","rebounds":"597","assists":"308","steals":"103","blocks":"142","index":486},{"id":20002936,"fname":"Cole","lname":"Swider","team":"LAL","position":"PF","games":"60","points":"769","rebounds":"582","assists":"582","steals":"145","blocks":"233","index":487},{"id":20002937,"fname":"Collin","lname":"Gillespie","team":"DEN","position":"PG","games":"51","points":"283","rebounds":"422","assists":"440","steals":"96","blocks":"40","index":488},{"id":20002938,"fname":"Trevor","lname":"Hudgins","team":"HOU","position":"PG","games":"48","points":"133","rebounds":"701","assists":"84","steals":"34","blocks":"190","index":489},{"id":20002939,"fname":"Kenneth","lname":"Lofton Jr.","team":"MEM","position":"PF","games":"51","points":"1226","rebounds":"447","assists":"208","steals":"98","blocks":"197","index":490},{"id":20002944,"fname":"Johnny","lname":"Juzang","team":"UTA","position":"SG","games":"58","points":"120","rebounds":"547","assists":"484","steals":"116","blocks":"21","index":491},{"id":20002945,"fname":"AJ","lname":"Green","team":"MIL","position":"SG","games":"50","points":"501","rebounds":"385","assists":"187","steals":"142","blocks":"39","index":492},{"id":20002954,"fname":"Buddy","lname":"Boeheim","team":"DET","position":"SF","games":"52","points":"262","rebounds":"127","assists":"196","steals":"90","blocks":"51","index":493},{"id":20002956,"fname":"Darius","lname":"Days","team":"HOU","position":"PF","games":"62","points":"944","rebounds":"157","assists":"538","steals":"232","blocks":"5","index":494},{"id":20002977,"fname":"Jack","lname":"White","team":"DEN","position":"SF","games":"46","points":"919","rebounds":"388","assists":"460","steals":"227","blocks":"107","index":495},{"id":20003008,"fname":"Jamal","lname":"Cain","team":"MIA","position":"SF","games":"60","points":"1318","rebounds":"271","assists":"49","steals":"27","blocks":"165","index":496},{"id":20003009,"fname":"Simone","lname":"Fontecchio","team":"UTA","position":"SF","games":"60","points":"205","rebounds":"2","assists":"33","steals":"1","blocks":"105","index":497},{"id":20003010,"fname":"Chima","lname":"Moneke","team":"SAC","position":"PF","games":"60","points":"1212","rebounds":"96","assists":"115","steals":"129","blocks":"107","index":498},{"id":20003019,"fname":"Ibou","lname":"Badji","team":"POR","position":"C","games":"56","points":"1262","rebounds":"739","assists":"378","steals":"276","blocks":"192","index":499}];


const availPlayerParent = document.querySelector("#availplayers");
const myPlayerParent = document.querySelector("#myplayerlist");
const playerDescParent = document.querySelector("#selplayers");

//const playAllStatURL = 'https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2021'

//const playStatURL = 'https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStatsByPlayer/2021'
//?key=ea5adf5c3d804637980d5a2154a4ae52';
//const playStatURL = 'https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStatsByPlayer/2021?key=57d85064908b4d1e83fb7c0987aefff3';
//const playerURL = 'https://api.sportsdata.io/v3/nba/scores/json/Players?key=57d85064908b4d1e83fb7c0987aefff3';
//const playerURL = 'https://api.sportsdata.io/v3/nba/projections/json/PlayerSeasonProjectionStatsByPlayer/2021/';
//const playerURL = 'https://api.sportsdata.io/v3/nba/scores/json/Players?key=ea5adf5c3d804637980d5a2154a4ae52';

//let availSection = true;

class Player {
    constructor(id, fname="", lname="", team="", position="", 
        games=0, points=0, rebounds=0, assists=0, steals=0, blocks=0, index=0) {
            this.id = id;
            this.fname = fname;
            this.lname = lname;
            this.team = team;
            this.position = position;
            this.games = games;
            this.points = points;
            this.rebounds = rebounds;
            this.assists = assists;
            this.steals = steals;
            this.blocks = blocks;
            this.index = index;
    }

    setPlayerIndex(ind) {
        this.index = ind;
    }

    getPlayerIndex() {
        return(this.index);
    }

    setStats(games=0, points=0, rebounds=0, assists=0, steals=0, blocks=0) {
        this.games = games;
        this.points = points;
        this.rebounds = rebounds;
        this.assists = assists;
        this.steals = steals;
        this.blocks = blocks;
    }

    copyPlayer(aPlayer) {
        this.id = aPlayer.id;
        this.fname = aPlayer.fname;
        this.lname = aPlayer.lname;
        this.team = aPlayer.team;
        this.position = aPlayer.position;
        this.games = aPlayer.games;
        this.points = aPlayer.points;
        this.rebounds = aPlayer.rebounds;
        this.assists = aPlayer.assists;
        this.steals = aPlayer.steals;
        this.blocks = aPlayer.blocks;        
        this.index = aPlayer.index;        
    }
/*
    displayPlayer(parentElement) {
        const row = document.createElement("tr");
        let item = document.createElement("td");
        item.innerHTML = `${this.lname}, ${this.fname}`;
        item.setAttribute("class", "name");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${this.team}`;
        item.setAttribute("class", "team");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${this.position}`;
        item.setAttribute("class", "position");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${this.index}`;
        item.setAttribute("class", "index");
        row.appendChild(item);
        // Listener attached to the item to pull stats
        row.addEventListener('click', () => {
            //debugger;
            availSection = (parentElement == availPlayerParent);
            let btn = document.getElementsByClassName("hidden");
            console.log(btn);
            let btnLen = btn.length;
            for (let i=0; i<btnLen; i++) {
                btn[0].classList.remove('hidden');
            }
            removePrevAvailSelected(parentElement);
            //debugger;
            row.classList.add('selected');
            this.displayPlayerStats(playerDescParent);
        })
        parentElement.appendChild(row);
    }
  */    
    displayStats(parentElement) {
        console.log(this);
        const row = document.createElement("tr");
        let item = document.createElement("td");
        item.innerHTML = `${this.lname}, ${this.fname}`;
        item.setAttribute("class", "name");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${this.team}`;
        item.setAttribute("class", "team");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${this.position}`;
        item.setAttribute("class", "position");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${this.games}`;
        item.setAttribute("class", "games");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${(this.points/this.games).toFixed(2)}`;
        item.setAttribute("class", "points");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${(this.rebounds/this.games).toFixed(2)}`;
        item.setAttribute("class", "rebounds");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${(this.assists/this.games).toFixed(2)}`;
        item.setAttribute("class", "assists");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${(this.steals/this.games).toFixed(2)}`;
        item.setAttribute("class", "steals");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${(this.blocks/this.games).toFixed(2)}`;
        item.setAttribute("class", "blocks");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${this.index}`;
        item.setAttribute("class", "index");
        row.appendChild(item);
        parentElement.appendChild(row);
    }
/*
    retrievePlayerStats() {
        debugger;
        let statURL = playStatURL+`/${this.id}?key=ea5adf5c3d804637980d5a2154a4ae52`;
        console.log(statURL);
        fetch(statURL) 
        .then( response => {
            if(response.ok) {
                return response;
            }
                throw Error(response.statusText);
            }
        )
        .then( response => response.json() )
        .then( data => {
            console.log(data);
            let itemArray = data;
            console.log(itemArray);
            debugger;
            this.setStats(itemArray.Games, itemArray.Points, itemArray.Rebounds,
                itemArray.Assists, itemArray.Steals, itemArray.BlockedShots);
        })
        .catch( error => console.log('There was an error:', error)) 
    };

    displayPlayerStats(parentElement) {
        //debugger;
        //var outputUL = document.querySelector("#playerdesc");
        var child = parentElement.lastElementChild;
        // Remove all current players from HTML
        while (child) {
            parentElement.removeChild(child);
            child = parentElement.lastElementChild;
        }
        parentElement.innerHTML = '';
        //debugger;
        this.displayStats(parentElement);
    }; 

    clearTable (parentElement) {
        debugger;
        if (parentElement == playerDescParent) {
            var child = parentElement.lastElementChild;
            // Remove all current players from HTML
            while (child) {
                parentElement.removeChild(child);
                child = parentElement.lastElementChild;
            }
            parentElement.innerHTML = '';
            //debugger;
            this.displayStats(parentElement);
        }
    } */

    displayPlayerwStats(parentElement) {
        const row = document.createElement("tr");
        let item = document.createElement("td");
        item.innerHTML = `${this.lname}, ${this.fname}`;
        item.setAttribute("class", "name");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${this.team}`;
        item.setAttribute("class", "team");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${this.position}`;
        item.setAttribute("class", "position");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${this.games}`;
        item.setAttribute("class", "games");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${(this.points/this.games).toFixed(2)}`;
        item.setAttribute("class", "points");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${(this.rebounds/this.games).toFixed(2)}`;
        item.setAttribute("class", "rebounds");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${(this.assists/this.games).toFixed(2)}`;
        item.setAttribute("class", "assists");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${(this.steals/this.games).toFixed(2)}`;
        item.setAttribute("class", "steals");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${(this.blocks/this.games).toFixed(2)}`;
        item.setAttribute("class", "blocks");
        row.appendChild(item);
        item = document.createElement("td");
        item.innerHTML = `${this.index}`;
        item.setAttribute("class", "index");
        row.appendChild(item);
        // Listener attached to the item to pull stats
        row.addEventListener('click', () => {
            //debugger;
            //availSection = (parentElement == availPlayerParent);
            /*
            let btn = document.getElementsByClassName("hidden");
            console.log(btn);
            let btnLen = btn.length;
            for (let i=0; i<btnLen; i++) {
                if (btn[])
                btn[0].classList.remove('hidden');
            } */
            let addBtn = document.getElementById("addBtn");
            let delBtn = document.getElementById("delBtn");
            if (parentElement == availPlayerParent) {
                addBtn.classList.remove('hidden');
                delBtn.classList.add('hidden');
            }
            if (parentElement == myPlayerParent) {
                delBtn.classList.remove('hidden');
                addBtn.classList.add('hidden');
            }
            removePrevAvailSelected();
            //debugger;
            row.classList.add('selected');
            //this.clearTable(playerDescParent);
            this.displayStats(playerDescParent);
        })
        parentElement.appendChild(row);
    }
}

// PlayerList is the container for the list of players 
class PlayerList {
    constructor(listname='availplayerlist') {
        //debugger;
        this.pList = new Array();
        if (listname=='availplayerlist') {
            //viewAvailPlayers(this.pList);
            var myJSON = jsonPlayerData;
            console.log(myJSON);
            var playerGames;
            // If a list exists in localStorage, create players and add them to this list
            if (myJSON != "" && myJSON != null) {
                for (var i=0; i<myJSON.length; i++) {
                    playerGames = (45+(Math.random()*17));
                    var storedItem = new Player(myJSON[i].id, myJSON[i].fname, 
                        myJSON[i].lname, myJSON[i].team, myJSON[i].position, 
                        playerGames.toFixed(0), 
                        (playerGames*Math.random()*30).toFixed(0), 
                        (playerGames*Math.random()*15).toFixed(0), 
                        (playerGames*Math.random()*12).toFixed(0), 
                        (playerGames*Math.random()*6).toFixed(0), 
                        (playerGames*Math.random()*4).toFixed(0), i);
                    this.pList.push(storedItem);
                }
            }
         } 
        else {
            // Pull the current list from the localStorage
            var myJSON = JSON.parse(window.localStorage.getItem(listname));
            // Pull the current list from the localStorage
            //var myJSON = testData;
            //var myJSON = jsonPlayerData;
            console.log(myJSON);
            var playerGames;
            // If a list exists in localStorage, create players and add them to this list
            if (myJSON != "" && myJSON != null) {
                for (var i=0; i<myJSON.length; i++) {
                    playerGames = (45+(Math.random()*17));
                    var storedItem = new Player(myJSON[i].id, myJSON[i].fname, 
                        myJSON[i].lname, myJSON[i].team, myJSON[i].position, 
                        playerGames.toFixed(0), 
                        (playerGames*Math.random()*30).toFixed(0), 
                        (playerGames*Math.random()*15).toFixed(0), 
                        (playerGames*Math.random()*12).toFixed(0), 
                        (playerGames*Math.random()*6).toFixed(0), 
                        (playerGames*Math.random()*4).toFixed(0), i);
                    this.pList.push(storedItem);
                }
            }
        }
        //var saveJSON = JSON.stringify(this.pList);   
        //window.localStorage.setItem('availstatlist', saveJSON);
        //const fileOutput = document.getElementById("fileOutput");
        //fileOutput.textContent = saveJSON;

    }

    displayPlayerList (parentElement, statFlag=false) {
        //debugger;
        //parentElement.textContent = "";
        var child = parentElement.lastElementChild;
        // Remove all current players from HTML
        while (child && parentElement.querySelectorAll("tr").length > 1) {
            parentElement.removeChild(child);
            child = parentElement.lastElementChild;
        }
        // Add players currently in the player list
        var listCount = 0;
        if (this.pList.length != 0 && this.pList[0] != undefined) {
            for (var i=0; i<this.pList.length; i++) {
                if (!undefined) {
                    // Filter display based on filter value
/*                    if ((displayFilter == "All") ||
                        (displayFilter == "Active" && !this.pList[i].complete) ||
                        (displayFilter == "Complete" && this.pList[i].complete)) { 
                            if (statFlag) {
                                this.pList[i].displayPlayerwStats(parentElement);
                            }
                            else {
                                this.pList[i].displayPlayer(parentElement);
                            } */
                            this.pList[i].displayPlayerwStats(parentElement);
                            // Count items in displayed list
                            listCount++;
                        //}
                    // Count open players
                }
            }
        }
        // If no items are displayed, add a "No Players" line item.
        if (listCount == 0) {
            const row = document.createElement("tr");
            let item = document.createElement("td");
            item.innerHTML = `No players`;
            item.setAttribute("class", "name");
            row.appendChild(item);
            parentElement.append(row);
        }
        // Save current list to localStorage
        if (statFlag) {
            let myJSON = JSON.stringify(this.pList);   
            window.localStorage.setItem('myplayerlist', myJSON);    
        }
    }

    getPlayer(thisPlayerIndex) {
        return(this.pList[thisPlayerIndex]);
    }

    addPlayer(newPlayer) {
        newPlayer.setPlayerIndex(this.pList.length);
        this.pList.push(newPlayer);        
    }

    deletePlayer(newPlayer) {
        this.pList.splice(newPlayer.getPlayerIndex(), 1);
        for (let i=0; i<this.pList.length; i++) {
            if (this.pList[i].getPlayerIndex()!=i) {
                this.pList[i].setPlayerIndex(i);
            }
        }

    }
}

function removePrevAvailSelected() {
    let nodeList = availPlayerParent.childNodes;
    console.log(nodeList);
    //debugger;
    for (let i = 2; i < nodeList.length; i++) {
      nodeList[i].classList.remove('selected');
    }
    nodeList = myPlayerParent.childNodes;
    console.log(nodeList);
    //debugger;
    for (let i = 2; i < nodeList.length; i++) {
      nodeList[i].classList.remove('selected');
    }
    nodeList = playerDescParent.childNodes;
    console.log(nodeList);
    //debugger;
    for (let i = 2; i < nodeList.length; i++) {
        playerDescParent.removeChild(nodeList[i]);
        //nodeList[i].classList.remove('selected');
    }
}

function viewAvailPlayers(availPlayerArray) {
    //debugger;
    var outputUL = document.querySelector("#availplayers");
    var child = outputUL.lastElementChild;
    // Remove all current players from HTML
    while (child) {
        outputUL.removeChild(child);
        child = outputUL.lastElementChild;
    }

    fetch(playerURL) 
    .then( response => {
        outputUL.innerHTML = 'Waiting for response...';
        if(response.ok) {
            return response;
        }
            throw Error(response.statusText);
        }
    )
    .then( response => response.json() )
    .then( data => {
        console.log(data);
        let itemArray = data;
        outputUL.innerHTML = '';
        //debugger;
        for (var i=0; i<itemArray.length; i++) {
            let aplayer = new Player(itemArray[i].PlayerID, itemArray[i].FirstName, 
                itemArray[i].LastName, itemArray[i].Team, itemArray[i].Position, 
                itemArray[i].Games, itemArray[i].Points, itemArray[i].Rebounds, 
                itemArray[i].Assists, itemArray[i].Steals, itemArray[i].BlockedShots);            
            aplayer.retrievePlayerStats();
            availPlayerArray.push(aplayer);
            console.log(aplayer);
            console.log(availPlayerArray);
            aplayer.displayPlayer(outputUL);
        }
        //debugger;
        //displayPlayerStats(itemArray[0].PlayerID, itemArray[0].FirstName, itemArray[0].LastName)
        // Save current list to localStorage
        var myJSON = JSON.stringify(availPlayerArray);   
        window.localStorage.setItem('availplayerlist', myJSON);
    })
    .catch( error => console.log('There was an error:', error)) 
};

function addPlayer() {
    //debugger;
    //if (availSection) {
        let thisPlayer = document.getElementsByClassName("selected");
        let thisPlayerIndex = parseInt(thisPlayer[0].lastChild.lastChild.data);
        let selectedPlayer = availPlayers.getPlayer(thisPlayerIndex);
        let newPlayer = new Player();
        newPlayer.copyPlayer(selectedPlayer)
        myPlayers.addPlayer(newPlayer);    
        myPlayers.displayPlayerList(myPlayerParent, true);
    //}
}

function deletePlayer() {
    //debugger;
    //if (!availSection) {
        let thisPlayer = document.getElementsByClassName("selected");
        let thisPlayerIndex = parseInt(thisPlayer[0].lastChild.lastChild.data);
        let selectedPlayer = myPlayers.getPlayer(thisPlayerIndex);
        myPlayers.deletePlayer(selectedPlayer);    
        myPlayers.displayPlayerList(myPlayerParent, true);
    //}
}

//viewAvailPlayers();
let availPlayers = new PlayerList("availplayerlist");
availPlayers.displayPlayerList(availPlayerParent, false);
// My Players
let myPlayers = new PlayerList("myplayerlist");
myPlayers.displayPlayerList(myPlayerParent, true);

