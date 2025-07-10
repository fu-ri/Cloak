    const btn = document.getElementById('side-button');
    const drawer = document.getElementById('side-drawer'); 
    const backBtn = document.getElementById('return');
    const presetsBtn = document.getElementById('presets');
    const settingsBtn = document.getElementById('settings');
    const cloaking = document.getElementById('aboutBlank');
    const settingsIcon = settingsBtn.querySelector('.settings-icon');
    const presetNames = [
  "Google",
  "Google Drive",
  "Google Docs",
  "Google Sheets",
  "Google Calendar",
  "YouTube",
  "Wikipedia",
  "Gmail",
  "Classroom",
  "Google Scholar",
  "Khan Academy",
  "Quizlet",
  "Notion",
  "Grammarly",
  "Desmos",
  "Stack Overflow",
  "Outlook",
  "Zoom",
  "Slack",
  "Trello",
  "Canva",
  "Dropbox",
  "LinkedIn",
  "Microsoft",
  "Reddit",
  "Amazon",
  "Medium",
  "EdX",
  "Coursera",
  "OpenStax",
  "Wolfram Alpha",
  "arXiv",
  "JSTOR",
  "Overleaf",
  "Zotero",
  "PBS",
  "National Geographic",
  "Project Gutenberg",
  "Internet Archive",
  "Wayback Machine",
  "eBay",
  "PayPal",
  "Yahoo",
  "Bing",
  "Apple",
  "Code.org",
  "Merriam-Webster",
  "RefDesk",
  "WordPress",
  "Dev.to"
];
const presetFavicons = [
  "https://www.google.com/favicon.ico", // Google
  "https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_5.ico", // Google Drive
  "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico", // Google Docs
  "https://ssl.gstatic.com/docs/spreadsheets/favicon3.ico", // Google Sheets
  "https://cdn1.iconfinder.com/data/icons/google-new-logos-1/32/google_calendar_new_logo-512.png", // Google Calendar ✅ WORKS
  "https://www.google.com/s2/favicons?sz=64&domain=youtube.com",
  "https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org",
  "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico", // Gmail ✅ FIXED
  "https://ssl.gstatic.com/classroom/favicon.png",
  "https://scholar.google.com/favicon.ico", // Google Scholar
  "https://www.google.com/s2/favicons?sz=64&domain=khanacademy.org",
  "https://www.google.com/s2/favicons?sz=64&domain=quizlet.com",
  "https://www.google.com/s2/favicons?sz=64&domain=notion.so",
  "https://www.google.com/s2/favicons?sz=64&domain=grammarly.com",
  "https://www.google.com/s2/favicons?sz=64&domain=desmos.com",
  "https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com",
  "https://www.google.com/s2/favicons?sz=64&domain=outlook.live.com",
  "https://www.google.com/s2/favicons?sz=64&domain=zoom.us",
  "https://www.google.com/s2/favicons?sz=64&domain=slack.com",
  "https://www.google.com/s2/favicons?sz=64&domain=trello.com",
  "https://www.google.com/s2/favicons?sz=64&domain=canva.com",
  "https://www.google.com/s2/favicons?sz=64&domain=dropbox.com",
  "https://www.google.com/s2/favicons?sz=64&domain=linkedin.com",
  "https://www.google.com/s2/favicons?sz=64&domain=microsoft.com",
  "https://www.google.com/s2/favicons?sz=64&domain=reddit.com",
  "https://www.google.com/s2/favicons?sz=64&domain=amazon.com",
  "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
  "https://www.google.com/s2/favicons?sz=64&domain=edx.org",
  "https://www.google.com/s2/favicons?sz=64&domain=coursera.org",
  "https://www.google.com/s2/favicons?sz=64&domain=openstax.org",
  "https://www.google.com/s2/favicons?sz=64&domain=wolframalpha.com",
  "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
  "https://www.google.com/s2/favicons?sz=64&domain=jstor.org",
  "https://www.google.com/s2/favicons?sz=64&domain=overleaf.com",
  "https://www.google.com/s2/favicons?sz=64&domain=zotero.org",
  "https://www.google.com/s2/favicons?sz=64&domain=pbs.org",
  "https://www.google.com/s2/favicons?sz=64&domain=nationalgeographic.com",
  "https://www.google.com/s2/favicons?sz=64&domain=gutenberg.org",
  "https://www.google.com/s2/favicons?sz=64&domain=archive.org",
  "https://www.google.com/s2/favicons?sz=64&domain=archive.org/web",
  "https://www.google.com/s2/favicons?sz=64&domain=ebay.com",
  "https://www.google.com/s2/favicons?sz=64&domain=paypal.com",
  "https://www.google.com/s2/favicons?sz=64&domain=yahoo.com",
  "https://www.google.com/s2/favicons?sz=64&domain=bing.com",
  "https://www.google.com/s2/favicons?sz=64&domain=apple.com",
  "https://www.google.com/s2/favicons?sz=64&domain=code.org",
  "https://www.google.com/s2/favicons?sz=64&domain=merriam-webster.com",
  "https://www.google.com/s2/favicons?sz=64&domain=refdesk.com",
  "https://www.google.com/s2/favicons?sz=64&domain=wordpress.com",
  "https://www.google.com/s2/favicons?sz=64&domain=dev.to"
];

