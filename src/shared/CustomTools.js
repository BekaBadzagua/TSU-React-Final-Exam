export const convertFirebaseListToArray = (objectList) => {
    const objectsArray = Object.keys(objectList).map(
      id => {
        const innerObject = objectList[id];
        let arrayItem = { fireBaseid: id }
        Object.keys(innerObject).forEach(
          propName => { arrayItem[propName] = innerObject[propName] })
        return arrayItem;
      });
  
    return objectsArray;
  }