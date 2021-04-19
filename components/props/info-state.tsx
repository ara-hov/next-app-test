export function getArrayState(objects, key) {
    return objects.map((value) => {
        return value[key];
    })
}

export function getArrayImageInfo(objects) {
    return objects.map((value) => {
        return getImageInfo(value);
    })
}

export function getImageInfo(fileNameStorage) {
    return {
        uid: fileNameStorage,
        name: fileNameStorage,
        status: 'done',
        url: process.env.IMAGE_URL + fileNameStorage,
    };
}

