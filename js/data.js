const wordType = {
    noun: "noun",
    proper: "proper",
    verb: "verb",
    adjective: "adjective",
    adverb: "adverb",
    exclamation: "exclamation",
    determiner: "determiner",

    number: "number",
}

const numberType = {
    disjunctive: "disjunctive",
    counting: "counting",
    ordinal: "ordinal",
}

const alphabet = [
    "a", "i", "u",
    "la", "li", "lu",
    "ma", "mi", "mu",
    "fa", "fi", "fu",
    "tha", "thi", "thu",
    "za", "zi", "zu",
    "pa", "pi", "pu",
    "ta", "ti", "tu",
    "ka", "ki", "ku",

    "b", "d", "g",

    "ra", "ri", "ru",
    "na", "ni", "nu",
    "va", "vi", "vu",
    "zha", "zhi", "zhu",
    "wo", "yo",
    "ba", "bi", "bu",
    "da", "di", "du",
    "ga", "gi", "gu",

    "m", "n", "ng",

    "Fra", "Fri", "Fru",
    "Mla", "Mli", "Mlu",
    "Pra", "Pri", "Pru",
    "Tra", "Tri", "Tru",
    "Kra", "Kri", "Kru",

    "Vra", "Vri", "Vru",
    "Bra", "Bri", "Bru",
    "Dra", "Dri", "Dru",
    "Gra", "Gri", "Gru",
]

const numberData = [
    {
        number: 0,
        data: [
            {
                type: numberType.disjunctive,
                word: "nua"
            },
            {
                type: numberType.counting,
                word: "naumi"
            },
            {
                type: numberType.ordinal,
                word: "nauvu"
            }
        ]
    },
    {
        number: 1,
        data: [
            {
                type: numberType.disjunctive,
                word: "aka"
            },
            {
                type: numberType.counting,
                word: "akami"
            },
            {
                type: numberType.ordinal,
                word: "avu"
            }
        ]
    },
    {
        number: 2,
        data: [
            {
                type: numberType.disjunctive,
                word: "futa"
            },
            {
                type: numberType.counting,
                word: "fumi"
            },
            {
                type: numberType.ordinal,
                word: "favu"
            }
        ]
    },
    {
        number: 3,
        data: [
            {
                type: numberType.disjunctive,
                word: "mana"
            },
            {
                type: numberType.counting,
                word: "mami"
            },
            {
                type: numberType.ordinal,
                word: "mavu"
            }
        ]
    },
    {
        number: 4,
        data: [
            {
                type: numberType.disjunctive,
                word: "kumi"
            },
            {
                type: numberType.counting,
                word: "kumi"
            },
            {
                type: numberType.ordinal,
                word: "kuvu"
            }
        ]
    },
    {
        number: 5,
        data: [
            {
                type: numberType.disjunctive,
                word: "mia"
            },
            {
                type: numberType.counting,
                word: "mimi"
            },
            {
                type: numberType.ordinal,
                word: "mivu"
            }
        ]
    },
    {
        number: 6,
        data: [
            {
                type: numberType.disjunctive,
                word: "nuka"
            },
            {
                type: numberType.counting,
                word: "numi"
            },
            {
                type: numberType.ordinal,
                word: "nuvu"
            }
        ]
    },
    {
        number: 7,
        data: [
            {
                type: numberType.disjunctive,
                word: "rita"
            },
            {
                type: numberType.counting,
                word: "rimi"
            },
            {
                type: numberType.ordinal,
                word: "rivu"
            }
        ]
    },
    {
        number: 8,
        data: [
            {
                type: numberType.disjunctive,
                word: "buna"
            },
            {
                type: numberType.counting,
                word: "bumi"
            },
            {
                type: numberType.ordinal,
                word: "buvu"
            }
        ]
    },
    {
        number: 9,
        data: [
            {
                type: numberType.disjunctive,
                word: "dami"
            },
            {
                type: numberType.counting,
                word: "dami"
            },
            {
                type: numberType.ordinal,
                word: "davu"
            }
        ]
    },
    {
        number: 10,
        data: [
            {
                type: numberType.disjunctive,
                word: "gi"
            },
            {
                type: numberType.counting,
                word: "gimi"
            },
            {
                type: numberType.ordinal,
                word: "givu"
            }
        ]
    },
    {
        number: 100,
        data: [
            {
                type: numberType.disjunctive,
                word: "ti"
            },
            {
                type: numberType.counting,
                word: "timi"
            },
            {
                type: numberType.ordinal,
                word: "tivu"
            }
        ]
    },
    {
        number: 1000,
        data: [
            {
                type: numberType.disjunctive,
                word: "za"
            },
            {
                type: numberType.counting,
                word: "zami"
            },
            {
                type: numberType.ordinal,
                word: "zavu"
            }
        ]
    },
    // {
    //     number: 10000,
    //     data: [
    //         {
    //             type: numberType.disjunctive,
    //             word: "giza"
    //         },
    //         {
    //             type: numberType.counting,
    //             word: "gizami"
    //         },
    //         {
    //             type: numberType.ordinal,
    //             word: "gizavu"
    //         }
    //     ]
    // },
]

