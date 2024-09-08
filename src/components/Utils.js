export default {
    handleLoginBodyColor: (color) => {
        if (color) {
            document.body.style.backgroundColor = '#646cff';
            document.body.style.margin = 0;
            document.body.style.display = 'flex';
            document.body.style.placeItems = 'center';
            document.body.style.minWidth = '320px';
            document.body.style.minHeight = '100vh';
        } else {
            document.body.style = null;
            document.body.style.backgroundColor = "";
        }
    },
    
}