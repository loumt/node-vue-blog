window.addEventListener('copy', this.checkClipboardCopy.bind(this), true); //ctrl +c
window.addEventListener('cut', this.checkClipboardCut.bind(this), true); //ctrl + x
window.addEventListener('paste', this.checkClipboardLoad.bind(this), true); //ctrl + v

function checkClipboardCopy(){
    console.log('Ctrl + C');
}
function checkClipboardCut(){
    console.log('Ctrl + X');
}
function checkClipboardLoad(){
    console.log('Ctrl + V');
}

function getClipboard() {
    if (window.clipboardData) {
        return (window.clipboardData.getData('Text'));
    }else if (window.netscape) {
        console.dir(netscape);
        netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
        var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
        if (!clip) return;
        var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
        if (!trans) return;
        trans.addDataFlavor('text/unicode');
        clip.getData(trans, clip.kGlobalClipboard);
        var str = new Object();
        var len = new Object();
        try {
            trans.getTransferData('text/unicode', str, len);
        }
        catch (error) {
            return null;
        }
        if (str) {
            if (Components.interfaces.nsISupportsWString) str = str.value.QueryInterface(Components.interfaces.nsISupportsWString);
            else if (Components.interfaces.nsISupportsString) str = str.value.QueryInterface(Components.interfaces.nsISupportsString);
            else str = null;
        }
        if (str) {
            return (str.data.substring(0, len.value / 2));
        }
    }
    return null;
}
function readClipboardData() {
    var str = getClipboard();
    var len = str.split("\n");//获取行数

    document.getElementById("txtContent").value = str;
}