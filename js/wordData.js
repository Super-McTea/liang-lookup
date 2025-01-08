const wordType = {
    noun: "noun",
    proper: "proper",
    verb: "verb",
    adjective: "adjective",
    genitive: "genitive",
    adverb: "adverb",
    exclamation: "exclamation",
    demonstrative: "demonstrative",
    determiner: "determiner",

    prefix: "prefix",
    suffix: "suffix",
    auxillary: "auxillary",

    postposition: "postposition",
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
    "wo", "yo", " ",
    "ba", "bi", "bu",
    "da", "di", "du",
    "ga", "gi", "gu",
    "m", "n", "ng",

    "Mla", "Mli", "Mlu",

    "Fra", "Fri", "Fru",
    "Pra", "Pri", "Pru",
    "Tra", "Tri", "Tru",
    "Kra", "Kri", "Kru",

    "Vra", "Vri", "Vru",
    "Bra", "Bri", "Bru",
    "Dra", "Dri", "Dru",
    "Gra", "Gri", "Gru",
]

const wordData = [
    //#region Single Words
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
                ]
            },
            {
                type: wordType.auxillary,
                definition: [
                    "is"
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
                type: wordType.adjective,
                definition: [
                    "Happy",
                    "Merry (as in Merry Christmas)"
                ]
            },
            {
                type: wordType.noun,
                definition: [
                    "happiness",
                    "contentment"
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
                    "dawn",
                    "morning"
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
                    "dusk",
                    "evening"
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
                    "house",
                    "building"
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
            "aka",
            "mairi",
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
                type: wordType.adverb,
                definition: [
                    "right",
                    "(directional)"
                ]
            }
        ]
    },

    {
        word: "lauma",
        data: [
            {
                type: wordType.adverb,
                definition: [
                    "left",
                    "(directional)"
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
                    "a song",
                    "a melody line",
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
                type: wordType.genitive,
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
        ],
        derivedFrom: [
            "fazha"
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
            },
            {
                type: wordType.genitive,
                definition: [
                    "rocky",
                    "having the properties of rock"
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
        word: "balia",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "knowledge"
                ]
            },
            {
                type: wordType.verb,
                definition: [
                    "to know",
                    "to recognise"
                ]
            }
        ],
        derivedFrom: [
            "bulu",
            "lia"
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
            },
            {
                type: wordType.verb,
                definition: [
                    "to die",
                    "to pass away",
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

    {
        word: "kima",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to take",
                    "to withdraw (money)",
                    "to repossess"
                ]
            }
        ]
    },

    {
        word: "zhanu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "money, currency",
                    "resources (more broadly)"
                ]
            }
        ],
        derivedFrom: [
            "zaliku"
        ]
    },

    {
        word: "mufi",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "soft",
                    "quiet, gentle",
                    "low volume"
                ]
            }
        ]
    },

    {
        word: "auti",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "loud",
                    "noisy, deafening",
                    "high volume",
                ]
            }
        ]
    },

    {
        word: "aranu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "sound",
                ]
            }
        ]
    },

    {
        word: "riini",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to hear",
                    "to listen",
                ]
            }
        ]
    },

    {
        word: "bulu",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to see",
                    "to look (at something)",
                ]
            }
        ]
    },

    {
        word: "namufi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "Piano (instrument)",
                ]
            }
        ],
        derivedFrom: [
            "lana",
            "mufi",
        ]
    },

    {
        word: "lauti",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "Guitar (instrument)",
                ]
            }
        ],
        derivedFrom: [
            "lana",
            "auti",
        ]
    },

    {
        word: "lana",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "string",
                    "thread",
                ]
            }
        ]
    },

    {
        word: "apazu",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to hurt",
                    "to injure",
                    "to maim",
                ]
            }
        ]
    },

    {
        word: "batidi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "collection",
                ]
            },
            {
                type: wordType.verb,
                definition: [
                    "to collect",
                ]
            }
        ],
        derivedFrom: [
            "badinu",
            "tiidi",
        ]
    },

    {
        word: "tiidi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "thing",
                    "unnamed inanimate object",
                ]
            }
        ],
        derivedFrom: [
            "ti",
        ]
    },

    {
        word: "tikuri",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to contain",
                    "to surround"
                ]
            }
        ],
        derivedFrom: [
            "tiidi",
            "kuri",
        ]
    },
    {
        word: "tikuriuka",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "container",
                    `"Thing which contains"`
                ]
            },
        ],
        derivedFrom: [
            "tikuri",
            "uka"
        ]
    },

    {
        word: "ufazu",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to mix",
                    "to combine",
                    "to weave (fabrics)",
                ]
            }
        ],
        derivedFrom: [
            "fitazu",
        ]
    },

    {
        word: "laufana",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "fabric, cloth",
                    "woven material",
                ]
            }
        ],
        derivedFrom: [
            "lana",
            "ufazu",
        ]
    },

    {
        word: "zhuti",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "step, pace",
                    "span",
                ]
            }
        ]
    },

    {
        word: "ramuti",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "time",
                    "literally \"sunlight-step\""
                ]
            }
        ],
        derivedFrom: [
            "zurami",
            "zhuti"
        ]
    },

    {
        word: "vadri",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to walk",
                    "to move (from place to place)"
                ]
            }
        ]
    },

    {
        word: "limau",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "bell",
                    "A metallic object which creates noise",
                    "gong (in some cases)"
                ]
            }
        ],
        derivedFrom: [
            "filima",
            "auti"
        ]
    },

    {
        word: "limaufi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "glockenspiel (instrument)",
                ]
            }
        ],
        derivedFrom: [
            "limau",
            "mufi",
        ]
    },

    {
        word: "fizha",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "dial, numbered display",
                    "a knob you rotate to select a setting",
                ]
            }
        ],
        derivedFrom: [
            "amizha"
        ]
    },

    {
        word: "fizhimau",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "clock",
                    "literally \"bell-dial\""
                ]
            }
        ],
        derivedFrom: [
            "fizha",
            "limau",
        ]
    },

    {
        word: "fizhuru",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "sundial",
                ]
            }
        ],
        derivedFrom: [
            "fizha",
            "zuru"
        ]
    },

    {
        word: "liliaubi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "library, literally \"house of books\" (shortened)",
                ]
            }
        ],
        derivedFrom: [
            "lilia",
            "vuubi"
        ]
    },

    {
        word: "bizali",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to sing"
                ]
            }
        ],
        derivedFrom: [
            "lalali"
        ]
    },

    {
        word: "thiva",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "glass",
                ]
            },
            {
                type: wordType.genitive,
                definition: [
                    "glassy",
                    "having the properties of glass"
                ]
            }
        ]
    },

    {
        word: "ravabu",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to hate",
                    "to dislike",
                ]
            }
        ]
    },

    {
        word: "tamuri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "land",
                ]
            }
        ],
        derivedFrom: [
            "zhamuri"
        ]
    },

    {
        word: "piniri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "wing",
                ]
            }
        ]
    },

    {
        word: "fimavu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "feather",
                ]
            }
        ],
        derivedFrom: [
            "wing"
        ]
    },

    {
        word: "fikumuta",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "pen",
                    "ink-based writing implement"
                ]
            }
        ],
        derivedFrom: [
            "fimavu",
        ]
    },

    {
        word: "tagili",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "tail",
                ]
            }
        ]
    },

    {
        word: "fikugili",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "pencil",
                    "graphite-based writing implement"
                ]
            }
        ],
        derivedFrom: [
            "fikumuta",
            "tagili"
        ]
    },

    {
        word: "iuli",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "colour, hue",
                    "color"
                ]
            }
        ]
    },

    {
        word: "tiba",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to use",
                ]
            }
        ]
    },

    {
        word: "branumuri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "France",
                ]
            }
        ],
        derivedFrom: [
            "brania",
            "tamuri"
        ]
    },

    {
        word: "inagumuri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "England",
                ]
            }
        ],
        derivedFrom: [
            "inagia",
            "tamuri"
        ]
    },

    {
        word: "bibumuri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "Spain",
                ]
            }
        ],
        derivedFrom: [
            "bibami",
            "tamuri"
        ]
    },

    {
        word: "kafua",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "coffee (the drink)",
                ]
            }
        ]
    },

    {
        word: "guizha",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "wood",
                ]
            },
            {
                type: wordType.genitive,
                definition: [
                    "wooden",
                    "having the properties of wood"
                ]
            }
        ]
    },

    {
        word: "dizapi",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "sorry",
                ]
            }
        ]
    },

    {
        word: "daugu",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to lie",
                    "to misinform"
                ]
            }
        ]
    },

    {
        word: "niami",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to learn",
                    "to memorise",
                    "to be taught",
                ]
            }
        ]
    },
    {
        word: "niamiuma",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "learner",
                    "student",
                    "\"one who learns\""
                ]
            }
        ],
        derivedFrom: [
            "niami",
            "uma"
        ]
    },

    {
        word: "kilau",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to teach",
                    "to instruct",
                    "to impart",
                ]
            }
        ]
    },
    {
        word: "kilauma",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "teacher",
                    "instructor",
                    "\"one who teaches\""
                ]
            }
        ],
        derivedFrom: [
            "kilau",
            "uma"
        ]
    },

    {
        word: "niiubi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "school, literally \"building of learning\" (shortened)",
                ]
            }
        ]
    },

    {
        word: "ravabuma",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "hater",
                    "\"one who hates\""
                ]
            }
        ],
        derivedFrom: [
            "ravabu",
            "uma"
        ]
    },

    {
        word: "bilivuma",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "enjoyer",
                    "\"one who likes\""
                ]
            }
        ],
        derivedFrom: [
            "bilivu",
            "uma"
        ]
    },

    {
        word: "zhibalia",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to read",
                    "to interpret",
                ]
            }
        ],
        derivedFrom: [
            "zhiba",
            "lilia"
        ]
    },
    {
        word: "zhibaliauma",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "reader",
                    "\"one who reads\""
                ]
            }
        ],
        derivedFrom: [
            "zhibalia",
            "uma"
        ]
    },

    {
        word: "tibauma",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "user",
                    "\"one who uses\""
                ]
            }
        ],
        derivedFrom: [
            "tiba",
            "uma"
        ]
    },

    {
        word: "pakuli",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "black, the colour",
                ]
            },
            {
                type: wordType.adjective,
                definition: [
                    "dark coloured",
                    "burnt, ashen"
                ]
            }
        ],
        derivedFrom: [
            "pazuva",
            "iuli"
        ]
    },

    {
        word: "kuaimi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "white, the colour",
                ]
            },
            {
                type: wordType.adjective,
                definition: [
                    "light coloured",
                    "bleached"
                ]
            }
        ],
        derivedFrom: [
            "lami",
            "iuli"
        ]
    },

    {
        word: "ari",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "blood",
                ]
            }
        ]
    },
    {
        word: "arudi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "red, the colour",
                ]
            },
            {
                type: wordType.adjective,
                definition: [
                    "blood coloured",
                    "dangerous"
                ]
            }
        ],
        derivedFrom: [
            "ari",
            "iuli"
        ]
    },

    {
        word: "fazha",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "plant, that grows naturally",
                ]
            }
        ],
        derivedFrom: [
            "zhau"
        ]
    },
    {
        word: "fazhuli",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "green, the colour",
                ]
            },
            {
                type: wordType.adjective,
                definition: [
                    "plant coloured",
                    "living, growing"
                ]
            }
        ],
        derivedFrom: [
            "fazha",
            "iuli"
        ]
    },

    
    {
        word: "giami",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to shine"
                ]
            }
        ]
    },
    {
        word: "giluma",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "gold",
                    "a shiny metal"
                ]
            }
        ],
        derivedFrom: [
            "giami",
            "filima"
        ]
    },
    {
        word: "giluli",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "gold coloured",
                    "a deep, shiny yellow"
                ]
            }
        ],
        derivedFrom: [
            "giluma",
            "iuli"
        ]
    },

    {
        word: "zuruli",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "yellow, the colour",
                ]
            },
            {
                type: wordType.adjective,
                definition: [
                    "sun coloured",
                    "aged, or sun damaged"
                ]
            }
        ],
        derivedFrom: [
            "zuru",
            "iuli"
        ]
    },

    {
        word: "duzhau",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "tree",
                    "tall wooden trunk with lateral branches"
                ]
            },
        ]
    },

    {
        word: "kazha",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to sit",
                ]
            },
        ]
    },
    {
        word: "kathizha",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "chair",
                    "seat"
                ]
            },
        ],
        derivedFrom: [
            "kazha"
        ]
    },

    {
        word: "balizu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "skill",
                    "applied knowledge"
                ]
            },
            {
                type: wordType.verb,
                definition: [
                    "to craft",
                    "(to make with skill)"
                ]
            }
        ],
        derivedFrom: [
            "balia",
            "fitazu"
        ]
    },
    {
        word: "balizuma",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "artist",
                    "artisan",
                    "\"one who crafts\""
                ]
            }
        ],
        derivedFrom: [
            "balizu",
            "uma"
        ]
    },

    {
        word: "fitazuma",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "maker",
                    "producer",
                    "\"one who makes\""
                ]
            }
        ],
        derivedFrom: [
            "fitazu",
            "uma"
        ]
    },

    {
        word: "baliguku",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "art",
                    "work made with skill"
                ]
            }
        ],
        derivedFrom: [
            "balizu",
            "aguku"
        ]
    },

    {
        word: "vani",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "new",
                ]
            }
        ]
    },

    {
        word: "azuvani",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "tomorrow",
                    `"new dawn"`,
                ]
            }
        ],
        derivedFrom: [
            "azumi",
            "vani"
        ]
    },

    {
        word: "aguku",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "work",
                    "tasks to be done"
                ]
            }
        ]
    },
    {
        word: "agukuma",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "worker",
                    "employee",
                    "\"one who works\""
                ]
            }
        ],
        derivedFrom: [
            "aguku",
            "uma"
        ]
    },
    
    
    {
        word: "gukari",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "product",
                    "ware (hardware)",
                    "work (artwork)"
                ]
            }
        ],
        derivedFrom: [
            "aguku",
            "kuri",
        ]
    },

    {
        word: "zubu",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "sad",
                    "unhappy"
                ]
            },
            {
                type: wordType.noun,
                definition: [
                    "sadness"
                ]
            }
        ]
    },

    {
        word: "giukuri",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "heavy",
                    "having weight"
                ]
            },
        ],
        derivedFrom: [
            "giukiu",
            "kuri"
        ]
    },

    {
        word: "giukiu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "weight",
                    "relative mass"
                ]
            }
        ]
    },

    {
        word: "nugi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "enough",
                    "sufficient"
                ]
            },
            {
                type: wordType.adverb,
                definition: [
                    "enough",
                    "adequate"
                ]
            }
        ]
    },
    {
        word: "nugiazu",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to satisfy",
                    "to fulfil",
                    "to meet (a standard)"
                ]
            }
        ],
        derivedFrom: [
            "nugi",
            "fitazu"
        ]
    },

    {
        word: "fizhimau fu",
        data: [
            {
                type: wordType.adverb,
                definition: [
                    "o'clock",
                    "on the clock, according to the clock"
                ]
            }
        ]
    },

    {
        word: "kupata",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "fear",
                    "terror"
                ]
            },
            {
                type: wordType.verb,
                definition: [
                    "to fear",
                    "to be afraid"
                ]
            }
        ]
    },

    {
        word: "pakuzu",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "sombre",
                    "somber",
                    "\"under the shade\""
                ]
            }
        ],
        derivedFrom: [
            "pazuva",
            "ikuzu"
        ]
    },

    {
        word: "makiuma",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "mother",
                    "female parent",
                ]
            }
        ],
        derivedFrom: [
            "ki",
            "uma"
        ]
    },

    {
        word: "bakiuma",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "father",
                    "male parent",
                ]
            }
        ],
        derivedFrom: [
            "ki",
            "uma"
        ]
    },

    {
        word: "ibu",
        data: [
            {
                type: wordType.adverb,
                definition: [
                    "up",
                    "upwards direction"
                ]
            }
        ]
    },

    {
        word: "itumi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "hill",
                    "raised land"
                ]
            }
        ],
        derivedFrom: [
            "ibu",
            "tamuri"
        ]
    },

    {
        word: "ukumi",
        data: [
            {
                type: wordType.adverb,
                definition: [
                    "down",
                    "downwards direction"
                ]
            }
        ],
        derivedFrom: [
            "ikuzu",
            "itumi"
        ]
    },

    {
        word: "tamuthi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "property",
                    "owned land"
                ]
            }
        ],
        derivedFrom: [
            "tamuri",
            "kuthi"
        ]
    },

    {
        word: "ilazu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "north",
                    "left of the rising sun"
                ]
            }
        ],
        derivedFrom: [
            "lauma",
            "azumi"
        ]
    },

    {
        word: "zuina",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "south",
                    "right of the rising sun"
                ]
            }
        ],
        derivedFrom: [
            "riuna",
            "azumi"
        ]
    },

    {
        word: "azuki",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "east",
                    "facing the rising sun"
                ]
            }
        ],
        derivedFrom: [
            "kamu",
            "azumi"
        ]
    },

    {
        word: "pulumi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "west",
                    "looking at the setting sun"
                ]
            }
        ],
        derivedFrom: [
            "bulu",
            "pazumi"
        ]
    },

    {
        word: "azumuri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "Japan",
                ]
            }
        ],
        derivedFrom: [
            "azumi",
            "tamuri"
        ]
    },

    {
        word: "zhutimuri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "Korea",
                ]
            }
        ],
        derivedFrom: [
            "zhutiu",
            "tamuri"
        ]
    },

    {
        word: "kafiraki",
        data: [
            {
                type: wordType.adjective,
                definition: [
                    "other",
                ]
            }
        ]
    },

    {
        word: "kaipu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "head",
                ]
            }
        ]
    },

    {
        word: "akatanami",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "number",
                    "digit"
                ]
            }
        ],
        derivedFrom: [
            "nua",
            "aka",
            "futa",
            "mana",
            "kumi"
        ]
    },

    {
        word: "katiu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "finish",
                    "ending"
                ]
            },
            {
                type: wordType.verb,
                definition: [
                    "to finish",
                    "to end"
                ]
            }
        ]
    },

    //#endregion

    //#region Compound Words
    {
        word: "akamuri amizha",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "Birthday, as in \"Happy Birthday\""
                ]
            }
        ],
        derivedFrom: [
            "akamuri",
            "amizha"
        ]
    },
    {
        word: "zhakuru vani",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "New Year, as in \"Happy New Year\"",
                ]
            },
        ],
        derivedFrom: [
            "zhakuru",
            "vani"
        ]
    },
    {
        word: "krizubadibri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "Christmas"
                ]
            }
        ],
        derivedFrom: [
            "krizu",
            "badimabri"
        ]
    },
    {
        word: "tinaka mazhi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "Potion, \"magic drink\""
                ]
            }
        ],
        derivedFrom: [
            "tinaka",
            "mazhi"
        ]
    },

    {
        word: "aguku zhiba",
        data: [
            {
                type: wordType.verb,
                definition: [
                    "to do work",
                ]
            },
        ],
        derivedFrom: [
            "aguku",
            "zhiba"
        ]
    },

    {
        word: "niri amizha",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "today",
                    "this day",
                ]
            },
        ],
        derivedFrom: [
            "niri",
            "amizha"
        ]
    },
    //#endregion
]

