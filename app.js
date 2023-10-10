const TelegramBot = require('node-telegram-bot-api');

const token = '6404928803:AAH5ptMCn3y-4HQWFRa1mBH63dJ7-nY7uMo'; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });

const infoMessages = {
    '/descripcion': `**Descripción:** 🌐
- Desarrolladas a partir de la informática, microelectrónica y telecomunicaciones, las tecnologías de la información y comunicación tienen una intensa presencia en las sociedades desarrolladas, a nivel empresarial e individual a través de aplicaciones basadas en internet, comercio electrónico, dispositivos móviles, entre otras plataformas. 📱💻`,

    '/programas': `- **Técnico Superior Universitario (TSU)**
  - Áreas TSU: Desarrollo de Software Multiplataforma, Entornos Virtuales y Negocios Digitales, Infraestructura de Redes Digitales
  - Plan de Estudios 2009 (Sistemas Informáticos, Multimedia y Comercio Electrónico, Redes y Telecomunicaciones)
  - [Más información sobre los programas TSU](https://www.utch.edu.mx/index.php/tecnologias/) 🔍📘
- **Ingeniería**
  - Carreras: Ingeniería en Desarrollo y Gestión de Software, Ingeniería en Entornos Virtuales y Negocios Digitales, Ingeniería en Redes Inteligentes y Ciberseguridad
  - [Más información sobre las carreras de Ingeniería](https://www.utch.edu.mx/index.php/tecnologias/) 🎓🖥️`,

    '/porqueestudiar': `**¿Por qué estudiar Tecnologías de la Información?** 🚀
- Una carrera en T.I. te permite diseñar, crear, innovar, hacer un cambio y trabajar prácticamente cualquier área de interés, garantizando una creciente y amplia demanda laboral. 💼`,

    '/posibilidades': `**Posibilidades Laborales:**
- Gerente de sistemas y de telecomunicaciones. 💻
- Administrador de redes y sistemas. 🌐
- Coordinador de comercio electrónico. 🛒
- Coordinador de plataformas de educación a distancia. 🎓
- Gerente del Departamento de Sistemas. 👨‍💼
- Gerente de seguridad en cómputo. 🔒
- Jefe de proyectos de Comercio electrónico y Multimedia. 🎥
- Diseñador, programador y administrador de sitios web y de comercio electrónico. 🌐💻
- Diseñador y desarrollador de proyectos multimedia. 🎨🎮`,

    '/contacto': `**Contacto UTCH:** 🏢
- Dirección: Av. Montes Americanos #9501, Col. Sector 35, C.P. 31216, Chihuahua, Chih., México.
- Teléfono: (614) 432 2000 ☎️
- Email: tecnologias@utch.edu.mx ✉️
- [Sitio web de la UTCH](https://www.utch.edu.mx) 🌐`
};

const helpMessages = {
    '/ayuda': 'Muestra esta ayuda con los comandos disponibles. 🆘',
    '/info': 'Obtén información sobre Tecnologías de la Información en UTCH. ℹ️',
    '/otroscomandos': 'Lista otros comandos disponibles. 📋',
    '/contacto': 'Obtén información de contacto de UTCH. 📞'
    // Agrega más comandos de ayuda según sea necesario
};

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text.toLowerCase(); // Convierte el texto del mensaje a minúsculas para evitar problemas de formato

    if (messageText.startsWith('/start')) {
        const startMessage = '¡Bienvenido al bot de Tecnologías de la Información en UTCH! 🎉\n\n' +
            'Este bot te proporcionará información sobre los programas educativos, razones para estudiar Tecnologías de la Información, posibilidades laborales y detalles de contacto de la UTCH.\n\n' +
            'Puedes usar los siguientes comandos:\n' +
            '/descripcion - Descripción de Tecnologías de la Información en UTCH\n' +
            '/programas - Programas Educativos en UTCH\n' +
            '/porqueestudiar - Razones para estudiar Tecnologías de la Información\n' +
            '/posibilidades - Posibilidades Laborales en T.I.\n' +
            '/contacto - Información de contacto de UTCH\n' +
            '/ayuda - Mostrar comandos disponibles';
        bot.sendMessage(chatId, startMessage);
    } else if (messageText.startsWith('/descripcion')) {
        bot.sendMessage(chatId, infoMessages['/descripcion']);
    } else if (messageText.startsWith('/programas')) {
        bot.sendMessage(chatId, infoMessages['/programas']);
    } else if (messageText.startsWith('/porqueestudiar')) {
        bot.sendMessage(chatId, infoMessages['/porqueestudiar']);
    } else if (messageText.startsWith('/posibilidades')) {
        bot.sendMessage(chatId, infoMessages['/posibilidades']);
    } else if (messageText.startsWith('/contacto')) {
        bot.sendMessage(chatId, infoMessages['/contacto']);
    } else if (messageText.startsWith('/ayuda')) {
        let helpText = 'Lista de comandos disponibles:\n';
        Object.keys(helpMessages).forEach(command => {
            helpText += `${command} - ${helpMessages[command]}\n`;
        });
        bot.sendMessage(chatId, helpText);
    } else if (messageText.startsWith('/info')) {
        // Muestra información general de Tecnologías de la Información en UTCH
        const infoText = 'Información general sobre Tecnologías de la Información en UTCH:\n\n' +
            '/descripcion - Descripción de Tecnologías de la Información en UTCH\n' +
            '/programas - Programas Educativos en UTCH\n' +
            '/porqueestudiar - Razones para estudiar Tecnologías de la Información\n' +
            '/posibilidades - Posibilidades Laborales en T.I.\n' +
            '/contacto - Información de contacto de UTCH\n';
        bot.sendMessage(chatId, infoText);
    }
});