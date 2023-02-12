const productArray = [
    {
        title: 'The Boy, The Mole, The Fox and The Horse',
        author:  'Charlie Mackesy',
        isbn: '9781529105100',
        image: 'https://imgs.search.brave.com/4gcQuJIKupPsqRTQTdrKoSbkRaptSWwvj8hMQzaT6VQ/rs:fit:371:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/NGM2T1lETHFVT1pp/V3JpTDZVS0t3SGFK/ZCZwaWQ9QXBp',
        price: 8.49,
        pages: 128,
        description: "Enter the world of Charlie's four unlikely friends, discover their story and their most important life lessons."
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        isbn: '9781847941831',
        image: 'https://imgs.search.brave.com/npNTbvU4ZuNa7V4vKOGXX6qlQnzliW7zH4Kdj0XfvKY/rs:fit:661:1024:1/g:ce/aHR0cHM6Ly9wbGF5/dm9sdXRpb25ocS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMTIvQXRvbWlj/LUhhYml0cy5qcGc',
        price: 9.00,
        pages: 320,
        description: "People think that when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions: doing two push-ups a day, waking up five minutes early, or holding a single short phone call"
    },
    {
        title: 'The Creative Act: A Way of Being',
        author:  'Rick Rubin',
        isbn: '9781838858636',
        image: 'https://imgs.search.brave.com/E_QQ2kUKK6o310QpTKqi_eXNvlMRhSN5XLVjqZTdwJw/rs:fit:275:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/QlpXOGx5OEdrN3lh/TnF5OXdZM0NnQUFB/QSZwaWQ9QXBp',
        price: 20.00,
        pages: 432,
        description: "Many famed music producers are known for a particular sound that has its day and then ages out. Rick Rubin has made a practice of helping people transcend their self-imposed expectations in order to reconnect with a state of innocence from which the surprising becomes inevitable."
    },
    {
        title: 'Winning Chess Tactics, revised edition (Winning Chess Series)',
        author:  'Yasser Seirawan',
        isbn: '9781857443868',
        image: 'https://imgs.search.brave.com/cBPVsQGxfP7PPnPSriMuejONjtVvdrRPotxXwl7WowI/rs:fit:945:1200:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAw/ODAvOTI4NC80MDk0/L3Byb2R1Y3RzL2Fj/OTFmNjhhZDE2YTI2/NzAwOGFjN2U0MTkx/Yjc3Zjk2XzUzMHhA/MnguanBnP3Y9MTU0/MjExNTU5NQ',
        price: 12.37,
        pages: 242,
        description: "Learn sure-fire tactics and combinations from one of the worlds top chess players. Attack? Defend? Swap pieces? Tactics are the watchdogs of strategy that take advantage of short-term opportunities to trap or ambush your opponent and quite possiblychange the course of a game in a single move. Why play in a fog, only hoping that your opponent will blunder when International Grandmaster Yasser Seirawan can show you how to put the tactics of the worlds chess legends to work for you."
    },
    {
        title: 'Why Has Nobody Told Me This Before?',
        author:  'Dr Julie Smith',
        isbn: '9780241529713',
        image: 'https://imgs.search.brave.com/rVEM1RhEUYUhxHDrwixDylH6lQudnwtc2NL2QHGiz1U/rs:fit:389:600:1/g:ce/aHR0cHM6Ly93d3cu/YWxsYm9va3MuaWUv/Y3VzdG9tL3B1Ymxp/Yy9pbWFnZXMvLmdh/bGxlcnk0eDNfbm9m/aXQvNDU4Mi0wMDIt/MDAyLS5qcGc',
        price: 8.00,
        pages: 368,
        description: "Drawing on years of experience as a clinical psychologist, online sensation Dr Julie Smith shares all the skills you need to get through life's ups and downs. Filled with secrets from a therapist's toolkit, this is a must-have handbook for optimising your mental health. Dr Julie's simple but expert advice and powerful coping techniques will help you stay resilient no matter what life throws your way."
    },
    {
        title: 'How to make the best coffee at home',
        author:  'James Hoffmann',
        isbn: '9781784727246',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41oEMTAZS8L._SY291_BO1,204,203,200_QL40_ML2_.jpg',
        price: 8.49,
        pages: 224,
        description: "We all expect to be able to buy an excellent cup of coffee from the many brilliant coffee shops available. But what about the coffee we make at home? Shouldn't that be just as good?"
    },
    {
        title: 'Food for Life: The New Science of Eating Well',
        author:  'Tim Spector',
        isbn: '9781787330498',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41Z-kTZrdML._SY291_BO1,204,203,200_QL40_ML2_.jpg',
        price: 10.00,
        pages: 528,
        description: "Tim Spector has pioneered a new approach to nutrition, encouraging us to forget misleading calorie counts and nutritional breakdowns. In Food for Life he draws on over a decade of cutting-edge scientific research, along with his own personal insights, to deliver a new and comprehensive approach to what we should all know about food today."
    },
    {
        title: 'Harry Potter and the Order of the Phoenix',
        author:  'J. K. Rowling',
        isbn: '9781408855690',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51nMvNtkYlL.jpg',
        price: 8.27,
        pages: 816,
        description: "After the Dementors' attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him. There are many who deny the Dark Lord's return, but Harry is not alone: a secret order gathers at Grimmauld Place to fight against the Dark forces. Harry must allow Professor Snape to teach him how to protect himself from Voldemort's savage assaults on his mind. But they are growing stronger by the day and Harry is running out of time. "
    },
    {
        title: 'Harry Potter and the Deathly Hallows',
        author:  'J. K. Rowling',
        isbn: '9781838858636',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91EnNfYprGL._AC_UY218_.jpg',
        price: 8.27,
        pages: 640,
        description: "The seventh and final adventure in the spellbinding Harry Potter saga - the series that changed the world of books forever As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is now broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves, and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy."
    },
    {
        title: 'Manifest',
        author:  ' Roxie Nafousi',
        isbn: ' 9780241539590',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81e4AkqEGKL._AC_UY218_.jpg',
        price: 13.00,
        pages: 192,
        description: "MANIFEST is the essential guide for anyone and everyone wanting to feel more empowered in their lives. Self-development coach and 'Queen of Manifesting' Roxie Nafousi will show you how in just seven simple steps you can understand the true art of manifestation and learn how to create the life you have always dreamed of."
    }
];

export default productArray;