function createWordCard(word, docFrag) {
    const name = word.word;
    const data = word.data;

    const card = document.createElement("div");
    card.id = `${name}`;
    card.classList.add("card", "word-card", "smushed");

    let innerString = `<div class="card-name heading">${name}</div>`
    // <div class="name-container"> createCardSpelling(name)`;
        
    innerString += `<div class="name-container liang outline">` + name + `</div>`;

    if (data) {
        for (const d of data) {
            const type = d.type;
            const definitions = d.definition;
            const derivation = d.derivedFrom;

            innerString += `
            <p class="card-type-header heading">${type}
            ${type == 'verb' ? (` - Marking: <span class="liang" title="${word.marking}">${word.marking}</span>`) : ""}</p>
                ${definitions ? (`<div class="` + type + `" id="` + name + "-" + type + `">
                <ul>
                    <li>` + definitions.join("</li><li>") +
                    `</li>
                </ul>`) : ""}`;

            if (derivation) {
                innerString += `<p class="card-footer heading">Derived from [ ${derivation.map(a => `<span class="derivation">${a}</span>`).join(" + ")} ]</p>`
            }
            innerString += definitions ? `</div>` : "";
        }
    }

    if (word.derivedFrom) {
        innerString += `<p class="card-footer heading">Derived from [ ${word.derivedFrom.map(a => `<span class="derivation">${a}</span>`).join(" + ")} ]</p>`
    }

    card.innerHTML = innerString;

    // console.log(card.id);
    docFrag.appendChild(card);

    const derivations = card.getElementsByClassName("derivation");
    for (const deriv of derivations) {
        deriv.addEventListener("click", (e) => {
            const queryId = deriv.textContent;
            const toScroll = document.getElementById(queryId);
            if (toScroll) {
                toScroll.scrollIntoView({behavior: "smooth"});
                toScroll.classList.add("glow-anim");
            }
        })
    }
}

function createNumberCard(number) {
    const num = number.number;
    const data = number.data;

    const card = document.createElement("div");
    card.id = `${data[0].word}`;
    card.classList.add("card", "word-card");

    let innerString = `
    <div class="card-name">${num}</div>
    <div class="number-container">`

    if (data) {
        for (d of data) {
            const type = d.type;
            const word = d.word;

            innerString += `
            <div class="number-word">
                <p class="card-type-header">${type}</p>
                <div class="name-container liang outline">${word}</div>
                <p class="romanisation">${word}</p>
            </div>`;

            // <div class="name-container">
            // ${createCardSpelling(word)}
            // </div>
        }
    }

    card.innerHTML = innerString + "</div>";

    // console.log(card.id);
    cardContainer.appendChild(card);
}

function createAlphabetCard(letter, parentGroup) {
    const card = document.createElement("div");
    card.id = `${letter}`;
    card.classList.add("card", "word-card");

    if (letter != " ") {
        let pronunciation = letter.replace(/r/g, "ɹ");

        if (letter.substring(0,2) == "zh") {
            pronunciation = "ʒ" + letter.substring(2);
        }
        else if (letter.substring(0,2) == "th") {
            pronunciation = "ð" + letter.substring(2);
        }
        else if (letter.substring(0,2) == "tr") {
            pronunciation = "tɹ" + letter.substring(2) + "/ or /ʧɹ" + letter.substring(2);
        }
        else if (letter.substring(0,2) == "dr") {
            pronunciation = "dɹ" + letter.substring(2) + "/ or /dʒɹ" + letter.substring(2);
        }
        else if (letter.substring(0,1) == "y") {
            pronunciation = "j" + letter.substring(1) + "ʊ";
        }
        else if (letter.substring(0,1) == "w") {
            pronunciation = letter + "ʊ";
        }
        else if (letter == "ng") {
            pronunciation = "ŋ";
        }
        

        let innerString = 
        // <div class="letter-container">
        //     <div class="name-container">
        //         ${createCardSpelling(letter)}
        //     </div>
        // </div>
        `
        <div class="liang outline">${letter.toLowerCase()}</div>
        <span class="card-name">${letter.trim()}</span>
        <span>- /${pronunciation.toLowerCase()}/</span>`

        card.innerHTML = innerString;
    }
    else {
        card.classList.add('blanked');
    }

    // console.log(card.id);
    parentGroup.appendChild(card);
}

