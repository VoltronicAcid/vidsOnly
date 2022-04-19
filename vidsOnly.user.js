// ==UserScript==
// @name         Vids Only
// @namespace    https://github.com/VoltronicAcid/
// @downloadURL  https://github.com/VoltronicAcid/vidsOnly/raw/main/vidsOnly.user.js
// @version      0.2
// @description  Remember 'vidsOnly' setting across sessions
// @author       VoltronicAcid
// @match        https://sxyprn.com/blog/all/*
// ==/UserScript==

(() => {
    const settingKey = 'vidsOnly'
    const checkbox = document.querySelector('.vocontainer > input');
    
    checkbox.addEventListener('click', () => {
        window.localStorage.setItem(settingKey, checkbox.checked.toString());
    })

    // Default to vids only view
    const currentSetting = window.localStorage.getItem(settingKey) || 'true'

    if (currentSetting !== checkbox.checked.toString()) {
        checkbox.click()
    }
})();
