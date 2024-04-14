export const APP_NAME = 'Material Calculator';
export const DEF_SETTINGS = {
    language: 0,
    flags: ['german','italian','english','portugese'],
    inpShowLanguageButton: true,
    inpStyle: 0,
    inpShowHelp: false,
    inpUseDefaults: true,
    inpDefaultTileLength: 600,
    inpDefaultTileWidth: 300,
    inpDefaultJointsWidth: 3,
    inpDefaultJointsDepth: 10,
    inpBagSize: 25,
    inpPouchSize: 5,
    selTrowel: 3.5,
    inpWaste: ''
};

export const CALC_DEF_SETTINGS = {
    style: 1,
    buttonStyle: 0,
    decimals: 10,
    groupDigits: true,
    memory: 0,
    DEF_FONTSIZE: 36
}

export const gaugeUnits = ['mm','cm','m'];

export const CAPTIONS = {
    lblLength: ['Länge','Lunghezza','Length'],
    lblWidth: ['Breite','Larghezza','Width'],
    lblArea: ['Fläche','Superficie','Area'],
    lblTrowel: ['Zahnung','Spatola dentata','Notched trowel'],
    lblContactLayer: ['Kontaktschicht','Strato di contatto','Contact layer'],
    lblDiagonal: ['Verlegung diagonal','Posato in diagonale','Laid diagonal'],
    lblTileLevelling: ['Nivellieren','Livellamento','Levelling'],
    lblTileLength: ['Plattenlänge','Lunghezza piastrelle','Tile length'],
    lblTileWidth: ['Plattenbreite','Larghezza piastrelle','Tile width'],
    lblWaste: ['Verschnitt','Scarto','Waste'],
    lblJointsWidth: ['Fugenbreite','Larghezza dei giunti','Joints width'],
    lblJointsDepth: ['Fugentiefe','Profondità dei giunti','Joints depth'],
    spnGlue: ['Kleber:','Colla:','Glue:'],
    spnGrout: ['Fugenmasse:','Stucco per piastrelle:','Grout:'],
    spnTiles: ['Platten:','Piastrelle:','Tiles'],
    spnLevelling: ['Nivelliermasse:','Composto livellante:','Levelling compound:'],
    spnBags: ['Sack','Sacchi','Bags'],
    h2Settings: ['Einstellungen','Impostazioni','Settings'],
    lblLanguage: ['Deutsch','Italiano','English'],
    lblStyle: ['Design','Design','Design'],
    lblShowHelp: ['Hilfebutton anzeigen','Mostra pulsante di aiuto','Show help button'],
    lblShowLanguageButton: ['Sprachbutton anzeigen','Pulsante mostra lingua','Show language button'],
    lblUseDefaults: ['Standardwerte verwenden','Usare i valori predefiniti','Use defaults'],
    lblDefaultTileLength: ['Standard-Plattenlänge','Lunghezza piastrella standard','Default tile length'],
    lblDefaultTileWidth: ['Standard-Plattenbreite','Larghezza piastrella standard','Default tile width'],
    lblDefaultJointsWidth: ['Standard-Fugenbreite','Larghezza standard del giunto','Default joint width'],
    lblDefaultJointsDepth: ['Standard-Fugentiefe','Larghezza standard del giunto','Default joint depth'],
    lblBagSize: ['Kleber','Colla','Glue'],
    lblPouchSize: ['Fuge','Giunto','Grout'],
    h1ResultArea: ['Fläche:','Superficie:','Area:'],
    h2Help: ['Hilfe','Assistenza','Help'],
    parHelpText: [
        `Länge und Breite der Fläche angeben.
        Durch Klick auf das Dreieck rechts kann die Masseinheit geändert werden.
        <br><br>
        Die Fläche kann auch direkt angegeben werden, indem man auf das Feld klickt.
        Zur Berechnung von Teilflächen kann der integrierte Taschenrechner verwendet werden.
        Dazu auf das Symbol rechts klicken. Die berechnete Fläche wird direkt übernommen.
        <br><br>
        Alle rot markierten Felder sind Pflichtfelder:<br><br>
        <ul>
            <li>Fläche (Länge x Breite oder direkt)</li>
            <li>Fliesenlänge</li>
            <li>Fliesenbreite</li>
            <li>Fugenbreite</li>
            <li>Fugentiefe</li>
        </ul>
        <br>
        Alle anderen Felder sind optional.
        <br><br>
        Der Button zu Berechnung ist erst verfügbar, wenn alle Pflichtfelder ausgefüllt sind!
        <br><br><br>
        In den Einstellungen können individuelle Standardwerte für die Platten konfiguriert werden.`,
        `Inserire la lunghezza e la larghezza dell'area.
        L'unità di misura può essere modificata facendo clic sul triangolo a destra.
        <br><br>
        L'area può anche essere inserita direttamente facendo clic sul campo.
        La calcolatrice integrata può essere utilizzata per calcolare aree parziali.
        A tale scopo, fare clic sul simbolo a destra. L'area calcolata viene applicata direttamente.
        <br><br>
        Tutti i campi contrassegnati in rosso sono obbligatori:<br><br>
        <ul>
            <li>Area (lunghezza x larghezza o diretta)</li>
            <li>Lunghezza della piastrella</li>
            <li>Larghezza della piastrella</li>
            <li>Larghezza del giunto</li>
            <li>Profondità del giunto</li>
        </ul>.
        <br>
        Tutti gli altri campi sono facoltativi.
        <br><br>
        Il pulsante per il calcolo è disponibile solo se tutti i campi obbligatori sono stati compilati!
        <br><br><br>
        I valori predefiniti individuali per i pannelli possono essere configurati nelle impostazioni.`,
        `Enter the length and width of the area.
        The unit of measurement can be changed by clicking on the triangle on the right.
        <br><br>
        The area can also be entered directly by clicking on the field.
        The integrated calculator can be used to calculate partial areas.
        To do this, click on the symbol on the right. The calculated area is applied directly.
        <br><br>
        All fields marked in red are mandatory fields:<br><br>
        <ul>
            <li>Area (length x width or direct)</li>
            <li>Tile length</li>
            <li>Tile width</li>
            <li>Joint width</li>
            <li>Joint depth</li>
        </ul>
        <br>
        All other fields are optional.
        <br><br>
        The button for calculation is only available when all mandatory fields have been filled in!
        <br><br><br>
        Individual default values for the panels can be configured in the settings.`
    ],
    h2CalcSettings: ['Einstellungen Taschenrechner','Impostazioni della calcolatrice','Calculator settings'],
    lblGroupDigits: ['Zifferngruppierung','Raggruppamento cifre','Digit grouping'],
    lblDecimals: ['Dezimalstellen','Decimali','Decimals'],
    lblButtonStyle: ['Buttons rund','Pulsanti rotondi','Buttons round']
};

