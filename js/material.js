/**
 * Used ressources:
 * https://hype4.academy/tools/neumorphism-generator
 * https://icon-icons.com/
 */

import $, { includeHTML } from './library.js';
import { APP_NAME, DEF_SETTINGS, CAPTIONS, gaugeUnits, THEMES_CSS } from './constants.js';
import Material from './material_class.js';
import Calculator from './calculator_class.js';

const SETTINGS = loadSettings();
const CALCULATOR = new Calculator(document.body, null, false);

let inpArea, inpLength, inpWidth, btnSend, btnClose, btnRefresh, btnLanguage, btnHelp, btnCloseHelp;

/**
 * This starts the application after all content has been loaded
 */
window.addEventListener('DOMContentLoaded', runApp);

async function runApp() {
    await includeHTML();
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../serviceWorker.js', {
            scope: '../',
            type: 'module'
        })
        .then(()=> console.log(`Service worker for ${APP_NAME} registered.`))
        .catch((error) => console.warn(`Service worker registration failed: ${error}`));
    } else {
        console.warn('Service worker not supported!');
    }

    // SETTINGS = loadSettings();
    inpArea = $('inpArea');
    inpLength = $('inpLength');
    inpWidth = $('inpWidth');
    btnSend = $('imgSend');
    btnClose = $('imgClose');
    btnCloseHelp =$('imgCloseHelp');
    btnRefresh = $('imgRefresh');
    btnLanguage = $('btnLanguage');
    btnHelp = $('imgHelp');
    setEventListeners();
    applySettings(SETTINGS);
    CALCULATOR.buddy = inpArea;
}


function setEventListeners() {
    document.addEventListener('buddychanged', enableCalcButton);
    [inpArea, inpLength, inpWidth].forEach(input => {
        input.addEventListener('touchstart', toggleArea, {passive: true});
        input.addEventListener('input', calculateArea);
    });
    $('input[type="text"]').forEach(input => {
        input.addEventListener('keypress', (e) => validateInput(e));
        input.addEventListener('input', () => enableCalcButton(input));
    });
    Array.from($('.unit-changer')).forEach(btn => {
        btn.addEventListener('touchstart', () => switchUnit(btn), {passive: true});
    });

    $('svgCalculator').addEventListener('touchstart', () => {
        CALCULATOR.show();
        $('.all-clear').focus();
    }, {passive: true});

    $('imgSettings').addEventListener('click', displaySettings);
    $('imgCloseSettings').addEventListener('click', hideSettings);

    btnSend.addEventListener('click', calculate);
    btnRefresh.addEventListener('click', () => location.reload());
    btnLanguage.addEventListener('click', applyLanguage);
    btnHelp.addEventListener('click', displayHelp);
    btnCloseHelp.addEventListener('click', hideHelp);
    $('inpLanguage').addEventListener('input',(e)=> applyLanguage(Number(e.target.value)));
    $('inpStyle').addEventListener('input',(e)=> switchStyle(Number(e.target.value)));

    btnClose.addEventListener('click', toggleGUI);
    
    ['inpShowHelp','inpShowLanguageButton',
     'inpUseDefaults','inpContactLayer','inpDiagonal'].forEach(btn => {
        switchSetting(btn);
    });

    ['inpBagSize','inpPouchSize'].forEach(input => {
        $(input).addEventListener('input', (e) => displayBagSize(e.target));
    })
}

function switchSetting(id) {
    const switchBtn = $(id);
    switchBtn.addEventListener('input', () => {
        const state = Boolean(Number(switchBtn.value));
        switchBtn.toggleAttribute('checked', state);
        if (id == 'inpShowLanguageButton') {
            btnLanguage.toggleAttribute('hidden', !state);
            SETTINGS.inpShowLanguageButton = state;
        } else if (id == 'inpShowHelp') {
            btnHelp.toggleAttribute('hidden', !state);
            SETTINGS.inpShowHelp = state;
        } else if (id == 'inpUseDefaults') {
            const defaults = $('[id^="inpDefault"]');
            defaults.forEach(inp => inp.toggleAttribute('disabled', !state));
            SETTINGS.inpUseDefaults = state;
            applyDefaults(SETTINGS);
            btnSend.toggleAttribute('disabled', !state);
        }
    });
}

function displayBagSize(slider) {
    slider.nextElementSibling.innerText = slider.value + ' kg';
    if (slider.id == 'inpBagSize') SETTINGS.inpBagSize = slider.value;
    if (slider.id == 'inpPouchSize') SETTINGS.inpPouchSize = slider.value;
}

