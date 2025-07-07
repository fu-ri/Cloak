# Cloak

![Cloak Logo](https://raw.githubusercontent.com/fu-ri/Cloak/refs/heads/main/Cloak.png)

## What is Cloak?

**Cloak** is a simple and lightweight **tab cloaker** tool designed to help you quickly change your browser tab’s **title** and **favicon** — perfect for keeping your tabs discreet or customizing them to your liking.

---

## Features

- **Change Tab Title:** Easily set a custom tab title to disguise the page you’re viewing.
- **Change Favicon:** Replace the tab’s favicon with any URL you provide.
- **Compact UI:** A slide-out drawer toggled by a small button on the right side of your browser window.
- **Smooth Animations:** The drawer slides in and out smoothly for a polished user experience.
- **No Dependencies:** Pure JavaScript and CSS — no external libraries except Google Fonts for style.
- **Bookmarklet Friendly:** Runs instantly as a bookmarklet, no installation needed.

---

## How to Use

1. Click the **Cloak** button that appears fixed on the right side of your browser window.
2. The drawer slides out, revealing input fields.
3. Enter the desired **Tab Title** to change the page title.
4. Enter the **Favicon URL** to change the tab icon.
5. Click **Go** and watch your tab update immediately.

---

## Why Use Cloak?

Sometimes you want to keep your browsing discreet, or just customize your tab titles and icons for better organization. Cloak makes this quick and easy without any complex setups.

---

## Demo

Try it yourself by adding this bookmarklet to your browser:

```js
javascript:(function(){if(document.getElementById('side-button'))return;var link=document.createElement('link');link.href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap";link.rel="stylesheet";document.head.appendChild(link);var style=document.createElement(%27style%27);style.textContent="body{margin:0;height:100vh;}#side-button{position:fixed;top:50%;right:0;width:20px;height:50px;background-color:rgba(51,51,51,0.8);border-top-left-radius:12px;border-bottom-left-radius:12px;color:white;display:flex;align-items:center;justify-content:center;cursor:pointer;user-select:none;font-size:32px;transform:translateY(-50%);transition:right 0.3s ease;z-index:10000;}#side-button.moved{ } .chevron{display:inline-block;transition:transform 0.3s ease;}#side-button.moved .chevron{transform:rotate(180deg);}#side-drawer{position:fixed;top:50%;right:-280px;width:250px;height:400px;background-color:rgba(51,51,51,0.8);border-top-left-radius:24px;border-bottom-left-radius:24px;color:white;display:block;padding-top:70px;padding-left:15px;padding-right:15px;user-select:none;font-size:16px;transform:translateY(-50%);transition:right 0.3s ease;z-index:9999;}#side-drawer.moved{right:0;}#drawer-icon{position:absolute;top:5px;left:5px;width:50px;height:50px;background:linear-gradient(145deg,rgba(255,255,255,0.15),rgba(0,0,0,0.1));border-radius:16px;box-shadow:0 4px 6px rgba(0,0,0,0.2);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);cursor:default;border:1px solid rgba(255,255,255,0.2);box-sizing:border-box;display:flex;align-items:center;justify-content:center;}#drawer-title{position:absolute;top:5px;left:50%;transform:translateX(-50%);font-family:'Fredoka One', cursive, sans-serif;font-size:40px;color:rgb(92,92,92);user-select:none;pointer-events:none;}#drawer-description{font-family:sans-serif;font-size:14px;color:#ccc;margin-top:10px;margin-left:15px;margin-right:20px;line-height:1.4;text-align:left;position:relative;}.button{background-color:rgba(128,128,128,0.2);color:white;border:1px solid rgba(255,255,255,0.2);border-radius:8px;padding:6px 12px;font-size:28px;font-family:sans-serif;cursor:pointer;transition:background-color 0.2s ease;}.button:hover{background-color:rgba(128,128,128,0.35);}.button:focus{outline:none;box-shadow:0 0 0 3px rgba(128,128,128,0.6);}.textbox{width:100%;max-width:300px;padding:8px 12px;font-size:16px;font-family:Arial,sans-serif;border:2px solid rgba(200,200,200,0.3);border-radius:8px;background-color:rgba(30,30,30,0.6);color:#eee;box-sizing:border-box;transition:border-color 0.3s ease,box-shadow 0.3s ease,background-color 0.3s ease;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);margin-top:10px;}.textbox::placeholder{color:rgba(200,200,200,0.5);}.textbox:focus{outline:none;border-color:rgba(128,128,128,0.8);box-shadow:0 0 10px rgba(128,128,128,0.7);background-color:rgba(40,40,40,0.8);}#thing-ask{font-family:sans-serif;font-size:14px;color:#ccc;margin-top:20px;margin-left:5px;margin-right:20px;line-height:1.4;text-align:left;}";document.head.appendChild(style);var btn=document.createElement('div');btn.id='side-button';btn.innerHTML='<span class="chevron">❰</span>';document.body.appendChild(btn);var drawer=document.createElement('div');drawer.id='side-drawer';drawer.innerHTML="<img src='https://raw.githubusercontent.com/fu-ri/Cloak/refs/heads/main/Cloakico.png' id='drawer-icon' /><div id='drawer-title'>Cloak</div><div id='drawer-description'><span><strong>A simple tab cloaker.</strong></span></div><div id='thing-ask'>Tab title here:</div><input id='tabTitle' type='text' class='textbox' placeholder='Type here...' /><div id='thing-ask'>Favicon URL here:</div><input id='favic' type='text' class='textbox' placeholder='Type here...' /><button id='go' class='button' style='font-size:14px;margin-top:5px;'>Go</button>";document.body.appendChild(drawer);btn.addEventListener('click',function(){btn.classList.toggle('moved');drawer.classList.toggle('moved');if(btn.classList.contains('moved')){btn.style.right=drawer.offsetWidth+'px';drawer.style.right='0';}else{btn.style.right='0';drawer.style.right='-280px';}});var goBtn=document.getElementById('go');goBtn.addEventListener('click',function(){var title=document.getElementById('tabTitle').value.trim();var favic=document.getElementById('favic').value.trim();if(title!==""){document.title=title;}if(favic!==""){var iconLink=document.querySelector("link[rel~='icon']");if(!iconLink){iconLink=document.createElement('link');iconLink.rel='icon';document.head.appendChild(iconLink);}iconLink.href=favic;}});})();