const grammarWordData = [
    //#region Grammar Words
    {
        word: "b",
        data: [
            {
                type: wordType.suffix,
                definition: [
                    "Past tense verb suffix"
                ]
            }
        ]
    },
    {
        word: "d",
        data: [
            {
                type: wordType.suffix,
                definition: [
                    "Future tense verb suffix"
                ]
            }
        ]
    },
    {
        word: "g",
        data: [
            {
                type: wordType.suffix,
                definition: [
                    "Present tense verb suffix"
                ]
            }
        ]
    },

    {
        word: "m",
        data: [
            {
                type: wordType.suffix,
                definition: [
                    "Nominalisation suffix",
                    "Subject/Topic Marker"
                ]
            }
        ]
    },
    {
        word: "n",
        data: [
            {
                type: wordType.suffix,
                definition: [
                    "plural noun suffix"
                ]
            }
        ]
    },
    {
        word: "ng",
        data: [
            {
                type: wordType.suffix,
                definition: [
                    "Proper noun suffix"
                ]
            }
        ]
    },

    {
        word: "maba",
        data: [
            {
                type: wordType.auxillary,
                definition: [
                    "not",
                    "Negative Auxillary Verb"
                ]
            }
        ]
    },

    {
        word: "ra",
        data: [
            {
                type: wordType.prefix,
                definition: [
                    "Imperfective modifier verb prefix, for verbs that end in /a/"
                ]
            }
        ]
    },
    {
        word: "pi",
        data: [
            {
                type: wordType.prefix,
                definition: [
                    "Imperfective modifier verb prefix, for verbs that end in /i/"
                ]
            }
        ]
    },
    {
        word: "mu",
        data: [
            {
                type: wordType.prefix,
                definition: [
                    "Imperfective modifier verb prefix, for verbs that end in /u/"
                ]
            }
        ]
    },

    {
        word: "iu",
        data: [
            {
                type: wordType.auxillary,
                definition: [
                    "?",
                    "Interrogative particle"
                ]
            }
        ]
    },

    {
        word: "niri",
        data: [
            {
                type: wordType.demonstrative,
                definition: [
                    "this",
                    "Object closest to the first person",
                ]
            }
        ]
    },
    {
        word: "navu",
        data: [
            {
                type: wordType.demonstrative,
                definition: [
                    "that",
                    "Object closest to the second person",
                ]
            }
        ]
    },
    {
        word: "nuza",
        data: [
            {
                type: wordType.demonstrative,
                definition: [
                    "that over there",
                    "Object closest to the third person",
                ]
            }
        ]
    },

    {
        word: "na",
        data: [
            {
                type: wordType.determiner,
                definition: [
                    "the (thing)",
                    "Definite article",
                ]
            }
        ],
        derivedFrom: [
            "navu"
        ]
    },
    {
        word: "ka",
        data: [
            {
                type: wordType.demonstrative,
                definition: [
                    "a (thing)",
                    "indefinite article",
                ]
            }
        ],
        derivedFrom: [
            "aka"
        ]
    },

    {
        word: "mi",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "(Pronoun) I, me",
                    "First person marker",
                ]
            }
        ]
    },
    {
        word: "zu",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "(Pronoun) You",
                    "Second person marker",
                ]
            }
        ]
    },
    {
        word: "nari",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "(Pronoun) He, him",
                    "Third person marker (male)",
                ]
            }
        ]
    },
    {
        word: "nuri",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "(Pronoun) She, her",
                    "Third person marker (female)",
                ]
            }
        ]
    },
    {
        word: "ti",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "(Pronoun) it (when referring to an object)",
                    "Third person marker (inanimate)",
                ]
            }
        ]
    },

    {
        word: "miadu",
        data: [
            {
                type: wordType.postposition,
                definition: [
                    "to",
                    "going toward (some thing or place)",
                    "(Directional)",
                ]
            }
        ]
    },
    {
        word: "mairi",
        data: [
            {
                type: wordType.postposition,
                definition: [
                    "from",
                    "coming from (some thing or place)",
                    "(Directional)",
                ]
            }
        ]
    },

    {
        word: "izi",
        data: [
            {
                type: wordType.adverb,
                definition: [
                    "also (particle)",
                    "too, as well"
                ]
            }
        ]
    },

    {
        word: "mika",
        data: [
            {
                type: wordType.postposition,
                definition: [
                    "-ation",
                    "nominalisation particle",
                    "noun-verb phrase suffix"
                ]
            }
        ]
    },

    {
        word: "nalu",
        data: [
            {
                type: wordType.suffix,
                definition: [
                    "Name honorific, to show respect to someone with more experience",
                ]
            }
        ]
    },
    {
        word: "zhibi",
        data: [
            {
                type: wordType.suffix,
                definition: [
                    "Name honorific, to acknowledge a person's interest in your experience",
                ]
            }
        ]
    },

    {
        word: "fu",
        data: [
            {
                type: wordType.postposition,
                definition: [
                    "of",
                    "Possessive Marker",
                    "Genitive Marker"
                ]
            }
        ]
    },

    {
        word: "liza",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "what",
                    "Interrogative pronoun, also technically a determiner",
                ]
            }
        ]
    },

    {
        word: "nibi",
        data: [
            {
                type: wordType.demonstrative,
                definition: [
                    "here",
                    "Location closest to the first person",
                ]
            }
        ]
    },
    {
        word: "nabu",
        data: [
            {
                type: wordType.demonstrative,
                definition: [
                    "there",
                    "Location closest to the second person",
                ]
            }
        ]
    },
    {
        word: "nuaba",
        data: [
            {
                type: wordType.demonstrative,
                definition: [
                    "over there",
                    "Location closest to the third person",
                ]
            }
        ]
    },

    {
        word: "liza giba",
        data: [
            {
                type: wordType.adverb,
                definition: [
                    "where, \"what place\"",
                    "Locational interrogative",
                ]
            }
        ]
    },
    {
        word: "liza bulami",
        data: [
            {
                type: wordType.adverb,
                definition: [
                    "how, \"what method\"",
                    "operational interrogative",
                ]
            }
        ]
    },

    {
        word: "tu",
        data: [
            {
                type: wordType.postposition,
                definition: [
                    "and",
                    "accumulative particle"
                ]
            }
        ]
    },

    {
        word: "gaku",
        data: [
            {
                type: wordType.suffix,
                definition: [
                    "-like (water-like, tough-like)",
                    "similie or comparison marker",
                ]
            }
        ]
    },

    {
        word: "piku",
        data: [
            {
                type: wordType.adverb,
                definition: [
                    "very",
                ]
            }
        ]
    },

    {
        word: "kiia",
        data: [
            {
                type: wordType.postposition,
                definition: [
                    "When",
                    "(statement 1), when (statement 2)",
                ]
            }
        ]
    },

    {
        word: "iuku",
        data: [
            {
                type: wordType.adverb,
                definition: [
                    "yet",
                ]
            }
        ]
    },

    {
        word: "bakub",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "(Grammar) Name of the past-tense suffix, /b/",
                ]
            }
        ],
        derivedFrom: [
            "b"
        ]
    },
    {
        word: "tumad",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "(Grammar) Name of the future-tense suffix, /d/",
                ]
            }
        ],
        derivedFrom: [
            "d"
        ]
    },
    {
        word: "nazig",
        data: [
            {
                type: wordType.noun,
                definition: [
                    "(Grammar) Name of the present-tense suffix, /g/",
                ]
            }
        ],
        derivedFrom: [
            "g"
        ]
    },

    {
        word: "dili",
        data: [
            {
                type: wordType.postposition,
                definition: [
                    "but, however",
                    "used to introduce a statement that contrasts with a previous or following statement"
                ]
            }
        ]
    },

    {
        word: "uma",
        data: [
            {
                type: wordType.suffix,
                definition: [
                    "-er",
                    "denotes a person who performs the activity, \"one who [verb]s\"",
                ]
            }
        ]
    },

    {
        word: "uka",
        data: [
            {
                type: wordType.suffix,
                definition: [
                    "-er",
                    "denotes a thing who performs the activity, \"thing which [verb]s\"",
                ]
            }
        ]
    },

    {
        word: "ikuzu",
        data: [
            {
                type: wordType.postposition,
                definition: [
                    "under",
                    "below"
                ]
            }
        ]
    },

    {
        word: "bufani",
        data: [
            {
                type: wordType.postposition,
                definition: [
                    "over",
                    "above"
                ]
            }
        ],
        derivedFrom: [
            "ibu"
        ]
    },



    {
        word: "kafi",
        data: [
            {
                type: wordType.postposition,
                definition: [
                    "or",
                    "conjunctive particle to link alternatives"
                ]
            }
        ],
        derivedFrom: [
            "kafiraki"
        ]
    },
    //#endregion
]