function applySettings(settings = DEF_SETTINGS) {
    for (const id in settings) {
        const value = settings[id];
        if (id.startsWith('inp') || id.startsWith('sel')) {
            $(id).value = (typeof value == 'boolean') ? Number(value) : value;
            // trigger the input event to apply setting controls!
            $(id).dispatchEvent(new Event('input'));
        }
    }
    applyDefaults (settings);
    applyLanguage(settings.language);
}

function applyDefaults(settings = DEF_SETTINGS) {
    const state = settings.inpUseDefaults
    $('selTrowel').value = state ? settings.selTrowel : '3.5';
    $('inpTileLength').value = state ? settings.inpDefaultTileLength : '';
    $('inpTileWidth').value = state ? settings.inpDefaultTileWidth : '';
    $('inpWaste').value = state ? settings.inpWaste : '';        
    $('inpJointsWidth').value = state ? settings.inpDefaultJointsWidth : '';
    $('inpJointsDepth').value = state ? settings.inpDefaultJointsDepth : '';
}

function applyLanguage(lang) {
    const index = (typeof lang == 'number') ? lang : (SETTINGS.language + 1) % 3;
    SETTINGS.language = index;
    $('imgLanguage').src = `./img/${SETTINGS.flags[index]}.png`;
    $('imgLanguage').alt = SETTINGS.flags[index];
    $('inpLanguage').value = index;
    for (const id in CAPTIONS) {
        const elmt = $(id);
        if (elmt) {
            elmt.innerHTML = CAPTIONS[id][index];
        }
    }
}

function displayHelp() {
    $('divHelp').removeAttribute('hidden');
    $('divPod').setAttribute('hidden','');
}

function hideHelp() {
    $('divHelp').setAttribute('hidden','');
    $('divPod').removeAttribute('hidden');
}


function displaySettings() {
    $('divSettings').removeAttribute('hidden');
    $('divPod').setAttribute('hidden','');
}

function hideSettings() {
    $('divSettings').setAttribute('hidden','')
    $('divPod').removeAttribute('hidden');
    SETTINGS.inpDefaultTileLength = $('inpDefaultTileLength').value;
    SETTINGS.inpDefaultTileWidth = $('inpDefaultTileWidth').value;
    SETTINGS.inpDefaultJointsDepth = $('inpDefaultJointsDepth').value;
    SETTINGS.inpDefaultJointsWidth = $('inpDefaultJointsWidth').value;
    SETTINGS.selTrowel = $('selTrowel').value;
    SETTINGS.inpWaste = $('inpWaste').value;
    applyDefaults(SETTINGS);
    saveSettings();
}

function loadSettings() {
    return JSON.parse(localStorage.getItem(`${APP_NAME}_settings`)) || DEF_SETTINGS;
}

function saveSettings() {
    localStorage.setItem(`${APP_NAME}_settings`, JSON.stringify(SETTINGS));
}

function toggleGUI() {
    $('divResult').toggleAttribute('hidden',(this === btnClose));
    $('divPod').toggleAttribute('hidden',(this !== btnClose));
}

function switchUnit(btn) {
    // find the corresponding input element to keep focus on it!
    const input = document.activeElement;
    let i = gaugeUnits.indexOf(btn.nextElementSibling.innerText);
    i = (i + 1 ) % gaugeUnits.length;
    btn.nextElementSibling.innerText = gaugeUnits[i];
    let factor;
    if (input.value) {
        switch (i) {
            case 0: factor = 1000; break;
            case 1: factor = 0.1; break;
            case 2: factor = 0.01; break;
        }
        const value = Number(input.value.replace(',','.')),
              decimals = i ? i + 1 : 0;
        input.value = (value * factor).toFixed(decimals).replace('.',',');
    }
    input.focus();
    document.activeElement.focus();
}

function switchStyle(style) {
    for (const property in THEMES_CSS) {
        document.documentElement.style.setProperty(
            `--${property}`, `${THEMES_CSS[property][style]}`
        );
    }
    SETTINGS.inpStyle = style;
}

function validateInput(evt) {
    const keyCode = evt.keyCode,
          hasComma = evt.target.value.includes(','),
          span = evt.target.parentElement.lastElementChild,
          commaAllowed = (span.innerText == 'm' || span.innerText == 'm²') && !hasComma;
    if (keyCode > 31 && (keyCode < 48 || keyCode > 57) && keyCode !== 44 || 
       (keyCode == 44 && !commaAllowed)) evt.preventDefault();    
}

