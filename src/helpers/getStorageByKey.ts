export function getStorageByKey (key: string) {
    const storageData = localStorage.getItem(key)
    if (!storageData) return []

    const parsedData = JSON.parse(storageData)

    return parsedData
}