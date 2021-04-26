import { book, author, FLAGS, ATOMS } from "../data";

interface BOOKS {
    "book-id": book
}

interface AUTHORS {
    "author-id": author
}

export const AUTHORS = {

    "randall-holcombe": {
        name: [[0, "Randall"], [0, "Gregory"], [0, "Holcombe"]],
        books: []
    },

    "stephen-kinsella": {
        name: [[0, "Norman"], [0, "Stephan"], [0, "Kinsella"]]
    },

    "anthony-de-jasay": {
        name: [[0, "Anthony"], [ATOMS.ATOM_IS_MIDFIX, "de"], [0, "Jasay"]]
    },

    "lew-rockwell": {
        name: [[0, "Llewellyn"], [0, "Harrison"], [0, "Rockwell"], [ATOMS.ATOM_IS_POSTFIX, "Jr."]]
    },

    "sek-3": {
        name: [[0, "Samuel"], [0, "Edward"], [0, "Konkin"], [ATOMS.ATOM_IS_POSTFIX, "III"]]
    },

    "edward-stringham": {
        name: [[0, "Edward"], [0, "Peter"], [0, "Stringham"]]
    },

    "robert-nozick": {
        name: [[0, "Robert"], [0, "Nozick"]]
    },

    "murray-rothbard": {
        name: [[0, "Murray"], [0, "Newton"], [0, "Rothbard"]]
    },

    "stephen-rose": {
        name: [[0, "Stephen"], [0, "Rose"]]
    },

    "john-rawls": {
        name: [[0, "John"], [0, "Bordley"], [0, "Rawls"]]
    },

    "HHH": {
        name: [[ATOMS.ATOM_IS_HYPHEN, "Hans"], [0, "Hermann"], [0, "Hoppe"]]
    },

    "marx": {
        name: [[0, "Karl"], [0, "Heinrich"], [0, "Marx"]]
    },

    "robert-murphy": {
        name: [[0, "Robert"], [0, "Patrick"], [0, "Murphy"]]
    },

    "israel-kirzner": {
        name: [[0, "Israel"], [0, "Meir"], [0, "Kirzner"]]
    },

    "peter-ludlow": {
        name: [[0, "Peter"], [0, "Ludlow"]]
    },

    "hayek": {
        name: [[0, "Friedrich"], [0, "August"], [ATOMS.ATOM_IS_MIDFIX, "von"], [0, "Hayek"]]
    },

    "campbell-mcconnel": {
        name: [[0, "Campbell"], [0, "McConnell"]]
    },

    "gene-callahan": {
        name: [[0, "Gene"], [0, "Callahan"]]
    },

    "hazlitt": {
        name: [[0, "Henry"], [0, "Stuart"], [0, "Hazlitt"]]
    },

    "mises": {
        name: [[0, "Ludwig"], [ATOMS.ATOM_IS_MIDFIX, "von"], [0, "Mises"]]
    },

    "schiff": {
        name: [[0, "Peter"], [0, "David"], [0, "Shciff"]]
    },

    "hobbes": {
        name: [[0, "Thomas"], [0, "Hobbes"]]
    },

    "casey": {
        name: [[0, "Gerard"], [0, "Casey"]]
    },

    "jan-narveson": {
        name: [[0, "Jan"], [0, "Narveson"]]
    },

    "jesus-de-soto": {
        name: [[0, "Jesús"], [ATOMS.ATOM_IS_SPANISH_PRIMARY, "Huerta"], [ATOMS.ATOM_IS_SPANISH_PRIMARY, "de"], [ATOMS.ATOM_IS_SPANISH_PRIMARY, "Soto"], [ATOMS.ATOM_IS_SPANISH_SECONDARY, "Ballester"]]
    },

    "spooner": {
        name: [[0, "Lysander"], [0, "Spooner"]]
    },

    "OSSS": {
        name: [[ATOMS.ATOM_IS_ORG, "Office of Sedition, Subversion, and Sabotage"]]
    },

    "LDN": {
        name: [[ATOMS.ATOM_IS_ORG, "Lego Distribution Network"]]
    },

    "chase-rachels": {
        name: [[0, "Chase"], [0, "Rachels"]]
    },

    "rick-falkvinge": {
        name: [[0, "Rick"], [0, "Falkvinge"]]
    },

    "kris-borer": {
        name: [[0, "Kristopher"], [0, "Borer"]]
    },

    "bruce-benson": {
        name: [[0, "Bruce"], [0, "Benson"]]
    },

    "jorg-guido": {
        name: [[0, "Jörg"], [0, "Guido"], [0, "Hülsmann"]]
    },

    "keynes": {
        name: [[0, "John"], [0, "Maynard"], [0, "Keynes"]]
    },

    "d-freidman": {
        name: [[0, "David"], [0, "Director"], [0, "Freidman"]]
    },

    "m-tannehill": {
        name: [[0, "Morris"], [0, "Tannehill"]]
    },

    "l-tannehill": {
        name: [[0, "Lynda"], [0, "Tannehill"]]
    },

    "ritenhour": {
        name: [[0, "Shawn"], [0, "Ritenour"]]
    },

    "bryan-caplan": {
        name: [[0, "Bryan"], [0, "Caplan"]]
    },

    "la-boetie": {
        name: [[0, "Étienne"], [ATOMS.ATOM_IS_MIDFIX, "de la"], [0, "Boétie"]]
    },

    "machiavelli": {
        name: [[0, "Niccolò"], [ATOMS.ATOM_IS_MIDFIX, "di"], [0, "Bernardo"], [ATOMS.ATOM_IS_MIDFIX]]
    },

    "block": {
        name: [[ATOMS.ATOM_IS_PREFIX, "Dr."], [0, "Walter"], [0, "Edward"], [0, "Block"]]
    },

    "huemer": {
        name: [[0, "Michael"], [0, "Huemer"]]
    },

    "james-davidson": {
        name: [[0, "James"], [0, "Dale"], [0, "Davidson"]]
    },

    "rees-mogg": {
        name: [[ATOMS.ATOM_IS_PREFIX, "Lord"], [0, "William"], [ATOMS.ATOM_IS_HYPHEN, "Rees"], [0, "Mogg"]]
    },

    "randy-barnett": {
        name: [[0, "Randy"], [0, "Barnett"]]
    },

    "joseph-plummer": {
        name: [[0, "Joseph"], [0, "Plummer"]]
    }
}

