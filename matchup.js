const ignore_list = [BRD, PSM, X12, X16, X17, X18, CUR];

const matchup_tbl = document.getElementById('matchup_tbl');
const pkmn = document.getElementById('pkmn');
const pkmn_datalist = document.getElementById('pkmn_names');
const pkmn_matchup = document.getElementById('pkmn_matchup');

const type_matchup = [
/*         NRM  FGT  FLY  PSN  GND  RCK  BRD  BUG  GST  STL  FRY  GAS  X12  SND  TRI  PSM  X16  X17  X18  CUR  FIR  WTR  GRA  ELC  PSY  ICE  DRG  DRK */
/* NRM */ [ 1  , 1  , 1  , 1  , 1  , 0.5, 1  , 1  , 0  , 0.5, 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  ],
/* FGT */ [ 2  , 1  , 0.5, 0.5, 1  , 2  , 1  , 0.5, 0  , 2  , 0.5, 0.5, 1  , 2  , 2  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 0.5, 2  , 1  , 2  ],
/* FLY */ [ 1  , 2  , 1  , 1  , 1  , 0.5, 1  , 2  , 1  , 0.5, 1  , 1  , 1  , 1  , 0.5, 1  , 1  , 1  , 1  , 1  , 1  , 1  , 2  , 0.5, 1  , 1  , 1  , 1  ],
/* PSN */ [ 1  , 1  , 1  , 0.5, 0.5, 0.5, 1  , 1  , 0.5, 0  , 2  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 2  , 1  , 1  , 1  , 1  , 1  ],
/* GND */ [ 1  , 1  , 0  , 2  , 1  , 2  , 1  , 0.5, 1  , 2  , 1  , 0.5, 1  , 1  , 2  , 1  , 1  , 1  , 1  , 1  , 2  , 1  , 0.5, 2  , 1  , 1  , 1  , 1  ],
/* RCK */ [ 1  , 0.5, 2  , 1  , 0.5, 1  , 1  , 2  , 1  , 0.5, 1  , 1  , 1  , 0.5, 2  , 1  , 1  , 1  , 1  , 1  , 2  , 1  , 1  , 1  , 1  , 2  , 1  , 1  ],
/* BRD */ [ 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  ],
/* BUG */ [ 1  , 0.5, 0.5, 0.5, 1  , 1  , 1  , 1  , 0.5, 0.5, 0.5, 1  , 1  , 2  , 0.5, 1  , 1  , 1  , 1  , 1  , 0.5, 1  , 2  , 1  , 2  , 1  , 1  , 2  ],
/* GST */ [ 0  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 2  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 2  , 1  , 1  , 0.5],
/* STL */ [ 1  , 1  , 1  , 1  , 1  , 2  , 1  , 1  , 1  , 0.5, 2  , 1  , 1  , 0.5, 0.5, 1  , 1  , 1  , 1  , 1  , 0.5, 0.5, 1  , 0.5, 1  , 2  , 1  , 1  ],
/* FRY */ [ 1  , 2  , 1  , 0.5, 1  , 1  , 1  , 1  , 1  , 0.5, 1  , 0.5, 1  , 1  , 0.5, 1  , 1  , 1  , 1  , 1  , 0.5, 1  , 1  , 1  , 1  , 1  , 2  , 2  ],
/* GAS */ [ 1  , 2  , 1  , 1  , 1  , 0.5, 1  , 1  , 1  , 1  , 2  , 1  , 1  , 0.5, 1  , 1  , 1  , 1  , 1  , 1  , 2  , 1  , 0.5, 1  , 1  , 0.5, 1  , 1  ],
/* X12 */ [ 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  ],
/* SND */ [ 1  , 0.5, 1  , 1  , 1  , 1  , 1  , 0.5, 2  , 2  , 1  , 1  , 1  , 0  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 2  , 1  , 1  , 1  , 1  , 1  , 1  ],
/* TRI */ [ 1  , 1  , 2  , 1  , 0  , 0.5, 1  , 2  , 1  , 1  , 1  , 2  , 1  , 2  , 0.5, 1  , 1  , 1  , 1  , 1  , 0.5, 0.5, 2  , 0.5, 1  , 1  , 0.5, 1  ],
/* PSM */ [ 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  ],
/* X16 */ [ 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  ],
/* X17 */ [ 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  ],
/* X18 */ [ 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  ],
/* CUR */ [ 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  ],
/* FIR */ [ 1  , 1  , 1  , 1  , 1  , 0.5, 1  , 2  , 1  , 2  , 1  , 2  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 0.5, 0.5, 2  , 1  , 1  , 2  , 0.5, 1  ],
/* WTR */ [ 1  , 1  , 1  , 1  , 2  , 2  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 0.5, 2  , 1  , 1  , 1  , 1  , 1  , 2  , 0.5, 0.5, 1  , 1  , 1  , 0.5, 1  ],
/* GRA */ [ 1  , 1  , 0.5, 0.5, 2  , 2  , 1  , 0.5, 1  , 0.5, 1  , 2  , 1  , 1  , 0.5, 1  , 1  , 1  , 1  , 1  , 0.5, 2  , 0.5, 1  , 1  , 1  , 0.5, 1  ],
/* ELC */ [ 1  , 1  , 2  , 1  , 0  , 1  , 1  , 1  , 1  , 1  , 1  , 2  , 1  , 2  , 0.5, 1  , 1  , 1  , 1  , 1  , 1  , 2  , 0.5, 0.5, 1  , 1  , 0.5, 1  ],
/* PSY */ [ 1  , 2  , 1  , 2  , 1  , 1  , 1  , 1  , 1  , 0.5, 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 0.5, 1  , 1  , 0  ],
/* ICE */ [ 1  , 1  , 2  , 1  , 2  , 1  , 1  , 1  , 1  , 0.5, 1  , 1  , 1  , 1  , 0.5, 1  , 1  , 1  , 1  , 1  , 0.5, 0.5, 2  , 1  , 1  , 0.5, 2  , 1  ],
/* DRG */ [ 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 0.5, 0  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 2  , 1  ],
/* DRK */ [ 1  , 0.5, 1  , 1  , 1  , 1  , 1  , 1  , 2  , 1  , 0.5, 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 2  , 1  , 1  , 0.5],
];

