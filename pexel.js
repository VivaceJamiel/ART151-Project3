const userAction = async () => {
    const destination = document.getElementById("destination").value;
    const photos = document.getElementById("photo").value = ""
    if (destination === "") {
        alert("Please enter a destination");
    } else {
        console.log(destination);
        const response = await fetch(`https://api.pexels.com/v1/search?query=${destination}`
        , {
            headers: {
                Authorization: CONFIG.PEXEL_API_KEY,
            },
        })
        .then(res => res.json())
        .then(data => {
            const randomPhoto = data.photos[Math.floor(Math.random() * data.photos.length)];
            const photoUrl = randomPhoto.src.large;
            const photo = document.createElement("img");
            photo.src = photoUrl;
            photo.alt = randomPhoto.photographer;
            photo.title = randomPhoto.photographer;
            document.getElementById("photo").appendChild(photo);
            
            // return photos;
        });
    }
}
