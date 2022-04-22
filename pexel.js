const getPicture = async (destination) => {
    let arr = [20];
    let ret;
    const photos = document.getElementById("photo").value = ""
    // PLAN TO MAKE ARRAY AND PUT INTO STORAGE. YOU WILL DISPLAY IMAGES IN COLLAGE.HTML
    if (destination === "") {
        alert("Please enter a destination");
    } else {
        console.log(destination);
        const response = await fetch(`https://api.pexels.com/v1/search?query=${destination}&per_page=20`
        , {
            headers: {
                Authorization: CONFIG.PEXEL_API_KEY,
            },
        })
        .then(res => res.json())
        .then(data => {
            const randomPhoto = data.photos[Math.floor(Math.random() * data.photos.length)];
            for (let i = 0; i < arr.length; i++) {
                arr[i] = data.photos[i].src.medium;
            }
            const photoUrl = randomPhoto.src.large;
            const photo = document.createElement("img");
            photo.src = photoUrl;
            photo.alt = randomPhoto.photographer;
            photo.title = randomPhoto.photographer;
            document.getElementById("photo").appendChild(photo);
        });
    }
}