let blankOn = false;
let inSettings = false;
let lastPage = 'page1';
let cloakWindow = null;

function blankCloak(title, favicon) {
  if (cloakWindow && !cloakWindow.closed) {
    cloakWindow.focus();
    return;
  }

  cloakWindow = window.open('about:blank', '_blank');

  if (!cloakWindow) {
    alert('Popup blocked! Please allow popups for this site.');
    return;
  }

  // Set title and favicon only once after opening
  cloakWindow.document.title = title || 'New Tab';

  if (favicon) {
    const link = cloakWindow.document.createElement('link');
    link.rel = 'icon';
    link.href = favicon;
    cloakWindow.document.head.appendChild(link);
  }

  const iframe = cloakWindow.document.createElement('iframe');
  iframe.src = window.location.href;
  iframe.style.border = 'none';
  iframe.style.width = '100vw';
  iframe.style.height = '100vh';
  iframe.style.margin = '0';
  iframe.style.padding = '0';

  cloakWindow.document.body.style.margin = '0';
  cloakWindow.document.body.style.padding = '0';
  cloakWindow.document.body.appendChild(iframe);
}


cloaking.addEventListener('change', (e) => {
  blankOn = e.target.checked;
});

    btn.addEventListener('click', function () {
  btn.classList.toggle('moved');
  drawer.classList.toggle('moved');

  // Move the button alongside the drawer
  if (drawer.classList.contains('moved')) {
    btn.style.right = drawer.offsetWidth + 'px';
  } else {
    btn.style.right = '0';
  }
});


    document.getElementById('go').addEventListener('click', function () {
  const title = document.getElementById('tabTitle').value.trim();
  const favic = document.getElementById('favic').value.trim();

  if (blankOn === true) {
    blankCloak(title, favic);
  } else {
    if (title !== "") {
      document.title = title;
    }
    if (favic !== "") {
      let iconLink = document.querySelector("link[rel~='icon']");
      if (!iconLink) {
        iconLink = document.createElement('link');
        iconLink.rel = 'icon';
        document.head.appendChild(iconLink);
      }
      iconLink.href = favic;
    }
  }
});


    backBtn.addEventListener('click', () => {
      document.getElementById('page1').classList.remove('hidden');
      document.getElementById('page1').classList.add('shown');
      document.getElementById('page2').classList.remove('shown');
      document.getElementById('page2').classList.add('hidden');
    });
    presetsBtn.addEventListener('click', () => {
      document.getElementById('page2').classList.remove('hidden');
      document.getElementById('page2').classList.add('shown');
      document.getElementById('page1').classList.remove('shown');
      document.getElementById('page1').classList.add('hidden');
    });


settingsBtn.addEventListener('click', () => {
  settingsIcon.classList.toggle('rotated');
  inSettings = !inSettings;

  if (inSettings) {
    // Store which page is currently shown
    if (document.getElementById('page1').classList.contains('shown')) {
      lastPage = 'page1';
    } else if (document.getElementById('page2').classList.contains('shown')) {
      lastPage = 'page2';
    }

    // Show settings page, hide others
    document.getElementById('settingsPage').classList.add('shown');
    document.getElementById('settingsPage').classList.remove('hidden');
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page1').classList.remove('shown');
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page2').classList.remove('shown');
    
  } else {
    // Return to whichever page was active before
    document.getElementById('settingsPage').classList.add('hidden');
    document.getElementById('settingsPage').classList.remove('shown');
    document.getElementById(lastPage).classList.add('shown');
    document.getElementById(lastPage).classList.remove('hidden');
  }
});

function createIconButt(id, name, favicon) {
  const newButt = document.createElement('button');
  newButt.id = id;
  newButt.className = 'icon-button';
  newButt.style.backgroundImage = 'url(' + favicon + ')';
  document.getElementById('button-container').appendChild(newButt);

  newButt.addEventListener('click', () => {
    if (blankOn === true) {
      blankCloak(name, favicon);
    } else {
      document.title = name;
      let iconLink = document.querySelector("link[rel~='icon']");
      if (!iconLink) {
        iconLink = document.createElement('link');
        iconLink.rel = 'icon';
        document.head.appendChild(iconLink);
      }
      iconLink.href = favicon;
    }
  });
}


for(let i = 0; i < presetNames.length; i++) {
  createIconButt('button' + i, presetNames[i], presetFavicons[i]);
}
