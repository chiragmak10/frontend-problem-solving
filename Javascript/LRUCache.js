function LRUCache() {
    const LIMIT = 3;
    let map = new Map();

    function put(ele, value) {
        if (map.size === LIMIT) {
            let key = Array.from(map.keys()).shift();
            map.delete(key);
        }
        map.set(ele, value)
    }
    function getRecentlyUsed() {
        return map.get(Array.from(map.keys()).pop())
    }
    function getAllEntries() {
        return Array.from(map.entries())
    }
    function get(item) {
        let value = map.get(item);
        map.delete(item);
        map.set(item, value)
        return value

    }

    return { put, getRecentlyUsed, getAllEntries, get }
}

let lruCache = LRUCache();
lruCache.put(4, 4);
lruCache.put(5, 5);
lruCache.put(6, 6);
lruCache.put(7, 23);
console.log(lruCache.getAllEntries());
console.log(lruCache.get(6))
console.log(lruCache.getRecentlyUsed());
console.log(lruCache.getAllEntries());