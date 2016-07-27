#  Require what we need
#  --------------------

require 'json'

posts = '[
  {
    "id": 14,
    "title": "Cupidatat ut sunt elit ut tempor aliqua sit ipsum enim aliquip veniam Lorem proident eu.",
    "body": "Aliquip ea id pariatur aliquip culpa ipsum duis consectetur tempor commodo pariatur amet. Laborum est magna occaecat velit mollit sunt excepteur nulla fugiat nisi. Sunt pariatur ipsum elit adipisicing pariatur velit proident.\r\nQuis est ullamco eiusmod incididunt non irure est ullamco. Occaecat voluptate dolore pariatur amet est adipisicing. Mollit culpa irure ullamco enim magna deserunt deserunt dolore minim laboris. Excepteur amet eu laborum exercitation. Ut laboris excepteur et adipisicing laboris velit est. Lorem aute sint excepteur Lorem in cillum culpa voluptate mollit.\r\nElit aliquip mollit quis irure. Anim officia fugiat quis fugiat do ea est Lorem. Labore irure consectetur officia amet dolore id nulla adipisicing consectetur laboris laboris duis elit ullamco. Nostrud consequat adipisicing reprehenderit nostrud fugiat aliquip cupidatat eu eu aliquip enim. Excepteur officia incididunt non consectetur cupidatat excepteur laborum sint sit cupidatat adipisicing laborum.\r\nUllamco non labore adipisicing sit veniam proident ipsum non irure quis proident. Occaecat dolor tempor officia labore eu ea labore. Nostrud ipsum duis do nulla cupidatat. Mollit tempor aute nostrud esse voluptate labore eiusmod ullamco. Non enim tempor reprehenderit Lorem in et Lorem ullamco irure Lorem irure. Ex Lorem esse ullamco proident ea ea. Qui anim tempor esse est non sit voluptate ea deserunt sint.\r\n",
    "author": "Juanita Cruz",
    "publishedOn": "Fri Oct 09 2015 05:03:58 GMT-0500 (CDT)"
  },
  {
    "id": 18,
    "title": "Quis esse nulla deserunt proident.",
    "body": "Nisi voluptate consectetur qui incididunt est ex elit qui proident in. Aute commodo aliqua tempor esse officia deserunt officia. Tempor non est proident irure proident eiusmod. Anim velit quis quis velit Lorem quis esse nisi laborum. Ad cillum consectetur non anim aliqua minim aliquip do incididunt.\r\nEt ullamco velit aliqua quis cupidatat cupidatat ipsum ad deserunt ullamco laboris cupidatat. Labore exercitation irure anim eiusmod elit officia ipsum. Culpa veniam quis irure veniam in quis eu consectetur culpa. Pariatur velit anim do fugiat veniam consectetur ut. Deserunt laboris velit id commodo pariatur magna ex est officia mollit anim cupidatat velit. Laborum laborum consequat elit cupidatat amet deserunt laborum qui amet reprehenderit consectetur. Pariatur ipsum ipsum minim non ea elit nisi reprehenderit ut deserunt aliqua.\r\nEsse do aliqua sunt elit officia. Esse consequat magna nisi quis commodo elit veniam. Ex minim elit voluptate commodo irure commodo laboris ad labore. In excepteur id officia deserunt ad. Nisi sunt reprehenderit nisi anim id culpa proident.\r\nTempor commodo ea laborum cillum do minim dolor nostrud aliquip deserunt. Quis irure aliqua dolor magna dolore mollit sit labore Lorem. Magna pariatur ex occaecat quis ad exercitation sint sunt aute fugiat Lorem. Dolore anim nostrud quis do aute pariatur commodo do amet amet occaecat sit. Lorem veniam irure culpa pariatur ex. Ipsum ex excepteur veniam culpa et ipsum incididunt sunt ea adipisicing.\r\n",
    "author": "Cross Hill",
    "publishedOn": "Wed Mar 14 2012 11:47:46 GMT-0500 (CDT)"
  },
  {
    "id": 3,
    "title": "Qui pariatur nulla ad anim.",
    "body": "Tempor fugiat sit deserunt deserunt tempor exercitation sit in ex sint amet enim quis aliqua. Pariatur nisi ea mollit consequat. Exercitation sunt tempor officia adipisicing sit qui elit consequat tempor ea exercitation do. Eiusmod id fugiat non nulla esse elit excepteur officia fugiat aliqua laborum consectetur consequat. Ad nisi proident deserunt aliquip. Ullamco officia veniam excepteur deserunt esse sunt fugiat nostrud adipisicing sunt labore.\r\nDeserunt culpa do id cillum non mollit sit cupidatat ipsum exercitation. Ipsum non dolor incididunt exercitation excepteur minim sint amet qui voluptate dolore. Aliqua aute laboris ex pariatur pariatur ipsum mollit dolore occaecat. Id irure nisi incididunt ex duis fugiat occaecat excepteur.\r\nIn minim sint id laboris. Eu exercitation irure reprehenderit do nostrud adipisicing est deserunt et cupidatat irure adipisicing ex. Culpa mollit aliquip irure velit nostrud ullamco culpa fugiat cupidatat ut eu tempor. Aute adipisicing ea laborum irure reprehenderit qui cupidatat do irure ullamco pariatur. Consectetur Lorem tempor ullamco sunt laboris occaecat enim sit. Mollit labore aliqua nisi commodo veniam commodo amet aliqua minim fugiat. Aute dolore eiusmod dolor magna et fugiat nostrud ea in commodo consectetur id occaecat eiusmod.\r\nUllamco anim aliqua sunt deserunt culpa enim duis ut et ipsum enim ut aliquip. Dolor amet cillum ad quis aute adipisicing. Consequat do commodo nisi ad tempor.\r\n",
    "author": "Zelma Gill",
    "publishedOn": "Sun Aug 01 1999 14:20:18 GMT-0500 (CDT)"
  },
  {
    "id": 8,
    "title": "Eiusmod excepteur labore culpa excepteur in ut incididunt nisi quis cillum consequat eiusmod elit.",
    "body": "Aute non consequat laborum labore reprehenderit magna. Reprehenderit irure excepteur reprehenderit proident elit magna quis incididunt non. Et deserunt veniam Lorem ipsum Lorem.\r\nCillum excepteur do deserunt et sit consectetur et officia excepteur sit adipisicing elit veniam. Enim irure non deserunt veniam et ullamco pariatur ipsum est do incididunt culpa. Sit fugiat enim dolore ut. Amet est non dolore duis elit mollit elit veniam sit laborum consequat aliquip. Nostrud nostrud velit magna velit nisi labore veniam occaecat.\r\nAliqua aliquip aliqua proident velit ex dolore minim ullamco Lorem minim labore adipisicing minim. Reprehenderit ullamco minim deserunt sunt. Nulla non eu magna laboris elit nisi dolor sunt nostrud et. Velit velit id cillum aliqua officia do Lorem duis Lorem Lorem minim proident laborum ea. In nisi Lorem sint nulla proident sunt laborum sint. Laborum ex in consequat sunt exercitation eiusmod dolor amet enim veniam.\r\nDolor in enim sunt nulla aliqua irure ipsum cillum qui. Elit nostrud veniam fugiat reprehenderit nulla eu culpa. Aliqua exercitation adipisicing labore enim aliquip amet voluptate ad veniam velit sint laborum ullamco aute.\r\n",
    "author": "Casey Hewitt",
    "publishedOn": "Mon Sep 27 1993 16:43:58 GMT-0500 (CDT)"
  },
  {
    "id": 20,
    "title": "Cupidatat excepteur consectetur sit esse ullamco aliqua labore magna minim magna sunt voluptate mollit ipsum.",
    "body": "Ipsum nostrud proident dolor mollit aliqua fugiat nisi. Magna voluptate tempor duis aliquip labore fugiat eiusmod pariatur pariatur Lorem sunt velit non. Nulla et Lorem irure ea nisi esse esse dolore ut magna id.\r\nDo minim enim ut mollit quis pariatur cupidatat excepteur id voluptate qui nulla voluptate consectetur. Deserunt minim consectetur consequat cillum elit proident commodo Lorem occaecat non excepteur officia aute tempor. Quis quis duis do do id cillum. Ullamco nisi labore aute dolore eiusmod occaecat mollit aliquip adipisicing esse tempor irure. Aliqua labore commodo laborum sit veniam do quis ipsum culpa mollit sint minim.\r\nNulla incididunt tempor ad voluptate minim in cillum minim. Nulla cupidatat ipsum veniam laborum laborum consectetur laboris ea nostrud ut magna laboris deserunt. Amet veniam dolor nulla esse non in ullamco consectetur id consequat reprehenderit adipisicing nostrud. Proident ullamco exercitation nulla fugiat nulla exercitation eu. Sunt culpa qui dolor aute do sunt tempor. Dolor cillum et esse dolore elit cupidatat magna incididunt cillum reprehenderit magna. Lorem dolore dolor dolor enim et duis exercitation.\r\nSint dolore est quis ipsum culpa qui ex excepteur aliquip sint proident ut nostrud. Ad laborum irure mollit proident non laborum eu. Aute irure tempor veniam cupidatat laborum officia. Velit ex veniam incididunt eiusmod commodo in irure non dolore et sunt ipsum velit. Enim excepteur voluptate proident nostrud ullamco ut enim est irure eiusmod deserunt consequat ullamco.\r\n",
    "author": "Alma Santos",
    "publishedOn": "Sat Oct 26 1996 13:25:36 GMT-0500 (CDT)"
  },
  {
    "id": 5,
    "title": "Deserunt tempor do nostrud laborum.",
    "body": "Proident non exercitation velit sit ex labore do dolore magna quis commodo aliqua non. Commodo dolore occaecat do eiusmod elit laborum aliqua. Aliqua mollit laborum enim do. Laboris do nostrud enim eiusmod aliqua dolore laboris. Ad non non in ipsum ut quis sunt occaecat laborum culpa ea culpa. Ex esse commodo nostrud cillum excepteur.\r\nCommodo commodo culpa laborum nisi nisi nostrud aliqua elit ex. Id est qui id deserunt consectetur proident proident. Ut sunt commodo non ipsum magna nisi exercitation aliquip anim ut sunt.\r\nDeserunt Lorem incididunt nulla enim occaecat aliquip voluptate Lorem cupidatat voluptate cillum nulla officia Lorem. Nisi proident aliqua cupidatat quis exercitation ut ullamco qui adipisicing occaecat cupidatat elit dolor. Adipisicing aliqua nostrud veniam occaecat magna anim ullamco. Elit qui eiusmod cillum deserunt nisi consequat eiusmod Lorem quis adipisicing nisi Lorem cupidatat laborum. Laboris ex ut Lorem eu dolore incididunt cillum. Consectetur est incididunt fugiat pariatur voluptate deserunt qui est laborum sunt qui pariatur exercitation.\r\nEsse irure velit est tempor culpa culpa non quis aliquip fugiat pariatur ex exercitation exercitation. Pariatur est reprehenderit anim qui nostrud anim minim nostrud. Laboris aliquip do amet aliquip magna ex pariatur Lorem ullamco. Labore veniam mollit ea qui aliqua proident non consequat adipisicing veniam cupidatat. Duis sint sunt eu id proident proident do ex dolor aliqua occaecat reprehenderit ea cupidatat. Et mollit sint labore occaecat do est sunt non Lorem voluptate irure nulla sunt duis.\r\n",
    "author": "Madelyn Merrill",
    "publishedOn": "Mon Sep 10 1973 03:20:04 GMT-0500 (CDT)"
  },
  {
    "id": 3,
    "title": "Quis proident enim anim incididunt ullamco eiusmod ipsum sunt deserunt eu proident eu.",
    "body": "Commodo qui in duis anim elit voluptate aliquip mollit sunt fugiat tempor aliquip fugiat est. Eu proident Lorem consectetur labore esse adipisicing ad quis Lorem ad incididunt magna laborum. Commodo nostrud deserunt reprehenderit exercitation laboris fugiat aliquip aute. Ipsum et duis nostrud qui tempor aliquip irure aliquip et eiusmod id enim magna. Do incididunt est dolor amet ea reprehenderit Lorem excepteur id dolor do mollit ut.\r\nConsectetur nulla incididunt quis eu quis veniam. Ex esse esse tempor dolor tempor ex eu occaecat. Pariatur exercitation incididunt veniam deserunt esse enim quis pariatur eiusmod magna sint minim aliquip. Elit aute adipisicing esse incididunt aliquip ut. Esse pariatur amet culpa ea ea veniam laboris consequat deserunt consectetur deserunt consectetur sit pariatur.\r\nAnim velit exercitation irure aliqua id deserunt sunt ut commodo culpa enim excepteur. Eiusmod anim officia nostrud nulla ea esse proident dolor commodo. Duis duis dolore dolor sint id consectetur Lorem ullamco adipisicing deserunt. Laborum cupidatat aliqua velit sunt qui nostrud irure esse culpa dolor. Dolor tempor nisi nulla eiusmod Lorem nulla.\r\nOfficia ut irure esse non incididunt sint proident duis ipsum. Reprehenderit ut laborum exercitation adipisicing eu duis elit laborum duis voluptate. Sint consequat minim laborum velit sit anim.\r\n",
    "author": "Brenda Francis",
    "publishedOn": "Sat Dec 16 2000 08:49:18 GMT-0600 (CST)"
  },
  {
    "id": 1,
    "title": "Non aliquip duis voluptate nostrud et occaecat elit ad.",
    "body": "Aute mollit in nulla consequat consequat cupidatat mollit ullamco in aliquip incididunt reprehenderit cupidatat eiusmod. Esse laboris mollit minim officia eu nostrud nulla nostrud Lorem. Qui ut pariatur dolore magna cillum qui ullamco magna duis cupidatat. Minim sit mollit ea amet tempor id esse duis velit. Sunt nisi irure cillum elit irure irure veniam id id aliquip occaecat enim. Laborum ut do eu mollit ullamco anim minim cupidatat irure. Do qui duis magna dolore ex ut ipsum officia.\r\nVelit cupidatat velit quis ad officia est aliqua exercitation occaecat. Incididunt ea ipsum consectetur sunt elit reprehenderit pariatur quis laborum do deserunt pariatur laborum sint. Dolor ullamco cupidatat quis commodo irure enim dolore. Eu consequat ipsum tempor amet non. Occaecat reprehenderit eiusmod fugiat aliqua ut voluptate incididunt. Irure duis exercitation consectetur culpa nisi enim aute. Excepteur eiusmod Lorem sit fugiat elit occaecat.\r\nSint sit excepteur Lorem dolor cillum. Lorem labore minim laborum sunt amet adipisicing nostrud ipsum ad aliqua nulla esse culpa consequat. Cupidatat amet incididunt mollit cillum irure. Quis ea culpa do laborum. Excepteur ullamco nulla sint quis do eu culpa reprehenderit do exercitation. Et commodo Lorem reprehenderit minim voluptate ut elit consequat qui ad. Nostrud aliquip velit proident ut incididunt labore mollit reprehenderit nulla.\r\nConsectetur minim sunt officia dolor laboris tempor consectetur voluptate dolor. Tempor duis et incididunt dolor sit commodo ut sit dolor laborum. Consequat ad ea occaecat do aute id velit esse nisi duis dolore deserunt deserunt. Reprehenderit ex labore cupidatat anim adipisicing voluptate ullamco proident ex fugiat ut duis proident sit. Culpa consectetur sit do deserunt incididunt reprehenderit magna culpa minim. Tempor ipsum pariatur eiusmod occaecat amet consectetur cupidatat ad consectetur enim consectetur.\r\n",
    "author": "Eleanor Stanley",
    "publishedOn": "Fri Feb 06 2015 18:46:55 GMT-0600 (CST)"
  },
  {
    "id": 3,
    "title": "Proident dolor occaecat consectetur nisi ad excepteur incididunt eu cupidatat.",
    "body": "Enim est dolore elit cillum. Irure elit anim Lorem anim minim deserunt esse. Elit consequat tempor amet incididunt do commodo qui ullamco do nisi. Dolore aliquip culpa voluptate laboris adipisicing irure veniam officia adipisicing ex aliqua Lorem incididunt laboris. Aute aliquip elit incididunt aliquip aliqua ea id amet do ad. Est mollit commodo fugiat incididunt amet ullamco sint anim velit pariatur ullamco. Sint mollit sit enim dolore ut consequat nisi Lorem adipisicing adipisicing.\r\nPariatur eu consectetur amet quis deserunt est dolore. Ut minim excepteur dolor eiusmod dolore aliqua ad. Tempor laboris dolor cillum in nostrud enim est in ullamco pariatur nisi. Id do anim nostrud Lorem. Culpa deserunt do deserunt ut sit excepteur in.\r\nReprehenderit voluptate ea ipsum aute. Non irure reprehenderit fugiat ullamco consequat proident. In labore ut esse velit fugiat deserunt sit. Voluptate nulla aliqua sunt ad veniam cillum fugiat labore laborum sint ut ipsum dolor. Eu nostrud do ea exercitation culpa ad sint. Mollit esse dolore consectetur nulla ea velit nisi veniam cupidatat. Aliquip esse in elit aute qui proident quis ex excepteur.\r\nQuis incididunt consequat excepteur aliquip. Eu officia nulla ullamco est. Tempor nisi dolore deserunt minim. Dolor minim eiusmod reprehenderit eu cillum. Dolore in ipsum aliqua occaecat enim irure occaecat eu laboris cupidatat ullamco enim proident.\r\n",
    "author": "Alvarado Buckner",
    "publishedOn": "Sun Jun 24 2012 01:27:53 GMT-0500 (CDT)"
  },
  {
    "id": 17,
    "title": "Minim officia cupidatat irure nostrud laborum enim nisi deserunt.",
    "body": "Ut sunt adipisicing officia cillum aliqua eiusmod. Nulla enim cupidatat velit ea deserunt duis reprehenderit et nisi commodo irure. Sit do dolore est commodo commodo Lorem consequat mollit anim laborum voluptate mollit. Ut minim ea tempor eu velit amet fugiat deserunt do est. Culpa incididunt culpa minim deserunt adipisicing esse irure elit velit anim est Lorem commodo. Quis labore sint amet et.\r\nIn in nulla sunt sit sint occaecat ipsum anim amet. Ut magna eu ipsum ipsum et ea excepteur Lorem veniam fugiat commodo. Tempor esse culpa magna deserunt velit anim mollit nostrud minim consectetur tempor Lorem aliquip. Eiusmod mollit et magna enim et minim eiusmod sit non consequat anim.\r\nUt non dolore laboris commodo tempor ea proident Lorem et. Voluptate Lorem aute ut deserunt excepteur elit ipsum fugiat. Aute quis eiusmod Lorem voluptate. Eu ea do labore et non nulla laboris.\r\nCommodo ut fugiat qui aliquip proident sit officia ut id exercitation dolore magna est id. Occaecat tempor culpa elit non est sunt eu sit sunt ad veniam ad velit. Laboris proident magna sit laboris dolore consectetur ipsum officia esse dolore velit aute enim.\r\n",
    "author": "Jewel Carrillo",
    "publishedOn": "Tue Dec 01 1992 20:13:05 GMT-0600 (CST)"
  },
  {
    "id": 0,
    "title": "Reprehenderit excepteur adipisicing cupidatat mollit fugiat.",
    "body": "Esse consequat velit cupidatat ullamco esse dolor do eu officia Lorem. Incididunt nisi irure occaecat in elit sint deserunt cillum eu non. Enim qui reprehenderit officia dolor reprehenderit tempor esse ea commodo. Irure sint eiusmod enim duis enim cillum do consectetur adipisicing eiusmod anim ipsum. Minim officia aliquip sunt in adipisicing reprehenderit culpa.\r\nEnim occaecat nostrud eu duis dolor adipisicing deserunt laboris sit. Proident ullamco ipsum cillum pariatur Lorem ex ex. Excepteur enim fugiat adipisicing et sit quis sit minim do ad ullamco sit velit elit. Id enim voluptate ipsum voluptate officia ut adipisicing pariatur tempor consequat. Amet mollit sint minim officia amet incididunt adipisicing cillum. Quis quis anim minim incididunt officia ea id anim.\r\nConsequat sunt laborum Lorem anim commodo magna. Ex minim non laborum ex culpa ullamco tempor ullamco duis exercitation aliquip. Commodo culpa sunt ad aute occaecat laborum.\r\nAnim dolor in nisi proident est duis aute labore proident laboris. Nostrud sit cupidatat laborum qui ullamco do aute non tempor laborum esse incididunt nulla. Ad eu ullamco minim voluptate laboris adipisicing. Minim deserunt ut reprehenderit officia reprehenderit elit aute fugiat proident reprehenderit consequat aliqua nostrud dolore. Sunt minim consequat ullamco qui. Voluptate tempor ut quis magna aute officia enim fugiat excepteur excepteur qui ipsum. Consectetur mollit do sint labore sunt et.\r\n",
    "author": "Arnold Emerson",
    "publishedOn": "Thu Jan 08 1976 09:28:29 GMT-0600 (CST)"
  },
  {
    "id": 14,
    "title": "In aliquip duis ipsum mollit irure ex do do tempor ullamco.",
    "body": "Anim culpa amet aute ullamco ex qui do ipsum eiusmod ut. Amet nulla mollit duis occaecat labore cillum irure fugiat irure qui cupidatat nostrud consequat ut. Non velit Lorem dolore velit. Cupidatat tempor exercitation id ut eiusmod sit deserunt incididunt ad sunt non magna. Et sint in est mollit esse deserunt qui ipsum minim laborum cupidatat. Nulla fugiat et ut et et tempor.\r\nConsectetur commodo voluptate laborum est quis velit cupidatat magna. Consectetur sunt veniam reprehenderit pariatur incididunt anim adipisicing labore ipsum incididunt elit do fugiat. Non reprehenderit magna mollit pariatur. Minim nisi deserunt deserunt fugiat id elit anim sint adipisicing mollit veniam. Fugiat magna nisi irure et culpa aute Lorem dolor aute incididunt sunt. Id magna tempor occaecat in.\r\nIrure duis officia cupidatat incididunt do. Deserunt sunt occaecat laborum labore sint ea aliqua cillum mollit id pariatur. Consequat culpa anim velit enim id cillum eiusmod deserunt consequat. Labore id ea commodo dolore irure eu labore dolor ad ipsum. Eu veniam officia ipsum ea aliqua veniam.\r\nAdipisicing officia nostrud incididunt ex exercitation do dolor pariatur esse sit amet nulla ea occaecat. Non id cupidatat minim nostrud velit laborum pariatur aute proident ut sunt. Est pariatur enim labore adipisicing in consectetur laboris. Aute mollit anim amet proident id exercitation sit ut nostrud nulla occaecat ea deserunt cupidatat. In ullamco pariatur magna sit ullamco irure est. Commodo non amet pariatur magna occaecat Lorem non aute quis deserunt sint dolor qui.\r\n",
    "author": "Gross Oneil",
    "publishedOn": "Sat Jan 01 2011 00:40:33 GMT-0600 (CST)"
  },
  {
    "id": 3,
    "title": "Ex eu minim fugiat in non adipisicing excepteur pariatur excepteur laborum veniam velit consectetur enim.",
    "body": "Non laboris aute officia eiusmod enim voluptate anim veniam voluptate sint. Pariatur magna sunt non laborum commodo dolor amet sunt veniam eiusmod. Magna sit laboris cillum laborum occaecat irure tempor aliquip commodo aute quis. Eu sint laboris nisi minim dolore ea occaecat do esse labore fugiat nisi. Mollit culpa est consequat reprehenderit dolore irure ullamco esse proident. Dolor consectetur ut mollit proident exercitation ad nulla qui in cillum aliquip minim nisi. Aliquip velit non Lorem ipsum quis consectetur nostrud do elit enim magna aliquip veniam.\r\nDuis minim occaecat est do velit consequat nisi labore quis est Lorem deserunt aute sunt. Anim eiusmod aliqua in ea ut sit Lorem do. Ad est deserunt ut eu occaecat aliquip. Eiusmod exercitation Lorem Lorem aliquip irure. Incididunt pariatur eiusmod dolor adipisicing in nulla mollit excepteur. Duis incididunt aute anim do voluptate consequat enim consectetur deserunt sit sunt minim. Ipsum nulla do ad ex veniam proident eu.\r\nEt ut veniam id in irure. Irure laboris sit duis sint exercitation irure et sit mollit reprehenderit velit. Laboris magna ad qui laboris in Lorem laborum commodo aliqua aute mollit et eu. Labore consectetur sint anim voluptate cillum dolor. Officia minim commodo occaecat anim fugiat deserunt aliquip nulla officia ullamco aliquip. Dolore ad veniam ad esse exercitation non nulla duis ut commodo.\r\nLorem nulla magna officia duis ea excepteur aute pariatur cupidatat non nostrud. Dolore quis ullamco reprehenderit dolor et. Id consequat et culpa occaecat. Veniam culpa ullamco voluptate reprehenderit nostrud duis dolore magna sit esse quis anim. Irure pariatur fugiat in laborum. Esse nulla aute culpa eiusmod deserunt magna exercitation quis sit nostrud adipisicing. Exercitation ex enim cupidatat et.\r\n",
    "author": "Lewis Perez",
    "publishedOn": "Fri Jan 03 1992 20:39:59 GMT-0600 (CST)"
  },
  {
    "id": 5,
    "title": "Sint consectetur officia Lorem proident ullamco reprehenderit laboris officia ipsum irure magna irure.",
    "body": "Veniam pariatur magna ullamco cupidatat incididunt eiusmod deserunt aliqua ex excepteur minim. Id magna officia nisi minim magna voluptate exercitation do cupidatat. Duis duis ad reprehenderit aute aute exercitation. Cillum do nisi voluptate ipsum adipisicing. Occaecat officia eu aliqua culpa irure ad. Anim sint culpa ad pariatur.\r\nOfficia non ipsum sint cupidatat officia eiusmod ex. Irure est excepteur ullamco consequat eu occaecat enim exercitation. Ipsum exercitation dolore ea voluptate ad officia eiusmod tempor deserunt ea ad. Veniam eu incididunt incididunt minim est anim ex duis aute proident. Irure laborum anim consequat officia veniam enim anim cillum incididunt sit proident. Proident nisi tempor laborum amet elit reprehenderit reprehenderit dolor commodo tempor.\r\nAnim aute id cillum sit duis non eiusmod fugiat reprehenderit aliqua veniam. Consectetur ut anim reprehenderit et pariatur eiusmod ad sunt non excepteur. Laboris laboris enim duis incididunt commodo nulla pariatur consequat voluptate minim aliqua eu culpa. Veniam nostrud ad voluptate in. Id nisi ea sit officia in dolore sit id eiusmod dolore aliquip dolore. Aliquip officia qui fugiat voluptate mollit laborum sit elit consequat ipsum sint.\r\nNulla ipsum anim aute quis et ut aliqua enim pariatur ut officia aliqua pariatur. Ad dolore ullamco elit adipisicing in do nulla deserunt. Ullamco tempor minim occaecat commodo sunt elit anim nisi occaecat anim proident. Nisi quis proident excepteur exercitation nostrud. Aliquip ullamco fugiat et esse dolor laboris dolore culpa. Lorem dolore ea deserunt aliquip. Non cillum veniam et amet eiusmod cupidatat.\r\n",
    "author": "Janis Wilkerson",
    "publishedOn": "Mon Feb 05 1990 09:13:27 GMT-0600 (CST)"
  },
  {
    "id": 3,
    "title": "Sunt quis duis commodo ullamco ipsum esse cillum.",
    "body": "Fugiat quis adipisicing dolor nulla velit consequat laboris Lorem elit fugiat. Laborum veniam aliqua ea nostrud sit pariatur. Aliqua ex nisi non ullamco mollit culpa irure. Nostrud commodo esse sit tempor et exercitation nostrud.\r\nSint aute aute ad et ex laboris ea veniam dolore consectetur commodo. Non anim ea amet tempor ullamco consequat aute velit cillum. Cupidatat nisi anim in labore duis id fugiat fugiat occaecat anim. Elit ullamco in do reprehenderit laborum ut fugiat occaecat duis reprehenderit ipsum. Dolore elit eu ut commodo cupidatat veniam ullamco incididunt laboris sunt nisi et eiusmod.\r\nMagna ea adipisicing ex magna in ea sint consequat. Veniam fugiat do in enim sunt nulla anim nostrud voluptate esse consectetur dolore quis laboris. Reprehenderit ipsum cupidatat adipisicing dolor aliqua laboris occaecat ex enim. Est sit fugiat magna officia aliqua. Deserunt et sint tempor id. Commodo proident exercitation anim id laborum dolor dolor irure laborum ex aliqua dolore nisi.\r\nEst sint excepteur velit consequat pariatur consectetur sunt nulla nostrud adipisicing. Proident mollit incididunt tempor fugiat proident fugiat fugiat esse. Ut sint do enim ullamco aliquip veniam do proident labore ex magna sunt et. Nulla ad culpa ea elit.\r\n",
    "author": "Juliette Malone",
    "publishedOn": "Thu May 05 2011 07:42:17 GMT-0500 (CDT)"
  },
  {
    "id": 20,
    "title": "Aliqua sit in nostrud magna dolore deserunt incididunt incididunt.",
    "body": "Ipsum sunt dolor dolor velit. Sint elit mollit excepteur ad minim est voluptate irure cillum. Eu dolor excepteur fugiat exercitation nulla anim. Incididunt labore et ipsum esse laborum minim laboris irure nulla officia eiusmod.\r\nConsequat aute sunt in duis tempor nisi ullamco aute cupidatat elit. Do esse eiusmod aliquip proident proident velit ullamco aliqua. Aliquip deserunt deserunt et labore quis amet.\r\nSit amet adipisicing veniam ipsum dolore incididunt culpa cupidatat fugiat eu ad aliquip. Labore minim dolor pariatur magna esse cupidatat deserunt culpa aliquip exercitation fugiat Lorem consectetur. Sunt aliqua aute proident minim aliqua occaecat esse.\r\nNisi cillum dolor occaecat magna velit non esse anim pariatur. Culpa officia mollit quis voluptate sint exercitation commodo excepteur duis adipisicing fugiat nostrud nisi. Minim ut deserunt est magna tempor culpa cillum officia cupidatat excepteur proident. Officia duis culpa laboris ad consectetur magna. Et incididunt do deserunt in excepteur adipisicing veniam ex deserunt magna voluptate. Duis irure deserunt nostrud eu.\r\n",
    "author": "Battle Knox",
    "publishedOn": "Thu Jul 30 1970 09:24:50 GMT-0500 (CDT)"
  },
  {
    "id": 1,
    "title": "Aliquip reprehenderit exercitation laboris enim in ea laboris occaecat.",
    "body": "Mollit laborum id esse et commodo cillum minim est excepteur. Dolore ea velit quis cillum esse est aliqua eu. Non in ad ea reprehenderit ad.\r\nProident sunt qui aute voluptate ut. Proident consequat excepteur aliqua eiusmod excepteur culpa quis culpa. Culpa ea culpa pariatur commodo commodo officia consectetur. Veniam nulla pariatur commodo non laborum quis. Sunt qui voluptate ullamco voluptate aliquip esse. Magna dolor amet excepteur nulla non occaecat. Mollit deserunt qui consectetur eu officia elit enim dolore cillum esse sit excepteur ipsum.\r\nEiusmod quis nostrud pariatur laborum. Deserunt amet eiusmod aliqua eiusmod irure in quis veniam ut. Qui ea eiusmod et sunt adipisicing velit enim esse in do aliqua. Amet anim Lorem quis elit nostrud reprehenderit est sint est adipisicing irure duis. Consequat esse nisi anim non incididunt irure enim enim nostrud non enim consequat.\r\nEx amet duis esse ut culpa eu laborum. Laborum ea exercitation in mollit in id laboris ipsum ut exercitation in duis. Cupidatat qui magna eiusmod ut esse laborum pariatur in reprehenderit sit nulla. Incididunt voluptate reprehenderit incididunt aliquip veniam. Magna aliquip cupidatat tempor irure consectetur eiusmod laboris nisi in. Deserunt cillum aliquip irure amet magna. Irure deserunt duis mollit velit excepteur sint.\r\n",
    "author": "Farrell Sears",
    "publishedOn": "Wed Dec 16 2015 13:18:30 GMT-0600 (CST)"
  }
]'

posts = JSON.parse(posts)

puts posts.length

posts.select! { |post| post['id'] % 2 == 0 }  # The bang (!) after posts.select will change the content in place

puts posts.length

posts.each do |post| 
  puts "***  #{post['title']}  ***"
  puts "Written by #{post['author']} on #{post['publishedOn']}"
  puts "\n"
  puts "#{post['body']}"
  puts ""
end
























