const { getTime, drive } = global.utils;
if (!global.temp.welcomeEvent)
	global.temp.welcomeEvent = {};

function getNumber(n) {
	const s = ["th", "st", "nd", "rd"];
	const v = n % 100;
	return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

module.exports = {
	config: {
		name: "welcome",
		version: "1.7",
		author: "NTKhang",
		category: "events"
	},
	langs: {
		en: {
			session1: "𝗺𝗼𝗿𝗻𝗶𝗻𝗴",
			session2: "𝗻𝗼𝗼𝗻",
			session3: "𝗮𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻",
			session4: "𝗲𝘃𝗲𝗻𝗶𝗻𝗴",
			welcomeMessage: `╭──╯𝐖𝐄𝐋𝐂𝐎𝐌𝐄-𝐁𝐊╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑: 𝐌𝐁𝐂-𝐊𝟏𝐍𝐆-𝟎𝟎𝟕\n├‣ 𝐁𝐎𝐓-𝐏𝐑𝐄𝐅𝐈𝐗:【 ${global.GoatBot.config.prefix} 】\n├‣ 𝐎𝐖𝐍𝐄𝐑+𝐀𝐃𝐌𝐈𝐍+𝐂𝐎𝐍𝐓𝐄𝐊\n├‣ 𝐦𝐠𝐬: m.me/100001381266797\n├‣ 𝐦𝐠𝐬: https://m.me/MBC.K1NG.007\n ├‣ 𝐎𝐖𝐍𝐄𝐑: 𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃-𝐁𝐀𝐃𝐎𝐋\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕╭──╯`,
			multiple1: "𝘆𝗼𝘂",
			multiple2: "𝘆𝗼𝘂 𝗴𝘂𝘆𝘀",
			defaultWelcomeMessage: `╔════•|      💛      |•════╗\n ❤️আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ❤️\n╚════•|      💛      |•════╝\n\n━❯🅆🄴🄻🄲🄾🄼🄴➤\n\n━❯🅽🅴🆆➤\n\n━❯🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌➤\n\n━❯{userName}➤\n\n༄✺আ্ঁপ্ঁনা্ঁকে্ঁ আ্ঁমা্ঁদে্ঁর্ঁ✺࿐\n\n{boxName}\n\n 🌺🌿🌸—এ্ঁর্ঁ প্ঁক্ষ্ঁ🍀থে্ঁকে্ঁ🍀—🌸🌿\n\n 🌿_ভা্ঁলো্ঁবা্ঁসা্ঁ_অ্ঁভি্ঁরা্ঁম্ঁ_🌿\n\n༄✺আঁপঁনিঁ এঁইঁ গ্রুঁপেঁর {memberNumber} নঁং মে্ঁম্বা্ঁরঁ ࿐\n\nআমাদের সাথে সময় দেওয়া ও পাশে থাকার অনুরোধ রইলো !!-🍂🌺🥀\n\n🦋༎❤❤༎\n\nⵗⵗ̥̥̊̊ⵗ̥̥̥̥̊̊̊ⵗ̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̥̥̥̥̥̊̊̊ⵗ̥̥̥̥̥̥̥̥̥̥̊̊ⵗ̥̥̥̥̥̥̥̥̥̥̥ⵗ̥̥̥̥̥̥̥̥̥̥̊̊ⵗ̥̥̥̥̥̥̥̥̥̊̊̊ⵗ̥̥̥̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̊̊̊ⵗ̥̥̊̊ \n\n🦋║ლ💞 💞 ლ║🦋\n\n💐☘️-ধন্যবাদ প্রিয়-☘️💐\n𝄞❤️⋆⃝⑅⑅⃝❤️»̶̶͓͓̽̽̽»̶̶͓͓̽̽̽.𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑: 𝐌𝐁𝐂-𝐊𝟏𝐍𝐆-𝟎𝟎𝟕❤️⃪⃝⃘᭄⃕❤️\n\n• 𝐀𝐝𝐝-𝐁𝐲: {oo}`
		}
	},
	onStart: async ({ threadsData, message, event, api, getLang,usersData }) => {
		if (event.logMessageType == "log:subscribe")
			return async function () {
				const hours = getTime("HH");
				const { threadID } = event;
				const { nickNameBot } = global.GoatBot.config;
				const prefix = global.utils.getPrefix(threadID);
				const dataAddedParticipants = event.logMessageData.addedParticipants;
				const threadData = await threadsData.get(threadID);
				const currentTotalMembers = event.participantIDs.length - dataAddedParticipants.length; 
				if (dataAddedParticipants.some((item) => item.userFbId == api.getCurrentUserID())) {
					if (nickNameBot)
						api.changeNickname(nickNameBot, threadID, api.getCurrentUserID());
					return message.send(getLang("welcomeMessage", prefix));
				}

				if (!global.temp.welcomeEvent[threadID])
					global.temp.welcomeEvent[threadID] = {
						joinTimeout: null,
						dataAddedParticipants: []
					};
				global.temp.welcomeEvent[threadID].dataAddedParticipants.push(...dataAddedParticipants);
				clearTimeout(global.temp.welcomeEvent[threadID].joinTimeout);
				global.temp.welcomeEvent[threadID].joinTimeout = setTimeout(async function () {
					const threadData = await threadsData.get(threadID);
					if (threadData.settings.sendWelcomeMessage == false)
						return;
					const dataAddedParticipants = global.temp.welcomeEvent[threadID].dataAddedParticipants;
					const dataBanned = threadData.data.banned_ban || [];
					const threadName = threadData.threadName;
					const userName = [];
					const memberNumbers = [];
					const mentions = [];

					for (let i = 0; i < dataAddedParticipants.length; i++) {
						const user = dataAddedParticipants[i];
						if (dataBanned.some((item) => item.id == user.userFbId))
							continue;
						userName.push(user.fullName);
						memberNumbers.push(getNumber(currentTotalMembers + i + 1));
						mentions.push({
							tag: user.fullName,
							id: user.userFbId
						});
					}
					const oo = await usersData.getName(event.author);
					if (userName.length == 0) return;
					let { welcomeMessage = getLang("defaultWelcomeMessage") } =
						threadData.data;
					const form = {
						mentions: mentions
					};
					welcomeMessage = welcomeMessage
						.replace(/\{userName\}|\{userNameTag\}/g, userName.join(", "))
						.replace(/\{boxName\}|\{threadName\}/g, threadName).replace(/\{oo\}|\{oo\}/g,oo).replace(
							/\{multiple\}/g,
							userName.length > 1 ? getLang("multiple2") : getLang("multiple1")
						)
						.replace(
							/\{session\}/g,
							hours <= 10
								? getLang("session1")
								: hours <= 12
									? getLang("session2")
									: hours <= 18
										? getLang("session3")
										: getLang("session4"))
						.replace(/\{memberNumber\}/g, memberNumbers.join(", "));

					form.body = welcomeMessage;
					if (threadData.data.welcomeAttachment) {
						const files = threadData.data.welcomeAttachment;
						const attachments = files.reduce((acc, file) => {
							acc.push(drive.getFile(file, "stream"));
							return acc;
						}, []);
						form.attachment = (await Promise.allSettled(attachments))
							.filter(({ status }) => status == "fulfilled")
							.map(({ value }) => value);
					}
					message.send(form);
					delete global.temp.welcomeEvent[threadID];
				}, 1500);
			};
	}
};