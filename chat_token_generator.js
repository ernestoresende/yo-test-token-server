require("dotenv").config();

const AccessToken = require("twilio").jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

function chatTokenGenerator(identity) {
  const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
  const twilioApiKey = process.env.TWILIO_API_KEY;
  const twilioApiSecret = process.env.TWILIO_API_SECRET;
  const twilioChatServiceSid = process.env.TWILIO_CHAT_SERVICE_SID;

  const token = new AccessToken(
    twilioAccountSid,
    twilioApiKey,
    twilioApiSecret
  );

  token.identity = identity;

  const chatGrant = new ChatGrant({
    serviceSid: twilioChatServiceSid,
  });

  token.addGrant(chatGrant);

  return token.toJwt();
}

module.exports = chatTokenGenerator;
