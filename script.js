//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");


const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener("click",()=>{
	displayImg(images)
})
function displayImg(images) {
	for (let val of images) {
		return new Promise((resolve,reject)=>{
			let displayImg = new Image;
			displayImg.src = val.url;
			displayImg.onload = ()=>{
				resolve(displayImg)
			}
			displayImg.onerror = ()=>{
				reject(new Error(`Failed to load image's URL: ${val.url}`))
			}
		}).then((img)=>{
			output.append(img)
		}).catch((error)=>{
			 output.append(error.message);
		}
	}
	
}