export const THEMES_CSS = {
    bg1: ['#020204','#f4f4f4','#1f1e4f'],
    bg2: ['#323234','#f7f7f7','#1f1e70'], // '#32307e' gradient light 1a1a8b
    boxShadow: ['#010103','#f4f4f4','#1f1e4f'],
    shadowDark: ['#040406','#b0b0b0','#0c0c20'],
    shadowLight: ['#444449','#ffffff','#32307e'],
    textColor: ['#888','#111','silver'],
    disabledColor: ['#444','#666','#666'],
    accentColor: ['#5166d6','#009000','dodgerblue'],
    requiredColor: ['tomato','red','darkorange'],
    displayBgColor: ['#282c2f','#ecf0f3','#34335C'],
    displayColor: ['darkgrey','#5166d6','darkgrey'],
    displayTextShadow: ['unset',`-1px -1px 2px white, 2px 2px 2px #00000066;`,'unset'],
    buttonMemBgColor: ['#555555','#bdbdbd','darkslateblue'],
    buttonTextColor: ['#bbb', '#777','darkgrey']
};

export const ERR_TYPEMISMATCH = 'Wrong parameter type',
             ERR_OVERFLOW = 'Overflow',
             ERR_NEGATIVE_ROOT = 'Negative root',
             ERR_DIV_BY_ZERO = 'Division by zero',
             ERR_INVALID_EXP = 'Invalid expression',
             ERR_UNDEFINED = 'Not defined';

