export function geolocation() {
    return new Promise((resolve, reject) => {
       navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}