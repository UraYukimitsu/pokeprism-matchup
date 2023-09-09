const pkmn_names = [
    'abra',
    'absol',
    'aggron',
    'alakazam',
    'altaria',
    'ampharos',
    'anorith',
    'arcanine',
    'ariados',
    'armaldo',
    'aron',
    'articuno',
    'azumarill',
    'bagon',
    'banette',
    'bastiodon',
    'bayleef',
    'beldum',
    'bellsprout',
    'blastoise',
    'blissey',
    'breloom',
    'bronzong',
    'bronzor',
    'bulbasaur',
    'buneary',
    'butterfree',
    'cacnea',
    'cacturne',
    'camerupt',
    'caterpie',
    'chansey',
    'charizard',
    'charmander',
    'charmeleon',
    'chikorita',
    'chimecho',
    'chinchou',
    'chingling',
    'cradily',
    'cranidos',
    'crobat',
    'croconaw',
    'cyndaquil',
    'ditto',
    'donphan',
    'drapion',
    'drifblim',
    'drifloon',
    'dusclops',
    'dusknoir',
    'duskull',
    'eevee',
    'electabuzz',
    'electivire',
    'electrike',
    'elekid',
    'espeon',
    'exeggcute',
    'exeggutor',
    'exploud',
    'fambaco',
    'fearow',
    'feebas',
    'feraligatr',
    'flaaffy',
    'flareon',
    'flygon',
    'forretress',
    'froslass',
    'furret',
    'gabite',
    'gallade',
    'garchomp',
    'gardevoir',
    'gastly',
    'gengar',
    'geodude',
    'gible',
    'glaceon',
    'glalie',
    'gligar',
    'gliscor',
    'golbat',
    'goldeen',
    'golem',
    'graveler',
    'groudon',
    'growlithe',
    'gyarados',
    'hariyama',
    'haunter',
    'hitmonchan',
    'hitmonlee',
    'hitmontop',
    'hooh',
    'houndoom',
    'houndour',
    'igglybuff',
    'illumise',
    'ivysaur',
    'jigglypuff',
    'jolteon',
    'kadabra',
    'kangaskhan',
    'kirlia',
    'koffing',
    'kyogre',
    'lairon',
    'lanturn',
    'larvitar',
    'leafeon',
    'libabeel',
    'lileep',
    'lombre',
    'lopunny',
    'lotad',
    'loudred',
    'lucario',
    'ludicolo',
    'lugia',
    'lunatone',
    'luxio',
    'luxray',
    'machamp',
    'machoke',
    'machop',
    'magby',
    'magcargo',
    'magikarp',
    'magmar',
    'magmortar',
    'magnemite',
    'magneton',
    'magnezone',
    'makuhita',
    'mamoswine',
    'manectric',
    'mareep',
    'marill',
    'masquerain',
    'mawile',
    'meganium',
    'metagross',
    'metang',
    'metapod',
    'mew',
    'mewtwo',
    'milotic',
    'misdreavus',
    'mismagius',
    'moltres',
    'natu',
    'ninetales',
    'numel',
    'onix',
    'paras',
    'parasect',
    'phancero',
    'phanpy',
    'pichu',
    'pidgeot',
    'pidgeotto',
    'pidgey',
    'pikachu',
    'piloswine',
    'pineco',
    'ponyta',
    'porygon',
    'porygon2',
    'porygonz',
    'pupitar',
    'quilava',
    'raichu',
    'raiwato',
    'ralts',
    'rampardos',
    'rapidash',
    'rayquaza',
    'relicanth',
    'rhydon',
    'rhyhorn',
    'rhyperior',
    'riolu',
    'sableye',
    'salamence',
    'scizor',
    'scyther',
    'seaking',
    'sentret',
    'shelgon',
    'shieldon',
    'shinx',
    'shroomish',
    'shuppet',
    'skorupi',
    'slowbro',
    'slowking',
    'slowpoke',
    'slugma',
    'sneasel',
    'snorlax',
    'snorunt',
    'solrock',
    'spearow',
    'spinarak',
    'spiritomb',
    'squirtle',
    'steelix',
    'surskit',
    'swablu',
    'swellow',
    'swinub',
    'sylveon',
    'taillow',
    'tangela',
    'tangrowth',
    'teddiursa',
    'tentacool',
    'tentacruel',
    'togekiss',
    'togepi',
    'togetic',
    'torkoal',
    'totodile',
    'trapinch',
    'typhlosion',
    'tyranitar',
    'tyrogue',
    'umbreon',
    'ursaring',
    'vaporeon',
    'varaneous',
    'venomoth',
    'venonat',
    'venusaur',
    'vibrava',
    'victreebel',
    'volbeat',
    'vulpix',
    'wailmer',
    'wailord',
    'wartortle',
    'weavile',
    'weepinbell',
    'weezing',
    'whismur',
    'wigglytuff',
    'xatu',
    'yanma',
    'yanmega',
    'zapdos',
    'zubat',
];

