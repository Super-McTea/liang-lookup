const grammarData = [
    {
        heading: "An Overview of <l 'Liang'>liang</l>",
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

            "<strong>[ Demonstratives => Counters => Genitives/Possessives => NOUN => ADJECTIVES => Disjunctives/Ordinals => Quantifiers ]</strong>",

            "To put this to an example, <l>mifu kamu katu</l>, where <l>mifu</l> [my] is the Possessive, <l>kamu</l> [face] is the Noun, and <l>katu</l> [ugly] is the Adjective.",

            `<l>liang</l> also allows for nouns to be used as though they were adjectives - in that case, they become noun-adjuncts and follow the same rules as adjectives.`,

            "<h2>Adjectives</h2>",

            "Speaking of adjectives, they can be typically applied in any order, however they sound the best in the order below:",
            `<ol>
                <li>Colour</li>
                <li>Shape</li>
                <li>Age</li>
                <li>Size</li>
                <li>Opinion</li>
            </ol>`,
            `An example of this would be <l>umabri bulami liai</l>, which translates to [person] [old] [knowledgable] (\"knowledgable old person\"). It happens to be the exact opposite order that English follows, so that may be of help when picking the order of your adjectives. If the order of adjectives deviates from this, it is usually to bring emphasis to the first adjective in the list or whichever is considered "out of place".`,
            `The astute of you may have noticed that "Purpose", "Material", and "Origin" are missing from this list - that is because they are covered by the genitive case (see below).`,

            `Another cool thing about adjectives is that they also function as adverbs when placed after a verb! Unlike in English, where you have to add a suffix like -ly, in <l>liang</l> you can use an adjective directly to modify a verb. An example of this would be <l>na zurum giamig lami</l> [The sun is shining brightly], where the adjective <l>lami</l> [bright] is being used to modify the verb <l>giami</l> [to shine].`,

            "<h2>Verbs</h2>",

            "Verb phrases follow a similar pattern to nouns, where the important verb modifiers and the adverbs follow the verb. A typical verb phrase in <l>liang</l> would look something like this:",
            "<strong>[ VERB => Main Negative => Auxillary Verb => Aux Negative => ADVERB => Interrogative ]</strong>",
            "In an example, <l>amamig maba iu</l>, where <l>amamig</l> [to like] is the Verb, <l>maba</l> [not] is the Main Negative, and <l>iu</l> [?] is the Interrogative.",

            `<strong class="head">Verb Forms<strong>`,

            "Verbs can have three different suffixes: <l>b</l> [past tense], <l>d</l> [future tense], and <l>g</l> [present tense]. If a verb does not end in one of these three, it is probably in either the base form or the imperative form (i.e. causing someone to act). A useful mnemonic to remember the three tenses is: <em>\"B for Before, D for Da future, and G for riGht now\"</em>.",

            `Verbs can also have three prefixes, depending on which vowel the base form ends in. Having no prefixes means that the verb is in the \"Unmarked\" form (\"I <em>did</em> something\", implies completion), whereas a verb with a prefix is in the \"Marked\" form (\"I <em>was doing</em> something\", implies the action was interrupted, or incomplete). A present-tense verb, when given a prefix, becomes habitual (\"I <em>often do</em> something\", implies repetition or a status quo). See the table below for more details:`,
            `<table>
                <tr>
                    <th> </th>
                    <th>Past</th>
                    <th>Present</th>
                    <th>Future</th>
                </tr>
                <tr>
                    <th>Unmarked</th>
                    <td>
                        "did"<br>
                        (Implies completion, with a specific start and end time)
                    </td>
                    <td>
                        "am doing"<br>
                        (Implies continuity, is currently happening)
                    </td>
                    <td>
                        "will do"<br>
                        (Implies intent, references a specific set time)
                    </td>
                </tr>
                <tr>
                    <th>Marked</th>
                    <td>
                        "was doing"<br>
                        (Non-specific timeframe, does not imply completion)
                    </td>
                    <td>
                        "(often) does"<br>
                        (habitually, but not necessarily right now)
                    </td>
                    <td>
                        "Will be doing"<br>
                        (Implies intent, but non-specific time in the middle of the action being performed)
                    </td>
                </tr>
            </table>`,
            `The prefixes for \"Marked\" verbs are <l>ra</l> [for verbs that end in <l>a</l>], <l>pi</l> [for verbs that end in <l>i</l>], and <l>mu</l> [for verbs that end in <l>u</l>].`,
            `After the tense suffix, you can also add the suffix "<l>pa</l>" to mark the verb as imperative or as a command. This only applies to verbs in the unmarked present-tense form, though! For example, <l>zhibagpa maba</l> means "do not".`,
            `Similar to <l>pa</l>, adding "<l>ru</l>" to the end of a verb converts it to the infinitive form, "to [verb]" in English. This effectively turns the verb phrase into an adverb, most often used to add a reason for some action happening. For example, "<l>mim libu kid (gizubag ru)</l>" means "I will be happy to go", where <l>gizubag ru</l> [to go] is modifying the verb <l>kid</l> [will be], specifying the reason that I will be happy <em>(because I will be going)</em>.`,

            `<strong class="head">Auxillary Verbs</strong>`,

            `Auxillary verbs are verbs which are used to modify the main verbs, usually to encode grammatical mood. An example of an auxillary verb might be <l>kutriba</l> [should], which indicates an obligation or desire ("<l>mim zhalumigpa kutriba</l>" [I should sleep]).`,

            `<strong class="head">Adverbs</strong>`,

            `Adverbs do not have a specific order like adjectives do, but are most often placed in order of emphasis and ALWAYS GO AFTER THE VERB THEY MODIFY, with the only exceptions being adverbs related to time like "today" and "tomorrow". A sentence like "Yesterday, she hopefully looked around slowly" would translate to something closer to <l>bakugiizha nurim rabulukab wogivuri vita katigati</l>, literally [yesterday she was-looking hopefully around slowly] where "hopefully" is the adverb with the most emphasis in the sentence, and "yesterday" (being time-related) is allowed to remain at the start of the sentence.`
        ]
    },
    {
        heading: "Miscellaneous Grammar Notes",
        paragraphs: [
            
            "<h2>A note on Genitives</h2>",

            `For those who may not know, the Genitive case is when a noun is used to modify another noun. In English, genitives are most commonly used for showing possession (for example in "David's house", where "David" is the genitive modifier to the noun "house").`,
            `In <l>liang</l>, genitives take on a much larger role and in many cases replaces adjectives as the way to describe a noun, particularly for the type of material, place of origin, or the object's purpose. For example, instead of saying a "metallic rock", you would say a "rock of metal" or an "of-metal rock" (<l>filima fu thaduku</l>), where the adjective "metallic" (which doesn't exist) is replaced by the genitive case "of-metal" (<l>filima fu</l>). Similarly, a "French person" would be translated better as a "person of France" or "of-France person" (<l>branumuri fu umabri</l>).`,
            
            `<h2>Loan Words</h2>`,
            `When dealing with loan words, they are usually written in square brackets <l>[ ]</l>, and are transliterated into a specialised form of the <l>liang</l> script which includes glyphs for consonants with no attached vowel. These were developed at a later date after the <l>liang</l> people made communications with other people groups with other languages, and they specifically realised they needed a way to write consonant clusters due to contact with the consonant-heavy languages from <l>niiubi kafiraki</l>. When romanising <l>liang</l>, the script itself is usually written in lowercase while loan words are written in [ALL CAPS].`,
            `Foreign names are also written in this script, transliterated so as to preserve the pronunciation and not necessarily spelling, with <l>ng</l> added to the end as names are treated as proper nouns eg. <l 'mim [McTea]ng kig'>mim [maKtii]ng kig</l>.`,
            `The consonant glyphs: <l>[L.M.F.TH.Z.P.T.K.R.N.V.ZH.B.D.G]</l>`
        ]
    }
]