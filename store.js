// This store constant holds the images for the quiz questions
// All questions are in the form "Who is this character?", followed by one of these images
const STORE = {
    questions: [
        {
            image: 'https://github.com/gdreid13/FirstQuizApp/tree/master/img/img1.jpg',
            alt: "A rugged man with a sparse beard and long brown hair.",
            title: "Wanders, but not lost.  Heir to old thrones.",
            options: [
                "Boromir",
                "Aragorn",
                "Gandalf",
                "Barliman Butterbur"
            ],
            answer: "Aragorn"
        },
        {
            image: 'img/img2.jpg',
            alt: "An old man in grey with a long grey beard and a pointy hat.",
            title:  "Booster of shorties.  Good with fireworks.",
            options: [
                "Boromir",
                "Aragorn",
                "Gandalf",
                "Barliman Butterbur"
            ],
            answer: "Gandalf"
        },
        {
            image: 'img/img3.jpg',
            alt: "Blonde male with a quiver of arrows on his back.",
            title: "Excellent shot.  Tireless.  Light on his feet.",
            options: [
                "Haldir",
                "Thranduil",
                "Legolas",
                "Gimli"
            ],
            answer: "Legolas"
        },
        {
            image: 'img/img4.jpg',
            alt: "Short male with a long brown beard and an axe in each hand.",
            title:  "Likes: Smoking, Elvish women.  Dislikes: Orcs, being tossed.",
            options: [
                "Haldir",
                "Thranduil",
                "Legolas",
                "Gimli"
            ],
            answer: "Gimli"
        },
        {
            image: 'img/img5.jpg',
            alt: "Man with light brown hair and a light beard.",
            title: "Proud warrior.  Patriot.  Vulnerable to arrows.",
            options: [
                "Boromir",
                "Aragorn",
                "Gandalf",
                "Barliman Butterbur"
            ],
            answer: "Boromir"
        },
        {
            image: 'img/img6.jpg',
            alt: "Figure dressed in black with a metal helmet covering his entire head.",
            title: "Who forges rings to further their plan for world domination?  This guy.",
            options: [
                "The Witch-king",
                "Sauron",
                "Saruman",
                "Gollum"
            ],
            answer: "Sauron"
        },
        {
            image: 'img/img7.jpg',
            alt: "Male with light brown hair and mustache.",
            title:  "Runs an Inn.  Head like a lumber-room: thing wanted, always buried.",
            options: [
                "Boromir",
                "Aragorn",
                "Gandalf",
                "Barliman Butterbur"
            ],
            answer: "Barliman Butterbur"
        },
        {
            image: 'img/img8.jpg',
            alt: "Old man with long white hair and a long white beard.  Elegant staff in one hand.",
            title:  "Bit of a shut-in.  Fancies crystal balls and rings.  Not a fan of trees.",
            options: [
                "Saruman",
                "Sauron",
                "Gandalf",
                "Barliman Butterbur"
            ],
            answer: "Saruman"
        },
        {
            image: 'img/img9.jpg',
            alt: "Pale male with long brown hair.",
            title:  "Blink and you'll miss him.  Officially cast as Elf Escort, given a name by fans.",
            options: [
                "Figwit",
                "Dimwit",
                "Datewit",
                "Wizwit"
            ],
            answer: "Figwit"
        },
        {
            image: 'img/img10.jpg',
            alt: "Short woman with an odd hat and mean look on her face.",
            title: "Another character seen only briefly.  Bilbo's nasty cousin.  Wants his hobbit-hole.",
            options: [
                "Elanor",
                "Rosie",
                "Otho",
                "Lobelia"
            ],
            answer: "Lobelia"
        },
    ],
    currentQuestion: 0,
    score: 0
}