const pkmn_types = [
/* abra */ [PSY, X12],
/* absol */ [DRK, X12],
/* aggron */ [STL, RCK],
/* alakazam */ [PSY, X12],
/* altaria */ [DRG, FLY],
/* ampharos */ [ELC, X12],
/* anorith */ [RCK, BUG],
/* arcanine */ [FIR, X12],
/* ariados */ [BUG, PSN],
/* armaldo */ [RCK, BUG],
/* aron */ [STL, RCK],
/* articuno */ [ICE, FLY],
/* azumarill */ [WTR, FRY],
/* bagon */ [DRG, X12],
/* banette */ [GST, X12],
/* bastiodon */ [RCK, STL],
/* bayleef */ [GRA, X12],
/* beldum */ [STL, PSY],
/* bellsprout */ [GRA, PSN],
/* blastoise */ [WTR, X12],
/* blissey */ [NRM, X12],
/* breloom */ [GRA, FGT],
/* bronzong */ [STL, PSY],
/* bronzor */ [STL, PSY],
/* bulbasaur */ [GRA, PSN],
/* buneary */ [NRM, X12],
/* butterfree */ [BUG, FLY],
/* cacnea */ [GRA, X12],
/* cacturne */ [GRA, DRK],
/* camerupt */ [FIR, GND],
/* caterpie */ [BUG, X12],
/* chansey */ [NRM, X12],
/* charizard */ [FIR, FLY],
/* charmander */ [FIR, X12],
/* charmeleon */ [FIR, X12],
/* chikorita */ [GRA, X12],
/* chimecho */ [PSY, SND],
/* chinchou */ [WTR, ELC],
/* chingling */ [PSY, SND],
/* cradily */ [RCK, GRA],
/* cranidos */ [RCK, X12],
/* crobat */ [PSN, FLY],
/* croconaw */ [WTR, X12],
/* cyndaquil */ [FIR, X12],
/* ditto */ [NRM, X12],
/* donphan */ [GND, X12],
/* drapion */ [PSN, DRK],
/* drifblim */ [GST, FLY],
/* drifloon */ [GST, FLY],
/* dusclops */ [GST, X12],
/* dusknoir */ [GST, X12],
/* duskull */ [GST, X12],
/* eevee */ [NRM, X12],
/* electabuzz */ [ELC, X12],
/* electivire */ [ELC, X12],
/* electrike */ [ELC, X12],
/* elekid */ [ELC, X12],
/* espeon */ [PSY, X12],
/* exeggcute */ [GRA, PSY],
/* exeggutor */ [GRA, PSY],
/* exploud */ [SND, X12],
/* fambaco */ [GST, FGT],
/* fearow */ [NRM, FLY],
/* feebas */ [WTR, X12],
/* feraligatr */ [WTR, X12],
/* flaaffy */ [ELC, X12],
/* flareon */ [FIR, X12],
/* flygon */ [GND, DRG],
/* forretress */ [BUG, STL],
/* froslass */ [ICE, GST],
/* furret */ [NRM, X12],
/* gabite */ [DRG, GND],
/* gallade */ [PSY, FGT],
/* garchomp */ [DRG, GND],
/* gardevoir */ [PSY, FRY],
/* gastly */ [GST, GAS],
/* gengar */ [GST, GAS],
/* geodude */ [RCK, GND],
/* gible */ [DRG, GND],
/* glaceon */ [ICE, X12],
/* glalie */ [ICE, X12],
/* gligar */ [GND, FLY],
/* gliscor */ [GND, FLY],
/* golbat */ [PSN, FLY],
/* goldeen */ [WTR, X12],
/* golem */ [RCK, GND],
/* graveler */ [RCK, GND],
/* groudon */ [GND, X12],
/* growlithe */ [FIR, X12],
/* gyarados */ [WTR, FLY],
/* hariyama */ [FGT, X12],
/* haunter */ [GST, GAS],
/* hitmonchan */ [FGT, X12],
/* hitmonlee */ [FGT, X12],
/* hitmontop */ [FGT, X12],
/* hooh */ [FIR, FLY],
/* houndoom */ [DRK, FIR],
/* houndour */ [DRK, FIR],
/* igglybuff */ [SND, FRY],
/* illumise */ [BUG, X12],
/* ivysaur */ [GRA, PSN],
/* jigglypuff */ [SND, FRY],
/* jolteon */ [ELC, X12],
/* kadabra */ [PSY, X12],
/* kangaskhan */ [NRM, X12],
/* kirlia */ [PSY, FRY],
/* koffing */ [PSN, GAS],
/* kyogre */ [WTR, X12],
/* lairon */ [STL, RCK],
/* lanturn */ [WTR, ELC],
/* larvitar */ [RCK, GND],
/* leafeon */ [GRA, X12],
/* libabeel */ [STL, PSN],
/* lileep */ [RCK, GRA],
/* lombre */ [WTR, GRA],
/* lopunny */ [NRM, X12],
/* lotad */ [WTR, GRA],
/* loudred */ [SND, X12],
/* lucario */ [FGT, STL],
/* ludicolo */ [WTR, GRA],
/* lugia */ [PSY, FLY],
/* lunatone */ [RCK, PSY],
/* luxio */ [ELC, X12],
/* luxray */ [ELC, X12],
/* machamp */ [FGT, X12],
/* machoke */ [FGT, X12],
/* machop */ [FGT, X12],
/* magby */ [FIR, X12],
/* magcargo */ [FIR, RCK],
/* magikarp */ [WTR, X12],
/* magmar */ [FIR, X12],
/* magmortar */ [FIR, X12],
/* magnemite */ [ELC, STL],
/* magneton */ [ELC, STL],
/* magnezone */ [ELC, STL],
/* makuhita */ [FGT, X12],
/* mamoswine */ [ICE, GND],
/* manectric */ [ELC, X12],
/* mareep */ [ELC, X12],
/* marill */ [WTR, FRY],
/* masquerain */ [BUG, FLY],
/* mawile */ [STL, FRY],
/* meganium */ [GRA, X12],
/* metagross */ [STL, PSY],
/* metang */ [STL, PSY],
/* metapod */ [BUG, X12],
/* mew */ [PSY, X12],
/* mewtwo */ [PSY, X12],
/* milotic */ [WTR, X12],
/* misdreavus */ [GST, SND],
/* mismagius */ [GST, SND],
/* moltres */ [FIR, FLY],
/* natu */ [PSY, FLY],
/* ninetales */ [FIR, X12],
/* numel */ [FIR, GND],
/* onix */ [RCK, GND],
/* paras */ [BUG, GRA],
/* parasect */ [BUG, GRA],
/* phancero */ [GST, FLY],
/* phanpy */ [GND, X12],
/* pichu */ [ELC, X12],
/* pidgeot */ [NRM, FLY],
/* pidgeotto */ [NRM, FLY],
/* pidgey */ [NRM, FLY],
/* pikachu */ [ELC, X12],
/* piloswine */ [ICE, GND],
/* pineco */ [BUG, X12],
/* ponyta */ [FIR, X12],
/* porygon */ [NRM, X12],
/* porygon2 */ [NRM, X12],
/* porygonz */ [NRM, SND],
/* pupitar */ [RCK, GND],
/* quilava */ [FIR, X12],
/* raichu */ [ELC, X12],
/* raiwato */ [RCK, ELC],
/* ralts */ [PSY, FRY],
/* rampardos */ [RCK, X12],
/* rapidash */ [FIR, X12],
/* rayquaza */ [DRG, FLY],
/* relicanth */ [WTR, RCK],
/* rhydon */ [GND, RCK],
/* rhyhorn */ [GND, RCK],
/* rhyperior */ [GND, RCK],
/* riolu */ [FGT, X12],
/* sableye */ [DRK, GST],
/* salamence */ [DRG, FLY],
/* scizor */ [BUG, STL],
/* scyther */ [BUG, FLY],
/* seaking */ [WTR, X12],
/* sentret */ [NRM, X12],
/* shelgon */ [DRG, X12],
/* shieldon */ [RCK, STL],
/* shinx */ [ELC, X12],
/* shroomish */ [GRA, X12],
/* shuppet */ [GST, X12],
/* skorupi */ [PSN, BUG],
/* slowbro */ [WTR, PSY],
/* slowking */ [WTR, PSY],
/* slowpoke */ [WTR, PSY],
/* slugma */ [FIR, X12],
/* sneasel */ [DRK, ICE],
/* snorlax */ [NRM, X12],
/* snorunt */ [ICE, X12],
/* solRCK */ [RCK, PSY],
/* spearow */ [NRM, FLY],
/* spinarak */ [BUG, PSN],
/* spiritomb */ [GST, DRK],
/* squirtle */ [WTR, X12],
/* STLix */ [STL, GND],
/* surskit */ [BUG, WTR],
/* swablu */ [NRM, FLY],
/* swellow */ [NRM, FLY],
/* swinub */ [ICE, GND],
/* sylveon */ [FRY, X12],
/* taillow */ [NRM, FLY],
/* tangela */ [GRA, X12],
/* tangrowth */ [GRA, X12],
/* teddiursa */ [NRM, X12],
/* tentacool */ [WTR, PSN],
/* tentacruel */ [WTR, PSN],
/* togekiss */ [FRY, FLY],
/* togepi */ [FRY, X12],
/* togetic */ [FRY, FLY],
/* torkoal */ [FIR, GAS],
/* totodile */ [WTR, X12],
/* trapinch */ [GND, X12],
/* typhlosion */ [FIR, X12],
/* tyranitar */ [RCK, DRK],
/* tyrogue */ [FGT, X12],
/* umbreon */ [DRK, X12],
/* ursaring */ [NRM, X12],
/* vaporeon */ [WTR, X12],
/* varaneous */ [FIR, WTR],
/* venomoth */ [BUG, PSN],
/* venonat */ [BUG, PSN],
/* venusaur */ [GRA, PSN],
/* vibrava */ [GND, DRG],
/* victreebel */ [GRA, PSN],
/* volbeat */ [BUG, X12],
/* vulpix */ [FIR, X12],
/* wailmer */ [WTR, X12],
/* wailord */ [WTR, X12],
/* wartortle */ [WTR, X12],
/* weavile */ [DRK, ICE],
/* weepinbell */ [GRA, PSN],
/* weezing */ [PSN, GAS],
/* whismur */ [SND, X12],
/* wigglytuff */ [SND, FRY],
/* xatu */ [PSY, FLY],
/* yanma */ [BUG, FLY],
/* yanmega */ [BUG, FLY],
/* zapdos */ [ELC, FLY],
/* zubat */ [PSN, FLY],
];
