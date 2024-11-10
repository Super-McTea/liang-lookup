function createWordCard(word) {
    const name = word.word;
    const data = word.data;

    const card = document.createElement("div");
    card.id = `${name}`;
    card.classList.add("word-card");

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
            </div>`;
        }
    }

    card.innerHTML = innerString + "</div>";

    // console.log(card.id);
    cardContainer.appendChild(card);
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

    return `<div class="display-character" style="background-image: url(assets/characters/${firstChar}.png)"></div>` + createCardSpelling(wordToSpell.substring(firstChar.length));
}

function updateFilters() {
    showNumbers = numberBox.checked;
    showWords = wordBox.checked;
    showGrammar = grammarBox.checked;
}

function updateSearch() {
    const searchTerm = searchBar.value.trim();
    if (searchTerm.length === 0) {
        searchFilter = null;
    }
    else {
        searchFilter = searchTerm.toLowerCase();
    }
    console.log("Searched:", searchFilter);
}

function populateCards() {
    // Filter and Sort
    const displayWords = wordData.filter(
        (word) => {
            return verifyLiangWord(word.word)
        }).filter(
            (word) => {
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
        }).sort(
        (a, b) => {
            return sortAlphabetically(a.word, b.word)
        });


    cardContainer.innerHTML = "";
    if (showNumbers) {
        for (numb of numberData) {
            createNumberCard(numb);
        }
    }
    if (showWords) {
        for (word of displayWords) {
            createWordCard(word);
        }
    }
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

// Filter Checkboxes
const wordBox = document.getElementById('word-box');
const numberBox = document.getElementById('number-box');
const grammarBox = document.getElementById('grammar-box');

// Filter variables
let showWords = false;
let showNumbers = false;
let showGrammar = false;


submitFilter.addEventListener('click', (event) => {
    event.preventDefault();
    updateFilters();

    updateSearch();

    // console.log("Clicked submit!");
    populateCards();
})

// Populate data
updateFilters();
populateCards();