const wordData = [
    {
        word: "lia",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "word",
                    "Language"
                ]
            },
            {
                type: wordType.proper,
                definition: [
                    "The Language"
                ]
            },
            {
                type: wordType.verb,
                definition: [
                    "to speak, literally to make word"
                ]
            }
        ]
    },

    {
        word: "naliana",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "Meeting hall, Auditorium",
                    "News and/or newspaper",
                    "(colloquial) Public speaker, \"speech-giver\""
                ]
            },
            {
                type: wordType.verb,
                definition: [
                    "to present (at a hall or auditorium)",
                    "to give news"
                ]
            },
        ],
        derivedFrom: [
            "lia"
        ]
    },

    {
        word: "lilia",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "a book, dictionary",
                    "a sentence (when referring to Grammar)"
                ]
            },
            {
                type: wordType.verb,
                definition: [
                    "to read (archaic use)"
                ]
            }
        ],
        derivedFrom: [
            "lia"
        ]
    },

    {
        word: "nulia",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "a thought or idea",
                    "world-view, way of thinking",
                    "a person's knowledge"
                ]
            },
            {
                type: wordType.verb,
                definition: [
                    "to think",
                    "to ideate (make new ideas)"
                ]
            }
        ],
        derivedFrom: [
            "lia"
        ]
    },

    {
        word: "liai",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "knowledgeable",
                    "wordy (has a lot of words, i.e. speaks a lot)",
                    "persuasive"
                ]
            }
        ],
        derivedFrom: [
            "lia"
        ]
    },

    {
        word: "nai",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "water"
                ]
            },
            {
                type: wordType.adjective,
                definition: [
                    "wet, like a liquid"
                ]
            }
        ]
    },

    {
        word: "namai",
        data :[
            {
                type: wordType.noun,
                definition: [
                    "lake, river",
                    "(colloquial) a body of water"
                ]
            }
        ],
        derivedFrom: [
            "nai"
        ]
    },

    {
        word: "minai",
        data :[
            {
                type: wordType.noun,
                definition: [
                    "fish (the animal that goes glubglubglub)",
                    "(colloquial) sea creature"
                ]
            }
        ],
        derivedFrom: [
            "nai"
        ]
    },

    {
        word: "truzha",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to run"
                ]
            }
        ]
    },

    {
        word: "banu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "tears"
                ]
            }
        ]
    },
    {
        word: "bamlu",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to cry"
                ]
            }
        ],
        derivedFrom: [
            "banu"
        ]
    },

    {
        word: "afila",
        data: [
            {
                type: wordType.exclamation,
                definition: [
                    "Hello",
                    "general greeting"
                ]
            }
        ],
        derivedFrom: [
            "amizha"
        ]
    },
    {
        word: "pavi",
        data: [
            {
                type: wordType.exclamation,
                definition: [
                    "Goodbye, farewell"
                ]
            }
        ],
        derivedFrom: [
            "pathiva"
        ]
    },
    {
        word: "ayo",
        data: [
            {
                type: wordType.exclamation,
                definition: [
                    "Hi, casual greeting"
                ]
            }
        ],
        derivedFrom: [
            "afila"
        ]
    },
    {
        word: "payo",
        data: [
            {
                type: wordType.exclamation,
                definition: [
                    "Bye, casual farewell"
                ]
            }
        ],
        derivedFrom: [
            "pavi"
        ]
    },

    {
        word: "amizha",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "day"
                ]
            }
        ],
        derivedFrom: [
            "ami"
        ]
    },
    {
        word: "ami",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "light"
                ]
            }
        ]
    },

    {
        word: "pathiva",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "night"
                ]
            }
        ],
        derivedFrom: [
            "pazuva"
        ]
    },
    {
        word: "pazuva",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "darkness"
                ]
            }
        ]
    },

    {
        word: "daba",
        data: [
            {
                type: wordType.exclamation,
                definition: [
                    "no"
                ]
            }
        ]
    },

    {
        word: "gizi",
        data: [
            {
                type: wordType.exclamation,
                definition: [
                    "yes"
                ]
            }
        ]
    },

    {
        word: "lami",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "bright",
                    "much light"
                ]
            }
        ],
        derivedFrom: [
            "ami"
        ]
    },

    {
        word: "zumi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "the sky"
                ]
            }
        ],
        derivedFrom: [
            "ami",
            "pazuva"
        ]
    },

    {
        word: "mura",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "name (referring to a person)"
                ]
            }
        ]
    },

    {
        word: "ki",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to be",
                    "to exist",
                    "(auxillary) is"
                ]
            }
        ]
    },

    {
        word: "tazha",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to want"
                ]
            }
        ]
    },

    {
        word: "dibi",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to need"
                ]
            }
        ]
    },

    {
        word: "kuthi",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to own"
                ]
            }
        ]
    },

    {
        word: "zumaru",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "zebra"
                ]
            }
        ],
        derivedFrom: [
            "maru"
        ]
    },

    {
        word: "katu",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "ugly"
                ]
            }
        ]
    },

    {
        word: "kuri",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to have",
                    "to possess",
                    "to hold"
                ]
            }
        ]
    },

    {
        word: "libu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "happiness",
                    "contentment"
                ]
            },
            {
                type: wordType.adjective,
                definition: [
                    "Happy (as in Happy Birthday)",
                    "Merry (as in Merry Christmas)"
                ]
            }
        ]
    },

    {
        word: "nathi",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to continue",
                    "to persist",
                    "to remain"
                ]
            }
        ]
    },

    {
        word: "badinu",
        data: [
            {
                type: wordType.determiner,
                definition: [
                    "many"
                ]
            }
        ]
    },

    {
        word: "migi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "age"
                ]
            }
        ]
    },

    {
        word: "kara",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "Cat (the animal that goes meow meow)"
                ]
            }
        ]
    },

    {
        word: "taimu",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to resume",
                    "to recommence"
                ]
            }
        ]
    },

    {
        word: "giba",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "place",
                    "location"
                ]
            }
        ]
    },

    {
        word: "bakugi",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "old, aged"
                ]
            }
        ]
    },

    {
        word: "womu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "wonder",
                    "things that make you go \"woah\""
                ]
            }
        ]
    },

    {
        word: "azumi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "dawn"
                ]
            }
        ],
        derivedFrom: [
            "amizha",
            "zumi"
        ]
    },

    {
        word: "pazumi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "dusk"
                ]
            }
        ],
        derivedFrom: [
            "pathiva",
            "zumi"
        ]
    },

    {
        word: "zuru",
        data: [
            {
                type: wordType.proper,
                definition: [
                    "the Sun"
                ]
            }
        ]
    },

    {
        word: "zuva",
        data: [
            {
                type: wordType.proper,
                definition: [
                    "the Moon"
                ]
            }
        ],
        derivedFrom: [
            "zuru"
        ]
    },

    {
        word: "zurami",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "sunlight"
                ]
            }
        ],
        derivedFrom: [
            "zuru",
            "ami"
        ]
    },

    {
        word: "zuvami",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "moonlight"
                ]
            }
        ],
        derivedFrom: [
            "zuva",
            "ami"
        ]
    },

    {
        word: "vuubi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "house"
                ]
            }
        ]
    },

    {
        word: "daimu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "God"
                ]
            }
        ]
    },

    {
        word: "akamuri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "start",
                    "beginning"
                ]
            },
            {
                type: wordType.verb,
                definition: [
                    "to start",
                    "to begin"
                ]
            }
        ],
        derivedFrom: [
            "aka"
        ]
    },

    {
        word: "gina",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "dog (the animal that goes woof)"
                ]
            }
        ]
    },

    {
        word: "maru",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "wild (animal)"
                ]
            }
        ]
    },

    {
        word: "tuki",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "horse"
                ]
            }
        ]
    },

    {
        word: "zuruva",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "Light and Dark",
                    "Sun and Moon",
                    "Ying and Yang"
                ]
            }
        ],
        derivedFrom: [
            "zuru",
            "zuva"
        ]
    },

    {
        word: "mizi",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "well, positive",
                    "healthy"
                ]
            }
        ]
    },

    {
        word: "riuna",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "right (directional)"
                ]
            }
        ]
    },

    {
        word: "lauma",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "left (directional)"
                ]
            }
        ]
    },

    {
        word: "zhakuru",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "year"
                ]
            }
        ]
    },

    {
        word: "mawofu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "appreciation"
                ]
            },
            {
                type: wordType.verb,
                definition: [
                    "to appreciate",
                    "to thank"
                ]
            }
        ],
        derivedFrom: [
            "womu"
        ]
    },

    {
        word: "aiu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "alphabet, syllabary"
                ]
            },
            {
                type: wordType.proper,
                definition: [
                    "The Alphabet"
                ]
            }
        ],
        derivedFrom: [
            "a",
            "i",
            "u"
        ]
    },

    {
        word: "wogi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "good",
                    "to be desired/approved of"
                ]
            },
            {
                type: wordType.adjective,
                definition: [
                    "good, see above"
                ]
            }
        ]
    },

    {
        word: "muda",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "bad",
                    "unpleasant or unwelcome"
                ]
            },
            {
                type: wordType.adjective,
                definition: [
                    "bad, see above"
                ]
            }
        ]
    },

    {
        word: "zhumai",
        data: [
            {
                type: wordType.adverb,
                definition: [
                    "Please, in a polite manner"
                ]
            }
        ]
    },

    {
        word: "zhaunai",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "tea"
                ]
            }
        ],
        derivedFrom: [
            "zhau",
            "nai"
        ]
    },

    {
        word: "tika",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to drink (a liquid)"
                ]
            }
        ]
    },

    {
        word: "fitazu",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to make (basic)"
                ]
            }
        ]
    },

    {
        word: "amami",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to like"
                ]
            }
        ]
    },

    {
        word: "arima",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "Apple (froot) (red) (with stem)"
                ]
            }
        ]
    },

    {
        word: "palaba",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "banana (froot) (yellow) (smile)"
                ]
            }
        ]
    },

    {
        word: "taika",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to eat",
                    "to consume"
                ]
            }
        ]
    },

    {
        word: "zamaki",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to play (an instrument)"
                ]
            }
        ]
    },

    {
        word: "lalali",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "music"
                ]
            }
        ]
    },

    {
        word: "bilivu",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to enjoy"
                ]
            }
        ]
    },

    {
        word: "timida",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "proficient",
                    "good at"
                ]
            }
        ]
    },

    {
        word: "kamu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "face (of a person)"
                ]
            }
        ]
    },

    {
        word: "riami",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "a week",
                    "seven days"
                ]
            }
        ],
        derivedFrom: [
            "rita",
            "amizha"
        ]
    },

    {
        word: "mita",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "a metre (100cm)"
                ]
            }
        ]
    },

    {
        word: "rani",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "fire"
                ]
            }
        ]
    },

    {
        word: "lalau",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "a song"
                ]
            }
        ],
        derivedFrom: [
            "lalali"
        ]
    },

    {
        word: "kiri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "the wind",
                    "air"
                ]
            }
        ]
    },

    {
        word: "zhau",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "leaf"
                ]
            }
        ]
    },

    {
        word: "brau",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "ice element",
                    "nitrogen gas",
                    "liquid nitrogen"
                ]
            }
        ]
    },

    {
        word: "filima",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "metal"
                ]
            },
            {
                type: wordType.adjective,
                definition: [
                    "metallic",
                    "having the properties of metal"
                ]
            }
        ]
    },

    {
        word: "mazhia",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "magic",
                    "magical energy"
                ]
            }
        ]
    },

    {
        word: "mazhi",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "magical",
                    "having magic properties"
                ]
            }
        ],
        derivedFrom: [
            "mazhia"
        ]
    },

    {
        word: "ithida",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "electricity"
                ]
            }
        ]
    },

    {
        word: "zhata",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to stop"
                ]
            }
        ]
    },

    {
        word: "umabri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "human"
                ]
            }
        ]
    },

    {
        word: "buluka",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to look for",
                    "to search for"
                ]
            }
        ]
    },

    {
        word: "takumi",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to find (what you're looking for)"
                ]
            }
        ]
    },

    {
        word: "gizuba",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to go (away)",
                    "to travel"
                ]
            }
        ],
        derivedFrom: [
            "giba"
        ]
    },

    {
        word: "brii",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "cold"
                ]
            }
        ],
        derivedFrom: [
            "brau"
        ]
    },

    {
        word: "rai",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "hot"
                ]
            }
        ],
        derivedFrom: [
            "rani"
        ]
    },

    {
        word: "ramaki",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "bread",
                    "(colloquial) food, sustenance"
                ]
            }
        ],
        derivedFrom: [
            "rai",
            "taika"
        ]
    },

    {
        word: "badimabri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "a gathering (of people)",
                    "a crowd"
                ]
            }
        ],
        derivedFrom: [
            "badinu",
            "umabri"
        ]
    },

    {
        word: "kuadu",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to come (towards self)",
                    "to arrive"
                ]
            }
        ]
    },

    {
        word: "zhamuri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "(the concept of) nature"
                ]
            }
        ]
    },

    {
        word: "gudani",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to expel",
                    "to eject"
                ]
            }
        ]
    },

    {
        word: "amugazi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "surprise",
                    "Quantum Mechanics"
                ]
            }
        ]
    },

    {
        word: "thaduku",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "rock",
                    "stone"
                ]
            }
        ]
    },

    {
        word: "dakui",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "sharp"
                ]
            }
        ]
    },

    {
        word: "draku",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to sharpen",
                    "to hone"
                ]
            }
        ],
        derivedFrom: [
            "dakui"
        ]
    },

    {
        word: "tinaka",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "a drink",
                    "an ingestible liquid",
                    "(colloquial) anything drinkable"
                ]
            }
        ],
        derivedFrom: [
            "tika"
        ]
    },

    {
        word: "zaliku",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "salt",
                    "Sodium Chloride"
                ]
            }
        ]
    },

    {
        word: "zhulau",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "a dance (a series of movements to music)"
                ]
            }
        ]
    },

    {
        word: "zhulai",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to dance"
                ]
            }
        ],
        derivedFrom: [
            "zhulau"
        ]
    },

    {
        word: "mirami",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "a mouse",
                    "a mouse-like animal (a rodent)"
                ]
            }
        ]
    },

    {
        word: "nazuri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "a bird"
                ]
            }
        ]
    },

    {
        word: "anilia",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to understand",
                    "to comprehend"
                ]
            }
        ],
        derivedFrom: [
            "nulia"
        ]
    },

    {
        word: "zhalumi",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to sleep",
                    "to rest"
                ]
            }
        ]
    },

    {
        word: "marizi",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "free, as in freedom"
                ]
            }
        ],
        derivedFrom: [
            "mizi",
            "maru"
        ]
    },

    {
        word: "dalutia",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "knight (serving royalty)"
                ]
            }
        ],
        derivedFrom: [
            "dakui"
        ]
    },

    {
        word: "mimini",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "a baby"
                ]
            }
        ]
    },

    {
        word: "zhiba",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to do"
                ]
            }
        ]
    },

    {
        word: "zhikamu",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "difficult",
                    "hard"
                ]
            }
        ]
    },

    {
        word: "bibami",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "a bunny",
                    "a rabbit"
                ]
            }
        ]
    },

    {
        word: "nulua",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to know"
                ]
            }
        ]
    },

    {
        word: "maitu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "tomato"
                ]
            }
        ]
    },

    {
        word: "tainua",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to remember",
                    "to recall"
                ]
            }
        ]
    },

    {
        word: "athazu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "dead"
                ]
            }
        ]
    },

    {
        word: "kulia",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to write",
                    "to notate"
                ]
            }
        ],
        derivedFrom: [
            "lia"
        ]
    },

    {
        word: "kaziu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "cheese"
                ]
            }
        ]
    },
]