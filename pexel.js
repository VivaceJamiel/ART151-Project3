const getPicture = async (destination) => {
    let arr = [];
    let ret;
    const photos = document.getElementById("photo").value = ""
    // PLAN TO MAKE ARRAY AND PUT INTO STORAGE. YOU WILL DISPLAY IMAGES IN COLLAGE.HTML
    if (destination === "") {
        alert("Please enter a destination");
    } else {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${destination}&per_page=64`
        , {
            headers: {
                Authorization: CONFIG.PEXEL_API_KEY,
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let tot = 0;
            for (let i = 0; i < 64; i++) {
                if (tot === data.total_results) {
                    tot = 0;
                }
                arr.push(data.photos[tot].src.medium);
                tot = tot + 1;
            }
            window.sessionStorage.setItem("photos", JSON.stringify(arr));
        });
    }
}
