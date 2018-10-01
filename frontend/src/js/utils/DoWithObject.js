export default {
    isEmpty: function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    },

    cloneObjectTopLevelWithKeys(source, keys) {
        let dest = JSON.parse(JSON.stringify(source));//or = Object.assign({}, source)
        Object.keys(dest).forEach(key => { if (!keys.includes(key)) delete dest[key]; });
        return dest;
    }
}