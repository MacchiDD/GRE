/**
 * 托福词库 (TOEFL Bank)
 */
const toeflBank = [
    {
        id: 1, // 直接从 1 开始，放心写
        word: "abandon",
        meaning: "vt. 放弃，遗弃；放纵",
        phonetic: "əˈbændən",
        example_en: "The baby was abandoned by his parents.",
        example_cn: "这个婴儿被父母遗弃了。"
    },
    {
        id: 2,
        word: "capability",
        meaning: "n. 能力，才干；潜力",
        phonetic: "ˌkeɪpəˈbɪləti",
        example_en: "She has the capability to become a great leader.",
        example_cn: "她具备成为伟大领导者的能力。"
    }
];

/**
 * GRE 词库 (GRE Bank)
 */
const greBank = [
    {
        id: 1, // GRE 也可以从 1 开始，因为存储在不同的 LocalStorage 键值中
        word: "aberrant",
        meaning: "adj. 异常的，偏离常规的",
        phonetic: "æˈberənt",
        example_en: "This aberrant behavior requires an explanation.",
        example_cn: "这种异常行为需要一个解释。"
    },
    {
        id: 2,
        word: "cacophony",
        meaning: "n. 刺耳的声音，不和谐的声音",
        phonetic: "kəˈkɒfəni",
        example_en: "A cacophony of car horns filled the air.",
        example_cn: "空气中弥漫着刺耳的汽车喇叭声。"
    }
];

/**
 * 随手记生词题库 (Personal Bank)
 */
const personalBank = [
    {
        id: 1, // 同样可以从 1 开始
        word: "serendipity",
        meaning: "n. 意外发现珍奇事物的本领；机缘凑巧",
        phonetic: "ˌserənˈdɪpəti",
        example_en: "They found each other by pure serendipity.",
        example_cn: "他们纯粹是机缘巧合才找到彼此的。"
    }
];