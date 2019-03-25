/* eslint-disable no-empty */
/* eslint-disable no-console */
const smartColor = async (img, filterWhite = true) => {
    if (!img) return;
    let image;
    if (typeof img === 'string') {
        image = await loadImage(img);
        if (!image) return;
    } else {
        image = img;
    }
    const rgba = getMainColor(image, filterWhite);
    return rgba;
    
    function loadImage(img) { // img src
        return new Promise((resolve, reject) => {
            // Create an image element
            const image = new Image();
            image.src = img;
            // If CORS error happened, add crossOrigin attribute to image
            image.crossOrigin = 'Anonymous';
            image.onload = () => resolve(image);
            image.onerror = reject;
        })
    }

    function getMainColor(image, filterWhite) {
        // Create an invisible canvas
        const canvas = document.createElement("canvas");
        // Draw image on canvas
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        // Get image pixel data
        let data;
        try {
            data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        } catch (e) {
            return;
        }
        let rgba = { r: 0, g: 0, b: 0, a: 0, pixels: 0 };
        const len = data.length;
        for (let i = 0, offset, r, g, b, a; i < len / 4; i++) {
            offset = i * 4;
            r = data[offset + 0];
            g = data[offset + 1];
            b = data[offset + 2];
            a = data[offset + 3];
            // If pixel is mostly opaque and not white
            if (filterWhite && (r > 250 || g > 250 || b > 250 || a<0.5)) {
            } else {
                rgba.r += r;
                rgba.g += g;
                rgba.b += b;
                rgba.a += a;
                rgba.pixels++;
            }
        }
        for (let i in rgba) {
            rgba[i] = parseInt(rgba[i] / rgba.pixels);
        }
        return rgba
    }
    
}