function createGrammarCard(grammarDataItem) {
    const grammarCard = document.createElement('div');
    grammarCard.id = grammarDataItem.heading;
    grammarCard.classList.add("card", "grammar-card");

    grammarCard.innerHTML = `<div class="text-line"><h1>${replaceLiangTags(grammarDataItem.heading)}</h1></div>`;

    let grammarParaHead = null;
    let grammarPara = null;

    for (const para of grammarDataItem.paragraphs) {

        const liangReplaced = replaceLiangTags(para);
        const isHeading = /^<h/.test(liangReplaced);

        if (isHeading) {
            // Append previous to the card
            if (grammarParaHead) {
                grammarCard.appendChild(document.createElement('hr'));
                grammarCard.appendChild(grammarParaHead);
                grammarCard.appendChild(grammarPara);
            }
            // Create Heading
            grammarParaHead = document.createElement('div');
            grammarParaHead.id = para;
            grammarParaHead.classList.add('text-line', 'dropdown');
            // Create Paragraph
            grammarPara = document.createElement('div');
            grammarPara.id = para + "-p";
            grammarPara.classList.add('grammar-paragraph');

            grammarParaHead.innerHTML = liangReplaced;
        }
        else {
            grammarPara.innerHTML += `<div class="text-line">${liangReplaced}</div>`;
        }
    }

    // Append previous to the card
    if (grammarParaHead) {
        grammarCard.appendChild(document.createElement('hr'));
        grammarCard.appendChild(grammarParaHead);
        grammarCard.appendChild(grammarPara);
    }
    cardContainer.appendChild(grammarCard);
}

