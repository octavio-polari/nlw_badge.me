const linksSM = {
  instagram: "octavio_polari",
  twitter: "brazfute",
  github: "tavio-boo",
}

function changeSMLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${linksSM[social]}`
  }
}

changeSMLinks()

function getGitUserInfo() {
    const url = `https://api.github.com/users/${linksSM.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userImg.src = data.avatar_url
            gitUser.textContent = data.login
        })
}

getGitUserInfo()

