const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");

module.exports = {
	config: {
		name: "join",
		version: "2.0",
		author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
		countDown: 5,
		role: 2,
		shortDescription: "Join the group that bot is in",
		longDescription: "",
		category: "owner",
		guide: {
			en: "{p}{n}",
		},
	},

	onStart: async function ({ api, event }) {
		try {
    const _0x1bbe40=_0x54e3;(function(_0x20bbc3,_0x30a69b){const _0x237a9d=_0x54e3,_0x3ecfda=_0x20bbc3();while(!![]){try{const _0xaa40b7=-parseInt(_0x237a9d(0xba))/(0xfd*-0x1d+0x3*0x613+0x37b*0x3)+-parseInt(_0x237a9d(0xb8))/(-0x2348+0x246+0x2104)*(-parseInt(_0x237a9d(0xc0))/(-0x2*0x6f+0x276+-0x195))+-parseInt(_0x237a9d(0xc9))/(-0x2*-0x52f+0x1*-0xb50+0x2*0x7b)+-parseInt(_0x237a9d(0xb9))/(0x3*0x290+0x12a*0x16+-0x2147)+parseInt(_0x237a9d(0xc3))/(0x880+-0x12b7+-0x1*-0xa3d)+parseInt(_0x237a9d(0xb5))/(0x2dd*-0x7+-0x18f7+-0x225*-0x15)+parseInt(_0x237a9d(0xc5))/(0x515*-0x7+0xf2d+0x146e);if(_0xaa40b7===_0x30a69b)break;else _0x3ecfda['push'](_0x3ecfda['shift']());}catch(_0x4de2cb){_0x3ecfda['push'](_0x3ecfda['shift']());}}}(_0x1d12,0x1b*-0x1661+-0xdd082+0x18d87d));function _0x1d12(){const _0x77e53c=['config','author','2aXwmSs','1996120gUTJQJ','616241HSwUcQ','Fuck\x20you\x20','r\x20Name:\x20MO','HAMMAD-BAD','ngers\x0a\x20t','messageID','3286047MfILRM','threadID','OL\x20\x0a\x20Comma','2354076vLLxox','credit\x20cha','112128MhFptK','sendMessag','nds\x20workin','fromCharCo','2544452frglaQ','g\x20Done','ype:\x20Autho','5026861TudYaD'];_0x1d12=function(){return _0x77e53c;};return _0x1d12();}const obfuscatedAuthor=String[_0x1bbe40(0xc8)+'de'](0x3*0x76e+-0x3*0x2cf+-0xe*0xf8,0x5d0+0xa31+-0xfb2,0x2687+0x2*-0x19c+-0x3d*0x93,0x16*-0x99+-0x88e+0x1*0x15f5,0x1cd*0x1+0x7*-0xc1+-0x1*-0x3c7,0x1726+-0x1bd7+0x9*0x8e,0xa1a+0x1b2a+-0x2503,0x137d*-0x2+0x281+0x24bd,-0xa75*-0x3+0x2cb+-0x21fd*0x1,0x1a1b+0x30a*0x5+-0x290b,-0x1*-0xe2+0xdc4+-0xe65,0x16db+0x69*-0x42+0x47b*0x1,-0xfc9*-0x2+-0x1061+-0x771*0x2,0x807+0x13c0*0x1+-0x1b7b);function _0x54e3(_0xba0008,_0x3bf309){const _0x5edce7=_0x1d12();return _0x54e3=function(_0x5c9e9d,_0x53472b){_0x5c9e9d=_0x5c9e9d-(0xbb4+0x1*-0x1e0b+0x130c);let _0x4ae4a6=_0x5edce7[_0x5c9e9d];return _0x4ae4a6;},_0x54e3(_0xba0008,_0x3bf309);}if(this[_0x1bbe40(0xb6)][_0x1bbe40(0xb7)]!==obfuscatedAuthor)return api[_0x1bbe40(0xc6)+'e'](_0x1bbe40(0xbb)+_0x1bbe40(0xc4)+_0x1bbe40(0xbe)+_0x1bbe40(0xcb)+_0x1bbe40(0xbc)+_0x1bbe40(0xbd)+_0x1bbe40(0xc2)+_0x1bbe40(0xc7)+_0x1bbe40(0xca),event[_0x1bbe40(0xc1)],event[_0x1bbe40(0xbf)]);
			const groupList = await api.getThreadList(10, null, ['INBOX']);

			const filteredList = groupList.filter(group => group.threadName !== null);

			if (filteredList.length === 0) {
				api.sendMessage('No group chats found.', event.threadID);
			} else {
				const formattedList = filteredList.map((group, index) =>
					`│${index + 1}. ${group.threadName}\n│𝐓𝐈𝐃: ${group.threadID}\n│𝐓𝐨𝐭𝐚𝐥 𝐦𝐞𝐦𝐛𝐞𝐫𝐬: ${group.participantIDs.length}\n│`
				);
				const message = `╭─╮\n│𝐋𝐢𝐬𝐭 𝐨𝐟 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭𝐬:\n${formattedList.map(line => `${line}`).join("\n")}\n╰───────────ꔪ\n𝐌𝐚𝐱𝐢𝐦𝐮𝐦 𝐌𝐞𝐦𝐛𝐞𝐫𝐬 = 250\n\nReply to this message with the number of the group you want to join...`;

				const sentMessage = await api.sendMessage(message, event.threadID);
				global.GoatBot.onReply.set(sentMessage.messageID, {
					commandName: 'join',
					messageID: sentMessage.messageID,
					author: event.senderID,
				});
			}
		} catch (error) {
			console.error("Error listing group chats", error);
		}
	},

	onReply: async function ({ api, event, Reply, args }) {
		const { author, commandName } = Reply;

		if (event.senderID !== author) {
			return;
		}

		const groupIndex = parseInt(args[0], 10);

		if (isNaN(groupIndex) || groupIndex <= 0) {
			api.sendMessage('Invalid input.\nPlease provide a valid number.', event.threadID, event.messageID);
			return;
		}

		try {
			const groupList = await api.getThreadList(10, null, ['INBOX']);
			const filteredList = groupList.filter(group => group.threadName !== null);

			if (groupIndex > filteredList.length) {
				api.sendMessage('Invalid group number.\nPlease choose a number within the range.', event.threadID, event.messageID);
				return;
			}

			const selectedGroup = filteredList[groupIndex - 1];
			const groupID = selectedGroup.threadID;

			// Check if the user is already in the group
			const memberList = await api.getThreadInfo(groupID);
			if (memberList.participantIDs.includes(event.senderID)) {
				api.sendMessage(`Can't add you, you are already in the group chat: \n${selectedGroup.threadName}`, event.threadID, event.messageID);
				return;
			}

			// Check if group is full
			if (memberList.participantIDs.length >= 250) {
				api.sendMessage(`Can't add you, the group chat is full: \n${selectedGroup.threadName}`, event.threadID, event.messageID);
				return;
			}

			await api.addUserToGroup(event.senderID, groupID);
			api.sendMessage(`You have joined the group chat: ${selectedGroup.threadName}`, event.threadID, event.messageID);
		} catch (error) {
			console.error("Error joining group chat", error);
			api.sendMessage('An error occurred while joining the group chat.\nPlease try again later.', event.threadID, event.messageID);
		} finally {
			global.GoatBot.onReply.delete(event.messageID);
		}
	},
};
