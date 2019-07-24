
export const firebaseConfig = {
    apiKey: "AIzaSyDerrxR6XCndvDy79swu839eBUi0Ym4huw",
    authDomain: "hotel-9e99a.firebaseapp.com",
    databaseURL: "https://hotel-9e99a.firebaseio.com",
    projectId: "hotel-9e99a",
    storageBucket: "gs://hotel-9e99a.appspot.com/",
    messagingSenderId: "40340127304",
    appId: "1:40340127304:web:fefc3fe211118031"
  }


export const snapShotToArray = snapshot => {
    let returnArray = [];
    snapshot.forEach(Element => {
        let item = Element.val();
        item.key = Element.key;
        returnArray.push(item);
    });
    return returnArray;
}