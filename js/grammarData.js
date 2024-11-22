const grammarData = [
    {
        heading: "An Overview of <l>liang</l>",
        paragraphs: [

            "<h2>Syntax Details</h2>",

            "As a language, <l>liang</l> is an example of a Subject-Object-Verb language (SOV), which is different to a language like English, which is structured using SVO. For example, while in English a phrase might be written like \"he ate food\", the same phrase in <l>liang</l> would be written as \"<l>narim ramaki taikab</l>\" [he, food ate].",
            "<l>liang</l> is also categorised as a post-positional language, once again the opposite of English (which is prepositional). This means that most of the important word modifiers in a sentence come after the noun phrase that they modify, such as words like \"when\", \"of\", \"and\", \"to\", and \"from\".",
            "Given that so much of <l>liang</l> is the reverse of English, an efficient English translator would work backwards from the end of a sentence and translate it that way.",

            "<h2>Syllable Structure</h2>",

            "<l>liang</l> makes use of a syllabary, meaning that the language is built upon fixed syllables which each have their own symbol, similar to Japanese. Unlike Japanese, it has only 3 vowels; <l>a</l>, <l>i</l>, and <l>u</l>. Every other syllable is built on these three, and the symbol for each syllable ends differently depending on which vowel the syllable ends with. For instance, if a syllable that ends with [a], the last stroke goes up (see <l>fa</l>, <l>ka</l>, and <l>la</l>). Likewise, if a syllable ends with [i], the last stroke goes down (see <l>fi</l>, <l>ki</l>, or <l>li</l>). And finally, if a syllable ends with [u], it loops (see <l>fu</l>, <l>ku</l>, or <l>lu</l>).",
            "The syllables in <l>liang</l> generally follow the same pattern of Consonant-Vowel, with some examples being <l>ka</l>, <l>mi</l>, or <l>ba</l>. There are exceptions to this rule of course:",
            `<ul>
                <li>Vowels: <l>a</l>, <l>i</l>, and <l>u</l> are the three vowels on their own, with no consonants.</li>
                <li>Suffixes: <l>b</l>, <l>d</l>, <l>g</l>, as well as <l>m</l>, <l>n</l>, and <l>ng</l>, are consonants on their own; however, they are not used in any words and have strict grammatical usage only.</li>
                <li>Compound Syllables: Syllables such as <l>tra</l>, <l>bri</l>, or <l>mlu</l> have two consonants to a vowel. These are constructed by including extra diacritics, which will be explained in further detail below.</li>
            </ul>`,
            "<l>Liang</l> features a couple of diacritics, known as the [o] type, the [v] type, and the [L] type (which is considered archaic). The [o] type diacritic converts unvoiced consonants into their voiced counterparts (<l>pa</l> => <l>ba</l>, for example). The [v] type diacritic is primarily used to convert <l>la li lu</l> into <l>ra ri ru</l>, but is also used to insert an \"r\" sound into a syllable, turning it into a compound syllable (<l>ta</l> => <l>tra</l>, for example). The [L] type diacritic was historically used to insert an \"l\" sound into a syllable to create a compound syllable, but that behaviour only exists for <l>ma</l>, <l>mi</l>, and <l>mu</l> now (<l>mla</l>, <l>mli</l>, and <l>mlu</l> respectively). It should be noted that the [o] type and [v] type diacritics are not mutually exclusive; they can be combined and applied onto the same syllable (such as in <l>bra</l>).",
        ]
    },
    {
        heading: "The Grammar Phrases",
        paragraphs: [

            "<h2>Nouns</h2>",

            "Since <l>liang</l> is a post-positional language, a typical noun-phrase in <l>liang</l> goes something like this:",
            "<strong>[ Genitives/Possessives => Demonstratives => Ordinals/Counters => NOUN => Disjunctives => ADJECTIVES => Quantifiers ]</strong>",
            "To put this to an example, <l>mifu kamu katu</l>, where <l>mifu</l> [my] is the Possessive, <l>kamu</l> [face] is the Noun, and <l>katu</l> [ugly] is the Adjective.",

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
            "An example of this would be <l>umabri bulami liai</l>, which translates to [person] [old] [knowledgable] (\"knowledgable old person\"). It happens to be the exact opposite order that English follows, so that may be of help when picking the order of your adjectives.",

            "<h2>Verbs</h2>",

            "Verb phrases follow a similar pattern to nouns, where the important verb modifiers and the adverbs follow the verb. A typical verb phrase in <l>liang</l> would look something like this:",
            "<strong>[ VERB => Main Negative => Auxillary Verb => Aux Negative => ADVERB => Interrogative ]</strong>",
            "In an example, <l>amamig maba iu</l>, where <l>amamig</l> [to like] is the Verb, <l>maba</l> [not] is the Main Negative, and <l>iu</l> [?] is the Interrogative.",

            "Verbs can have three different suffixes: <l>b</l> [past tense], <l>d</l> [future tense], and <l>g</l> [present tense]. If a verb does not end in one of these three, it is probably in either the base form or the imperative form (i.e. causing someone to act). A useful mnemonic to remember the three tenses is: <em>\"B for Before, D for Da future, and G for riGht now\"</em>.",

            "Verbs can also have three prefixes, depending on which vowel the base form ends in. Having no prefixes means that the verb is \"perfective\" (\"I <em>did</em> something\", implies completion), whereas a verb with a prefix is \"imperfective\" (\"I <em>was doing</em> something\", implies the action was interrupted, or incomplete), with the only exception being in present tense. A present-tense verb, when given a prefix, becomes habitual (\"I <em>often do</em> something\", implies repetition or a status quo). The imperfective prefixes for verbs are <l>ra</l> [for verbs that end in <l>a</l>], <l>pi</l> [for verbs that end in <l>i</l>], and <l>mu</l> [for verbs that end in <l>u</l>].",
        ]
    },
    {
        heading: "Miscellaneous Grammar Notes",
        paragraphs: [
            
            "<h2>A note on Genitives</h2>",

            `For those who may not know, the Genitive case is when a noun is used to modify another noun. In English, genitives are most commonly used for showing possession (for example in "David's house", where "David" is the genitive modifier to the noun "house").`,
            `In <l>liang</l>, genitives take on a much larger role and in many cases replaces adjectives as the way to describe a noun, particularly for the type of material, place of origin. For example, instead of saying a "metallic rock", you would say a "rock of metal" (<l>filima fu thaduku</l>), where the adjective "metallic" (which doesn't exist) is replaced by the genitive case "of-metal" (<l>filima fu</l>). Similarly, a "French person" would be translated better as a "person of France" (<l>frafumuri fu umabri</l>).`,
            ``
        ]
    }
]