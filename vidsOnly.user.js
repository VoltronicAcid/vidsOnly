// ==UserScript==
// @name         Vids Only
// @namespace    https://github.com/VoltronicAcid/
// @downloadURL  https://github.com/VoltronicAcid/vidsOnly/raw/main/vidsOnly.user.js
// @version      0.1
// @description  Set pages on https://sxyprn.com/ to display only videos
// @author       VoltronicAcid
// @match        https://sxyprn.com/blog/all/*
// ==/UserScript==

(() => {
    const vidsOnlyPreference = 'vidsOnly'
    const checkbox = document.querySelector('.vocontainer > input');
    !checkbox.checked && (window.localStorage.getItem(vidsOnlyPreference) === 'true') && checkbox.click();
    window.localStorage.setItem(vidsOnlyPreference, checkbox.checked);

    checkbox.addEventListener('click', () => {
        window.localStorage.setItem(vidsOnlyPreference, checkbox.checked);
    })
})();