export const MODULO = ' mod ',
             OPERATORS = '+-×÷' + MODULO,
             FUNCTIONS = 'n! x² √ ± % 1/x',
             SEPARATOR = ',',
             BRACKET_OPEN = '(',
             BRACKET_CLOSE = ')',
             MAX_INPUT = 17;


export const CALC_CONTAINERS = [
    'divDisplay|display',
    'divStatusbar|status-bar',
    'divMemory|flx-start',
    'divPrevOperand|flx-end',
    'divInput|flx-end',
    'divCalcSettings|settings'
];

export const CALC_BUTTONS = [
    {text: "MR", class:"memory"},
    {text: "MS", class:"memory"},
    {text: "MC", class:"memory"},
    {text: "M+", class:"memory"},
    {text: "M-", class:"memory"},
    {text: "AC", class:"all-clear"},                    
    {text: "(", class: ""},
    {text: ")", class: ""},
    {text: " mod ", class:"operator"},
    {text: "DEL", class: ""},
    {text: "n!", class:"operator"},
    {text: "x²", class:"operator"},
    {text: "√" , class:"operator"},
    {text: "±" , class:"operator"},
    {text: "π" , class:"operator"},
    {text: "7", class: ""},
    {text: "8", class: ""},
    {text: "9", class: ""},
    {text: "÷", class:"operator" },
    {text: "%", class:"operator" },
    {text: "4", class: ""},
    {text: "5", class: ""},
    {text: "6", class: ""},
    {text: "×", class:"operator"},
    {text: "1/x", class:"operator"},
    {text: "1", class: ""},
    {text: "2", class: ""},
    {text: "3", class: ""},
    {text: "-", class:"operator"},
    {text: "=", class:"equals"},
    {text: "0", class:"zero"},
    {text: ",", class: ""},
    {text: "+", class:"operator"},
    {text: "↵", class:"equals"}
];

export const BUTTONS_CSS = {
    buttonBorderRadius: ['0.5rem','50%'],
    buttonDoubleBorderRadius: ['0.5rem','1.5rem'],
    buttonHeight: ['2.4rem','3rem'],
    buttonWidth: ['3rem','3rem']
};

export const TMP_CALC_SETTINGS = `
    <h2 id="h2CalcSettings">Einstellungen Taschenrechner</h2>
    <div class="img-button" id="imgCloseCalcSettings">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#777777" id="svgCloseSettings">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
        </svg>
    </div>
    <div class="control">
        <label for="inpButtonStyle" id="lblButtonStyle">Buttons rund</label>
        <input id="inpButtonStyle" type="range" min="0" max="1" value="1" class="switch" checked>
    </div>
    <div class="control">
        <label for="inpGroupDigits" id="lblGroupDigits">Zifferngruppierung</label>
        <input id="inpGroupDigits" type="range" min="0" max="1" value="1" class="switch" checked>
    </div>    
    <div class="control">
        <label for="inpDecimals" id="lblDecimals">Dezimalstellen</label>
        <input id="inpDecimals" type="range" min="0" max="10" value="10" checked>
        <span id="spnDecimals" class="unit">10</span>
    </div>`;

export const TMP_BTN_SETTINGS = `
    <div class="img-button" id="imgCalcSettings">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="svgCalcSettings">
            <path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" fill="none" stroke="#777777" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
        </svg>
    </div>`;

export const TMP_BTN_CLOSE = `
    <div class="img-button" id="imgCloseCalc">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#777777" id="svgCloseSettings">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
        </svg>
    </div>`;

// npx pwa-asset-generator img/calculator.png img/icons --index index.html --manifest manifest.json