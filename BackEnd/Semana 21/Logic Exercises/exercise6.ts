function reverse(text) {
    let t = ""
  for (let i = text.length - 1; i >= 0; i--) {
    t += text[i]
  }

  console.log(t)
}

reverse("luan");
