const myWordBank = [
    { 
        id: 1, 
        word: "denigrate", 
        phonetic: "/ˈdenɪɡreɪt/", 
        meaning: "v. 诋毁，贬低",
        example_en: "No one has the right to denigrate her academic achievements.",
        example_cn: "谁也无权贬低她的学术成就。"
    },
    { 
        id: 2, 
        word: "reminiscent", 
        phonetic: "/ˌremɪˈnɪsnt/", 
        meaning: "adj. 怀旧的，使人联想到的",
        example_en: "The author's writing style is strongly reminiscent of early 20th-century literature.",
        example_cn: "这位作者的写作风格很容易让人联想到 20 世纪早期的文学作品。"
    },
    { 
        id: 3, 
        word: "proximity", 
        phonetic: "/prɒkˈsɪməti/", 
        meaning: "n. 接近，邻近",
        example_en: "The property's proximity to the hospital makes it ideal for medical staff.",
        example_cn: "该房产靠近医院，非常适合医务人员居住。"
    },
    { 
        id: 4, 
        word: "clinical", 
        phonetic: "/ˈklɪnɪkl/", 
        meaning: "adj. 临床的；冷静客观的，不带感情的",
        example_en: "She surveyed the chaotic room with clinical detachment.",
        example_cn: "她带着冷静客观的超然态度环视着这个混乱的房间。"
    },
    { 
        id: 5, 
        word: "palpable", 
        phonetic: "/ˈpælpəbl/", 
        meaning: "adj. 明显的，易觉察的；可触知的",
        example_en: "The tension in the boardroom was almost palpable before the announcement.",
        example_cn: "在宣布消息之前，会议室里的紧张气氛几乎清晰可辨。"
    },
    { 
        id: 6, 
        word: "stasis", 
        phonetic: "/ˈsteɪsɪs/", 
        meaning: "n. 停滞，静止状态",
        example_en: "The country is currently in a period of economic stasis.",
        example_cn: "该国目前正处于经济停滞期。"
    },
    { 
        id: 7, 
        word: "complacent", 
        phonetic: "/kəmˈpleɪsnt/", 
        meaning: "adj. 自满的，沾沾自喜的",
        example_en: "We cannot afford to become complacent about our security.",
        example_cn: "我们在安全问题上绝不能掉以轻心（自满）。"
    },
    { 
        id: 8, 
        word: "uncompromising", 
        phonetic: "/ʌnˈkɒmprəmaɪzɪŋ/", 
        meaning: "adj. 不妥协的，坚定的",
        example_en: "He maintained an uncompromising attitude towards academic dishonesty.",
        example_cn: "他对学术不端行为保持着毫不妥协的态度。"
    },
    { 
        id: 9, 
        word: "augur", 
        phonetic: "/ˈɔːɡə(r)/", 
        meaning: "v. 预示，是……的预兆",
        example_en: "These positive sales figures augur well for the company's future.",
        example_cn: "这些积极的销售数据预示着公司未来前景良好。"
    },
    { 
        id: 10, 
        word: "propagandize", 
        phonetic: "/ˌprɒpəˈɡændaɪz/", 
        meaning: "v. 宣传，散布",
        example_en: "The regime used the state media to propagandize its radical ideology.",
        example_cn: "该政权利用国家媒体来宣传其激进的意识形态。"
    },
    { 
        id: 11, 
        word: "germination", 
        phonetic: "/ˌdʒɜːmɪˈneɪʃn/", 
        meaning: "n. 发芽，萌芽",
        example_en: "Proper moisture and temperature are essential for seed germination.",
        example_cn: "适宜的水分和温度是种子发芽的必要条件。"
    },
    { 
        id: 12, 
        word: "impotent", 
        phonetic: "/ˈɪmpətənt/", 
        meaning: "adj. 无能为力的，不起作用的",
        example_en: "Citizens felt completely impotent against the new oppressive laws.",
        example_cn: "面对新的压迫性法律，公民们感到完全无能为力。"
    },
    { 
        id: 13, 
        word: "heliocentric", 
        phonetic: "/ˌhiːliəʊˈsentrɪk/", 
        meaning: "adj. 日心的，以太阳为中心的",
        example_en: "Copernicus is famous for proposing the heliocentric model of the solar system.",
        example_cn: "哥白尼因提出太阳系日心说而闻名。"
    },
    { 
        id: 14, 
        word: "raillery", 
        phonetic: "/ˈreɪləri/", 
        meaning: "n. 善意的玩笑，逗弄",
        example_en: "There was some good-natured raillery between the rival team members.",
        example_cn: "对立球队的成员之间开着善意的玩笑。"
    },
    { 
        id: 15, 
        word: "mishandle", 
        phonetic: "/ˌmɪsˈhændl/", 
        meaning: "v. 处理不当，胡乱操作",
        example_en: "The government was heavily criticized for mishandling the economic crisis.",
        example_cn: "政府因对经济危机处理不当而受到严厉批评。"
    },
    { 
        id: 16, 
        word: "unanimity", 
        phonetic: "/ˌjuːnəˈnɪməti/", 
        meaning: "n. 一致同意，全体一致",
        example_en: "There was a surprising level of unanimity among the committee members.",
        example_cn: "委员会成员之间达成了惊人的一致。"
    },
    { 
        id: 17, 
        word: "requisite", 
        phonetic: "/ˈrekwɪzɪt/", 
        meaning: "adj. 必需的，必备的",
        example_en: "She lacks the requisite experience for this senior management position.",
        example_cn: "她缺乏担任这一高级管理职位所需的经验。"
    },
    { 
        id: 18, 
        word: "tendentious", 
        phonetic: "/tenˈdenʃəs/", 
        meaning: "adj. 有偏见的，倾向性强的",
        example_en: "The documentary was criticized for its tendentious portrayal of the historical event.",
        example_cn: "这部纪录片因其对历史事件有偏见的描述而受到批评。"
    },
    { 
        id: 19, 
        word: "conjecture", 
        phonetic: "/kənˈdʒektʃə(r)/", 
        meaning: "n./v. 推测，猜测",
        example_en: "The exact circumstances of his death remain a matter of conjecture.",
        example_cn: "他死亡的具体情况仍然是个推测。"
    },
    { 
        id: 20, 
        word: "proprietary", 
        phonetic: "/prəˈpraɪətri/", 
        meaning: "adj. 专有的，专利的",
        example_en: "The company's software is built on highly guarded proprietary technology.",
        example_cn: "该公司的软件是建立在高度保密的专有技术之上的。"
    },
    { 
        id: 21, 
        word: "introspect", 
        phonetic: "/ˌɪntrəˈspekt/", 
        meaning: "v. 内省，反思",
        example_en: "He took some time away from work to introspect and figure out his true goals.",
        example_cn: "他暂时放下工作去反省，试图弄清楚自己真正的目标。"
    },
    { 
        id: 22, 
        word: "anthropogenic", 
        phonetic: "/ˌænθrəpəˈdʒenɪk/", 
        meaning: "adj. 人为的（尤指对环境的影响）",
        example_en: "The report focuses heavily on the consequences of anthropogenic climate change.",
        example_cn: "该报告重点关注人为气候变化的后果。"
    },
    { 
        id: 23, 
        word: "calculated", 
        phonetic: "/ˈkælkjuleɪtɪd/", 
        meaning: "adj. 蓄意的，精心计划的",
        example_en: "His rude remark was a calculated attempt to undermine her authority.",
        example_cn: "他粗鲁的言辞是蓄意企图削弱她的权威。"
    },
    { 
        id: 24, 
        word: "glaciation", 
        phonetic: "/ˌɡleɪsiˈeɪʃn/", 
        meaning: "n. 冰川作用，冰河期",
        example_en: "The rugged landscape of the region was shaped by widespread glaciation.",
        example_cn: "该地区崎岖的地貌是受广泛的冰川作用形成的。"
    },
    { 
        id: 25, 
        word: "extirpate", 
        phonetic: "/ˈekstɜːpeɪt/", 
        meaning: "v. 根除，彻底消灭",
        example_en: "The conservation program aims to extirpate invasive species from the island.",
        example_cn: "该保护项目旨在根除岛上的入侵物种。"
    },
    { 
        id: 26, 
        word: "cagey", 
        phonetic: "/ˈkeɪdʒi/", 
        meaning: "adj. 守口如瓶的，狡黠的",
        example_en: "He was very cagey about the details of his upcoming project.",
        example_cn: "他对即将进行的项目的具体细节守口如瓶。"
    },
    { 
        id: 27, 
        word: "relegation", 
        phonetic: "/ˌrelɪˈɡeɪʃn/", 
        meaning: "n. 降级，贬谪",
        example_en: "The football club is fighting hard to avoid relegation to a lower division.",
        example_cn: "这家足球俱乐部正在努力保级，避免降入低级别联赛。"
    },
    { 
        id: 28, 
        word: "seethe", 
        phonetic: "/siːð/", 
        meaning: "v. 激动，生闷气；沸腾",
        example_en: "She was seething with anger over the unfair treatment.",
        example_cn: "她因受到不公平的待遇而怒火中烧。"
    },
    { 
        id: 29, 
        word: "ingenuity", 
        phonetic: "/ˌɪndʒəˈnjuːəti/", 
        meaning: "n. 独创性，巧妙",
        example_en: "The engineer showed great ingenuity in finding a workaround for the bug.",
        example_cn: "这位工程师在寻找漏洞的变通方案时展现了极大的聪明才智。"
    },
    { 
        id: 30, 
        word: "comportment", 
        phonetic: "/kəmˈpɔːtmənt/", 
        meaning: "n. 举止，行为",
        example_en: "Her dignified comportment earned her the respect of her colleagues.",
        example_cn: "她端庄的举止赢得了同事们的尊重。"
    },
    { 
        id: 31, 
        word: "leaven", 
        phonetic: "/ˈlevn/", 
        meaning: "v. 使……更有趣；加入酵母发酵",
        example_en: "He tried to leaven his lengthy speech with a few humorous anecdotes.",
        example_cn: "他试图用几个幽默的轶事使他冗长的演讲变得有趣些。"
    },
    { 
        id: 32, 
        word: "marginalize", 
        phonetic: "/ˈmɑːdʒɪnəlaɪz/", 
        meaning: "v. 边缘化，排挤",
        example_en: "We must ensure that minority groups are not marginalized in our society.",
        example_cn: "我们必须确保少数群体在社会中不被边缘化。"
    },
    { 
        id: 33, 
        word: "cartographic", 
        phonetic: "/ˌkɑːtəˈɡræfɪk/", 
        meaning: "adj. 制图（学）的",
        example_en: "The museum houses a fascinating collection of historical cartographic materials.",
        example_cn: "这家博物馆收藏了大量引人入胜的历史制图资料。"
    },
    { 
        id: 34, 
        word: "upbeat", 
        phonetic: "/ˈʌpbiːt/", 
        meaning: "adj. 乐观的，欢快的",
        example_en: "Despite the recent setbacks, the team remains highly upbeat about their chances.",
        example_cn: "尽管最近遭遇挫折，该团队对他们的机会依然保持高度乐观。"
    },
    { 
        id: 35, 
        word: "melancholy", 
        phonetic: "/ˈmelənkəli/", 
        meaning: "n./adj. 忧郁（的），悲伤（的）",
        example_en: "A mood of deep melancholy descended on him after he finished reading the letter.",
        example_cn: "读完信后，一种深深的忧郁笼罩了他。"
    },
    { 
        id: 36, 
        word: "deify", 
        phonetic: "/ˈdeɪɪfaɪ/", 
        meaning: "v. 神化，奉若神明",
        example_en: "Ancient civilizations often deified their rulers.",
        example_cn: "古代文明通常将他们的统治者神化。"
    },
    { 
        id: 37, 
        word: "laudatory", 
        phonetic: "/ˈlɔːdətəri/", 
        meaning: "adj. 赞美的，称赞的",
        example_en: "The novel received highly laudatory reviews from prominent critics.",
        example_cn: "这部小说获得了著名评论家的高度赞扬。"
    },
    { 
        id: 38, 
        word: "archipelago", 
        phonetic: "/ˌɑːkɪˈpeləɡəʊ/", 
        meaning: "n. 群岛，列岛",
        example_en: "Japan is a volcanic archipelago composed of thousands of islands.",
        example_cn: "日本是一个由数千个岛屿组成的火山群岛。"
    },
    { 
        id: 39, 
        word: "couch", 
        phonetic: "/kaʊtʃ/", 
        meaning: "v. 表达，措辞",
        example_en: "The official refusal was delicately couched in diplomatic language.",
        example_cn: "官方的拒绝用外交辞令委婉地表达了出来。"
    },
    { 
        id: 40, 
        word: "endothermy", 
        phonetic: "/ˈendəʊθɜːmi/", 
        meaning: "n. 温血（特性），内温性",
        example_en: "The evolution of endothermy allowed mammals to survive in colder climates.",
        example_cn: "内温性的进化使得哺乳动物能够在较冷的气候中生存。"
    },
    { 
        id: 41, 
        word: "heterogeneous", 
        phonetic: "/ˌhetərəˈdʒiːniəs/", 
        meaning: "adj. 异类的，由不同成分组成的",
        example_en: "The United States is known for its highly heterogeneous population.",
        example_cn: "美国以其高度多样化（异质）的人口而闻名。"
    },
    { 
        id: 42, 
        word: "instrumental", 
        phonetic: "/ˌɪnstrəˈmentl/", 
        meaning: "adj. 起重要作用的；乐器的",
        example_en: "He was instrumental in securing the funding for the new research center.",
        example_cn: "他在为新研究中心争取资金方面发挥了重要作用。"
    },
    { 
        id: 43, 
        word: "exterminate", 
        phonetic: "/ɪkˈstɜːmɪneɪt/", 
        meaning: "v. 消灭，根除",
        example_en: "Pest control was called in to exterminate the termite infestation.",
        example_cn: "病虫害防治部门被叫来消灭白蚁灾害。"
    },
    { 
        id: 44, 
        word: "querulous", 
        phonetic: "/ˈkwerələs/", 
        meaning: "adj. 爱发牢骚的，抱怨的",
        example_en: "He became increasingly querulous and demanding in his old age.",
        example_cn: "到了晚年，他变得越来越爱发牢骚且要求苛刻。"
    },
    { 
        id: 45, 
        word: "insightful", 
        phonetic: "/ˈɪnsaɪtfl/", 
        meaning: "adj. 富有洞察力的，有深刻见解的",
        example_en: "Her analysis of the economic data was remarkably insightful.",
        example_cn: "她对经济数据的分析极具洞察力。"
    },
    { 
        id: 46, 
        word: "engender", 
        phonetic: "/ɪnˈdʒendə(r)/", 
        meaning: "v. 产生，引起",
        example_en: "The new tax policies have engendered a lot of controversy and public debate.",
        example_cn: "新的税收政策引发了大量的争议和公众辩论。"
    },
    { 
        id: 47, 
        word: "attest", 
        phonetic: "/əˈtest/", 
        meaning: "v. 证实，证明",
        example_en: "Numerous independent witnesses can attest to his whereabouts that night.",
        example_cn: "许多独立的目击者可以证实他那晚的行踪。"
    },
    { 
        id: 48, 
        word: "incontrovertible", 
        phonetic: "/ˌɪnkɒntrəˈvɜːtəbl/", 
        meaning: "adj. 无可辩驳的，不容置疑的",
        example_en: "The video footage provided incontrovertible evidence of his guilt.",
        example_cn: "视频片段为他的罪行提供了无可辩驳的证据。"
    },
    { 
        id: 49, 
        word: "pompous", 
        phonetic: "/ˈpɒmpəs/", 
        meaning: "adj. 傲慢的，自大的",
        example_en: "I couldn't stand listening to his pompous speeches any longer.",
        example_cn: "我再也受不了听他那些自吹自擂的演讲了。"
    },
    { 
        id: 50, 
        word: "enamored", 
        phonetic: "/ɪˈnæməd/", 
        meaning: "adj. 迷恋的，倾心的",
        example_en: "He became completely enamored with the city's vibrant culture.",
        example_cn: "他完全迷恋上了这座城市充满活力的文化。"
    },
    { 
        id: 51, 
        word: "entice", 
        phonetic: "/ɪnˈtaɪs/", 
        meaning: "v. 诱使，怂恿",
        example_en: "Retailers use massive discounts to entice shoppers during the holiday season.",
        example_cn: "零售商利用巨额折扣在节日期间诱惑顾客购买。"
    },
    { 
        id: 52, 
        word: "original", 
        phonetic: "/əˈrɪdʒənl/", 
        meaning: "adj. 创新的；最初的",
        example_en: "The committee was impressed by his highly original approach to solving the problem.",
        example_cn: "委员会对他解决问题的极具创新性的方法印象深刻。"
    },
    { 
        id: 53, 
        word: "grandeur", 
        phonetic: "/ˈɡrændʒə(r)/", 
        meaning: "n. 宏伟，壮丽",
        example_en: "We were struck by the sheer grandeur of the ancient cathedral.",
        example_cn: "这座古老大教堂的宏伟壮丽让我们感到震撼。"
    },
    { 
        id: 54, 
        word: "amorphous", 
        phonetic: "/əˈmɔːfəs/", 
        meaning: "adj. 无定形的，杂乱的",
        example_en: "The legislation is still an amorphous collection of ideas rather than a concrete plan.",
        example_cn: "该法案仍然只是一堆杂乱的想法，而非具体的计划。"
    },
    { 
        id: 55, 
        word: "egalitarian", 
        phonetic: "/ɪˌɡælɪˈteəriən/", 
        meaning: "adj. 平等主义的",
        example_en: "The organization is run on strictly egalitarian principles.",
        example_cn: "该组织的运作严格遵循平等主义原则。"
    },
    { 
        id: 56, 
        word: "preclude", 
        phonetic: "/prɪˈkluːd/", 
        meaning: "v. 阻止，妨碍，排除",
        example_en: "His prior commitments preclude him from accepting the invitation.",
        example_cn: "他先前的安排使他无法接受邀请。"
    },
    { 
        id: 57, 
        word: "pristine", 
        phonetic: "/ˈprɪstiːn/", 
        meaning: "adj. 纯净的，崭新的，未受破坏的",
        example_en: "The antique car was preserved in absolutely pristine condition.",
        example_cn: "这辆古董车被保养得完好如初。"
    },
    { 
        id: 58, 
        word: "commend", 
        phonetic: "/kəˈmend/", 
        meaning: "v. 表扬，称赞",
        example_en: "The firefighters were highly commended for their bravery during the rescue.",
        example_cn: "消防员因在救援中表现出的英勇而受到高度赞扬。"
    },
    { 
        id: 59, 
        word: "overwrought", 
        phonetic: "/ˌəʊvəˈrɔːt/", 
        meaning: "adj. 极度紧张的，过度兴奋的",
        example_en: "She was in a highly overwrought state after the intense argument.",
        example_cn: "激烈争吵之后，她处于一种极度神经紧张的状态。"
    },
    { 
        id: 60, 
        word: "moralistic", 
        phonetic: "/ˌmɒrəˈlɪstɪk/", 
        meaning: "adj. 说教的，道学气的",
        example_en: "The film has a very moralistic tone that many viewers find off-putting.",
        example_cn: "这部电影有着非常强烈的说教基调，让很多观众感到反感。"
    },
    { 
        id: 61, 
        word: "ingenuous", 
        phonetic: "/ɪnˈdʒenjuəs/", 
        meaning: "adj. 天真的，坦白的",
        example_en: "It is ingenuous to suppose that money did not play a part in his decision.",
        example_cn: "以为金钱在他的决定中没有起作用，这就太天真了。"
    },
    { 
        id: 62, 
        word: "abet", 
        phonetic: "/əˈbet/", 
        meaning: "v. 教唆，煽动，协助",
        example_en: "He was charged with aiding and abetting the bank robbers.",
        example_cn: "他被指控协助并教唆了银行劫匪。"
    },
    { 
        id: 63, 
        word: "surmount", 
        phonetic: "/səˈmaʊnt/", 
        meaning: "v. 克服，战胜",
        example_en: "They managed to surmount all the technical difficulties and complete the project on time.",
        example_cn: "他们设法克服了所有的技术困难，按时完成了项目。"
    },
    { 
        id: 64, 
        word: "relinquish", 
        phonetic: "/rɪˈlɪŋkwɪʃ/", 
        meaning: "v. 放弃，交出",
        example_en: "The CEO decided to relinquish his position and retire early.",
        example_cn: "首席执行官决定放弃他的职位并提前退休。"
    },
    { 
        id: 65, 
        word: "boredom", 
        phonetic: "/ˈbɔːdəm/", 
        meaning: "n. 厌烦，无聊",
        example_en: "The children were acting out strictly out of boredom.",
        example_cn: "孩子们调皮捣蛋完全是因为无聊。"
    },
    { 
        id: 66, 
        word: "zenith", 
        phonetic: "/ˈzenɪθ/", 
        meaning: "n. 顶峰，鼎盛时期",
        example_en: "The Roman Empire reached its zenith under the rule of Trajan.",
        example_cn: "罗马帝国在图拉真统治时期达到了鼎盛。"
    },
    { 
        id: 67, 
        word: "plaintive", 
        phonetic: "/ˈpleɪntɪv/", 
        meaning: "adj. 哀伤的，悲哀的",
        example_en: "We could hear the plaintive cry of a lone wolf in the distance.",
        example_cn: "我们能听到远处一匹孤狼发出的哀婉嚎叫。"
    },
    { 
        id: 68, 
        word: "insular", 
        phonetic: "/ˈɪnsjələ(r)/", 
        meaning: "adj. 狭隘的，与世隔绝的",
        example_en: "The community is very insular and resistant to outside influences.",
        example_cn: "这个社区非常封闭，对外界的影响有抵触情绪。"
    },
    { 
        id: 69, 
        word: "hyperbole", 
        phonetic: "/haɪˈpɜːbəli/", 
        meaning: "n. 夸张（法）",
        example_en: "To say it was the worst disaster in history is a slight hyperbole.",
        example_cn: "说这是历史上最严重的灾难有点夸张了。"
    },
    { 
        id: 70, 
        word: "arcane", 
        phonetic: "/ɑːˈkeɪn/", 
        meaning: "adj. 神秘的，深奥的",
        example_en: "He is an expert in the arcane rules of the ancient game.",
        example_cn: "他是研究这款古老游戏深奥规则的专家。"
    },
    { 
        id: 71, 
        word: "succor", 
        phonetic: "/ˈsʌkə(r)/", 
        meaning: "n./v. 援助，救援",
        example_en: "The charity organization provided succor to the refugees displaced by the war.",
        example_cn: "慈善组织为因战争流离失所的难民提供了援助。"
    },
    { 
        id: 72, 
        word: "hazardous", 
        phonetic: "/ˈhæzədəs/", 
        meaning: "adj. 危险的，有害的",
        example_en: "The workers must wear protective gear when handling hazardous chemicals.",
        example_cn: "工人在处理危险化学品时必须穿戴防护装备。"
    },
    { 
        id: 73, 
        word: "perforce", 
        phonetic: "/pəˈfɔːs/", 
        meaning: "adv. 必然地，必定",
        example_en: "Since the bridge was closed, we perforce had to take the longer route.",
        example_cn: "由于桥梁被封，我们别无选择，只好绕远路。"
    },
    { 
        id: 74, 
        word: "rosy", 
        phonetic: "/ˈrəʊzi/", 
        meaning: "adj. 乐观的，美好的",
        example_en: "Despite the crisis, the administration painted a rosy picture of the economy.",
        example_cn: "尽管面临危机，政府仍对经济描绘出一幅乐观的图景。"
    },
    { 
        id: 75, 
        word: "foretell", 
        phonetic: "/fɔːˈtel/", 
        meaning: "v. 预言，预测",
        example_en: "No one could have foretold the disastrous outcome of the experiment.",
        example_cn: "谁也无法预言这项实验会产生如此灾难性的结果。"
    },
    { 
        id: 76, 
        word: "amphibian", 
        phonetic: "/æmˈfɪbiən/", 
        meaning: "n. 两栖动物",
        example_en: "Frogs and salamanders are common examples of amphibians.",
        example_cn: "青蛙和蝾螈是常见的两栖动物。"
    },
    { 
        id: 77, 
        word: "unfeeling", 
        phonetic: "/ʌnˈfiːlɪŋ/", 
        meaning: "adj. 无情的，冷酷的",
        example_en: "His unfeeling response to her distress was deeply upsetting.",
        example_cn: "他对她的痛苦所表现出的冷漠态度令人非常难过。"
    },
    { 
        id: 78, 
        word: "compartmentalize", 
        phonetic: "/ˌkɒmpɑːtˈmentəlaɪz/", 
        meaning: "v. 划分，区分",
        example_en: "He has learned to compartmentalize his stressful job from his family life.",
        example_cn: "他已经学会了将压力巨大的工作与家庭生活分隔开来。"
    },
    { 
        id: 79, 
        word: "pedigree", 
        phonetic: "/ˈpedɪɡriː/", 
        meaning: "n. 血统，背景，门第",
        example_en: "The candidate has an impressive academic pedigree, having studied at top universities.",
        example_cn: "这位候选人曾在顶尖大学学习，拥有令人瞩目的学术背景。"
    },
    { 
        id: 80, 
        word: "mutation", 
        phonetic: "/mjuːˈteɪʃn/", 
        meaning: "n. 突变，变异",
        example_en: "The disease is caused by a genetic mutation passed down through families.",
        example_cn: "这种疾病是由家族遗传的基因突变引起的。"
    },
    { 
        id: 81, 
        word: "flabbergast", 
        phonetic: "/ˈflæbəɡɑːst/", 
        meaning: "v. 使大吃一惊，使哑然失色",
        example_en: "I was absolutely flabbergasted when they announced the winner.",
        example_cn: "当他们宣布获胜者时，我完全惊呆了。"
    },
    { 
        id: 82, 
        word: "objectionable", 
        phonetic: "/əbˈdʒekʃənəbl/", 
        meaning: "adj. 令人反感的，讨厌的",
        example_en: "Many parents found the violent content of the video game highly objectionable.",
        example_cn: "许多父母发现这款电子游戏的暴力内容非常令人反感。"
    },
    { 
        id: 83, 
        word: "superposition", 
        phonetic: "/ˌsuːpəpəˈzɪʃn/", 
        meaning: "n. 叠加，重叠",
        example_en: "The principle of superposition is fundamental to understanding quantum mechanics.",
        example_cn: "叠加原理是理解量子力学的基础。"
    },
    { 
        id: 84, 
        word: "impermanence", 
        phonetic: "/ɪmˈpɜːmənəns/", 
        meaning: "n. 短暂性，无常",
        example_en: "The fading autumn leaves are a beautiful reminder of life's impermanence.",
        example_cn: "逐渐凋零的秋叶是对生命无常的美丽提醒。"
    },
    { 
        id: 85, 
        word: "stupefaction", 
        phonetic: "/ˌstjuːpɪˈfækʃn/", 
        meaning: "n. 惊愕，茫然",
        example_en: "She stared at the enormous bill in complete stupefaction.",
        example_cn: "她看着巨额账单，陷入了完全的惊愕之中。"
    },
    { 
        id: 86, 
        word: "anarchism", 
        phonetic: "/ˈænəkɪzəm/", 
        meaning: "n. 无政府主义",
        example_en: "During his college years, he was heavily influenced by the political theories of anarchism.",
        example_cn: "大学期间，他深受无政府主义政治理论的影响。"
    },
    { 
        id: 87, 
        word: "renunciation", 
        phonetic: "/rɪˌnʌnsiˈeɪʃn/", 
        meaning: "n. 放弃，拒绝",
        example_en: "The king's formal renunciation of the throne shocked the entire nation.",
        example_cn: "国王正式宣布放弃王位，震惊了全国。"
    },
    { 
        id: 88, 
        word: "quintessential", 
        phonetic: "/ˌkwɪntɪˈsenʃl/", 
        meaning: "adj. 典型的，精髓的",
        example_en: "It was the quintessential British comedy, full of subtle irony.",
        example_cn: "这是一部典型的英国喜剧，充满了微妙的讽刺。"
    },
    { 
        id: 89, 
        word: "methodical", 
        phonetic: "/məˈθɒdɪkl/", 
        meaning: "adj. 有条理的，井然有序的",
        example_en: "The detective took a highly methodical approach to gathering evidence at the crime scene.",
        example_cn: "这位警探在案发现场采取了非常有条理的取证方法。"
    },
    { 
        id: 90, 
        word: "hyperbolic", 
        phonetic: "/ˌhaɪpəˈbɒlɪk/", 
        meaning: "adj. 夸张的",
        example_en: "His hyperbolic claims about the product's miraculous benefits were not taken seriously.",
        example_cn: "他关于该产品具有神奇功效的夸张言辞并没有被当真。"
    },
    { 
        id: 91, 
        word: "hallmark", 
        phonetic: "/ˈhɔːlmɑːk/", 
        meaning: "n. 标志，特征",
        example_en: "A meticulous attention to detail is the hallmark of a great craftsman.",
        example_cn: "一丝不苟地关注细节是伟大工匠的标志。"
    },
    { 
        id: 92, 
        word: "splinter", 
        phonetic: "/ˈsplɪntə(r)/", 
        meaning: "n. 碎片 v. 分裂",
        example_en: "The political party splintered into several smaller factions after the election defeat.",
        example_cn: "选举失败后，该政党分裂成了几个较小的派别。"
    },
    { 
        id: 93, 
        word: "lugubrious", 
        phonetic: "/ləˈɡuːbriəs/", 
        meaning: "adj. 悲哀的，阴郁的",
        example_en: "He maintained a lugubrious expression throughout the otherwise cheerful party.",
        example_cn: "在原本欢乐的聚会上，他始终保持着一副阴郁的表情。"
    },
    { 
        id: 94, 
        word: "taxonomist", 
        phonetic: "/tækˈsɒnəmɪst/", 
        meaning: "n. 分类学家",
        example_en: "The taxonomist spent years classifying the newly discovered species of orchids.",
        example_cn: "这位分类学家花了数年时间对新发现的兰花物种进行分类。"
    }
];