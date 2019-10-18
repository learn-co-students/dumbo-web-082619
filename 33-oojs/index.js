const rei = {
  fullName: "Reinald Reynoso",
  name: "Rei",
  introduce: function () {
    return `Hey, I'm Rei`
  }
}

const eric = {
  legalName: "Hyeok Jung Kim",
  name: "Eric",
  introduce: function () {
    return `Hey, I'm Eric`
  }
}

const leizl = {
  fullName: "Leizl Samano",
  name: "Leizl",
  introduce: function () {
    return `Hey, I'm Leizl`
  }
}

console.log(eric.introduce())
console.log(leizl.introduce())
console.log(rei.introduce())

console.log(eric.introduce === leizl.introduce)
console.log(eric.introduce() === leizl.introduce())
