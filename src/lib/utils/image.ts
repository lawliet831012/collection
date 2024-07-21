import { type Area } from 'react-easy-crop';

const createImage = (url: string) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.src = url;
  });

async function getCroppedImg(imageSrc: string, pixelCrop: Area) {
  const image = (await createImage(imageSrc)) as HTMLImageElement;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  canvas.width = safeArea;
  canvas.height = safeArea;

  if (ctx) {
    ctx.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5,
    );
    const data = ctx.getImageData(0, 0, safeArea, safeArea);

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.putImageData(
      data,
      Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
      Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y),
    );
  }

  const cropperedImage = (await createImage(
    canvas.toDataURL('image/jpeg'),
  )) as HTMLImageElement;
  return compressImage(cropperedImage);
}

export const cropImage = async (
  image: string,
  croppedAreaPixels: Area,
  onError: (e: any) => void,
) => {
  try {
    const croppedImage = await getCroppedImg(image, croppedAreaPixels);
    return croppedImage;
  } catch (err) {
    onError(err);
    return null;
  }
};

export function compressImage(
  imgToCompress: HTMLImageElement,
  // resizingFactor: number = 0.5,
  // quality: number = 0.5,
) {
  let compressedImageBlob: Blob;
  // showing the compressed image
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  const originalWidth = imgToCompress.width;
  const originalHeight = imgToCompress.height;

  // const canvasWidth = originalWidth * resizingFactor;
  // const canvasHeight = originalHeight * resizingFactor;

  // canvas.width = canvasWidth;
  // canvas.height = canvasHeight;

  canvas.width = 180;
  canvas.height = 180;

  context?.drawImage(
    imgToCompress,
    0,
    0,
    180,
    180,
    // originalWidth * resizingFactor,
    // originalHeight * resizingFactor,
  );

  // reducing the quality of the image
  // canvas.toBlob(
  //   (blob) => {
  //     if (blob) {
  //       compressedImageBlob = blob;
  //       // compressedImage.src = URL.createObjectURL(compressedImageBlob);
  //       // document.querySelector('#size').innerHTML = bytesToSize(blob.size);
  //     }
  //   },
  //   'image/jpeg',
  //   1,
  // );
  return canvas.toDataURL('image/jpeg', 1);
}

export function dataURLtoFile(dataURL: string, filename: string): File {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1];
  if (!mime) {
    throw new Error('Invalid data URL');
  }
  console.log(dataURL);

  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
