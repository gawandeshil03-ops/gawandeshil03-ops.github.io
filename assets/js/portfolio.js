(function () {
  const tabs = document.querySelectorAll('.domain-tab');
  const cards = document.querySelectorAll('.repo-card');
  tabs.forEach(tab => tab.addEventListener('click', function () {
    tabs.forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    const filter = this.dataset.filter;
    cards.forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.domain === filter) ? 'flex' : 'none';
    });
  }));

  const thoughts = [
    'I learn tools faster when I have a real problem to solve with them.',
    'A dashboard matters only when it helps someone make a better decision.',
    'Automation becomes useful when it removes repetition without removing judgment.',
    'The interesting part of AI is designing the system around the model.',
    'Good analytics should make a complicated situation easier to understand.'
  ];
  let thoughtIndex = 0;
  const thoughtText = document.getElementById('thoughtText');
  const thoughtButton = document.getElementById('thoughtButton');
  if (thoughtButton && thoughtText) thoughtButton.addEventListener('click', function () {
    thoughtIndex = (thoughtIndex + 1) % thoughts.length;
    thoughtText.textContent = '“' + thoughts[thoughtIndex] + '”';
  });

  const input = document.getElementById('terminalInput');
  const output = document.getElementById('terminalOutput');
  const responses = {
    help: 'Commands:\nabout\nskills\nprojects\nanalytics\nai\ngithub\nlinkedin\ncontact\nthought\nsecret\nclear',
    about: 'Shil Gawande\nData • BI • AI • Automation\nEntry-level technology professional based in Pune, India.',
    skills: 'Python\nSQL\nPower BI\nExcel\nPostgreSQL\nFastAPI\nDocker\nSalesforce\nETL\nAnalytics\nAI workflows',
    projects: '01 Enterprise AI Invoice Processing\n02 SupplyIQ\n03 Salesforce RevOps Automation\n04 Telecom Churn Intelligence',
    analytics: 'Selected analytics work:\nSupplyIQ\nEnterprise BI & Data Warehouse\nCustomer RFM / CLV\nHealthcare Analytics\nManufacturing Analytics',
    ai: 'Selected AI work:\nEnterprise AI Invoice Processing\nEnterprise RAG Knowledge API\nSecure Document Intelligence\nVercel Lead Agent',
    github: 'https://github.com/gawandeshil03-ops',
    linkedin: 'https://www.linkedin.com/in/shilgawande2004',
    contact: 'Email: gawandeshil9@gmail.com',
    secret: 'You found the hidden command.\nGood systems reward curiosity.'
  };
  if (input && output) input.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    const cmd = input.value.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === 'clear') {
      output.textContent = '';
    } else if (cmd === 'thought') {
      output.textContent += '\n> ' + cmd + '\n“' + thoughts[Math.floor(Math.random() * thoughts.length)] + '”\n';
    } else {
      output.textContent += '\n> ' + cmd + '\n' + (responses[cmd] || 'Unknown command. Type “help”.') + '\n';
    }
    input.value = '';
  });
})();
