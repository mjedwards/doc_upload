export const getFileSize = (file) => {
    if (file !== null) {
        const fileSizeInBytes = file.size;
        if (fileSizeInBytes < 1024) {
            return "< 1 KB"
        }
        const units = ["KB", "MB", "GB"];

        let size = fileSizeInBytes;
        let unitIndex = 0;

        while (size >= 1024 && unitIndex < units.length - 1) {
            size /= 1024;
            unitIndex++;
        }

          return size.toFixed(2) + " " + units[unitIndex];
    }
}