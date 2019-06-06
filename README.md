# AndroidCordova2
學習Android Cordova:學習Cordova自定義插件，使用插件輸出Toast

## 項目簡介
   學習Cordova,自定義Cordova插件，然後在建立的Cordova項目中使用插件。   

## 項目結構  
  項目結構和Cordova建立platforms/android項目結構一樣，導入的插件不一樣，這次是我們自定義插件。   
  assets目錄下：  
     www目錄：     
index.html加入代碼:添加一個按鈕
     
        <button id="button1">say hello</button>     
     
index.js加入按鈕點擊邏輯：
     
          document.getElementById("button1").addEventListener("click",say,true);
          function say(){
             cordova.plugins.toastPlugin.showToast();
          }
    
          
