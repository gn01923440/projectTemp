//取得上傳圖片資訊(需使用 async await)
export const getImgData = async (imgFile) => {
    let reData = { width: "", height: "", base64: "" }
    const reader = new FileReader();
console.log(imgFile)
    reData.base64 = await awaitRenderDataURL()

    async function awaitRenderDataURL(e, reData) {
        return new Promise(resolve => {
            reader.onload = async (e) => {
                await awaitRenderImg(e, reData)
                console.log(e)
                resolve(e.target.result);
            };
            reader.readAsDataURL(imgFile);
        })

    }

    async function awaitRenderImg(e) {
        return new Promise(resolve => {
            let file = e.target.result;
            let imageCheck = new Image();
            imageCheck.onload = () => {
                let width = imageCheck.width;
                let height = imageCheck.height;
                reData.width = width
                reData.height = height
                console.log(imageCheck)
                resolve()
            };
            imageCheck.src = file;
        })
    }

    return reData
}

