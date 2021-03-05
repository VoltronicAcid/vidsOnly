// ==UserScript==
// @name         Vids Only
// @namespace    https://github.com/VoltronicAcid/
// @downloadURL  https://github.com/VoltronicAcid/
// @version      0.0.1
// @description  Set pages on https://sxyprn.com/ to display only videos
// @author       VoltronicAcid
// @match        https://sxyprn.com/blog/all/*
// ==/UserScript==

(() => {
    const key = 'vidsOnly'
    const checkbox = document.querySelector('.vocontainer > input');
    !checkbox.checked && (window.localStorage.getItem(key) === 'true') && checkbox.click();
    window.localStorage.setItem(key, checkbox.checked);

    checkbox.addEventListener('click', () => {
        window.localStorage.setItem(key, checkbox.checked);
    })
})();