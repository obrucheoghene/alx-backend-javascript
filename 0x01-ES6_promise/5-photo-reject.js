export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannont be processed`));
}