function replaceLiangTags(text) {
    if (/<l\b/gm.test(text)) {
        // console.log("Test successful for:", text);

        const matches = text.matchAll(/<l\b[^>]*?(?:(?<opening>["'`])(?<title>.*?)\k<opening>)*\s*>(?<content>.*?)<\/l>/gm);
        let newText = text;

        // console.log(matches);
        for (const match of matches) {
            const capturedTag = match[0];
            const capturedTitle = match.groups.title;
            const capturedContent = match.groups.content;

            // console.log(capturedTag, capturedTitle);

            // const liangifiedText = `<div class="name-container">
            //         <span class="tooltip-content">${capturedTitle ? capturedTitle : capturedContent}</span>
            //         ${createCardSpelling(capturedContent.trim(), false)}
            //     </div>`;

            const liangifiedText = `<span class="liang" title="${capturedTitle ? capturedTitle : capturedContent}">${capturedContent.trim()}</span>`;

            newText = newText.replace(capturedTag, liangifiedText);
        }

        return newText;
    }
    return text;
}

function sortCharCount(first, second)
{
    if (first.length == 0) {
        return -1;
    }
    if (second.length == 0) {
        return 1;
    }
    
    const firstTest = firstLiangCharacter(first);
    const secondTest = firstLiangCharacter(second);
    
    return sortCharCount(first.substring(firstTest.length), second.substring(secondTest.length));

    
}

function sortAlphabetically(first, second) {

    if (first.length == 0) {
        return -1;
    }
    if (second.length == 0) {
        return 1;
    }

    const firstTest = firstLiangCharacter(first);
    const secondTest = firstLiangCharacter(second);

    const firstIndex = alphSorted.indexOf(firstTest);
    const secondIndex = alphSorted.indexOf(secondTest);
    
    if (firstIndex == secondIndex) {
        return sortAlphabetically(
            first.substring(firstTest.length),
            second.substring(secondTest.length));
    }
    return firstIndex - secondIndex;
}

function verifyLiangWord(wordToTest) {
    if (wordToTest == null || wordToTest.length <= 0) {
        return true;
    }

    let index = -1;
    let found = false;

    for (const syllable of alphSorted) {
        const pattern = new RegExp(String.raw`^${syllable}`, "i");
        if (!found) {
            index++;
            if (pattern.test(wordToTest)) {
                found = true;
            }
        }
    }

    if (!found) {
        return false;
    }

    return verifyLiangWord(wordToTest.substring(alphSorted[index].length));
}

function firstLiangCharacter(wordToTest) {
    let index = -1;
    let found = false;

    for (const syllable of lenSorted) {
        const pattern = new RegExp(String.raw`^${syllable}`, "i");
        if (!found) {
            index++;
            if (pattern.test(wordToTest)) {
                found = true;
            }
        }
    }
    if (!found) {
        return "";
    }

    return lenSorted[index];
}

function createCardSpelling(wordToSpell, useTitle = true) {

    if (wordToSpell == null || wordToSpell.length <= 0) {
        return "";
    }

    const firstChar = firstLiangCharacter(wordToSpell);

    if (!firstChar) {
        return "";
    }

    if (firstChar == " ") {
        return `<div class="blanked display-character"></div>` + createCardSpelling(wordToSpell.substring(firstChar.length), useTitle);
    }

    return `<div class="display-character" style="background-image: url(assets/characters/${firstChar}.png)" ${useTitle ? `title="` + firstChar + `"` : ""}></div>` + createCardSpelling(wordToSpell.substring(firstChar.length), useTitle);
}

function updateFilters() {
    showNumbers = numberBox.checked;
    showWords = wordBox.checked;
    showAlphabet = alphaBox.checked;
    showGrammar = grammarBox.checked;
}

function updateSearch() {
    updateErrorMessage();
    const searchTerm = searchBar.value.trim();
    // console.log(searchTerm);
    if (searchTerm.length == 0) {
        searchUnfiltered = null;
        searchFilter = null;
        // updateErrorMessage("DEBUG Search Empty");
    }
    else {
        searchUnfiltered = searchTerm.trim();
        searchFilter = searchTerm.toLowerCase();
    }
}

function updateErrorMessage(errorMessage) {
    if (!errorMessage || errorMessage.length == 0) {
        errorMessage = "";
    }
    searchErrorText.innerHTML = errorMessage;
}

function liangErrorReplace(pre, liangText) {
    if (liangText == null || liangText.length <= 0) {
        updateErrorMessage();
        return;
    }
    const displayText = (pre ? pre : "") + "<span class=\"liang\">" + liangText + "</span>";
    // `${verifyLiangWord(liangText) ? "<div class=\"name-container\">" + createCardSpelling(liangText) + "</div>" : "not valid text: " + liangText}`
    if (displayText) {
        updateErrorMessage(displayText);
    }
    else {
        updateErrorMessage();
    }
}

function populateCards() {
    
    cardContainer.innerHTML = "";
    cardContainer.classList = [];
    updateErrorMessage();

    if (showNumbers) {
        cardContainer.classList.add('number-mode');

        const numberWord = isNumeric(searchFilter) ? createNumberWords(searchFilter) : null;
        if (numberWord) {
            createNumberCard(numberWord);
        }
        else {
            for (numb of numberData) {
                createNumberCard(numb);
            }
        }
    }
    if (showWords) {
        cardContainer.classList.add('word-mode');

        const displayWords = generateWordList();

        generatedCards = 0;
        populateWordCards(displayWords, cardContainer);

        // liangErrorReplace("Searching for: ", searchFilter);
    }
    if (showAlphabet) {
        cardContainer.classList.add('alphabet-mode');
        const tempCardContainer = document.createDocumentFragment();

        const topGroup = document.createElement('div');
        const leftGroup = document.createElement('div');
        const rightGroup = document.createElement('div');
        const bottomGroup = document.createElement('div');

        tempCardContainer.appendChild(topGroup);
        tempCardContainer.appendChild(leftGroup);
        tempCardContainer.appendChild(rightGroup);
        tempCardContainer.appendChild(bottomGroup);

        topGroup.classList.add('top-alphabet','alphabet-grid');
        leftGroup.classList.add('left-alphabet','alphabet-grid');
        rightGroup.classList.add('right-alphabet','alphabet-grid');
        bottomGroup.classList.add('bottom-alphabet','alphabet-grid');

        let sectionIndex = 0;
        for (letter of alphSorted) {
            if (sectionIndex == 0) {
                createAlphabetCard(letter, topGroup);
                if (letter == 'u') {
                    sectionIndex++;
                }
            }
            else if (sectionIndex == 1) {
                createAlphabetCard(letter, leftGroup);
                if (letter == 'g') {
                    sectionIndex++;
                }
            }
            else if (sectionIndex == 2) {
                createAlphabetCard(letter, rightGroup);
                if (letter == 'ng') {
                    sectionIndex++;
                }
            }
            else {
                createAlphabetCard(letter, bottomGroup);
            }
        }

        cardContainer.appendChild(tempCardContainer);

        liangErrorReplace("", searchUnfiltered);
    }
    if (showGrammar) {

        for (const grammarItem of grammarData) {
            createGrammarCard(grammarItem);
        }

        const dropdowns = document.getElementsByClassName('dropdown');
        for (dropdown of dropdowns) {
            const drop = dropdown;

            drop.addEventListener('click', (event) => {
                event.preventDefault();
                drop.classList.toggle("active");
                const content = drop.nextElementSibling;
                content.classList.toggle("active");
            });
        }
    }
}

function generateWordList() {

    // Filter and Sort
    const descWords = liangWordData.filter(filterDesc).sort(sortDesc).sort(
    (a, b) => {
        return (lengthSortBox.checked ? sortCharCount(a.word, b.word) : null);
    });

    const nameWords = liangWordData.filter(filterName).sort(
            (a, b) => {
                return (searchFilter && searchFilter.length != 0) ? a.word.length - b.word.length : null;
            }
        ).sort(
            (a, b) => {
                return (lengthSortBox.checked ? sortCharCount(a.word, b.word) : null);
            }
        );

    let displayWords = nameWords.concat(descWords).filter(filterType);

    if (displayWords.length == 0) {
        updateErrorMessage("No Search Results Found");
        displayWords = liangWordData.filter(filterType);
    }

    return [...new Set(displayWords)];
}

let generatedCards = 0;
function populateWordCards(displayWords, container) {
    if (!showWords) return;
    // console.log(generatedCards);

    const tempCardContainer = document.createDocumentFragment();
    for (let i = 0; i < 50 && generatedCards < displayWords.length; i++) {
        createWordCard(displayWords[generatedCards], tempCardContainer);

        generatedCards++;
    }
    container.appendChild(tempCardContainer);

    if (generatedCards < displayWords.length) {
        setTimeout(populateWordCards, 0, displayWords, container);
    }
}

function filterDesc(word) {
    if (searchFilter) {
        let found = false;
        for (const wordData of word.data) {
            const lowerDef = wordData.definition ? wordData.definition.map(value => value.toLowerCase()) : [];
            for (const def of lowerDef) {
                if (def.includes(searchFilter)) {
                    found = true;
                }
            }
        }
        return found;
    }
    return true;
}

function filterName(word) {
    if (searchFilter) {
        if (word.word.includes(searchFilter)) {
            return true;
        }
    }
}

function filterType(word) {
    const currentFilter = typeFilterBox.value;
    if (!currentFilter) {
        return true;
    }

    let found = false;
    for (const wordData of word.data) {
        const type = wordData.type.toLowerCase();
        if (type == currentFilter) {
            found = true;
        }
    }
    return found;

}

function sortDesc(wordA, wordB) {
    if (searchFilter) {
        let aSize = Number.MAX_VALUE;
        let bSize = Number.MAX_VALUE;
        // A Size
        for (const wordData of wordA.data) {
            const lowerDef = wordData.definition.map(value => value.toLowerCase());
            for (const def of lowerDef) {
                if (def.includes(searchFilter) && aSize > def.length) {
                    aSize = def.length;
                }
            }
        }
        // B Size
        for (const wordData of wordB.data) {
            const lowerDef = wordData.definition.map(value => value.toLowerCase());
            for (const def of lowerDef) {
                if (def.includes(searchFilter) && bSize > def.length) {
                    bSize = def.length;
                }
            }
        }
        return aSize - bSize;
    }
    return null;
}

function generateMarkings(word) {
    const name = word.word;
    word.marking = "";

    if (name[name.length - 1] == 'a') {
        word.marking = 'ra';
    }
    if (name[name.length - 1] == 'i') {
        word.marking = 'pi';
    }
    if (name[name.length - 1] == 'u') {
        word.marking = 'mu';
    }
    // console.log(word);
    return word;
}

function createNumberWords(numberToString) {

    numberToString = Math.floor(Math.abs(numberToString));

    // console.log(numberToString);

    // if (getDigitWord(numberToString)) {
    //     return getDigitWord(numberToString);
    // }
    const rawnum = numberToString.toString().split('');
    const numString = rawnum.reverse();
    // console.log(numString);
    const placeRadix = 3;
    
    try {
        let counting = "";
        let disjunctive = "";
        let ordinal = "";

        let firstDigitSeen = false;

        for (const placeValue in numString) {
            // console.log(`Current Index: ${placeValue}`);

            const placePrefixes = (index) => {
                const prefixChecker = getTenWord(placeValue);
                let placePrefix = placeValue;
                if (prefixChecker) {
                    placePrefix = prefixChecker.data[index].word;
                }
                
                const showPrefix = () => {
                    if (placeValue == 0) {
                        // No prefixes on the zeroth place - no aka 
                        return false;
                    }

                    if (placeValue%placeRadix == 0) {
                        // Thousands, Millions, Billions, etc
                        // console.log(`Checking radix value: ${placeValue}`);

                        if (placeValue > placeRadix) {
                            const newTen = () => {
                                let k = 2;
                                while (placeValue % (placeRadix * k) == 0) {
                                    k *= 2;
                                }
                                return placeValue % (placeRadix * k);
                            };
                            // console.log(`New ten value: ${newTen()}`);
                            placePrefix = getTenWord(newTen()).data[index].word;
                        }

                        for (let i = 0; i < placeValue; i++) {
                            // console.log(`Value at ${Number(placeValue) + i}: ${numString[Number(placeValue) + i]}`)
                            if (numString[Number(placeValue) + i] && numString[Number(placeValue) + i] != 0) {
                                return true;
                            }
                        }
                        return false;
                    }

                    if (placeValue > placeRadix) {
                        // console.log(`Checking bonus value: ${placeValue}`);
                        const newTen = placeValue%placeRadix;
                        // console.log(`New ten value: ${newTen}`);
                        placePrefix = getTenWord(newTen == 0 ? placeRadix : newTen).data[index].word;
                    }

                    if (numString[placeValue] == 0) {
                        return false;
                    }
                    return true;
                }

                return (showPrefix() ? placePrefix : "");
            }

            const numberPrefixes = (index) => {
                const showNumber = () => {
                    if (numString.length == 1) {
                        return true;
                    }

                    if (numString[placeValue] == 0) {
                        return false;
                    }

                    if (numString[placeValue] == 1) {
                        if (placeValue%placeRadix == 0 && placeValue != numString.length-1) {
                            // Thousands, Millions, Billions, etc
                            // console.log(`DIGIT - Checking radix value: ${placeValue}`);
                            return true;
                        }

                        return false;
                    }
                    return true;
                }

                return (showNumber() ? getDigitWord(numString[placeValue]).data[index].word : "");
            }

            // Setting the numbers
            counting = 
            // Number Prefix
                (placeValue == 0 ? numberPrefixes(0) : firstLiangCharacter(numberPrefixes(0))) + 
            // Place Value
                placePrefixes(0) + counting;

            disjunctive = 
            // Number Prefix
                (placeValue == 0 ? numberPrefixes(firstDigitSeen ? 0 : 1) : firstLiangCharacter(numberPrefixes(firstDigitSeen ? 0 : 1))) + 
            // Place Value
                placePrefixes(firstDigitSeen ? 0 : 1) + disjunctive;

            ordinal = 
            // Number Prefix
                (placeValue == 0 ? numberPrefixes(firstDigitSeen ? 0 : 2) : firstLiangCharacter(numberPrefixes(firstDigitSeen ? 0 : 2))) + 
            // Place Value
                placePrefixes(firstDigitSeen ? 0 : 2) + ordinal;

            // console.log(disjunctive);

            // First digit checker
            if (counting != "") {
                firstDigitSeen = true;
            }
        }

        return {
            number:numberToString,
            data: [
                {
                    type: "counting",
                    word: counting
                },
                {
                    type: "disjunctive",
                    word: disjunctive
                },
                {
                    type: "ordinal",
                    word: ordinal
                },
            ]
        }
    }
    catch (e) {
        updateErrorMessage("Please enter a lower number");
        console.log("Error:",e);
        return null;
    }
}

function getTenWord(ten) {
    const result = getDigitWord(Math.pow(10, ten));
    if (result) {
        return result;
    }
    return null;
}

function getDigitWord(digit) {
    for (const digitData of numberData) {
        if (digitData.number == digit) {
            return digitData;
        }
    }
    return null;
}

// Fetch word data
async function getLiangData() {
    const url = "https://api.github.com/repos/Super-McTea/json-files/contents/liang-word-data.json";

    try {
        const response = await fetch(url);
        const data = await response.json();

        // GitHub API gives base64 with newlines sometimes, so clean them up
        const rawContent = data.content.replace(/\n/g, "");
    
        // Decode base64 → string
        const decoded = atob(rawContent);

        // If the file is JSON, parse it
        const json = JSON.parse(decoded);

        // console.log(json);
        return json;
    }
    catch (e) {
        console.log("uh oh! " + e);
        updateErrorMessage("Disconnected from the word database at the moment!");
    }
}

let liangData = {};

// Global Variables
let alphSorted;
let lenSorted;
let liangWordData;

let numberData;

const lengthSortBox = document.getElementById('length-sort-box');


async function setupData() {
    liangData = await getLiangData();

    try {
        // Alphabet
        alphSorted = [...liangData.alphabet].map(a => a.toLowerCase());
        lenSorted = [...liangData.alphabet].map(a => a.toLowerCase()).sort((a,b) => {return b.length - a.length});
        console.log(`Liang syllable count: ${alphSorted.length}`);

        // Words
        liangWordData = liangData.wordlist.filter(
            (word) => {
                return verifyLiangWord(word.word)
            }).sort(
            (a, b) => {
                return sortAlphabetically(a.word, b.word);
            }).map(a => generateMarkings(a));
        console.log(`Liang word count: ${liangWordData.length}`);

        // Numbers
        numberData = liangData.numberlist;
        console.log(`Liang number entries: ${numberData.length}`);

        // Check
        console.log(`All systems good :thumbsup:`);
    }
    catch (e)
    {
        console.log(`Something wrong with the data: ${e}`);
    }
}

// (wordData.concat(grammarWordData)).filter(
//     (word) => {
//         return verifyLiangWord(word.word)
//     }).sort(
//     (a, b) => {
//         return sortAlphabetically(a.word, b.word);
//     });
// console.log(alphSorted);
// console.log(lenSorted);

const cardContainer = document.getElementById("card-container");
const filterButtonContainer = document.getElementById("filter-button-container");
const backToTop = document.getElementById('back-to-top');

// Search Bar
const searchBar = document.getElementById('search-bar');
let searchFilter = null;
let searchUnfiltered = null;
const searchErrorText = document.getElementById('search-error');
let searchError = "";

const typeFilterBox = document.getElementById('type-filter');

// Filter Checkboxes
const wordBox = document.getElementById('word-box');
const numberBox = document.getElementById('number-box');
const alphaBox = document.getElementById('alphabet-box');
const grammarBox = document.getElementById('grammar-box');

// Filter variables
let showWords = false;
let showNumbers = false;
let showAlphabet = false;
let showGrammar = false;

filterButtonContainer.addEventListener('click', (event) => {
    // event.preventDefault();
    const url = new URL(document.location);

    let tabNum = 0; // wordBox by default
    if (numberBox.checked) {
        tabNum = 1;
    }
    else if (alphaBox.checked) {
        tabNum = 2;
    }
    else if (grammarBox.checked) {
        tabNum = 3;
    }

    if (tabNum == 0) {
        url.searchParams.delete("tab");
    }
    else {
        url.searchParams.set("tab", tabNum);
    }
    history.replaceState(null, '', url);

    updateFilters();
    populateCards();
})

searchBar.addEventListener('input', (event) => {
    event.preventDefault();
    updateSearch();
    populateCards();
})

lengthSortBox.addEventListener('change', (event) => {
    populateCards();
})

typeFilterBox.addEventListener('change', (event) => {
    populateCards();
})

document.addEventListener('animationend', (event) => {
    if (event.animationName !== "glow") return;
    event.target.classList.remove("glow-anim");
})

function updateURLSearch() {
    if ('URLSearchParams' in window) {
        const url = new URL(document.location);
        if (searchFilter) {
            url.searchParams.set("search", searchFilter);
        }
        else {
            url.searchParams.delete("search");
        }
        history.replaceState(null, '', url);
    }
}

searchBar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        updateURLSearch();
    }
})

searchBar.addEventListener('focusout', (event) => {
    updateURLSearch();
})

// Back To Top
backToTop.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
})

// On webpage load
if ('URLSearchParams' in window) {
    const urlParams = new URLSearchParams(document.location.search);

    if (urlParams) {
        // Setting the Search value
        searchBar.value = urlParams.get("search");

        // Setting the URL
        const urlTab = urlParams.get("tab");
        if (urlTab) {
            if (urlTab == 0) {
                wordBox.checked = true;
            }
            else if (urlTab == 1) {
                numberBox.checked = true;
            }
            else if (urlTab == 2) {
                alphaBox.checked = true;
            }
            else if (urlTab == 3) {
                grammarBox.checked = true;
            }
        }
    }
}
// Populate data
async function start() {
    updateErrorMessage("");
    await setupData();

    updateSearch();
    updateFilters();
    populateCards();
}

start();

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}