function setupMatchup() {
    let hdr_row = document.createElement('tr');
    hdr_row.classList.add('hdr-row');
    let hdr_void = document.createElement('th');
    hdr_row.appendChild(hdr_void);
    for (let i = NRM; i <= DRK; i++) {
        if (ignore_list.indexOf(i) >= 0) continue;
        let hdr = document.createElement('th');
        hdr.innerText = type_names[i];
        hdr.classList.add('type_' + type_names[i].toLowerCase());
        hdr_row.appendChild(hdr);
    }
    matchup_tbl.appendChild(hdr_row);

    for (let i = NRM; i <= DRK; i++) {
        if (ignore_list.indexOf(i) >= 0) continue;
        let row = document.createElement('tr');
        let hdr = document.createElement('th');
        hdr.innerText = type_names[i];
        hdr.classList.add('type_' + type_names[i].toLowerCase());
        row.appendChild(hdr);
        for (let j = NRM; j <= DRK; j++) {
            if (ignore_list.indexOf(j) >= 0) continue;
            let cell = document.createElement('td');
            cell.innerText = type_matchup[i][j];
            switch (type_matchup[i][j]) {
                case 0:
                    cell.classList.add('imm');
                    break;
                case 0.5:
                    cell.classList.add('nve');
                    break;
                case 1:
                    cell.classList.add('ntr');
                    break;
                case 2:
                    cell.classList.add('ve');
                    break;
            }
            row.appendChild(cell);
        }
        matchup_tbl.appendChild(row);
    }

    for (let i = 0; i < pkmn_names.length; i++) {
        let opt = document.createElement('option');
        opt.value = pkmn_names[i];
        pkmn_datalist.appendChild(opt);
    }

    pkmn.addEventListener('input', getMatchup);
    pkmn.dispatchEvent(new Event('input'));
}

function getMatchup(e) {
    let name = e.target.value;
    let id = pkmn_names.indexOf(name);
    if (id < 0) return;
    pkmn_matchup.style.display = 'table';
    let [type1, type2] = pkmn_types[id];

    let types = document.getElementById('types');
    types.innerText = type_names[type1];
    if (type2 != X12) {
        types.innerText += ', ' + type_names[type2];
    }

    let supereff = document.getElementById('supereff');
    let neutral = document.getElementById('neutral');
    let noteff = document.getElementById('noteff');
    let immune = document.getElementById('immune');

    supereff.innerHTML = '';
    neutral.innerHTML = '';
    noteff.innerHTML = '';
    immune.innerHTML = '';

    for (let i = NRM; i <= DRK; i++) {
        if (ignore_list.indexOf(i) >= 0) continue;
        let eff = type_matchup[i][type1] * type_matchup[i][type2];
        let eff_elm = document.createElement('div');
        eff_elm.classList.add('eff');
        eff_elm.innerText = type_names[i];
        eff_elm.classList.add('type_' + type_names[i].toLowerCase());
        eff_elm.dataset.eff = eff;
        if (eff > 1) {
            supereff.appendChild(eff_elm);
        } else if (eff == 1) {
            neutral.appendChild(eff_elm);
        } else if (eff == 0) {
            immune.appendChild(eff_elm);
        } else {
            noteff.appendChild(eff_elm);
        }
    }
}

setupMatchup();