export const BOOKS = {
    
    "advanced-introduction-to-public-choice": {
        title: "Advanced Introduction to Public Choice",
        author: ["randall-holcombe"]
    },
    
    "against-intellectual-property": {
        title: "Against Intellectual Property",
        author: ["stephen-kinsella"]
    },

    "against-politics": {
        title: "Against Politics",
        subtitle: "On Government, Anarchy, and Order",
        author: ["anthony-de-jasay"]
    },

    "against-the-state": {   
        title: "Against the State",
        subtitle: "An Anarcho-Capitalist Manifesto",
        author: ["lew-rockwell"]
    },

    "an-agorist-primer": {
        title: "An Agorist Primer",
        subtitle: "Counter-Economics, Total Freedom, and You",
        author: ["sek-3"]
    },

    "anarchy-and-the-law": {
        title: "Anarchy and the Law",
        author: ["edward-stringham"]
    },

    "anarchy-state-and-utopia": {
        title: "Anarchy, State, and Utopia",
        author: ["robert-nozick"]
    },

    "anatomy-of-the-state": {
        title: "Anatomy of the State",
        author: ["murray-rothbard"]
    },

    "a-plan-to-end-the-state": {
        title: "A Plan to End the State",
        subtitle: "How to Create a Slow Revolution and Other Essays About the Future of Liberty",
        author: ["stephen-rose"]
    },

    "a-theory-of-justice": {
        tilte: "A Theory of Justice",
        author: ["john-rawls"]
    },

    "a-theory-of-socialism-and-capitalism": {
        title: "A Theory of Socialism and Capitalism",
        author: ["HHH"]
    },

    "capital": {
        title: "Capital (Das Kapital)",
        author: ["marx"]
    },

    "chaos-theory": {
        title: "Chaos Theory",
        author: ["robert-murphy"]
    },

    "choice-cooperation-enterprise-and-human-action": {
        title: "Choice, Cooperation, Enterprise, and Human Action",
        author: ["robert-murphy"]
    },

    "competition-and-entrepreneurship": {
        title: "Competition & Entrepreneurship",
        author: ["israel-kirzner"]
    },

    "crypto-anarchy-cyberstates-and-pirate-utopias": {
        title: "Crypto Anarchy, Cyberstates, and Pirate Utopias",
        author: ["peter-ludlow", "et al"]
    },

    "democracy-the-god-that-failed": {
        title: "Democracy: The God That Failed",
        subtitle: "The Economics and Politics of Monarchy, Democracy and Natural Order",
        author: ["HHH"]
    },

    "denationalisation-of-money": {
        title: "Denationalisation of Money: The Argument Refined",
        subtitle: "An Analysis of the Theory and Practice of Concurrenct Currencies",
        author: ["hayek"]
    },

    "economics": {
        title: "Economics",
        author: ["campbell-mcconnel", "et al"]
    },

    "economic-science-and-the-austrian-method": {
        title: "Economic Science and the Austrian Method",
        author: ["HHH"]
    },

    "economics-for-real-people": {
        title: "Economics for Real People",
        subtitle: "An Introduction to the Austrian School",
        author: ["gene-callahan"]
    },

    "economics-in-one-lesson": {
        title: "Economics in One Lesson",
        subtitle: "The Shortest and Surest Way to Understand Basic Economics",
        author: ["hazlitt"]
    },

    "government-failure": {
        title: "Government Failure",
        subtitle: "A Primer in Public Choice",
        author: ["gordon-tullock", "et al"]
    },

    "ha": {
        title: "Human Action",
        subtitle: "A Treatise on Economics",
        author: ["mises"]
    },

    "how-an-economy-grows": {
        title: "How an Economy Grows",
        subtitle: "And Why it Crashes",
        author: ["schiff", "et al"]
    },

    "individualism-and-economic-order": {
        title: "Individualism and Economic Order",
        author: ["hayek"]
    },

    "justice-and-its-surroundings": {
        title: "Justice and Its Surroundings",
        author: ["anthony-de-jasay"]
    },

    "leviathan": {
        title: "Leviathan",
        author: ["hobbes"]
    },

    "libertarian-anarchy": {
        title: "Libertarian Anarchy",
        subtitle: "Against the State",
        author: "casey"
    },

    "liberty-games-and-contracts": {
        title: "Liberty, Games and Contracts",
        author: "jan-narveson"
    },

    "marxist-and-austrian-class-analysis": {
        title: "Marxist and Austrian Class Analysis",
        author: "HHH"
    },

    "mes": {
        title: "Man, Economy, and State",
        subtitle: "With Power and Market",
        author: "murray-rothbard"
    },

    "money-bank-credit-and-economic-cycles": {
        title: "Money, Bank Credit, and Economic Cycles",
        author: "jesus-de-soto"
    },

    "no-treason": {
        title: "No Treason",
        subtitle: "The Constitution of No Authority",
        author: "spooner"
    },

    "sedition-subversion-and-sabotage": {
        title: "Sedition, Subversion, and Sabotage: Field Manual No. 1",
        subtitle: "A Three Part Solution to The State",
        author: ["OSSS", "LDN"]
    },

    "socialism": {
        title: "Socialism",
        author: "mises"
    },

    "socialism-economic-calculation-and-entrepreneurship": {
        title: "Socialism, Economics Calculation and Entrepreneurship",
        author: "jesus-de-soto"
    },

    "spontaneous-order": {
        title: "Spontaneous Order",
        subtitle: "The Capitalist Case For A Stateless Society",
        author: "chase-rachels"
    },

    "swarmwise": {
        title: "Swarmwise",
        subtitle: "The Tactical Manual to Changing the World",
        author: "rick-falkvinge"
    },
    
    "teac": {
        title: "The Ethics of Anarcho-Capitalism",
        author: "kris-borer",
        desc: `<i>The Ethics of Anarcho-Capitalism</i> is my favourite libertarian book, if I could reccommend only a single book to goldpill a person this would be it. It is a narrative non-fiction book about libertarianism. It combines praxeology and storytelling to develop ethics in a way that is simple, robust, and fun.

Whether you want a clear introduction or a more advanced understanding, this book will shed libertarianism in a new light.

Here’s what others are saying:

<blockquote>
This is an excellent book on anarcho-capitalism. It covers all the bases, and then some. This is an enjoyable read, an easy read, and at the end of the road lies real insight. Five stars.
</blockquote>
—Walter Block, author of <i>Defending the Undefendable</i>

<blockquote>
I was dreading reading this, but it is conceptually excellent.
</blockquote>
—Michael Malice, author of <i>The New Right</i>

<blockquote>
This book uses praxeology to define libertarianism based on the non-aggression principle. Ancaps may find the implications disconcerting, or illuminating.
</blockquote>/i
—Stephan Kinsella, author of <i>Against Intellectual Property</i>

<blockquote>
For those who enjoy going deep into libertarian theory, the thought experiments and strategies in this book will prove valuable.
</blockquote>
—Jakub Bozydar Wisniewski, author of <i>Libertarian Quandaries</i>`
    },

    "the-constitution-of-liberty": {
        title: "The Constitution of Liberty",
        author: "hayek"
    },

    "the-economics-and-ethics-of-private-property": {
        title: "The Economics and Ethics of Private Property",
        author: "HHH"
    },

    "the-enterprise-of-law": {
        title: "The Enterprise of Law",
        subtitle: "Justice Without the State",
        author: "bruce-benson"
    },

    "the-ethics-of-liberty": {
        title: "The Ethics of Liberty",
        author: "murray-rothbard"
    },

    "the-ethics-of-money-production": {
        title: "The Ethics of Money Production",
        author: "jorg-guido"
    },

    "the-fatal-conceit": {
        title: "The Fatal Conceit",
        subtitle: "The Errors of Socialism",
        author: "hayek"
    },

    "the-general-theory-of-employment-interest-and-money": {
        title: "The General Theory of Embloyment, Interest, and Money",
        subtitle: "The Classic Work and Foundation of Modern-Day Economics",
        author: "keynes"
    },

    "the-great-fiction": {
        title: "The Great Fiction",
        subtitle: "Property, Economy, Society, and the Politics of Decline",
        author: "HHH"
    },

    "the-machinery-of-freedom": {
        title: "The Machinery of Freedom",
        subtitle: "Guide to a Radical Capitalism",
        author: "d-freidman"
    },

    "the-market-for-liberty": {
        title: "The Market for Liberty",
        author: ["m-tannehill", "l-tannehill"]
    },

    "the-mises-reader": {
        title: "The Mises Reader",
        author: "ritenour"
    },

    "the-myth-of-the-rational-voter": {
        title: "The Myth of the Rational Voter",
        subtitle: "Why Democracies Choose Bad Policies",
        author: "bryan-caplan"
    },

    "the-politics-of-obedience": {
        title: "The Politics of Obedience",
        subtitle: "The Discourse of Voluntary Servitude",
        author: "la-boetie"
    },

    "the-prince": {
        title: "The Prince",
        author: "machiavelli"
    },

    "the-privatization-of-roads-and-highways": {
        title: "The Privatization of Roads & Highways",
        subtitle: "Human and Economic Factors",
        author: "block"
    },

    "the-problem-of-political-authority": {
        title: "Thes Problem of Political Authority",
        subtitle: "An Examination of the Right to Coerce and the Duty to Obey",
        author: "huemer"
    },

    "the-road-to-serfdom": {
        title: "The Road to Serfdom",
        author: "hayek"
    },

    "the-sovereign-individual": {
        title: "The Sovereign Individual",
        subtitle: "Mastering the Transition to the Information Age",
        author: ["james-davidson", "rees-mogg"]
    },

    "the-structure-of-liberty": {
        title: "The Structure of Liberty",
        subtitle: "Justice & the Rule of Law",
        author: "randy-barnett"
    },

    "the-use-of-knowledge-in-society": {
        title: "The Use of Knowledge in Society",
        author: "hayek"
    },

    "tragedy-and-hope-101": {
        title: "Tragedy & Hope 101",
        subtitle: "The Illusion of Justice, Freedom and Democracy",
        author: "joseph-plummer"
    },

    "viking-age-iceland": {
        title: "Viking Age Iceland",
        author: "jesse-byock"
    },
    
    "what-has-government-done-to-our-money": {
        title: "What Has Government Done to Our Money",
        subtitle: "and The Case for a 100 Percent Gold Dollar",
        author: "murray-rothbard"
    },

    "what-must-be-done": {
        title: "What Must Be Done",
        author: "HHH"
    }
}
