// document.addEventListener('copy', this.checkClipboardCopy.bind(this)); //ctrl +c
// window.addEventListener('cut', this.checkClipboardCut.bind(this), true); //ctrl + x
// window.addEventListener('paste', this.checkClipboardPaste.bind(this), true); //ctrl + v
// window.addEventListener('load', this.checkClipboardLoad.bind(this), true); // start at once


// document.getElementsByName('body').oncopy = function (e) {
//   var cpTxt = "复制的数据";
//   var clipboardData = window.clipboardData; //for IE  
//   if (!clipboardData) { // for chrome  
//     clipboardData = e.originalEvent.clipboardData;
//   }
//   // let copyData = e.clipboardData.getData('text');//可以获取用户选中复制的数据  
//   // console.log('copyData:'+copyData);

//   clipboardData.setData('Text', cpTxt);

//   e.preventDefault();

//   return false; //否则设不生效  
// }



//zheng jie
// $(document).ready(function(){
//     $(document.body).bind({  
//         copy: function(e) {//copy事件 
//             var cpTxt = "复制的数据";
//             var clipboardData = window.clipboardData; //for IE  
//             if (!clipboardData) { // for chrome  
//                 clipboardData = e.originalEvent.clipboardData;  
//             }  
//             // let copyData = e.clipboardData.getData('text');//可以获取用户选中复制的数据  
//             // console.log('copyData:'+copyData);

//             clipboardData.setData('Text', cpTxt);  

//             e.preventDefault();

//             return false;//否则设不生效  
//         },
//         paste: checkClipboardPaste
//     }); 
// });

var EventUtil = {
    addHandler: function (element, type, handler) {
        if(!element)
            return false;
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getClipboardText: function (event) {
        var clipboardData = (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },
    setClipboardText: function (event, value) {
        if (event.clipboardData) {
            return event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData) {
            return window.clipboardData.setData("text", value);
        }
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
};
EventUtil.addHandler(document,'copy',function(e){
    EventUtil.setClipboardText(EventUtil.getEvent(e),'3333333');
    EventUtil.preventDefault(e);
})

setTimeout(()=>{
    console.log('to copy');
    document.execCommand("Copy")
},5000);


//paste
function checkClipboardPaste(e) {
  console.log('Ctrl + V');

  var data = getClipboardData(e).getData('Text');
  console.log(data);
}

// alert(document.body.id);
function getClipboardData(e) {
  var clipboardData = window.clipboardData; // IE  
  if (!clipboardData) { //chrome  
    clipboardData = e.originalEvent.clipboardData
  }
  return clipboardData
}

function checkClipboardCopy(e) {
  console.log('Ctrl + C');
  getClipboardData().setData('Text', 'This is a simple data')
}

function checkClipboardCut() {
  console.log('Ctrl + X');
}


function checkClipboardLoad(e) {
  console.log('check clipboard load......');
  // console.dir(e)
}


// function getClipboard() {
//     if (window.clipboardData) {
//         return (window.clipboardData.getData('Text'));
//     }else if (window.netscape) {
//         console.dir(netscape);
//         netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
//         var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
//         if (!clip) return;
//         var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
//         if (!trans) return;
//         trans.addDataFlavor('text/unicode');
//         clip.getData(trans, clip.kGlobalClipboard);
//         var str = new Object();
//         var len = new Object();
//         try {
//             trans.getTransferData('text/unicode', str, len);
//         }
//         catch (error) {
//             return null;
//         }
//         if (str) {
//             if (Components.interfaces.nsISupportsWString) str = str.value.QueryInterface(Components.interfaces.nsISupportsWString);
//             else if (Components.interfaces.nsISupportsString) str = str.value.QueryInterface(Components.interfaces.nsISupportsString);
//             else str = null;
//         }
//         if (str) {
//             return (str.data.substring(0, len.value / 2));
//         }
//     }
//     return null;
// }


// function readClipboardData() {
//     var str = getClipboard();
//     var len = str.split("\n");//获取行数

//     document.getElementById("txtContent").value = str;
// }



/**
 * OK
 * 为剪切板进行赋值
 * @param {*} text 
 */
// function copyToClipboard(text) {
//     console.log('copyToClipboard......');
//     if (window.clipboardData && window.clipboardData.setData) {
//         console.log('window.clipboardData.setData......');
//         // IE specific code path to prevent textarea being shown while dialog is visible.
//         return clipboardData.setData("Text", text); 

//     } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
//         console.log('document.queryCommandSupported.....');
//         var textarea = document.createElement("textarea");
//         textarea.textContent = text;
//         textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
//         document.body.appendChild(textarea);
//         textarea.select();
//         try {
//             return document.execCommand("copy");  // Security exception may be thrown by some browsers.
//         } catch (ex) {
//             console.warn("Copy to clipboard failed.", ex);
//             return false;
//         } finally {
//             document.body.removeChild(textarea);
//         }
//     }
// }

let func = null;

/**
 * OK
 * Ctrl+C为剪切板进行赋值
 */
// var isIe = (navigator.userAgent.toLowerCase().indexOf("msie") != -1 || navigator.userAgent.toLowerCase().indexOf("trident") != -1);
// document.addEventListener('copy', function(e) {
//     var textToPutOnClipboard = "This is some text";
//     if (isIe) {
//         console.log('set data to clipboardData......');
//         window.clipboardData.setData('Text', textToPutOnClipboard);    
//     } else {
//         console.log('set data to e.clipboardData......')
//         e.clipboardData.setData('text/plain', textToPutOnClipboard);
//         func = {
//             clipboardData:e.clipboardData,
//             handler:function(text){
//                 this.clipboardData.setData('text/plain', text);
//             }
//         }
//     }
//     e.preventDefault();
// });


function addToClip(text) {
  window.clipboardData.setData('text/plain', 'hhhhhhhhhhhhhhhhhhhhhhh')
}
