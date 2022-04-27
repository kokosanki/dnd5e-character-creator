export const backgrounds = [
  {
    name: 'Acolyte',
    index: 'acolyte',
    bonuses: {
      skillProficiencies: ['insight', 'religion'],
      languages: 2,
      equipment: [
        'A holy symbol (a gift to you when you entered the priesthood)',
        'a prayer book or prayer wheel,',
        '5 sticks of incense',
        'vetsments',
        'a set of common clothes',
        'a pouch containing 15 gp.'
      ],
      feature: {
        name: 'Shelter of the Faithful',
        description:
          'As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.'
      }
    },
    characteristics: {
      personalityTrait: [
        'I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.',
        'I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.',
        'I see omens in every event and action. The gods try to speak to us, we just need to listen.',
        'Nothing can shake my optimistic attitude.',
        'I quote (or misquote) sacred texts and proverbs in almost every situation.',
        'I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.',
        'I’ve enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.',
        'I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world.'
      ],
      ideal: [
        'Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)',
        'Charity. I always try to help those in need, no matter what the personal cost. (Good)',
        'Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)',
        'Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)',
        'Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)',
        'Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings. (Any)'
      ],
      bond: [
        'I would die to recover an ancient relic of my faith that was lost long ago.',
        'I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.',
        'I owe my life to the priest who took me in when my parents died.',
        'Everything I do is for the common people.',
        'I will do anything to protect the temple where I served.',
        'I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.'
      ],
      flaw: [
        'I judge others harshly, and myself even more severely.',
        'I put too much trust in those who wield power within my temple’s hierarchy.',
        'My piety sometimes leads me to blindly trust those that profess faith in my god.',
        'I am inflexible in my thinking.',
        'I am suspicious of strangers and expect the worst of them.',
        'Once I pick a goal, I become obsessed with it to the detriment of everything else in my life'
      ]
    }
  },
  {
    name: 'Criminal/Spy',
    index: 'criminal/spy',
    bonuses: {
      skillProficiencies: ['deception', 'stealth'],
      languages: 0,
      equipment: [
        ' A crowbar,',
        'a set of dark common clothes including a hood',
        'a pouch containing 15 gp'
      ],
      feature: {
        name: 'Criminal Contact',
        description:
          'You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.'
      },
      backgroundBonus: {
        criminalSpeciality: [
          'Blackmailer',
          'Burglar',
          'Enforcer',
          'Fence',
          'Highway robber',
          'Hired killer',
          'Pickpocket',
          'Smuggler'
        ]
      }
    },
    characteristics: {
      personalityTrait: [
        'I always have a plan for what to do when things go wrong.',
        'I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.',
        'The first thing I do in a new place is note the locations of everything valuable—or where such things could be hidden.',
        'I would rather make a new friend than a new enemy.',
        'I am incredibly slow to trust. Those who seem the fairest often have the most to hide.',
        'I don’t pay attention to the risks in a situation. Never tell me the odds.',
        'The best way to get me to do something is to tell me I can’t do it.',
        'I blow up at the slightest insult.'
      ],
      ideal: [
        'Honor. I don’t steal from others in the trade. (Lawful)',
        'Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)',
        'Charity. I steal from the wealthy so that I can help people in need. (Good)',
        'Greed. I will do whatever it takes to become wealthy. (Evil)',
        'People. I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)',
        'Redemption. There’s a spark of good in everyone. (Good)'
      ],
      bond: [
        'I’m trying to pay off an old debt I owe to a generous benefactor.',
        'My ill-gotten gains go to support my family.',
        'Something important was taken from me, and I aim to steal it back.',
        'I will become the greatest thief that ever lived.',
        'I’m guilty of a terrible crime. I hope I can redeem myself for it.',
        'Someone I loved died because of a mistake I made. That will never happen again.'
      ],
      flaw: [
        'When I see something valuable, I can’t think about anything but how to steal it.',
        'When faced with a choice between money and my friends, I usually choose the money.',
        'If there’s a plan, I’ll forget it. If I don’t forget it, I’ll ignore it.',
        'I have a “tell” that reveals when I’m lying.',
        'I turn tail and run when things look bad.',
        'An innocent person is in prison for a crime that I committed. I’m okay with that.'
      ]
    }
  },
  {
    name: 'Folk hero',
    index: 'folkhero',
    bonuses: {
      skillProficiencies: ['deception', 'stealth'],
      languages: 0,
      equipment: [
        ': A set of artisan’s tools (one of your choice)',
        'a shovel',
        'an iron pot',
        'a set of common clothes',
        'and a pouch containing 10 gp'
      ],
      feature: {
        name: 'Criminal Contact',
        description:
          'You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.'
      },
      backgroundBonus: {
        definingEvent: [
          'I stood up to a tyrant’s agents.',
          'I saved people during a natural disaster.',
          'I stood alone against a terrible monster.',
          'I stole from a corrupt merchant to help the poor.',
          'I led a militia to fight off an invading army.',
          'I broke into a tyrant’s castle and stole weapons to arm the people.',
          'I trained the peasantry to use farm implements as weapons against a tyrant’s soldiers.',
          'A lord rescinded an unpopular decree after I led a symbolic act of protest against it.',
          'A celestial, fey, or similar creature gave me a blessing or revealed my secret origin.',
          'Recruited into a lord’s army, I rose to leadership and was commended for my heroism.'
        ]
      }
    },
    characteristics: {
      personalityTrait: [
        'I judge people by their actions, not their words.',
        'I judge people by their actions, not their words.',
        'When I set my mind to something, I follow through no matter what gets in my way.',
        'I have a strong sense of fair play and always try to find the most equitable solution to arguments.',
        'I’m confident in my own abilities and do what I can to instill confidence in others.',
        'Thinking is for other people. I prefer action.',
        'I misuse long words in an attempt to sound smarter.',
        'I get bored easily. When am I going to get on with my destiny?'
      ],
      ideal: [
        'Respect. People deserve to be treated with dignity and respect. (Good)',
        'Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)',
        'Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)',
        'Might. If I become strong, I can take what I want—what I deserve. (Evil)',
        'Sincerity. There’s no good in pretending to be something I’m not. (Neutral)',
        'Destiny. Nothing and no one can steer me away from my higher calling. (Any)'
      ],
      bond: [
        'I have a family, but I have no idea where they are. One day, I hope to see them again.',
        'I worked the land, I love the land, and I will protect the land.',
        'A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.',
        'My tools are symbols of my past life, and I carry them so that I will never forget my roots.',
        'I protect those who cannot protect themselves.',
        'I wish my childhood sweetheart had come with me to pursue my destiny.'
      ],
      flaw: [
        'The tyrant who rules my land will stop at nothing to see me killed.',
        'I’m convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.',
        'The people who knew me when I was young know my shameful secret, so I can never go home again.',
        'I have a weakness for the vices of the city, especially hard drink.',
        'Secretly, I believe that things would be better if I were a tyrant lording over the land.',
        'I have trouble trusting in my allies.'
      ]
    }
  },
  {
    name: 'Noble',
    index: 'noble',
    bonuses: {
      skillProficiencies: ['history', 'persuasion'],
      languages: 1,
      equipment: [
        'A set of fine clothes',
        'a signet ring',
        'a scroll of pedigree',
        'va purse containing 25 gp'
      ],
      feature: {
        name: 'Position of Privilege',
        description:
          'Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.'
      }
    },
    characteristics: {
      personalityTrait: [
        'My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.',
        'The common folk love me for my kindness and generosity.',
        'No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.',
        'I take great pains to always look my best and follow the latest fashions.',
        'I don’t like to get my hands dirty, and I won’t be caught dead in unsuitable accommodations.',
        'Despite my noble birth, I do not place myself above other folk. We all have the same blood.',
        'My favor, once lost, is lost forever.',
        'If you do me an injury, I will crush you, ruin your name, and salt your fields.'
      ],
      ideal: [
        'Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)',
        'Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)',
        'Independence. I must prove that I can handle myself without the coddling of my family. (Chaotic)',
        'Power. If I can attain more power, no one will tell me what to do. (Evil)',
        'Family. Blood runs thicker than water. (Any)',
        'Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)'
      ],
      bond: [
        'I will face any challenge to win the approval of my family.',
        'My house’s alliance with another noble family must be sustained at all costs.',
        'Nothing is more important than the other members of my family.',
        'I am in love with the heir of a family that my family despises.',
        'My loyalty to my sovereign is unwavering.',
        'The common folk must see me as a hero of the people.'
      ],
      flaw: [
        'I secretly believe that everyone is beneath me.',
        'I hide a truly scandalous secret that could ruin my family forever.',
        'I too often hear veiled insults and threats in every word addressed to me, and I’m quick to anger.',
        'I have an insatiable desire for carnal pleasures.',
        'In fact, the world does revolve around me.',
        'By my words and actions, I often bring shame to my family.'
      ]
    }
  },
  {
    name: 'Sage',
    index: 'sage',
    bonuses: {
      skillProficiencies: ['arcana', 'history'],
      languages: 2,
      equipment: [
        'A bottle of black ink, a quill',
        'a small knife',
        'a letter from a dead colleague posing a question you have not yet been able to answer',
        'vetsments',
        'a set of common clothes',
        'and a pouch containing 10 gp'
      ],
      backgroundBonus: {
        specialty: [
          'Alchemist',
          'Astronomer',
          'Discredited academic',
          'Librarian',
          'Professor',
          'Researcher',
          'Wizard’s apprentice',
          'Scribe'
        ]
      },
      feature: {
        name: 'Researcher',
        description:
          'When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.'
      }
    },
    characteristics: {
      personalityTrait: [
        'I use polysyllabic words that convey the impression of great erudition.',
        'I’ve read every book in the world’s greatest libraries—or I like to boast that I have.',
        'I’m used to helping out those who aren’t as smart as I am, and I patiently explain anything and everything to others.',
        'There’s nothing I like more than a good mystery.',
        'I’m willing to listen to every side of an argument before I make my own judgment.',
        'I … speak … slowly … when talking … to idiots, … which … almost … everyone … is … compared … to me.',
        ' am horribly, horribly awkward in social situations.',
        'I’m convinced that people are always trying to steal my secrets.'
      ],
      ideal: [
        'Knowledge. The path to power and self-improvement is through knowledge. (Neutral)',
        'Beauty. What is beautiful points us beyond itself toward what is true. (Good)',
        'Logic. Emotions must not cloud our logical thinking. (Lawful)',
        'No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)',
        'Power. Knowledge is the path to power and domination. (Evil)',
        'Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)'
      ],
      bond: [
        'It is my duty to protect my students.',
        'I have an ancient text that holds terrible secrets that must not fall into the wrong hands.',
        'I work to preserve a library, university, scriptorium, or monastery.',
        'My life’s work is a series of tomes related to a specific field of lore.',
        'I’ve been searching my whole life for the answer to a certain question.',
        'I sold my soul for knowledge. I hope to do great deeds and win it back.'
      ],
      flaw: [
        'I am easily distracted by the promise of information.',
        'Most people scream and run when they see a demon. I stop and take notes on its anatomy.',
        'Unlocking an ancient mystery is worth the price of a civilization.',
        'I overlook obvious solutions in favor of complicated ones.',
        'I speak without really thinking through my words, invariably insulting others.',
        'I can’t keep a secret to save my life, or anyone else’s.'
      ]
    }
  },
  {
    name: 'Soldier',
    index: 'soldier',
    bonuses: {
      skillProficiencies: ['athletics', 'intimidation'],
      languages: 0,
      equipment: [
        'An insignia of rank, a trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner)',
        'a set of bone dice or deck of cards',
        'a set of common clothes',
        'a pouch containing 10 gp.'
      ],
      backgroundBonus: {
        specialty: [
          'Officer',
          'Scout',
          'Infantry',
          'Cavalry',
          'Healer',
          'Quartermaster',
          'Standard bearer',
          'Support staff (cook, blacksmith, or the like)'
        ]
      },
      feature: {
        name: 'Military Rank',
        description:
          'You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.'
      }
    },
    characteristics: {
      personalityTrait: [
        'I’m always polite and respectful.',
        'I’m haunted by memories of war. I can’t get the images of violence out of my mind.',
        'I’ve lost too many friends, and I’m slow to make new ones.',
        'I’m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.',
        'I can stare down a hell hound without flinching.',
        'I enjoy being strong and like breaking things.',
        'I have a crude sense of humor.',
        'I face problems head-on. A simple, direct solution is the best path to success.'
      ],
      ideal: [
        'Greater Good. Our lot is to lay down our lives in defense of others. (Good)',
        'Responsibility. I do what I must and obey just authority. (Lawful)',
        'Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)',
        'Might. In life as in war, the stronger force wins. (Evil)',
        'Live and Let Live. Ideals aren’t worth killing over or going to war for. (Neutral)',
        'Nation. My city, nation, or people are all that matter. (Any)'
      ],
      bond: [
        'I would still lay down my life for the people I served with.',
        'Someone saved my life on the battlefield. To this day, I will never leave a friend behind.',
        'My honor is my life.',
        'I’ll never forget the crushing defeat my company suffered or the enemies who dealt it.',
        'Those who fight beside me are those worth dying for.',
        'I fight for those who cannot fight for themselves.'
      ],
      flaw: [
        'The monstrous enemy we faced in battle still leaves me quivering with fear.',
        'I have little respect for anyone who is not a proven warrior.',
        'I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.',
        'My hatred of my enemies is blind and unreasoning.',
        'I obey the law, even if the law causes misery.',
        'I’d rather eat my armor than admit when I’m wrong.'
      ]
    }
  }
]