function enableCalcButton() {
    let isValid = Number(inpArea.value.replace(',','.')) > 0.4;
    Array.from($('[required]')).forEach(fld => {
        isValid = (isValid && Boolean(fld.value));
    })
    btnSend.toggleAttribute('disabled', !isValid);
}

function toggleArea(evt) {
    if (evt.target.hasAttribute('disabled')) {
        inpLength.toggleAttribute('disabled');
        inpWidth.toggleAttribute('disabled');
        inpArea.toggleAttribute('disabled');
    }
    const areaManual = (evt.target == inpArea);
    inpLength.toggleAttribute('required', !areaManual);
    inpWidth.toggleAttribute('required', !areaManual);
}

function calculate() {
    if (btnSend.hasAttribute('disabled')) return;

    const MATERIAL = new Material();
    MATERIAL.areaLength = convertUnit(inpLength);
    MATERIAL.areaWidth = convertUnit(inpWidth);
    MATERIAL.areaManual = !inpArea.hasAttribute('disabled');
    MATERIAL.area = MATERIAL.areaManual ? parseFloat(inpArea.value.replace(',','.')) : 0;    
    MATERIAL.trowel = Number($('selTrowel').value);
    MATERIAL.contactLayer = Boolean($('inpContactLayer').checked);
    MATERIAL.diagonal = Boolean($('inpDiagonal').checked);
    MATERIAL.levelHeight = Number($('inpTileLevelling').value);
    MATERIAL.tileLength = Number($('inpTileLength').value);
    MATERIAL.tileWidth = Number($('inpTileWidth').value);
    MATERIAL.offcut = Number($('inpWaste').value);
    MATERIAL.jointDepth = Number($('inpJointsDepth').value);
    MATERIAL.jointWidth = Number($('inpJointsWidth').value);
    MATERIAL.bagSize = Number(SETTINGS.inpBagSize);
    MATERIAL.pouchSize = Number(SETTINGS.inpPouchSize);

    const area = MATERIAL.area.toString().replace('.',','),
          lng = SETTINGS.language,
          bags = CAPTIONS.spnBags[lng];
    $('h1ResultArea').innerText = `${CAPTIONS.h1ResultArea[lng]} ${area} m²`;
    $('.spn-result',0).innerText = MATERIAL.glue;
    $('.spn-result',1).innerText = MATERIAL.grout;
    $('.spn-result',2).innerText = MATERIAL.tiles;
    const hasLevel = MATERIAL.levelCompound > 0;
    $('spnLevelling').innerText = hasLevel ? CAPTIONS.spnLevelling[lng] : '';
    $('spnLevellingKilo').innerText = hasLevel ? 'kg' : '';
    $('.spn-result',3).innerText = hasLevel ? MATERIAL.levelCompound : '';    
    $('.spn-bags-amount',2).innerHTML = hasLevel ? `= ${MATERIAL.bags('level')} ${bags}` :'';    
    $('.spn-bags-amount',0).innerHTML = `= ${MATERIAL.bags('glue')}  ${bags}`;
    $('.spn-bags-amount',1).innerHTML = `= ${MATERIAL.bags('grout')}  ${bags}`;

    toggleGUI();
}

function calculateArea(evt) {
    const areaManual = (evt.target == inpArea);
    let length = convertUnit(inpLength),
        width = convertUnit(inpWidth);
    const area = areaManual ? convertUnit(inpArea).toString() : (length * width).toFixed(2);

    if (!isNaN(area) && (Number(area) > 0.4 || areaManual)) {
        if (!areaManual) inpArea.value = area.replace('.',',');
        const isValid = (Number(area) > 0.4) && 
              $('inpTileLength').value && $('inpTileWidth').value &&              
              $('inpJointsWidth').value && $('inpJointsDepth').value;
        if (isValid) {
            btnSend.removeAttribute('disabled');
        } else {
            btnSend.setAttribute('disabled','');
        }
    } else {
        inpArea.value = '';
        btnSend.setAttribute('disabled','');
    }
}

function convertUnit(element) {
    let value = parseFloat(element.value.replace(',','.'));
    const unit = element.parentElement.lastElementChild,
          index = gaugeUnits.indexOf(unit.innerText);
    if (index == 0) return value / 1000;
    if (index == 1) return value / 100;
    return value;
}

