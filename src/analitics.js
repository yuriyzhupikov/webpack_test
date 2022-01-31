function clickAnalitic() {
    let count = 0;
    let isDestroy = false;

    listener = () => count++;

    document.addEventListener('click', listener);

    return {
        onDestroy() {
            isDestroy = true;
            document.removeEventListener('click', listener);
        },
        getClick() {
            if (isDestroy) {
                console.log("isDestroy");
            }
            return count;
        }
    }
}

window.analitics = clickAnalitic();