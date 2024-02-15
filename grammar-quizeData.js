const quizData = [
    {
        question: 'Which sentence uses the present perfect tense correctly?',
        answers: [
            { text: 'He has went to the store yesterday.', correct: false },
            { text: 'She have seen that movie before.', correct: false },
            { text: 'They have finished their homework.', correct: true },
            { text: 'I has eaten sushi last night.', correct: false }
        ]
    },
    {
        question: 'Identify the sentence with the correct past progressive tense:',
        answers: [
            { text: 'She was cooking dinner when he arrives.', correct: false },
            { text: 'They is walking to the park.', correct: false },
            { text: 'While they were playing, it starts to rain.', correct: false },
            { text: 'He was reading a book when the phone rang.', correct: true }
        ]
    },
    {
        question: 'What is the correct form of the verb in this sentence: "Yesterday, they ____ for hours."',
        answers: [
            { text: 'Talked', correct: true },
            { text: 'Talk', correct: false },
            { text: 'Talking', correct: false },
            { text: 'Talks', correct: false }
        ]
    },
    {
        question: 'Which of the following is an adverb?',
        answers: [
            { text: 'Happy', correct: false },
            { text: 'Slowly', correct: true },
            { text: 'Table', correct: false },
            { text: 'Yellow', correct: false }
        ]
    },
    {
        question: 'Identify the adjective in the sentence: "The beautiful flowers bloomed in the garden."',
        answers: [
            { text: 'Beautiful', correct: true },
            { text: 'Flowers', correct: false },
            { text: 'Bloomed', correct: false },
            { text: 'Garden', correct: false }
        ]
    },
    {
        question: 'What is the plural form of the word "child"?',
        answers: [
            { text: 'Childs', correct: false },
            { text: 'Childes', correct: false },
            { text: 'Children', correct: true },
            { text: 'Childerns', correct: false }
        ]
    },
    {
        question: 'Identify the noun in the sentence: "The cat chased the mouse."',
        answers: [
            { text: 'Cat', correct: true },
            { text: 'Chased', correct: false },
            { text: 'Mouse', correct: false },
            { text: 'The', correct: false }
        ]
    },
    {
        question: 'Which sentence uses the past perfect tense correctly?',
        answers: [
            { text: 'She had went to the store yesterday.', correct: false },
            { text: 'He have finished his homework.', correct: false },
            { text: 'They had already eaten dinner when I arrived.', correct: true },
            { text: 'I has seen that movie before.', correct: false }
        ]
    },
    {
        question: 'Identify the adverb in the sentence: "She sings beautifully."',
        answers: [
            { text: 'She', correct: false },
            { text: 'Sings', correct: false },
            { text: 'Beautifully', correct: true },
            { text: 'Sings beautifully', correct: false }
        ]
    },
    {
        question: 'What is the comparative form of the adjective "big"?',
        answers: [
            { text: 'Bigger', correct: true },
            { text: 'Biggest', correct: false },
            { text: 'Bigly', correct: false },
            { text: 'Bigeer', correct: false }
        ]
    },
    {
        question: 'What is the past tense of the verb "swim"?',
        answers: [
            { text: 'Swam', correct: true },
            { text: 'Swum', correct: false },
            { text: 'Swem', correct: false },
            { text: 'Swimmed', correct: false }
        ]
    },
    {
        question: 'Identify the sentence with a dangling modifier:',
        answers: [
            { text: 'After studying for hours, the test was aced.', correct: false },
            { text: 'Walking down the street, the trees looked beautiful.', correct: true },
            { text: 'She found her lost keys under the couch.', correct: false },
            { text: 'To reach the summit, he climbed the mountain.', correct: false }
        ]
    },
    {
        question: 'What is the correct form of the verb in this sentence: "She ____ the marathon last year."',
        answers: [
            { text: 'Run', correct: false },
            { text: 'Runs', correct: false },
            { text: 'Ran', correct: true },
            { text: 'Running', correct: false }
        ]
    },
    {
        question: 'Which of the following is a conjunction?',
        answers: [
            { text: 'Cat', correct: false },
            { text: 'And', correct: true },
            { text: 'Run', correct: false },
            { text: 'House', correct: false }
        ]
    },
    {
        question: 'What is the past participle form of the verb "eat"?',
        answers: [
            { text: 'Eated', correct: false },
            { text: 'Ate', correct: false },
            { text: 'Eaten', correct: true },
            { text: 'Eat', correct: false }
        ]
    },
    {
        question: 'Which sentence demonstrates proper use of the subjunctive mood?',
        answers: [
            { text: 'If he was taller, he would reach the top shelf easily.', correct: false },
            { text: 'I wish I was a better singer.', correct: false },
            { text: 'If I were you, I would apologize.', correct: true },
            { text: 'He acts as though he is the boss.', correct: false }
        ]
    },
    {
        question: 'What is the superlative form of the adjective "good"?',
        answers: [
            { text: 'Better', correct: false },
            { text: 'Best', correct: true },
            { text: 'Goodest', correct: false },
            { text: 'Goods', correct: false }
        ]
    },
    {
        question: 'Which of the following is a preposition?',
        answers: [
            { text: 'Walk', correct: false },
            { text: 'Under', correct: true },
            { text: 'Sleep', correct: false },
            { text: 'Fast', correct: false }
        ]
    },
    {
        question: 'What is the present continuous form of the verb "to read"?',
        answers: [
            { text: 'Reading', correct: true },
            { text: 'Reads', correct: false },
            { text: 'Read', correct: false },
            { text: 'Readding', correct: false }
        ]
    },
    {
        question: 'Which of the following is an example of a gerund?',
        answers: [
            { text: 'Running', correct: true },
            { text: 'Runned', correct: false },
            { text: 'Runs', correct: false },
            { text: 'Ran', correct: false }
        ]
    },
    {
        question: 'What is a synonym for the word "happy"?',
        answers: [
            { text: 'Sad', correct: false },
            { text: 'Joyful', correct: true },
            { text: 'Angry', correct: false },
            { text: 'Miserable', correct: false }
        ]
    },
    {
        question: 'What is the opposite of the word "brave"?',
        answers: [
            { text: 'Fearless', correct: false },
            { text: 'Cowardly', correct: true },
            { text: 'Bold', correct: false },
            { text: 'Courageous', correct: false }
        ]
    },
    {
        question: 'What is a synonym for the word "beautiful"?',
        answers: [
            { text: 'Ugly', correct: false },
            { text: 'Gorgeous', correct: true },
            { text: 'Pretty', correct: false },
            { text: 'Attractive', correct: false }
        ]
    },
    {
        question: 'What is the plural form of the word "mouse"?',
        answers: [
            { text: 'Mouses', correct: false },
            { text: 'Mice', correct: true },
            { text: 'Micees', correct: false },
            { text: 'Mousen', correct: false }
        ]
    },
    {
        question: 'What is a synonym for the word "happy"?',
        answers: [
            { text: 'Sad', correct: false },
            { text: 'Joyful', correct: true },
            { text: 'Angry', correct: false },
            { text: 'Miserable', correct: false }
        ]
    },
    {
        question: 'Who wrote the novel "To Kill a Mockingbird"?',
        answers: [
            { text: 'Harper Lee', correct: true },
            { text: 'John Steinbeck', correct: false },
            { text: 'F. Scott Fitzgerald', correct: false },
            { text: 'J.D. Salinger', correct: false }
        ]
    },
    {
        question: 'What is the plural form of the word "ox"?',
        answers: [
            { text: 'Oxes', correct: false },
            { text: 'Oxen', correct: true },
            { text: 'Oxxen', correct: false },
            { text: 'Oxs', correct: false }
        ]
    },
    {
        question: 'Identify the adverb in the sentence: "He ran quickly to catch the bus."',
        answers: [
            { text: 'He', correct: false },
            { text: 'Ran', correct: false },
            { text: 'Quickly', correct: true },
            { text: 'Bus', correct: false }
        ]
    },
    {
        question: 'What is the past tense of the verb "to write"?',
        answers: [
            { text: 'Writed', correct: false },
            { text: 'Wrote', correct: true },
            { text: 'Written', correct: false },
            { text: 'Writ', correct: false }
        ]
    },
    {
        question: 'Which of the following is a noun?',
        answers: [
            { text: 'Slowly', correct: false },
            { text: 'Walk', correct: true },
            { text: 'Beautiful', correct: false },
            { text: 'Cry', correct: false }
        ]
    }
];

export default quizData;
