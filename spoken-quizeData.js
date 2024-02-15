const quizData = [
    {
        question: 'How many vowels does English have?',
        answers: [
            { text: '12', correct: false },
            { text: '15', correct: false },
            { text: '20', correct: false },
            { text: '25', correct: true }
        ]
    },
    {
        question: 'How many long vowels are in English?',
        answers: [
            { text: '3', correct: false },
            { text: '4', correct: false },
            { text: '5', correct: false },
            { text: '6', correct: true }
        ]
    },
    {
        question: 'Which of the following is NOT a vowel sound in the English language?',
        answers: [
            { text: '/i/', correct: false },
            { text: '/u/', correct: false },
            { text: '/t/', correct: true },
            { text: '/ɛ/', correct: false }
        ]
    },
    {
        question: 'Which word has a silent letter?',
        answers: [
            { text: 'Phone', correct: false },
            { text: 'Night', correct: false },
            { text: 'Table', correct: false },
            { text: 'Knife', correct: true }

        ]
    },
    {
        question: 'Which syllable in the word "restaurant" is stressed?',
        answers: [
            { text: 'REST-au-rant', correct: false },
            { text: 'res-TAU-rant', correct: true },
            { text: 'rest-au-RANT', correct: false },
            { text: 'RES-tau-rant', correct: false }
        ]
    },
    {
        question: 'What is the phonetic transcription of the word "elephant"?',
        answers: [
            { text: '/ˈɛlɪfənt/', correct: true },
            { text: '/ɪˈlæfənt/', correct: false },
            { text: '/ˈɛlɪfænt/', correct: false },
            { text: '/ɛlɪfənt/', correct: false }
        ]
    },
    {
        question: 'What is the phonetic transcription of the word "receipt"?',
        answers: [
            { text: '/rɪˈsiːpt/', correct: false },
            { text: '/rɪˈsiːt/', correct: true },
            { text: '/rɛsɪt/', correct: false },
            { text: '/rɛsiːpt/', correct: false }
        ]
    },
    {
        question: 'In the word "photography", where is the primary stress?',
        answers: [
            { text: 'photo-GRAPH-y', correct: false },
            { text: 'pho-TO-graphy', correct: false },
            { text: 'PHO-tography', correct: true },
            { text: 'photo-gra-PHY', correct: false }
        ]
    },
    {
        question: 'What are monophthongs also called?',
        answers: [
            { text: 'Complex vowels', correct: false },
            { text: 'Compound vowels', correct: false },
            { text: 'Pure vowels', correct: true },
            { text: 'Mixed vowels', correct: false }
        ]
    },
    {
        question: 'What is a consonant in the English language?',
        answers: [
            { text: 'A speech sound that is articulated with complete or partial closure of the vocal tract.', correct: true },
            { text: 'A speech sound produced without obstruction of the vocal tract.', correct: false },
            { text: 'A vowel sound in English.', correct: false },
            { text: 'A combination of two vowel sounds.', correct: false }
        ]
    },
    {
        question: 'How do consonants differ from vowels?',
        answers: [
            { text: 'Consonants are produced with a complete or partial obstruction of the vocal tract, while vowels are not.', correct: true },
            { text: 'Consonants are always voiced, while vowels are voiceless.', correct: false },
            { text: 'Consonants are always nasal, while vowels are not.', correct: false },
            { text: 'Consonants are always long sounds, while vowels can be short.', correct: false }
        ]
    },
    {
        question: 'What is word stress?',
        answers: [
            { text: 'The rhythm of a language.', correct: false },
            { text: 'The emphasis or prominence placed on a syllable in a word.', correct: true },
            { text: 'The variation in pitch within a word.', correct: false },
            { text: 'The length of a syllable in a word.', correct: false }
        ]
    },

    {
        question: 'What is the phonetic transcription of the word "dog"?',
        answers: [
            { text: '[dɑːɡ]', correct: false },
            { text: '[dɒɡ]', correct: false },
            { text: '[dʊɡ]', correct: false },
            { text: '[dɔːɡ]', correct: true }

        ]
    },
    {
        question: 'How many syllables can typically be stressed in a word?',
        answers: [
            { text: 'Two', correct: false },
            { text: 'One', correct: true },
            { text: 'Three', correct: false },
            { text: 'It varies depending on the word.', correct: false }
        ]
    },

    {
        question: 'What is the phonetic transcription of the word "run"?',
        answers: [
            { text: '[rʊn]', correct: false },
            { text: '[rɪn]', correct: false },
            { text: '[rʌn]', correct: true },
            { text: '[rɑːn]', correct: false }
        ]
    },
    {
        question: 'Which of the following is an example of a stressed syllable?',
        answers: [
            { text: 're-LEASE', correct: false },
            { text: 'CON-tent', correct: true },
            { text: 'pre-PARE', correct: false },
            { text: 'be-LIEVE', correct: false }
        ]
    },

    {
        question: 'What is the phonetic transcription of the word "sun"?',
        answers: [
            { text: '[sɒn]', correct: false },
            { text: '[sʊn]', correct: false },
            { text: '[sən]', correct: false },
            { text: '[sʌn]', correct: true }

        ]
    },
    {
        question: 'What is the phonetic transcription of the word "chair"?',
        answers: [
            { text: '[tʃɛər]', correct: true },
            { text: '[tʃɛr]', correct: false },
            { text: '[ʧeər]', correct: false },
            { text: '[ʧɛr]', correct: false }
        ]
    },
    {
        question: 'In English, which part of speech often determines where the stress falls in a word?',
        answers: [
            { text: 'The part of speech of a word often determines where the stress falls.', correct: true },
            { text: 'The number of syllables in a word determines where the stress falls.', correct: false },
            { text: 'The length of a word determines where the stress falls.', correct: false },
            { text: 'The vowel sounds in a word determine where the stress falls.', correct: false }
        ]
    },

    {
        question: 'What is the phonetic transcription of the word "jump"?',
        answers: [
            { text: '[ʤʌmp]', correct: false },
            { text: '[dʒʊmp]', correct: false },
            { text: '[dʒʌmp]', correct: true },
            { text: '[dʒʌm]', correct: false }
        ]
    },
    {
        question: 'Which word stress pattern is common in English words with more than two syllables?',
        answers: [
            { text: 'Primary stress on the first syllable, secondary stress on the second syllable.', correct: true },
            { text: 'Primary stress on the last syllable.', correct: false },
            { text: 'Primary stress on the second syllable.', correct: false },
            { text: 'Primary stress on the third syllable.', correct: false }
        ]
    },

    {
        question: 'What is the phonetic transcription of the word "book"?',
        answers: [
            { text: '[bʌk]', correct: false },
            { text: '[bɔːk]', correct: false },
            { text: '[bʊk]', correct: true },
            { text: '[buk]', correct: false }
        ]
    },
    {
        question: 'What term describes the pattern of stressed and unstressed syllables in a line of poetry or verse?',
        answers: [
            { text: 'Meter', correct: true },
            { text: 'Rhythm', correct: false },
            { text: 'Rhyme', correct: false },
            { text: 'Cadence', correct: false }
        ]
    },
    {
        question: 'What is the term for the vowel sound made by the letters "a," "e," "i," "o," and "u" in English?',
        answers: [
            { text: 'Consonants', correct: false },
            { text: 'Diphthongs', correct: false },
            { text: 'Vowels', correct: true },
            { text: 'Sibilants', correct: false }
        ]
    },

    {
        question: 'What is the phonetic transcription of the word "pen"?',
        answers: [
            { text: '[pɛn]', correct: true },
            { text: '[pæn]', correct: false },
            { text: '[pɪn]', correct: false },
            { text: '[pʌn]', correct: false }
        ]
    },
    {
        question: 'What is the phonetic transcription of the word "cat"?',
        answers: [
            { text: '[kət]', correct: false },
            { text: '[kæt]', correct: true },
            { text: '[kɪt]', correct: false },
            { text: '[kɑːt]', correct: false }
        ]
    },
    {
        question: 'How is the word "ship" transcribed phonetically?',
        answers: [
            { text: '[ʃɑːp]', correct: false },
            { text: '[sɪp]', correct: false },
            { text: '[ʃip]', correct: false },
            { text: '[ʃɪp]', correct: true }
        ]
    },
    {
        question: 'What is the phonetic transcription of the word "knife"?',
        answers: [
            { text: '[naɪv]', correct: false },
            { text: '[naɪf]', correct: true },
            { text: '[naɪθ]', correct: false },
            { text: '[nif]', correct: false }
        ]
    },
    {
        question: 'How is the word "thought" transcribed phonetically?',
        answers: [
            { text: '[θɔːt]', correct: true },
            { text: '[tɔːt]', correct: false },
            { text: '[θɒt]', correct: false },
            { text: '[θot]', correct: false }
        ]
    },
    {
        question: 'What is the phonetic transcription of the word "judge"?',
        answers: [
            { text: '[dʒʌdʒ]', correct: true },
            { text: '[dʒʌʤ]', correct: false },
            { text: '[dʒɪdʒ]', correct: false },
            { text: '[dʒʌʤɪ]', correct: false }
        ]
    },


]
export default quizData;
