const grammarData = [
    {
        heading: "An Overview of <liang>liang</liang>",
        paragraphs: [

            "<h2>Syntax Details</h2>",
            "As a language, <liang>liang</liang> is an example of a Subject-Object-Verb language (SOV), which is different to a language like English, which is structured using SVO. For example, while in English a phrase might be written like \"he ate food\", the same phrase in <liang>liang</liang> would be written as \"<liang>narim ramaki taikab</liang>\" [he, food ate].",
            "<liang>liang</liang> is also categorised as a post-positional language, once again the opposite of English (which is prepositional). This means that most of the important word modifiers in a sentence come after the noun phrase that they modify, such as words like \"when\", \"of\", \"and\", \"to\", and \"from\".",
            "Given that so much of <liang>liang</liang> is the reverse of English, an efficient English translator would work backwards from the end of a sentence and translate it that way.",

            "<h2>Syllable Structure</h2>",
            "<liang>liang</liang> makes use of a syllabary, meaning that the language is built upon fixed syllables which each have their own symbol, similar to Japanese. Unlike Japanese, it has only 3 vowels; <liang>a</liang>, <liang>i</liang>, and <liang>u</liang>. Every other syllable is built on these three, and the symbol for each syllable ends differently depending on which vowel the syllable ends with. For instance, if a syllable that ends with [a], the last stroke goes up (see <liang>fa</liang>, <liang>ka</liang>, and <liang>la</liang>). Likewise, if a syllable ends with [i], the last stroke goes down (see <liang>fi</liang>, <liang>ki</liang>, or <liang>li</liang>). And finally, if a syllable ends with [u], it loops (see <liang>fu</liang>, <liang>ku</liang>, or <liang>lu</liang>).",
            "The syllables in <liang>liang</liang> generally follow the same pattern of Consonant-Vowel, with some examples being <liang>ka</liang>, <liang>mi</liang>, or <liang>ba</liang>. There are exceptions to this rule of course:",
            `<ul>
                <li>Vowels: <liang>a</liang>, <liang>i</liang>, and <liang>u</liang> are the three vowels on their own, with no consonants.</li>
                <li>Suffixes: <liang>b</liang>, <liang>d</liang>, <liang>g</liang>, as well as <liang>m</liang>, <liang>n</liang>, and <liang>ng</liang>, are consonants on their own; however, they are not used in any words and have strict grammatical usage only.</li>
                <li>Compound Syllables: Syllables such as <liang>tra</liang>, <liang>bri</liang>, or <liang>mlu</liang> have two consonants to a vowel. These are constructed by including extra diacritics, which will be explained in further detail below.</li>
            </ul>`,
            "<liang>Liang</liang> features a couple of diacritics, known as the [o] type, the [v] type, and the [L] type (which is considered archaic). The [o] type diacritic converts unvoiced consonants into their voiced counterparts (<liang>pa</liang> => <liang>ba</liang>, for example). The [v] type diacritic is primarily used to convert <liang>la li lu</liang> into <liang>ra ri ru</liang>, but is also used to insert an \"r\" sound into a syllable, turning it into a compound syllable (<liang>ta</liang> => <liang>tra</liang>, for example). The [L] type diacritic was historically used to insert an \"l\" sound into a syllable to create a compound syllable, but that behaviour only exists for <liang>ma</liang>, <liang>mi</liang>, and <liang>mu</liang> now (<liang>mla</liang>, <liang>mli</liang>, and <liang>mlu</liang> respectively). It should be noted that the [o] type and [v] type diacritics are not mutually exclusive; they can be combined and applied onto the same syllable (such as in <liang>bra</liang>).",
        ]
    },
    {
        heading: "The Grammar Phrases",
        paragraphs: [

            "<h2>Nouns</h2>",
            "Since <liang>liang</liang> is a post-positional language, a typical noun-phrase in <liang>liang</liang> goes something like this:",
            "<strong>[ Genitives/Possessives => Demonstratives => Ordinals/Counters => NOUN => Disjunctives => ADJECTIVES => Quantifiers ]</strong>",
            "To put this to an example, <liang>mifu kamu katu</liang>, where <liang>mifu</liang> [my] is the Possessive, <liang>kamu</liang> [face] is the Noun, and <liang>katu</liang> [ugly] is the Adjective.",

            "<h2>Adjectives</h2>",
            "Speaking of adjectives, they can technically be applied in any order, however they typically work and sound the best in this order:",
            `<ol>
                <li>Purpose</li>
                <li>Material</li>
                <li>Origin</li>
                <li>Colour</li>
                <li>Shape</li>
                <li>Age</li>
                <li>Size</li>
                <li>Opinion</li>
            </ol>`,
            "An example of this would be <liang>umabri bulami liai</liang>, which translates to [person] [old] [knowledgable] (\"knowledgable old person\"). It happens to be the exact opposite order that English follows, so that may be of help when picking the order of your adjectives.",

            "<h2>Verbs</h2>",
            "Verb phrases follow a similar pattern to nouns, where the important verb modifiers and the adverbs follow the verb. A typical verb phrase in <liang>liang</liang> would look something like this:",
            "<strong>[ VERB => Main Negative => Auxillary Verb => Aux Negative => ADVERB => Interrogative ]</strong>",
            "In an example, <liang>amamig maba iu</liang>, where <liang>amamig</liang> [to like] is the Verb, <liang>maba</liang> [not] is the Main Negative, and <liang>iu</liang> [?] is the Interrogative.",

            "Verbs can have three different suffixes: <liang>b</liang> [past tense], <liang>d</liang> [future tense], and <liang>g</liang> [present tense]. If a verb does not end in one of these three, it is probably in either the base form or the imperative form (i.e. causing someone to act). A useful mnemonic to remember the three tenses is: <em>\"B for Before, D for Da future, and G for riGht now\"</em>.",

            "Verbs can also have three prefixes, depending on which vowel the base form ends in. Having no prefixes means that the verb is \"perfective\" (\"I <em>did</em> something\", implies completion), whereas a verb with a prefix is \"imperfective\" (\"I <em>was doing</em> something\", implies the action was interrupted, or incomplete), with the only exception being in present tense. A present-tense verb, when given a prefix, becomes habitual (\"I <em>often do</em> something\", implies repetition or a status quo). The imperfective prefixes for verbs are <liang>ra</liang> [for verbs that end in <liang>a</liang>], <liang>pi</liang> [for verbs that end in <liang>i</liang>], and <liang>mu</liang> [for verbs that end in <liang>u</liang>].",
        ]
    }
]