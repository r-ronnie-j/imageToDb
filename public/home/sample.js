let userName = document.querySelector("#name");
let image = document.querySelector("#image");
let submit = document.querySelector("#submit");
let getUser = document.querySelector("#getuser");
let nameValue = ""
let imageValue =""

userName.addEventListener("change", (e) => {
    nameValue = e.target.value
});

image.addEventListener("change", (e) => {
    console.log("Image uploaded")
    imageValue = e.target.files[0]
});

submit.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("clicked")
    console.log("name",nameValue)
    if(imageValue){
        const render = new FileReader();
        render.onloadend =async () => {
            const base64 = render.result
            await fetch("http://localhost:3000/user",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: nameValue,
                    profile: base64
                })
            })
        }
        render.readAsDataURL(imageValue)
    }
});

getUser.addEventListener("click",async (req,res)=>{
    let user = await fetch("http://localhost:3000/user",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    user = await user.json()
    let image = user[1]
    let img = document.createElement("img")
    img.src = image.profile
    document.body.appendChild(img); 
})

console.log("called");
