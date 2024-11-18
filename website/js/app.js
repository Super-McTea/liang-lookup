function createWordCard(word) {
    const name = word.word;
    const data = word.data;

    const card = document.createElement("div");
    card.id = `${name}`;
    card.classList.add("word-card", "smushed");

    let innerString = `<div class="card-name">${name}</div>
    <div class="name-container">`;
        
    innerString += createCardSpelling(name) + `</div>`;

    if (data) {
        for (const d of data) {
            const type = d.type;
            const definitions = d.definition;
            const derivation = d.derivedFrom;

            innerString += `
            <p class="card-type-header">${type}</p>
            <div class="${type}" id="${name}-${type}">
                <ol>
                    <li>${definitions.join("</li><li>")}
                    </li>
                </ol>`;

            if (derivation) {
                innerString += `<p>Derived from [ ${derivation.join(" + ")} ]</p>`
            }
            innerString += `</div>`;
        }
    }

    if (word.derivedFrom) {
        innerString += `<p class="card-footer">Derived from [ ${word.derivedFrom.join(" + ")} ]</p>`
    }

    card.innerHTML = innerString;

    // console.log(card.id);
    cardContainer.appendChild(card);
}

function createNumberCard(number) {
    const num = number.number;
    const data = number.data;

    const card = document.createElement("div");
    card.id = `${data[0].word}`;
    card.classList.add("word-card");

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
                <div class="name-container">
                    ${createCardSpelling(word)}
                </div>
                <p class="romanisation">${word}</p>
            </div>`;
        }
    }

    card.innerHTML = innerString + "</div>";

    // console.log(card.id);
    cardContainer.appendChild(card);
}

function createAlphabetCard(letter, parentGroup) {
    const card = document.createElement("div");
    card.id = `${letter}`;
    card.classList.add("word-card");

    if (letter != " ") {
        let innerString = `
        <div class="card-name">${letter}</div>
        <div class="letter-container">
            <div class="name-container">
                ${createCardSpelling(letter)}
            </div>
        </div>`

        card.innerHTML = innerString;
    }
    else {
        card.classList.add('blanked');
    }

    // console.log(card.id);
    parentGroup.appendChild(card);
}

function sortAlphabetically(first, second) {

    if (first.length == 0) {
        return -1;
    }
    if (second.length == 0) {
        return 1;
    }

    let firstIndex = -1;
    let secondIndex = -1;

    let firstFound, secondFound = false;

    for (const syllable of alphSorted) {
        const pattern = new RegExp(String.raw`^${syllable}`, "i");
        if (!firstFound) {
            firstIndex++;
            if (pattern.test(first)) {
                firstFound = true;
            }
        }
        if (!secondFound) {
            secondIndex++;
            if (pattern.test(second)) {
                secondFound = true;
            }
        }
    }
    if (firstIndex == secondIndex) {
        return sortAlphabetically(
            first.substring(alphSorted[firstIndex].length),
            second.substring(alphSorted[secondIndex].length));
    }
    return firstIndex - secondIndex;
}

function verifyLiangWord(wordToTest) {
    if (wordToTest.length <= 0) {
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
        console.log("ERROR:", wordToTest, "is false!");
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

function createCardSpelling(wordToSpell) {

    if (wordToSpell.length <= 0) {
        return "";
    }

    const firstChar = firstLiangCharacter(wordToSpell);

    if (!firstChar) {
        return "";
    }

    if (firstChar == " ") {
        return `<div class="blanked display-character"></div>` + createCardSpelling(wordToSpell.substring(firstChar.length));
    }

    return `<div class="display-character" style="background-image: url(assets/characters/${firstChar}.png)"></div>` + createCardSpelling(wordToSpell.substring(firstChar.length));
}

function updateFilters() {
    showNumbers = numberBox.checked;
    showWords = wordBox.checked;
    showGrammar = grammarBox.checked;
}

function updateSearch() {
    updateErrorMessage();
    const searchTerm = searchBar.value.trim();
    // console.log(searchTerm);
    if (searchTerm.length == 0) {
        searchFilter = null;
        // updateErrorMessage("DEBUG Search Empty");
    }
    else {
        searchFilter = searchTerm.toLowerCase();
    }
}

function updateErrorMessage(errorMessage) {
    if (!errorMessage || errorMessage.length == 0) {
        errorMessage = "";
    }
    searchErrorText.innerHTML = errorMessage;
}

function populateCards() {
    
    cardContainer.innerHTML = "";
    cardContainer.classList = [];
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

        const liangWordData = wordData.concat(grammarWordData);

        // Filter and Sort
        const descWords = liangWordData
            .filter(
                (word) => {
                    return verifyLiangWord(word.word)
                }
            ).filter(filterDesc).sort(
                (a, b) => {
                    return sortAlphabetically(a.word, b.word)
                }
            ).sort(
                (a, b) => {
                    return (searchFilter && searchFilter.length != 0) ? a.word.length - b.word.length : null;
                }
            );

        const nameWords = liangWordData.filter(
                (word) => {
                    return verifyLiangWord(word.word)
                }
            ).filter(filterName).sort(
                (a, b) => {
                    return sortAlphabetically(a.word, b.word);
                }
            ).sort(
                (a, b) => {
                    return (searchFilter && searchFilter.length != 0) ? a.word.length - b.word.length : null;
                }
            );

        let displayWords = nameWords.concat(descWords);

        if (displayWords.length == 0) {
            updateErrorMessage("No Search Results Found");
            displayWords = liangWordData.filter(
                (word) => {
                    return verifyLiangWord(word.word)
                }).sort(
                    (a, b) => {
                        return sortAlphabetically(a.word, b.word);
                });
        }
    

        for (word of displayWords) {
            createWordCard(word);
        }
    }
    if (showGrammar) {
        cardContainer.classList.add('grammar-mode');
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
        for (letter of alphabet) {
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
    }
}

function filterDesc(word) {
    if (searchFilter) {
        let found = false;
        for (const wordData of word.data) {
            const lowerDef = wordData.definition.map(value => value.toLowerCase());
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
        let disjunctive = "";
        let counting = "";
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
            disjunctive = 
            // Number Prefix
                (placeValue == 0 ? numberPrefixes(0) : firstLiangCharacter(numberPrefixes(0))) + 
            // Place Value
                placePrefixes(0) + disjunctive;

            counting = 
            // Number Prefix
                (placeValue == 0 ? numberPrefixes(firstDigitSeen ? 0 : 1) : firstLiangCharacter(numberPrefixes(firstDigitSeen ? 0 : 1))) + 
            // Place Value
                placePrefixes(firstDigitSeen ? 0 : 1) + counting;

            ordinal = 
            // Number Prefix
                (placeValue == 0 ? numberPrefixes(firstDigitSeen ? 0 : 2) : firstLiangCharacter(numberPrefixes(firstDigitSeen ? 0 : 2))) + 
            // Place Value
                placePrefixes(firstDigitSeen ? 0 : 2) + ordinal;

            // console.log(disjunctive);

            // First digit checker
            if (disjunctive != "") {
                firstDigitSeen = true;
            }
        }

        return {
            number:numberToString,
            data: [
                {
                    type: numberType.disjunctive,
                    word: disjunctive
                },
                {
                    type: numberType.counting,
                    word: counting
                },
                {
                    type: numberType.ordinal,
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

// Global Variables
const alphSorted = [...alphabet].map(a => a.toLowerCase());
const lenSorted = [...alphabet].map(a => a.toLowerCase()).sort((a,b) => {return b.length - a.length});
// console.log(alphSorted);
// console.log(lenSorted);

const cardContainer = document.getElementById("card-container");
const filterButtonContainer = document.getElementById("filter-button-container");
const submitFilter = document.getElementById("submit-filter");

// Search Bar
const searchBar = document.getElementById('search-bar');
let searchFilter = null;
const searchErrorText = document.getElementById('search-error');
let searchError = "";

// Filter Checkboxes
const wordBox = document.getElementById('word-box');
const numberBox = document.getElementById('number-box');
const grammarBox = document.getElementById('grammar-box');

// Filter variables
let showWords = false;
let showNumbers = false;
let showGrammar = false;

filterButtonContainer.addEventListener('click', (event) => {
    // event.preventDefault();
    updateFilters();
    populateCards();
})

searchBar.addEventListener('input', (event) => {
    event.preventDefault();
    updateSearch();
    populateCards();
})

// Populate data
updateSearch();
updateFilters();
populateCards();

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}